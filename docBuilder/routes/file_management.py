from flask import Blueprint, jsonify, request, send_from_directory, render_template
from werkzeug.security import safe_join
import os
import shutil
from const import *

file_management_bp = Blueprint('file_management', __name__)


@file_management_bp.route('/gen-files')
@file_management_bp.route('/gen-files/')
@file_management_bp.route('/gen-files/<path:path>')
def list_gen_files(path='.'):
    # List generated files logic
    directory = safe_join('build', path.strip("\\ /"))

    if not os.path.exists(directory):
        if os.path.islink(directory):
            return "The requested path is a broken symbolic link.", 404
        elif not os.path.isdir(directory):
            try:
                os.makedirs(directory)
            except OSError:
                return "The requested path does not exist.", 404

    filenames = os.listdir(directory)
    file_list = []
    for filename in filenames:
        filepath = safe_join(directory, filename)
        if os.path.isfile(filepath):
            if path == '.':
                download_url = f'/download/{filename}'
            else:
                download_url = f'/download/{path}/{filename}'
            file_list.append({
                'name': filename,
                'url': download_url
            })

    return render_template('file_list.html', files=file_list)


@file_management_bp.route('/download/<path:filepath>')
def download_file(filepath):
    # Download file logic
    directory, filename = os.path.split(filepath)
    return send_from_directory(safe_join(build_dir, directory), filename, as_attachment=True)


@file_management_bp.route('/upload-src/<path:filepath>', methods=['POST'])
def upload_src(filepath):
    # Upload a file to the source directory
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    dest_path = safe_join(source_dir, filepath)
    file.save(dest_path)
    return jsonify({'message': 'File uploaded successfully.'}), 200

@file_management_bp.route('/list-src')
@file_management_bp.route('/list-src/')
@file_management_bp.route('/list-src/<path:filepath>')
def list_src(filepath='.'):
    # List files in the source directory
    directory = safe_join(source_dir, filepath.strip("\\ /"))

    if not os.path.exists(directory):
        return "The requested path does not exist.", 404

    filenames = os.listdir(directory)
    return jsonify({'files': filenames}), 200

@file_management_bp.route('/rm-src/<path:filepath>', methods=['DELETE'])
def rm_src(filepath):
    # Remove a file or directory in the source directory
    target_path = safe_join(source_dir, filepath.strip("\\ /"))
    if os.path.exists(target_path):
        if os.path.isdir(target_path):
            shutil.rmtree(target_path)
        else:
            os.remove(target_path)
        return jsonify({'message': 'File or directory removed successfully.'}), 200
    else:
        return jsonify({'error': 'File or directory not found.'}), 404

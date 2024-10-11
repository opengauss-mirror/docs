from flask import Blueprint, jsonify

help_bp = Blueprint('help', __name__)

@help_bp.route('/help', methods=['GET'])
def help():
    routes = {
        '/html': 'Build HTML documentation from Source dir files.',
        '/clean': 'Clean the build directory.',
        '/pdf': 'Generate PDF from HTML files, if no html, first call /html.',
        '/gen-files': 'List generated files in Build dir.',
        '/download/<path:filepath>': 'Download a generated file in Build dir.',
        '/upload-src/<path:filepath>': 'Upload a file to the Source directory.',
        '/list-src/<path:filepath>': 'List files in the Source directory.',
        '/rm-src/<path:filepath>': 'Remove a file or directory in the Source directory.',
        '/help': 'Get available routes.'
    }
    return jsonify(routes), 200

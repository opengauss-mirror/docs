from flask import Blueprint, jsonify
from sphinx.application import Sphinx
from sphinx.cmd.make_mode import Make
from html2pdf.generatePdf import convert_html_to_pdf
from html2pdf.loadHtml import process_index_html, append_html_files
from const import *
import os

doc_bp = Blueprint('doc', __name__)


@doc_bp.route('/html', methods=['GET'])
def build_html_docs():
    # Build HTML documentation from source dir files (markdown)
    print("build html docs from source dir files")
    try:
        if not os.path.exists(html_out_dir):
            os.makedirs(html_out_dir)
            print(f"create dir {html_out_dir}")
        if not os.path.exists(doc_tree_dir):
            os.makedirs(doc_tree_dir)
            print(f"create dir {doc_tree_dir}")

        sphinx_app = Sphinx(
            srcdir=source_dir, confdir=source_dir,
            outdir=html_out_dir, doctreedir=doc_tree_dir,
            buildername='html'
        )
        sphinx_app.build()
        return jsonify({'message': 'Documentation built successfully.'}), 200
    except Exception as e:
        return jsonify({'error': f'Sphinx build failed: {str(e)}'}), 500


@doc_bp.route('/clean', methods=['GET'])
def clean_build():
    # Clean build directory 
    print("clean build dir")
    try:
        sphinx_make = Make(srcdir=source_dir,
                           builddir=build_dir,
                           opts=[])
        sphinx_make.build_clean()
        return jsonify({'message': 'Build directory cleaned successfully.'}), 200
    except Exception as e:
        return jsonify({'error': f'Clean operation failed: {str(e)}'}), 500


@doc_bp.route('/pdf', methods=['GET'])
def generate_pdf():
    # Generate PDF from source dir files
    print("pdf")
    # 先将所有 build 目录中的 html 文件集成到一个新的 html 中
    html_file_path = os.path.join(build_dir, 'output.html')
    # 最终结果(pdf) 路径
    output_pdf_path = os.path.join(build_dir, 'output.pdf')
    if not os.path.exists(html_out_dir):
        os.makedirs(html_out_dir)
        print(f"create dir {html_out_dir}")

    # 检查 html 目录是否存在，如果不存在说明没有先做 /html 生成 html
    if not os.path.exists(html_out_dir):
        print("build html first")
        build_html_docs()
        # return jsonify({'error': 'HTML documentation does not exist. Please build HTML documentation first.'}), 400
    try:
        # 处理HTML文件
        process_index_html(html_out_dir, html_file_path)

        # 合并所有HTML文件
        append_html_files(html_out_dir, html_file_path)

        # 检查HTML文件是否存在
        if os.path.isfile(html_file_path):
            if not os.path.isfile(output_pdf_path) or os.stat(html_file_path).st_mtime > os.stat(
                    output_pdf_path).st_mtime:
                print(os.getcwd())
                # 定义可能的 CSS 文件路径
                css_file_name = 'my_theme.css'
                primary_css_path = os.path.join(os.getcwd(), 'build', 'html', '_static', css_file_name)
                print("primary_css_path", primary_css_path)

                fallback_css_path = os.path.join(os.getcwd(), 'html2pdf', '_static', css_file_name)
                print("fallback_css_path", fallback_css_path)

                # 检查主路径下是否存在 CSS 文件
                css_path = primary_css_path if os.path.exists(primary_css_path) else fallback_css_path
                print("css_path", css_path)

                additional_args = [
                    '--enable-local-file-access',
                    '--zoom', '1.2',
                    '--user-style-sheet', css_path,
                    '--footer-center', '2024, openGauss',
                    '--footer-font-size', '8',
                    '--footer-font-name', 'Arial',
                    'toc',
                    '--toc-header-text', '目录'
                ]
                convert_html_to_pdf(html_file_path, output_pdf_path, additional_args)
            return jsonify({'message': 'Build pdf successfully.'}), 200
        else:
            return jsonify({'error': 'HTML documentation does not exist. Please build HTML documentation first.'}), 400
    except Exception as e:
        return jsonify({'error': f'PDF generation failed: {str(e)}'}), 500

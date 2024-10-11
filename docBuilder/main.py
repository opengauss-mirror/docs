# from flask import Flask, jsonify, render_template, send_from_directory
# from werkzeug.security import safe_join
# from flask_cors import CORS
# import os
# from sphinx.application import Sphinx
# from sphinx.cmd.make_mode import Make
# from wkhtmltopdf import main as wkMain
# from html2pdf.generatePdf import convert_html_to_pdf
# from html2pdf.loadHtml import process_index_html, append_html_files
import os
from flask import Flask

from routes.doc import doc_bp
from routes.file_management import file_management_bp
from routes.help import help_bp


# CORS(app)  # 使跨域请求有效

def load_config(file):
    with open(file, 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if line.startswith('ip_address:'):
                ip_address = line.split(':')[1].strip()
            elif line.startswith('port:'):
                port = line.split(':')[1].strip()
    return ip_address, port


ip_address= "localhost"
port = 5000
print("ip: ", ip_address, "; port: ", port)

# 启动server, 注册blueprint
app = Flask(__name__, template_folder='./resources/templates')
app.register_blueprint(doc_bp)
app.register_blueprint(file_management_bp)
app.register_blueprint(help_bp)

if __name__ == '__main__':
    try:
        app.run(debug=True, host=ip_address, port=int(port))
    except Exception as e:
        print(f"Failed to start server on {ip_address}:{port}. Error: {e}")
        print("Attempting to start server on 127.0.0.1...")
        app.run(debug=True, host='127.0.0.1', port=5000)

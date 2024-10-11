import subprocess
import os


path = 'output.html'

def convert_html_to_pdf(html_file, output_pdf, additional_args=None):
    """
    example cmd: wkhtmltopdf--enable-local-file-access  --zoom 1.2 --user-style-sheet _static/my_theme.css --footer-center "2023  openGauss" --footer-font-size 8 --footer-font-name Aria "toc" .\index.html output.pdf
    :param html_file: the html to be converted
    :param output_pdf: output filename
    :param additional_args: options
    :return:
    """
    print(f"args:{html_file},{output_pdf}")
    command = ['wkhtmltopdf']
    if additional_args:
        command.extend(additional_args)
    command.extend([html_file, output_pdf])

    # 捕获标准输出和标准错误
    result = subprocess.run(command, capture_output=True, text=True)

    # 检查返回码是否为 0，非 0 表示有错误
    if result.returncode != 0:
        # 打印错误信息
        print(f"Error running wkhtmltopdf: {result.stderr}")
        raise Exception(f"wkhtmltopdf failed with error: {result.stderr}")

    print("PDF conversion completed successfully.")


def test():
    # 测试
    html_file = 'index.html'
    output_pdf = 'output.pdf'

    # 定义可能的 CSS 文件路径; '_static/my_theme.css' 或 'html2pdf/_static/my_theme.css'
    css_file_name = 'my_theme.css'
    primary_css_path = os.path.join(os.getcwd(), '_static', css_file_name)
    fallback_css_path = os.path.join(os.getcwd(), 'html2pdf', '_static', css_file_name)

    # 检查主路径下是否存在 CSS 文件
    css_path = primary_css_path if os.path.exists(primary_css_path) else fallback_css_path

    additional_args = ['--enable-local-file-access', '--zoom', '1.2', '--user-style-sheet', css_path,
                       '--footer-center', '2023, openGauss', '--footer-font-size', '8', '--footer-font-name', 'Arial',
                       'toc', '--toc-header-text', '目录']
    if os.path.exists(html_file):
        convert_html_to_pdf(html_file, output_pdf, additional_args)
        print("转换完成")
    else:
        print("请先运行 python loadHtml.py")

# 开发情况下取消注释

# if os.path.exists(path):
#     os.remove(path)

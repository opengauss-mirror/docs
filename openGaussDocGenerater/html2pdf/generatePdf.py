import subprocess

def convert_html_to_pdf(html_file, output_pdf, additional_args=None):
    # 构造命令行指令
    command = ['wkhtmltopdf']

    # 添加自定义参数
    if additional_args:
        command.extend(additional_args)

    command.extend([html_file, output_pdf])

    # 执行命令行指令
    subprocess.run(command)

# 测试
html_file = 'index.html'
output_pdf = 'output.pdf'
additional_args = ['--page-size', 'A4', '--user-style-sheet','./build/html/_static/alabaster.css','--footer-right','2023, openGauss','--footer-font-size','8','--footer-font-name','Aria']

convert_html_to_pdf(html_file, output_pdf, additional_args)


import os
path = 'index.html'
if os.path.exists(path):
    os.remove(path)

print('转换完成！')
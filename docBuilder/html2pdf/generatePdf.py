import subprocess
import os
path = 'index.html'
def convert_html_to_pdf(html_file, output_pdf, additional_args=None):
    command = ['wkhtmltopdf']
    if additional_args:
        command.extend(additional_args)
    command.extend([html_file, output_pdf])
    subprocess.run(command)

# 测试
html_file = 'index.html'
output_pdf = 'output.pdf'
additional_args = ['--page-size', 'A4','--user-style-sheet','../source/_static/my_theme.css','--footer-right','2023, openGauss','--footer-center','[page]','--footer-font-size','8','--footer-font-name','Aria','toc','--toc-header-text','目录']
if  os.path.exists(path): 
    convert_html_to_pdf(html_file, output_pdf, additional_args)
    print("转换完成")
else:
    print("请先运行 python loadHtml.py")


# 开发情况下取消注释

if os.path.exists(path):
    os.remove(path)

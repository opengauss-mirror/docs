import os
import re
import base64  
from bs4 import BeautifulSoup
import urllib.parse
def strip_chars(html):
    return html.replace('¶', '')

def remove_h3_tags(html_content):
    pattern = r'<h3>导航<\/h3>'
    return re.sub(pattern, '', html_content)

def strip_current_ul(html):
        soup = BeautifulSoup(html, 'html.parser')
        ul_tags = soup.find_all('ul', class_='current')
        for ul_tag in ul_tags:
            ul_tag.decompose()
        modified_html = str(soup)
        return modified_html


def remove_relations_div_tags(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    div_tags = soup.find_all('div', class_='relations')
    for div_tag in div_tags:
        div_tag.decompose()

    modified_html = str(soup)
    return modified_html


def remove_toctree_li_tags(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    div_tags = soup.find_all('li', class_='toctree-l1')
    for div_tag in div_tags:
        div_tag.decompose()

    modified_html = str(soup)
    return modified_html


def remove_footer_div_tags(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    div_tags = soup.find_all('div', class_='footer')
    for div_tag in div_tags:
        div_tag.decompose()

    modified_html = str(soup)
    return modified_html

def remove_sphinxsidebar_div_tags(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    div_tags = soup.find_all('div', class_='sphinxsidebar')
    for div_tag in div_tags:
        div_tag.decompose()

    modified_html = str(soup)
    return modified_html

def remove_logo_h1_tags(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    div_tags = soup.find_all('h1', class_='logo')
    for div_tag in div_tags:
        div_tag.decompose()

    modified_html = str(soup)
    return modified_html

def modify_section_id(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    h1_tag = soup.find('h1')
    if h1_tag:
        section_tags = soup.find_all('section', class_='tex2jax_ignore mathjax_ignore')
        for section_tag in section_tags:
            section_tag['id'] = h1_tag.text.strip()

    return str(soup)

def replace_image_data(html_body,file_path):
     html_body = re.sub(r'<img alt="" src="(.+?)"', lambda m: '<img alt="" src="' + get_image_data(os.path.join(os.path.dirname(file_path), m.group(1))) + '"', html_body)
     return html_body


def modify_section_id_1(html):
    soup = BeautifulSoup(html, 'html.parser')
    
    # 查找class为headerlink的a标签
    a_tag = soup.find('a', {'class': 'headerlink'})
    if a_tag:
        # 获取a标签所在的section标签
        section_tag = a_tag.find_parent('section')
        if section_tag:
            # 确保section标签中只包含一个h2标签
            if len(section_tag.find_all('h2')) == 1:
                # 获取h2标签的文本内容
                h2_tag = section_tag.find('h2')
                if h2_tag:
                    h2_text = h2_tag.get_text().strip()
                    # 修改section标签的id属性
                    section_tag['id'] = h2_text + section_tag['id']
                

    return str(soup)





def get_image_data(image_path):
        if os.path.isfile(image_path):
            with open(image_path,'rb') as f:
                image_data = f.read()
                image_data_base64 = base64.b64encode(image_data).decode('utf-8')
                return 'data:image/png;base64,' + image_data_base64
        else:
            return image_path

def append_html_files(folder_path, html_file_path):
    judgepath(html_file_path)

    html_files = []
    for root, dirs, files in os.walk(folder_path+'/content'):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                html_files.append(file_path)

    with open(html_file_path, 'a',encoding='utf-8') as html_file:
        for file_path in html_files:
            with open(file_path, 'r',encoding='utf-8') as file:
                html_content = file.read()
                html_content =strip_chars(html_content)
                html_content =replace_image_data(html_content,file_path)
                html_content =strip_current_ul(html_content)
                html_content =remove_relations_div_tags(html_content)
                html_content =remove_footer_div_tags(html_content)
                html_content =remove_sphinxsidebar_div_tags(html_content)
                html_content =remove_logo_h1_tags(html_content)
                html_content =remove_h3_tags(html_content)
                html_content =modify_section_id(html_content)
                html_content =remove_toctree_li_tags(html_content)
                # html_content =modify_section_id_1(html_content)
                html_file.write(html_content)
                html_file.write('\n')  

    print(f"All HTML files from '{folder_path}' and its subfolders have been appended to '{html_file_path}'.")



def process_index_html(folder_path,path):
      judgepath(path)
      with open(folder_path+'/index.html', 'r',encoding='utf-8') as file:
                html_content = file.read()
                
      with open(path, 'w',encoding='utf-8') as file:
        html_content = strip_chars(html_content)
        html_content =remove_relations_div_tags(html_content)
        html_content = remove_sphinxsidebar_div_tags(html_content)
        html_content = modify_li_href(html_content,'toctree-l1')
        html_content = modify_section_id_to_match(html_content,'toctree-l2')
        file.write(html_content)
            


def judgepath(path):
    current_dir = os.getcwd()

    file_path = os.path.join(current_dir, path)

    if not os.path.exists(file_path):

        directory = os.path.dirname(file_path)
        os.makedirs(directory, exist_ok=True)
        with open(file_path, 'w') as file:
            pass 



def modify_section_id_to_match(html, token):
    soup = BeautifulSoup(html, 'html.parser')


    li_tags = soup.find_all('li', class_=token)

    for li_tag in li_tags:

        a_tag = li_tag.find('a', class_='reference internal')
        if a_tag:
            href = a_tag['href']
            text = a_tag.get_text().strip()


            section_id = href.split('#')[-1]


            if '#' in href:
                modified_href = f'#{section_id}'
            else:
                modified_href = href.split('/')[-1].split('.')[0]
                modified_href = f'#{urllib.parse.unquote(modified_href)}' 

            a_tag['href'] = modified_href


    return str(soup)





def modify_li_href(html_content, class_name):
    soup = BeautifulSoup(html_content, 'html.parser')
    li_tags = soup.find_all('li', class_=class_name)
    for li_tag in li_tags:
        a_tag = li_tag.find('a')
        if a_tag:
            new_href = '#'+a_tag.text.strip()
            a_tag['href'] = new_href
    return str(soup)






folder_path ='./build/html'  
html_file_path = 'index.html'  


process_index_html(folder_path,html_file_path)
append_html_files(folder_path, html_file_path)
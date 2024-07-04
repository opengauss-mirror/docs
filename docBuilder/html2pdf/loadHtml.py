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


def replace_image_data(html_body, file_path):
    html_body = re.sub(r'<img alt="" src="(.+?)"', lambda m: '<img alt="" src="' + get_image_data(
        os.path.join(os.path.dirname(file_path), m.group(1))) + '"', html_body)
    return html_body


def modify_section_id_1(html):
    soup = BeautifulSoup(html, 'html.parser')
    a_tag = soup.find('a', {'class': 'headerlink'})
    if a_tag:

        section_tag = a_tag.find_parent('section')
        if section_tag:

            if len(section_tag.find_all('h2')) == 1:

                h2_tag = section_tag.find('h2')
                if h2_tag:
                    h2_text = h2_tag.get_text().strip()

                    section_tag['id'] = h2_text + section_tag['id']

    return str(soup)


def modify_section_id_1(html_code):
    soup = BeautifulSoup(html_code, 'html.parser')
    headerlink_tag = soup.find(class_='headerlink')  # 查找class为headerlink的标签
    h1_tag = headerlink_tag.parent  # 获取外层h1标签
    section_tag = h1_tag.parent  # 获取更外层section标签

    h1_content = h1_tag.get_text()  # 获取h1标签的内容
    section_tag['id'] = h1_content  # 修改section标签的id属性为h1标签的内容

    modified_html = str(section_tag)  # 将BeautifulSoup对象转换为字符串

    return modified_html


def modify_a_href(html_code):
    soup = BeautifulSoup(html_code, 'html.parser')
    span_tag = soup.find('span', class_='std std-doc')  # 查找class为std std-doc的span标签
    if span_tag:
        a_tag = span_tag.parent  # 获取外层<a>标签

        span_content = span_tag.get_text()  # 获取<span>标签的内容
        a_tag['href'] = '#' + span_content  # 修改<a>标签的href属性为"# + span标签内容"

        modified_html = str(a_tag)  # 将BeautifulSoup对象转换为字符串

        return modified_html
    else:
        return html_code


def get_image_data(image_path):
    if os.path.isfile(image_path):
        with open(image_path, 'rb') as f:
            image_data = f.read()
            image_data_base64 = base64.b64encode(image_data).decode('utf-8')
            return 'data:image/png;base64,' + image_data_base64
    else:
        return image_path


def append_html_files(folder_path, html_file_path):
    judgepath(html_file_path)

    html_files = []
    for root, dirs, files in os.walk(folder_path + '/content'):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                html_files.append(file_path)
    print(html_files)
    html_files = arrange_htmls(html_files)
    print("after arrange: ", html_files)

    with open(html_file_path, 'a', encoding='utf-8') as html_file:
        for file_path in html_files:
            with open(file_path, 'r', encoding='utf-8') as file:
                html_content = file.read()
                html_content = strip_chars(html_content)
                html_content = replace_image_data(html_content, file_path)
                html_content = strip_current_ul(html_content)
                html_content = remove_relations_div_tags(html_content)
                html_content = remove_footer_div_tags(html_content)
                html_content = remove_sphinxsidebar_div_tags(html_content)
                html_content = remove_logo_h1_tags(html_content)
                html_content = remove_h3_tags(html_content)
                # html_content =modify_section_id(html_content)
                # html_content =modify_section_id_1(html_content)
                # html_content =remove_toctree_li_tags(html_content)
                # html_content =modify_a_href(html_content)

                # 2024-09-14；增加资源文件寻址逻辑; 让 html 能找到css资源文件
                html_content = process_relative_path(html_content, html_file_path)

                html_file.write(html_content)
                html_file.write('\n')

    print(f"All HTML files from '{folder_path}' and its subfolders have been appended to '{html_file_path}'.")


def process_index_html(folder_path, path):
    print(f"judge: {path}")
    judgepath(path)
    with open(folder_path + '/index.html', 'r', encoding='utf-8') as file:
        html_content = file.read()

    with open(path, 'w', encoding='utf-8') as file:
        html_content = strip_chars(html_content)
        html_content = remove_relations_div_tags(html_content)
        html_content = remove_sphinxsidebar_div_tags(html_content)
        html_content = modify_li_href(html_content, 'toctree-l1')
        html_content = modify_section_id_to_match(html_content, 'toctree-l2')
        html_content = modify_section_id_to_match(html_content, 'toctree-l3')
        html_content = remove_class_tags(html_content, 'toctree-l')
        file.write(html_content)


def remove_class_tags(html, class_prefix):
    soup = BeautifulSoup(html, 'html.parser')
    tags = soup.find_all(class_=lambda x: x and x.startswith(class_prefix))
    for tag in tags:
        tag.decompose()
    return str(soup)


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
            new_href = '#' + a_tag.text.strip()
            a_tag['href'] = new_href
    return str(soup)


# 2024-09-14; 增加寻址逻辑; 让html能找到对应css/resources
# 递归寻找目标文件/目录
def find_target(current, target, level=0, max_level=4):
    if level > max_level:
        raise FileNotFoundError(
            f"Target  '{target}' not found within {max_level} levels.")

    for root, dirs, files in os.walk(current):
        if target in dirs or target in files:
            return os.path.join(root, target)

    # 找不到就查找上级目录
    parent_dir = os.path.dirname(current)
    return find_target(parent_dir, target, level + 1, max_level)


# 计算相对路径并更新标签
def update_paths(tag, attr_name, current_dir, target_dirs, resource_set):
    if attr_name in tag.attrs:
        basename = os.path.basename(tag[attr_name])
        href = tag[attr_name]
        from functools import reduce
        need_format = basename in resource_set or \
                      reduce(lambda x, y: x or y, map(lambda x: x in tag[attr_name], target_dirs.keys()))
        if need_format:
            for key, target in target_dirs.items():
                if key in href:
                    relative = os.path.relpath(target, current_dir)
                    tag[attr_name] = os.path.join(relative, basename)
                    break
            else:
                # 如果在资源集合中但没有 key，直接指向目标路径
                tag[attr_name] = os.path.join(os.path.relpath(target_dirs['base_target'], current_dir), basename)


def resources_index(target_dir) -> set:
    """检查目标目录下的所有文件，返回基名的集合。"""
    resource_set = set()
    for root, _, files in os.walk(target_dir):
        for file in files:
            resource_set.add(os.path.basename(file))
    return resource_set


def process_relative_path(html_content, html_file_path):
    '''
    处理HTML里 <a> <link> <script>等标签的资源相对路径
    :param html_content:
    :param html_file_path:
    :return:
    '''
    soup = BeautifulSoup(html_content, 'html.parser')

    # 获取当前目录和目标资源目录
    current_dir = os.getcwd() if os.path.dirname(html_file_path) == '' else os.path.abspath(
        os.path.dirname(html_file_path))
    target_build_dir = os.path.join('build')

    # 找到目标目录
    target_dir = find_target(current_dir, target_build_dir)
    if not target_dir or not os.path.exists(target_dir):
        raise FileNotFoundError(f"Target directory '{target_build_dir}' not found.")

    # 目标子目录
    static_target_dir = os.path.join(target_dir, 'html', '_static')
    source_target_dir = os.path.join(target_dir, 'html', '_sources')
    appendix_target_dir = os.path.join(target_dir, 'html', 'Appendix')
    image_target_dir = os.path.join(target_dir, 'html', 'image')

    # 创建资源索引
    resource_set = resources_index(target_dir)

    # 计算相对路径并修改 <link> 和 <script> <a> 标签
    target_dirs = {
        "_static": static_target_dir,
        "Appendix": appendix_target_dir,
        "images": image_target_dir,
        "_sources": source_target_dir,
        'base_target': target_dir
    }

    # 更新 <link> 标签
    for link in soup.find_all('link', href=True):
        update_paths(link, 'href', current_dir, target_dirs, resource_set)

    # 更新 <script> 标签
    for script_ in soup.find_all('script', src=True):
        update_paths(script_, 'src', current_dir, target_dirs, resource_set)

    # 更新 <a> 标签
    for a_tag in soup.find_all('a', href=True):
        if "http" not in a_tag['href']:
            update_paths(a_tag, 'href', current_dir, target_dirs, resource_set)

    return str(soup)


def arrange_htmls(html_files: [str]) -> [str]:
    '''
    2024-09-18; 安排 html文件的顺序，openGauss资源获取.html 必须是第一个，术语表.html 必须在最后
    :param html_files: 加到一起的 html 文件列表
    :return:
    '''
    new_order = []
    og_resource = None
    glossary = None
    for index, item in enumerate(html_files):
        if 'openGauss资源获取.html' in item:
            og_resource = item
        elif '术语表.html' in item:
            glossary = item
        else:
            new_order.append(item)
    if og_resource is not None:
        new_order.insert(0,og_resource)
    if glossary is not None:
        new_order.append(glossary)
    return new_order


def test():
    folder_path = '../build/html'
    html_file_path = 'index.html'
    process_index_html(folder_path, html_file_path)
    append_html_files(folder_path, html_file_path)

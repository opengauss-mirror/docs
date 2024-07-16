import argparse
import requests
from datetime import datetime


def extract_html(data, docsurl, gaussurl):
    res = []
    for a_data in data:
        path = a_data.get('_source').get('path')
        if 'docs' in path:
            url = docsurl + '/' + path.strip() + '.html'
        else:
            url = gaussurl + '/' + path.strip() + '.html'
        res.append(url)
    return res

def get_penGauss_htmls(index1, index2, esurl, auth, docsurl, gaussurl):
    htmls = []
    esindexes = [index1, index2]
    es_url = esurl

    for esindex in esindexes:
        header = {
                "Content-Type": 'application/json',
                'Authorization': auth
        }
        urlFirst = f'{es_url}/{esindex}/_search?scroll=1m'
        query = '''
            {
                "size":1000,
                "query": {
                    "match_all": {}
                }
            }
        '''
        res = requests.post(urlFirst, headers=header, verify=False, data=query.encode('utf-8')).json()
        data = None
        try:
            data = res.get('hits').get('hits')
        except:
            pass
        if not data:
            continue
        htmls.extend(extract_html(data, docsurl, gaussurl))


        while True:
            scrollId = res.get('_scroll_id')
            urlLatter = f'{es_url}/_search/scroll'
            query = '''
                {
                    "scroll": "1m",
                    "scroll_id": "%s"
                }
            ''' % (scrollId)
            res = requests.get(urlLatter, headers=header, verify=False, data=query.encode('utf-8')).json()
            data = None
            try:
                data = res.get('hits').get('hits')
            except:
                pass
            if not data:
                break
            htmls.extend(extract_html(data, docsurl, gaussurl))
    return htmls

def create_xml(data, xml_name):
    write_path = xml_name
    # 获取当天日期
    current_time = datetime.now()
    formated_d = formatted_date = current_time.strftime("%Y-%m-%d")
    
    with open(write_path, 'w', encoding='utf-8') as f1:
        f1.write('<?xml version="1.0" encoding="UTF-8"?>\n')
        f1.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
        for url in data:
            line_txt = f'<url><loc>{url.strip()}</loc><lastmod>{formated_d}</lastmod><changefreq>daily</changefreq><priority>0.9</priority></url>\n'
            f1.write(line_txt)
        f1.write('</urlset>\n')


def assemble_sitemap(htmls, path):
    docs_zh = []
    docs_en = []
    un_docs_zh = []
    un_docs_en = []
    for url in htmls:
        if 'docs' in url:
            if '/zh/' in url:
                docs_zh.append(url)
            if '/en/' in url:
                docs_en.append(url)
        else:
            if '/zh/' in url:
                un_docs_zh.append(url)
            if '/en/' in url:
                un_docs_en.append(url)

    create_xml(docs_zh, path + "/" + 'sitemap-zh.xml')
    create_xml(docs_en, path + "/" + 'sitemap-en.xml')
    # create_xml(un_docs_zh, '\\opengauss\\sitemap-zh.xml')
    # create_xml(un_docs_en, '\\opengauss\\sitemap-en.xml')

def filter_txt(path):
    with open(path, "r", encoding="utf-8") as f1:
        dat1 = f1.readlines()
    res = []
    for i in range(len(dat1)):
        dat = dat1[i]
        if "&" in dat:
            pass
        elif "1.1.0" in dat:
            pass
        else:
            res.append(dat)

    with open(path, "w", encoding="utf-8") as f2:
        f2.writelines(res)

def filter_sitemap(path):
    filter_txt(path + "/" + 'sitemap-zh.xml')
    filter_txt(path + "/" + 'sitemap-en.xml')

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="path")
    parser.add_argument("--path", type=str, help = "path of sitemap")
    parser.add_argument("--index1", type=str, help = "index of opengauss html")
    parser.add_argument("--index2", type=str, help = "index of opengauss html")
    parser.add_argument("--esurl", type=str, help = "server of opengauss html")
    parser.add_argument("--auth", type=str, help = "Authorization")
    parser.add_argument("--docsurl", type=str, help = "docs opengauss url")
    parser.add_argument("--gaussurl", type=str, help = "oepngauss url")

    args = parser.parse_args()

    htmls = get_penGauss_htmls(args.index1, args.index2, args.esurl, args.auth, args.docsurl, args.gaussurl)

    assemble_sitemap(htmls, args.path)

    filter_sitemap(args.path)

import unittest
import requests


class TestFlaskApp(unittest.TestCase):
    def setUp(self):
        ip_address="localhost"
        port=5000
        self.url = "http://{}:{}".format(ip_address, port)

    def test_html(self):
        html_url = self.url + "/html"
        response = requests.get(html_url)
        print(response.text)
        self.assertEqual(response.status_code, 200, "HTML build endpoint should return status code 200")

if __name__ == '__main__':
    unittest.main()

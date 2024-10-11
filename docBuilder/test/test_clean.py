import unittest
import requests


class TestFlaskApp(unittest.TestCase):
    def setUp(self):
        ip_address="localhost"
        port=5000
        self.url = "http://{}:{}".format(ip_address, port)

    def test_clean(self):
        clean_url = self.url + "/clean"
        response = requests.get(clean_url)
        print(response.text)  # 更清晰的输出
        self.assertEqual(response.status_code, 200, "Clean endpoint should return status code 200")

if __name__ == '__main__':
    unittest.main()

// state表示该版本目前的周期状态：DEV(开发更新中)，LTS(长期维护中)，EOM(已结束维护)
const versionObjZh = {
  latest: {
    homePath: '/docs/GettingStarted/GettingStarted.html',
    homeLitePath: '/docs/GettingStarted/GettingStarted.html',
    downLink: '',
    state: 'DEV',
  },
  '5.0.0': {
    homePath: '/docs/GettingStarted/GettingStarted.html',
    homeLitePath: '/docs/GettingStarted/GettingStarted.html',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/5.0.0/openGauss-document-zh-5.0.0.zip',
    state: 'LTS',
  },
  '3.0.0': {
    homePath: '/docs/BriefTutorial/BriefTutorial.html',
    homeLitePath: '/docs/BriefTutorial/BriefTutorial.html',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-document-zh-3.0.0.zip',
    state: 'LTS',
  },
  '2.0.0': {
    homePath: '/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-zh-2.0.0.zip',
    state: 'LTS',
  },
  '3.1.1': {
    homePath: '/docs/BriefTutorial/BriefTutorial.html',
    homeLitePath: '/docs/BriefTutorial/BriefTutorial.html',
    downLink: '',
    state: 'EOM',
  },
  '3.1.0': {
    homePath: '/docs/BriefTutorial/BriefTutorial.html',
    homeLitePath: '/docs/BriefTutorial/BriefTutorial.html',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.1.0/openGauss-document-zh-3.1.0.zip',
    state: 'EOM',
  },
  '2.1.0': {
    homePath: '/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.1.0/openGauss-document-zh-2.1.0.zip',
    state: 'EOM',
  },
  '2.0.1': {
    homePath: '/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-zh-2.0.0.zip',
    state: 'EOM',
  },
  '1.1.0': {
    homePath: '/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.1.0/openGauss-document-zh-1.1.0-2021-01-12.zip',
    state: 'EOM',
  },
  '1.0.1': {
    homePath: '/docs/Quickstart/%E4%BA%86%E8%A7%A3%E4%BA%A7%E5%93%81.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.1/openGauss-document-zh-1.0.1-2020-10-12.zip',
    state: 'EOM',
  },
  '1.0.0': {
    homePath: '/docs/Quickstart/Quickstart.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/openGauss-document-zh-1.0.0-2020-09-10.zip',
    state: 'EOM',
  },
};
const versionObjEn = {
  latest: {
    homePath: '/docs/GettingStarted/GettingStarted.html',
    homeLitePath: '/docs/GettingStarted/GettingStarted.html',
    downLink: '',
    state: 'DEV',
  },
  '5.0.0': {
    homePath: '/docs/GettingStarted/GettingStarted.html',
    homeLitePath: '/docs/GettingStarted/GettingStarted.html',
    downLink: '',
    state: 'LTS',
  },
  '3.0.0': {
    homePath: '/docs/BriefTutorial/BriefTutorial.html',
    homeLitePath: '/docs/BriefTutorial/BriefTutorial.html',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/3.0.0/openGauss-document-en-3.0.0.zip',
    state: 'LTS',
  },
  '2.0.0': {
    homePath: '/docs/Quickstart/learning-product-knowledge.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-en-2.0.0.zip',
    state: 'LTS',
  },
  '3.1.1': {
    homePath: '/docs/BriefTutorial/BriefTutorial.html',
    homeLitePath: '/docs/BriefTutorial/BriefTutorial.html',
    downLink: '',
    state: 'EOM',
  },
  '3.1.0': {
    homePath: '/docs/BriefTutorial/BriefTutorial.html',
    homeLitePath: '/docs/BriefTutorial/BriefTutorial.html',
    downLink: '',
    state: 'EOM',
  },
  '2.1.0': {
    homePath: '/docs/Quickstart/learning-product-knowledge.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.1.0/openGauss-document-en-2.1.0.zip',
    state: 'EOM',
  },
  '2.0.1': {
    homePath: '/docs/Quickstart/learning-product-knowledge.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/2.0.0/openGauss-document-en-2.0.0.zip',
    state: 'EOM',
  },
  '1.1.0': {
    homePath: '/docs/Quickstart/learning-product-knowledge.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.1.0/openGauss-document-en-1.1.0-2021-01-12.zip',
    state: 'EOM',
  },
  '1.0.1': {
    homePath: '/docs/Quickstart/learning-product-knowledge.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.1/openGauss-document-en-1.0.1-2020-10-12.zip',
    state: 'EOM',
  },
  '1.0.0': {
    homePath: '/docs/Quickstart/Quickstart.html',
    homeLitePath: '',
    downLink:
      'https://opengauss.obs.cn-south-1.myhuaweicloud.com/1.0.0/openGauss-document-en-1.0.0-2020-09-10.zip',
    state: 'EOM',
  },
};

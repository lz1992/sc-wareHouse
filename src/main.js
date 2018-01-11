import * as React from 'react'
import ReactDOM from 'react-dom'
import './assets/frame/tree'
import RedBox from 'redbox-react'
//import urlHelp from './config/urlHelp'
const urlHelp = require('./config/urlHelp');

import DemoModule from './assets/modules/DemoModule/DemoModule'

//url 预处理
const inject = (conf) => {
   
    let basePath = (urlHelp.isReal) ? urlHelp.real[conf.key] : urlHelp.simulation[conf.key];
    let theRequest = new Object();  
    if (basePath.indexOf("?") !== -1) {   
        let str = basePath.substr(basePath.indexOf("?") + 1);   
        let strs = str.split("&");   
        for(let i = 0; i < strs.length; i ++) {   
            theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];   
        }
        basePath = basePath.substring(0,basePath.indexOf("?"));
    }
    theRequest = (urlHelp.isReal) ? Object.assign({},theRequest,conf.data) : Object.assign({},conf.data,theRequest);
    conf.data = theRequest;
    conf.url = basePath;
}

// T 全局配置
let config = {
  router: {
      go: '/',//默认路由（当前路由为空时跳转）
      route: {
          path: '/'
      }
  },  
  data:{},
  ajax: {
    f:'json',
    inject : inject
  }
}
T.config(config)
const MOUNT_NODE = document.getElementById('root')

try {

    ReactDOM.render(<DemoModule />, MOUNT_NODE)

    // ReactDOM.render(<TestModule />, MOUNT_TESTMODULE)
    // ReactDOM.render(<MaxMinTempModule />, MOUNT_MAXMIN)
   
} catch (e) {
    ReactDOM.render(<RedBox error={e} />, MOUNT_NODE)
}

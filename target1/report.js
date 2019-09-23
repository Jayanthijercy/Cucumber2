$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/pom.feature");
formatter.feature({
  "name": "Automation Demo Site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register in Automation Demo Site",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@mrsBala"
    }
  ]
});
formatter.step({
  "name": "Go to Automation Demo Site",
  "keyword": "Given "
});
formatter.match({
  "location": "Logic2.go_to_Automation_Demo_Site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the FirstName, LastName,Address and email,phone number select all the given options then  give password,cpassword click on summit",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Jayanthi"
      ]
    },
    {
      "cells": [
        "LastName",
        "Venkat"
      ]
    },
    {
      "cells": [
        "Address",
        "Chennai"
      ]
    },
    {
      "cells": [
        "email",
        "ven@gmail.com"
      ]
    },
    {
      "cells": [
        "phone",
        "9965745365"
      ]
    },
    {
      "cells": [
        "pass",
        "Jay@2019"
      ]
    },
    {
      "cells": [
        "cpass",
        "Jay@2019"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Logic2.enter_the_FirstName_LastName_Address_and_email_phone_number_select_all_the_given_options_then_give_password_cpassword_click_on_summit(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat org.test2.Logic2.enter_the_FirstName_LastName_Address_and_email_phone_number_select_all_the_given_options_then_give_password_cpassword_click_on_summit(Logic2.java:56)\r\n\tat ✽.Enter the FirstName, LastName,Address and email,phone number select all the given options then  give password,cpassword click on summit(Features/pom.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "valida1te you are able to get Register in the url",
  "keyword": "Then "
});
formatter.match({
  "location": "Logic2.valida_te_you_are_able_to_get_Register_in_the_url(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Register in Automation Demo Site",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bala"
    }
  ]
});
formatter.step({
  "name": "Go to Automation Demo Site",
  "keyword": "Given "
});
formatter.match({
  "location": "Logic2.go_to_Automation_Demo_Site()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QC5ONK1\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 75.0.3770.140 (2d9f97485c7b..., userDataDir: C:\\Users\\GTSANA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:62922}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0e69701f1866ab08a6da4ad85f43c91f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.test1.Base.launch(Base.java:22)\r\n\tat org.test2.Logic2.go_to_Automation_Demo_Site(Logic2.java:19)\r\n\tat ✽.Go to Automation Demo Site(Features/pom.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the FirstName, LastName,Address and email,phone number select all the given options then  give password,cpassword click on summit",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Bala"
      ]
    },
    {
      "cells": [
        "LastName",
        "Jay"
      ]
    },
    {
      "cells": [
        "Address",
        "Bangalore"
      ]
    },
    {
      "cells": [
        "email",
        "bala@gmail.com"
      ]
    },
    {
      "cells": [
        "phone",
        "9968745365"
      ]
    },
    {
      "cells": [
        "pass",
        "Bala@2019"
      ]
    },
    {
      "cells": [
        "cpass",
        "Bala@2019"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Logic2.enter_the_FirstName_LastName_Address_and_email_phone_number_select_all_the_given_options_then_give_password_cpassword_click_on_summit(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "valida1te you are able to get Register in the url",
  "keyword": "Then "
});
formatter.match({
  "location": "Logic2.valida_te_you_are_able_to_get_Register_in_the_url(Integer)"
});
formatter.result({
  "status": "skipped"
});
});
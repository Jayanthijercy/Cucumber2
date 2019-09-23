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
  "status": "passed"
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
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat org.test2.Logic2.enter_the_FirstName_LastName_Address_and_email_phone_number_select_all_the_given_options_then_give_password_cpassword_click_on_summit(Logic2.java:56)\r\n\tat ✽.Enter the FirstName, LastName,Address and email,phone number select all the given options then  give password,cpassword click on summit(Features/pom.feature:19)\r\n",
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
});
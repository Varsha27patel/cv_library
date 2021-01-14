$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/search.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality",
  "description": "as a user i want to search different jobs",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search functionality with different job criteria",
  "description": "",
  "id": "search-functionality;search-functionality-with-different-job-criteria",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary min \"\u003csalaryMin\u003e\" and \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see result with keyword \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-functionality;search-functionality-with-different-job-criteria;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 18,
      "id": "search-functionality;search-functionality-with-different-job-criteria;;1"
    },
    {
      "cells": [
        "Automation Tester",
        "London",
        "up to 1 mile",
        "40000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Automation Tester jobs in London"
      ],
      "line": 19,
      "id": "search-functionality;search-functionality-with-different-job-criteria;;2"
    },
    {
      "cells": [
        "Qa Tester",
        "London",
        "up to 15 miles",
        "45000",
        "55000",
        "Per annum",
        "Permanent",
        "Permanent Qa Tester jobs in London"
      ],
      "line": 20,
      "id": "search-functionality;search-functionality-with-different-job-criteria;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8357031499,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search functionality with different job criteria",
  "description": "",
  "id": "search-functionality;search-functionality-with-different-job-criteria;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Automation Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary min \"40000\" and \"50000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see result with keyword \"Permanent Automation Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 319994500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 325302900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterLocation(String)"
});
formatter.result({
  "duration": 358594900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectDistance(String)"
});
formatter.result({
  "duration": 217128700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnMoreOptions()"
});
formatter.result({
  "duration": 169146300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    },
    {
      "val": "50000",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iEnterSalaryMinAnd(String,String)"
});
formatter.result({
  "duration": 399807900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 106167099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectJobType(String)"
});
formatter.result({
  "duration": 129732401,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 117084601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester jobs in London",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToSeeResultWithKeyword(String)"
});
formatter.result({
  "duration": 1830764299,
  "status": "passed"
});
formatter.after({
  "duration": 948830400,
  "status": "passed"
});
formatter.before({
  "duration": 6992105101,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search functionality with different job criteria",
  "description": "",
  "id": "search-functionality;search-functionality-with-different-job-criteria;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Qa Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more options",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary min \"45000\" and \"55000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see result with keyword \"Permanent Qa Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 2107599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Tester",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 179840900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterLocation(String)"
});
formatter.result({
  "duration": 140301600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectDistance(String)"
});
formatter.result({
  "duration": 127503800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnMoreOptions()"
});
formatter.result({
  "duration": 294663001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 20
    },
    {
      "val": "55000",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iEnterSalaryMinAnd(String,String)"
});
formatter.result({
  "duration": 459179800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 125711400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectJobType(String)"
});
formatter.result({
  "duration": 152479499,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 111785500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Qa Tester jobs in London",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToSeeResultWithKeyword(String)"
});
formatter.result({
  "duration": 2037643399,
  "status": "passed"
});
formatter.after({
  "duration": 961962900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Search job with fail result",
  "description": "",
  "id": "search-functionality;search-job-with-fail-result",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on more options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter salary min \"\u003csalaryMin\u003e\" and \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see result with keyword \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "search-functionality;search-job-with-fail-result;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 34,
      "id": "search-functionality;search-job-with-fail-result;;1"
    },
    {
      "cells": [
        "Automation Tester",
        "London",
        "up to 1 mile",
        "40000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Automation Tester1 jobs in London"
      ],
      "line": 35,
      "id": "search-functionality;search-job-with-fail-result;;2"
    },
    {
      "cells": [
        "Qa Tester",
        "London",
        "up to 15 miles",
        "45000",
        "55000",
        "Per annum",
        "Permanent",
        "Permanent Qa1 Tester jobs in London"
      ],
      "line": 36,
      "id": "search-functionality;search-job-with-fail-result;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7075032900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Search job with fail result",
  "description": "",
  "id": "search-functionality;search-job-with-fail-result;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter job title \"Automation Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select distance \"up to 1 mile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on more options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter salary min \"40000\" and \"50000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see result with keyword \"Permanent Automation Tester1 jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 3123499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 229395801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterLocation(String)"
});
formatter.result({
  "duration": 123667601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 1 mile",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectDistance(String)"
});
formatter.result({
  "duration": 164254000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnMoreOptions()"
});
formatter.result({
  "duration": 231247500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    },
    {
      "val": "50000",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iEnterSalaryMinAnd(String,String)"
});
formatter.result({
  "duration": 437832000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 134260399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectJobType(String)"
});
formatter.result({
  "duration": 144536700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 125899500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester1 jobs in London",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToSeeResultWithKeyword(String)"
});
formatter.result({
  "duration": 10090883700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Permanent Automation Tester1 jobs in London\u0027)]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7TUP9CK\u0027, ip: \u0027192.168.1.70\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\44796\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58526}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 914a67869976756debc84979905b608b\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Permanent Automation Tester1 jobs in London\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat uk.co.cvlibrary.pages.HomePage.verifySearchResultByText(HomePage.java:110)\r\n\tat uk.co.cvlibrary.cucumber.stepdefs.MyStepdefs.iShouldBeAbleToSeeResultWithKeyword(MyStepdefs.java:68)\r\n\tat ✽.Then I should be able to see result with keyword \"Permanent Automation Tester1 jobs in London\"(src/test/java/resources/featurefile/search.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1411519799,
  "status": "passed"
});
formatter.before({
  "duration": 7116859999,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Search job with fail result",
  "description": "",
  "id": "search-functionality;search-job-with-fail-result;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter job title \"Qa Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on more options",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter salary min \"45000\" and \"55000\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see result with keyword \"Permanent Qa1 Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 12661300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qa Tester",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 235393900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterLocation(String)"
});
formatter.result({
  "duration": 170302700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectDistance(String)"
});
formatter.result({
  "duration": 131473200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnMoreOptions()"
});
formatter.result({
  "duration": 306782500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 20
    },
    {
      "val": "55000",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iEnterSalaryMinAnd(String,String)"
});
formatter.result({
  "duration": 509471800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 122387799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iSelectJobType(String)"
});
formatter.result({
  "duration": 150627301,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 147922100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Qa1 Tester jobs in London",
      "offset": 45
    }
  ],
  "location": "MyStepdefs.iShouldBeAbleToSeeResultWithKeyword(String)"
});
formatter.result({
  "duration": 10027818501,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Permanent Qa1 Tester jobs in London\u0027)]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7TUP9CK\u0027, ip: \u0027192.168.1.70\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\44796\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58626}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3a6a662aeaaf73e8de1c7a3910560299\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Permanent Qa1 Tester jobs in London\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat uk.co.cvlibrary.pages.HomePage.verifySearchResultByText(HomePage.java:110)\r\n\tat uk.co.cvlibrary.cucumber.stepdefs.MyStepdefs.iShouldBeAbleToSeeResultWithKeyword(MyStepdefs.java:68)\r\n\tat ✽.Then I should be able to see result with keyword \"Permanent Qa1 Tester jobs in London\"(src/test/java/resources/featurefile/search.feature:32)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1254533001,
  "status": "passed"
});
});
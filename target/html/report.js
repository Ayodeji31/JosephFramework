$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Login test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 8581427006,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 7997488985,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 130934272,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-test;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I entered valid email in the text field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I entered correct password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the signin button",
  "keyword": "And "
});
formatter.match({
  "location": "Checkout.i_entered_valid_email_in_the_text_field()"
});
formatter.result({
  "duration": 309996403,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_entered_correct_password_field()"
});
formatter.result({
  "duration": 173271803,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1567597172,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 923641683,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2055350595,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 90968682,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-test;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I click on hardware and I selected the product",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I added this to cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select cash on delivery",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "continue button is clicked",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click confirm order",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see confirm order",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click continue buttton to proceed to the next page",
  "keyword": "And "
});
formatter.match({
  "location": "Checkout.i_selected_the_product()"
});
formatter.result({
  "duration": 5605060808,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_added_this_to_cart()"
});
formatter.result({
  "duration": 1554971429,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_click_checkout_button()"
});
formatter.result({
  "duration": 2881953310,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_click_continue_button()"
});
formatter.result({
  "duration": 55813568,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"tdb6\"}\n  (Session info: chrome\u003d59.0.3071.115)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 10.0.14393 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 49 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027DESKTOP-1424CII\u0027, ip: \u0027192.168.145.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_112\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Ayodeji\\AppData\\Local\\Temp\\scoped_dir444_31716}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d59.0.3071.115, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 5fbc2c94efad39e085a2890590d5be32\n*** Element info: {Using\u003did, value\u003dtdb6}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat pageObjects.CheckoutPage.click_Check_continue(CheckoutPage.java:33)\r\n\tat step_Definitions.Checkout.i_click_continue_button(Checkout.java:51)\r\n\tat ✽.And I click continue button(Checkout.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Checkout.i_select_cash_on_delivery()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.continue_button_is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_click_confirm_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_should_see_confirm_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_click_continue_buttton_to_proceed_to_the_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "As a user I want to be able to login using diferent username and password",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I entered valid \"\u003cemail\u003e\" email in the text field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I entered correct \"\u003cpasswd\u003e\" password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;",
  "rows": [
    {
      "cells": [
        "email",
        "passwd"
      ],
      "line": 17,
      "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;;1"
    },
    {
      "cells": [
        "testof682@yahoo.com",
        "Password27"
      ],
      "line": 18,
      "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;;2"
    },
    {
      "cells": [
        "testof742@yahoo.com",
        "Password325"
      ],
      "line": 19,
      "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;;3"
    },
    {
      "cells": [
        "testof173@yahoo.com",
        "Password325"
      ],
      "line": 20,
      "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 4067427748,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 3453219381,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 100243084,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a user I want to be able to login using diferent username and password",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I entered valid \"testof682@yahoo.com\" email in the text field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I entered correct \"Password27\" password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "testof682@yahoo.com",
      "offset": 17
    }
  ],
  "location": "Login.i_entered_valid_email_in_the_text_field(String)"
});
formatter.result({
  "duration": 413640206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password27",
      "offset": 19
    }
  ],
  "location": "Login.i_entered_correct_password_field(String)"
});
formatter.result({
  "duration": 160453985,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1051273537,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 81868235,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 650268134,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 47565,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 1511534450,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2130758958,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 58811112,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "As a user I want to be able to login using diferent username and password",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I entered valid \"testof742@yahoo.com\" email in the text field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I entered correct \"Password325\" password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "testof742@yahoo.com",
      "offset": 17
    }
  ],
  "location": "Login.i_entered_valid_email_in_the_text_field(String)"
});
formatter.result({
  "duration": 226539021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password325",
      "offset": 19
    }
  ],
  "location": "Login.i_entered_correct_password_field(String)"
});
formatter.result({
  "duration": 155966050,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1119362674,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 65125569,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 674447808,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 41677,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 715166747,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2251953137,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 74291248,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "As a user I want to be able to login using diferent username and password",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-be-able-to-login-using-diferent-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I entered valid \"testof173@yahoo.com\" email in the text field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I entered correct \"Password325\" password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify that I am logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I log out",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "testof173@yahoo.com",
      "offset": 17
    }
  ],
  "location": "Login.i_entered_valid_email_in_the_text_field(String)"
});
formatter.result({
  "duration": 222142140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password325",
      "offset": 19
    }
  ],
  "location": "Login.i_entered_correct_password_field(String)"
});
formatter.result({
  "duration": 177710360,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1567244733,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 60418378,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 668006962,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 34429,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "As a user I want to login with invalid credentials I should not be allowed to login.",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I entered wrong \"\u003cemail\u003e\" address in the email text field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I input invalid \"\u003cpasswd\u003e\" password or blank password",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;",
  "rows": [
    {
      "cells": [
        "email",
        "passwd"
      ],
      "line": 30,
      "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;1"
    },
    {
      "cells": [
        "tesf778@hotmail.com",
        "Password27"
      ],
      "line": 31,
      "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;2"
    },
    {
      "cells": [
        "",
        "Password325"
      ],
      "line": 32,
      "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;3"
    },
    {
      "cells": [
        "testof682@yahoo.com",
        "paswork325"
      ],
      "line": 33,
      "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;4"
    },
    {
      "cells": [
        "testof173@yahoo.com",
        ""
      ],
      "line": 34,
      "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 627816228,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 1965088150,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 60258468,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "As a user I want to login with invalid credentials I should not be allowed to login.",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I entered wrong \"tesf778@hotmail.com\" address in the email text field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I input invalid \"Password27\" password or blank password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "tesf778@hotmail.com",
      "offset": 17
    }
  ],
  "location": "Login.i_entered_wrong_address_in_the_email_text_field(String)"
});
formatter.result({
  "duration": 273159730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password27",
      "offset": 17
    }
  ],
  "location": "Login.i_input_invalid_password_or_blank_password(String)"
});
formatter.result({
  "duration": 145877143,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 1558178262,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 75201339,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 2484035599,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 667801297,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2600878651,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 78260038,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "As a user I want to login with invalid credentials I should not be allowed to login.",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I entered wrong \"\" address in the email text field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I input invalid \"Password325\" password or blank password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "Login.i_entered_wrong_address_in_the_email_text_field(String)"
});
formatter.result({
  "duration": 102200072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password325",
      "offset": 17
    }
  ],
  "location": "Login.i_input_invalid_password_or_blank_password(String)"
});
formatter.result({
  "duration": 161080040,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 1415150529,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 67692303,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 1783543544,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 699936670,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 3037518449,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 73382518,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "As a user I want to login with invalid credentials I should not be allowed to login.",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I entered wrong \"testof682@yahoo.com\" address in the email text field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I input invalid \"paswork325\" password or blank password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "testof682@yahoo.com",
      "offset": 17
    }
  ],
  "location": "Login.i_entered_wrong_address_in_the_email_text_field(String)"
});
formatter.result({
  "duration": 243649529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paswork325",
      "offset": 17
    }
  ],
  "location": "Login.i_input_invalid_password_or_blank_password(String)"
});
formatter.result({
  "duration": 136446907,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 785234164,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 75763520,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 753035823,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 647360740,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2147334464,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 77515296,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "As a user I want to login with invalid credentials I should not be allowed to login.",
  "description": "",
  "id": "login-test;as-a-user-i-want-to-login-with-invalid-credentials-i-should-not-be-allowed-to-login.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I entered wrong \"testof173@yahoo.com\" address in the email text field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I input invalid \"\" password or blank password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "testof173@yahoo.com",
      "offset": 17
    }
  ],
  "location": "Login.i_entered_wrong_address_in_the_email_text_field(String)"
});
formatter.result({
  "duration": 251984394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "Login.i_input_invalid_password_or_blank_password(String)"
});
formatter.result({
  "duration": 108800829,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 695276593,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 62659855,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 1475153501,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "register-test;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the continue button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I filled the mandatory fields to register",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click continue after filling the mandatory fieds",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 851260763,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2723828684,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 86853118,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_the_continue_button()"
});
formatter.result({
  "duration": 711187085,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_filled_the_mandatory_fields_to_register()"
});
formatter.result({
  "duration": 2910763162,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_continue_after_filling_the_mandatory_fieds()"
});
formatter.result({
  "duration": 2288189125,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_be_logged_in()"
});
formatter.result({
  "duration": 98442836,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 668896213,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search test",
  "description": "",
  "id": "search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "As a user I want to searc for an item in the quick find field,",
  "description": "",
  "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type \"\u003cproduct\u003e\" in the search widget",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see search product displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 14,
      "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;1"
    },
    {
      "cells": [
        "samsung"
      ],
      "line": 15,
      "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;2"
    },
    {
      "cells": [
        "DVD"
      ],
      "line": 16,
      "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;3"
    },
    {
      "cells": [
        "CD"
      ],
      "line": 17,
      "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;4"
    },
    {
      "cells": [
        "Mouse"
      ],
      "line": 18,
      "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 700029083,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2583745041,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 96528883,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As a user I want to searc for an item in the quick find field,",
  "description": "",
  "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type \"samsung\" in the search widget",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see search product displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "samsung",
      "offset": 8
    }
  ],
  "location": "Search.i_type_in_the_search_widget(String)"
});
formatter.result({
  "duration": 198607548,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1745486017,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 66722869,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 570195164,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2066991050,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 90779325,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a user I want to searc for an item in the quick find field,",
  "description": "",
  "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type \"DVD\" in the search widget",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see search product displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DVD",
      "offset": 8
    }
  ],
  "location": "Search.i_type_in_the_search_widget(String)"
});
formatter.result({
  "duration": 113281516,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 2287843480,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 76020827,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 4444572847,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 6573117962,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 68371813,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a user I want to searc for an item in the quick find field,",
  "description": "",
  "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type \"CD\" in the search widget",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see search product displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CD",
      "offset": 8
    }
  ],
  "location": "Search.i_type_in_the_search_widget(String)"
});
formatter.result({
  "duration": 129568457,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1732434448,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 65456717,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I see a welcome message displayed",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 558988690,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2076814042,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 74912774,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a user I want to searc for an item in the quick find field,",
  "description": "",
  "id": "search-test;as-a-user-i-want-to-searc-for-an-item-in-the-quick-find-field,;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I type \"Mouse\" in the search widget",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see search product displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mouse",
      "offset": 8
    }
  ],
  "location": "Search.i_type_in_the_search_widget(String)"
});
formatter.result({
  "duration": 133175295,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1688933596,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 60448277,
  "status": "passed"
});
});
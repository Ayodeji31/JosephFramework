$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Login test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3172503812,
  "status": "passed"
});
formatter.before({
  "duration": 304341,
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
  "duration": 5770611632,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2173332941,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 109876938,
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
  "duration": 263296067,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_entered_correct_password_field()"
});
formatter.result({
  "duration": 122298248,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 2272218793,
  "status": "passed"
});
formatter.before({
  "duration": 248114,
  "status": "passed"
});
formatter.before({
  "duration": 207059,
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
  "duration": 1338840925,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 1819909973,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 86618945,
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
formatter.match({
  "location": "Checkout.i_selected_the_product()"
});
formatter.result({
  "duration": 4209786038,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_added_this_to_cart()"
});
formatter.result({
  "duration": 1302321783,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_click_checkout_button()"
});
formatter.result({
  "duration": 1243535319,
  "status": "passed"
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
formatter.before({
  "duration": 188762,
  "status": "passed"
});
formatter.before({
  "duration": 319959,
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
  "duration": 958327142,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2162035729,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 78545428,
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
  "duration": 255331435,
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
  "duration": 81440238,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1119846116,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 93687957,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 756194256,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 70507,
  "status": "passed"
});
formatter.before({
  "duration": 153064,
  "status": "passed"
});
formatter.before({
  "duration": 340041,
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
  "duration": 657570796,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2181518019,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 97961227,
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
  "duration": 238395436,
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
  "duration": 80496424,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1700047793,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 44602029,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 607260364,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 37931,
  "status": "passed"
});
formatter.before({
  "duration": 120933,
  "status": "passed"
});
formatter.before({
  "duration": 73184,
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
  "duration": 562556144,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2169922714,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 77107618,
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
  "duration": 123071596,
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
  "duration": 90865886,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1119919301,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 42887545,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 691615047,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 75416,
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
formatter.before({
  "duration": 141907,
  "status": "passed"
});
formatter.before({
  "duration": 180285,
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
  "duration": 908587906,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2315210314,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 89690022,
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
  "duration": 171596144,
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
  "duration": 130538215,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 765375806,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 73239987,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 750046299,
  "status": "passed"
});
formatter.before({
  "duration": 275335,
  "status": "passed"
});
formatter.before({
  "duration": 194118,
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
  "duration": 551544530,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2060719165,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 93488039,
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
  "duration": 90489253,
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
  "duration": 180521102,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 725064003,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 61889672,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 756842654,
  "status": "passed"
});
formatter.before({
  "duration": 130304,
  "status": "passed"
});
formatter.before({
  "duration": 99960,
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
  "duration": 721205744,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2382591513,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 115157390,
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
  "duration": 277338595,
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
  "duration": 132928765,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 720462295,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 42786246,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 970542285,
  "status": "passed"
});
formatter.before({
  "duration": 181177,
  "status": "passed"
});
formatter.before({
  "duration": 2847955,
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
  "duration": 1153684200,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2249712728,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 79612407,
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
  "duration": 196820305,
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
  "duration": 71386720,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 1327265701,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 51687553,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 867163608,
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
formatter.before({
  "duration": 170021,
  "status": "passed"
});
formatter.before({
  "duration": 128073,
  "status": "passed"
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
  "duration": 607713305,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2107888012,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 75114228,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_the_continue_button()"
});
formatter.result({
  "duration": 978475680,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_filled_the_mandatory_fields_to_register()"
});
formatter.result({
  "duration": 1451598840,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_continue_after_filling_the_mandatory_fieds()"
});
formatter.result({
  "duration": 1455807849,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_be_logged_in()"
});
formatter.result({
  "duration": 828788968,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 754443179,
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
formatter.before({
  "duration": 265517,
  "status": "passed"
});
formatter.before({
  "duration": 536389,
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
  "duration": 591568949,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2240489676,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 68293330,
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
  "duration": 73865181,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1998028477,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 64233812,
  "status": "passed"
});
formatter.before({
  "duration": 108438,
  "status": "passed"
});
formatter.before({
  "duration": 105761,
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
  "duration": 604074600,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2483912987,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 73657229,
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
  "duration": 77231228,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 2050083739,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 72206477,
  "status": "passed"
});
formatter.before({
  "duration": 164666,
  "status": "passed"
});
formatter.before({
  "duration": 164666,
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
  "duration": 545844160,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 1990664940,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 76871106,
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
  "duration": 89343289,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1810069762,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 63511784,
  "status": "passed"
});
formatter.before({
  "duration": 160203,
  "status": "passed"
});
formatter.before({
  "duration": 310589,
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
  "duration": 582063424,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2140002686,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 71409925,
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
  "duration": 105659003,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1691282593,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 63985252,
  "status": "passed"
});
});
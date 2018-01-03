$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Login test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4481188465,
  "status": "passed"
});
formatter.before({
  "duration": 277168,
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
  "duration": 5623486176,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2645827154,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 83696813,
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
  "duration": 372048330,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_entered_correct_password_field()"
});
formatter.result({
  "duration": 192457124,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1939659369,
  "status": "passed"
});
formatter.before({
  "duration": 177756,
  "status": "passed"
});
formatter.before({
  "duration": 161547,
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
  "duration": 734676169,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 1913351585,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 59732265,
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
  "duration": 2998473141,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_added_this_to_cart()"
});
formatter.result({
  "duration": 1404466791,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_click_checkout_button()"
});
formatter.result({
  "duration": 1394748060,
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
  "duration": 173973,
  "status": "passed"
});
formatter.before({
  "duration": 159925,
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
  "duration": 736573667,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2170534330,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 74661009,
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
  "duration": 378610689,
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
  "duration": 178300454,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 2404866065,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 104532004,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 829067476,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 78342,
  "status": "passed"
});
formatter.before({
  "duration": 174514,
  "status": "passed"
});
formatter.before({
  "duration": 1450138,
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
  "duration": 766603507,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 3377589541,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 84549390,
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
  "duration": 366308293,
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
  "duration": 177786098,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 2093817519,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 76184085,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 880863966,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 101034,
  "status": "passed"
});
formatter.before({
  "duration": 149660,
  "status": "passed"
});
formatter.before({
  "duration": 163167,
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
  "duration": 1575303143,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 5187023971,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 72983409,
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
  "duration": 300867867,
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
  "duration": 166149339,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1501765397,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 72008187,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 894477105,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 69698,
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
  "duration": 302022,
  "status": "passed"
});
formatter.before({
  "duration": 146959,
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
  "duration": 758643419,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 3940530856,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 71535433,
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
  "duration": 284537612,
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
  "duration": 181175335,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 3248678586,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 86000608,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 5334662987,
  "status": "passed"
});
formatter.before({
  "duration": 244751,
  "status": "passed"
});
formatter.before({
  "duration": 158305,
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
  "duration": 1228430691,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 6693059817,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 70236577,
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
  "duration": 109810634,
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
  "duration": 203379620,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 871390528,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 91445647,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 1091634749,
  "status": "passed"
});
formatter.before({
  "duration": 150741,
  "status": "passed"
});
formatter.before({
  "duration": 119944,
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
  "duration": 691369250,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2385130904,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 75158075,
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
  "duration": 305533809,
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
  "duration": 176256538,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 1125224558,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 99269042,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 1433946616,
  "status": "passed"
});
formatter.before({
  "duration": 144797,
  "status": "passed"
});
formatter.before({
  "duration": 135073,
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
  "duration": 659951946,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2235989884,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 70626126,
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
  "duration": 296792462,
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
  "duration": 103534629,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 1700090607,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 75757797,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 970084701,
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
  "duration": 180457,
  "status": "passed"
});
formatter.before({
  "duration": 152902,
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
  "duration": 636158670,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2179774904,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 68350426,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_the_continue_button()"
});
formatter.result({
  "duration": 824479876,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_filled_the_mandatory_fields_to_register()"
});
formatter.result({
  "duration": 3059236279,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_continue_after_filling_the_mandatory_fieds()"
});
formatter.result({
  "duration": 1659173389,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1237655057,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 948217017,
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
  "duration": 116162,
  "status": "passed"
});
formatter.before({
  "duration": 128049,
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
  "duration": 1391605195,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 3271314022,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 93361515,
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
  "duration": 213982265,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1762391949,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 77221442,
  "status": "passed"
});
formatter.before({
  "duration": 113461,
  "status": "passed"
});
formatter.before({
  "duration": 119945,
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
  "duration": 707053859,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2322827940,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 57166969,
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
  "duration": 195131558,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 2589179943,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 47581690,
  "status": "passed"
});
formatter.before({
  "duration": 146418,
  "status": "passed"
});
formatter.before({
  "duration": 143177,
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
  "duration": 708275455,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2754826813,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 60789071,
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
  "duration": 216823107,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1695702374,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 47133250,
  "status": "passed"
});
formatter.before({
  "duration": 125888,
  "status": "passed"
});
formatter.before({
  "duration": 146418,
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
  "duration": 830099970,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2293259508,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 59556131,
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
  "duration": 201743623,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1800348379,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 46797730,
  "status": "passed"
});
});
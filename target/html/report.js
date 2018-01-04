$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Login test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4615821086,
  "status": "passed"
});
formatter.before({
  "duration": 256637,
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
  "duration": 5540956389,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2549841452,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 79839145,
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
  "duration": 403730376,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_entered_correct_password_field()"
});
formatter.result({
  "duration": 196486604,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 3373067857,
  "status": "passed"
});
formatter.before({
  "duration": 132371,
  "status": "passed"
});
formatter.before({
  "duration": 137774,
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
  "duration": 733506442,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 1968933344,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 61248858,
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
  "duration": 3160111062,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_added_this_to_cart()"
});
formatter.result({
  "duration": 1297181471,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_click_checkout_button()"
});
formatter.result({
  "duration": 1260465006,
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
  "duration": 217197,
  "status": "passed"
});
formatter.before({
  "duration": 199367,
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
  "duration": 734532452,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2237498913,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 73791683,
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
  "duration": 281504426,
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
  "duration": 181226663,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1281097588,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 77494828,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 721399090,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 119404,
  "status": "passed"
});
formatter.before({
  "duration": 154522,
  "status": "passed"
});
formatter.before({
  "duration": 139935,
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
  "duration": 735003044,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2358002419,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 80766822,
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
  "duration": 276824437,
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
  "duration": 185860187,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1370945059,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 73080661,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 705850635,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 116162,
  "status": "passed"
});
formatter.before({
  "duration": 139935,
  "status": "passed"
});
formatter.before({
  "duration": 151281,
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
  "duration": 625377730,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2788756464,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 73423205,
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
  "duration": 335283779,
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
  "duration": 201924620,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "duration": 1196782143,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "duration": 91163617,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 864190087,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "duration": 577570,
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
  "duration": 123727,
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
  "duration": 603358764,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2230840923,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 90193796,
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
  "duration": 287984120,
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
  "duration": 188507066,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 7415521658,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 104249432,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 1636818364,
  "status": "passed"
});
formatter.before({
  "duration": 203149,
  "status": "passed"
});
formatter.before({
  "duration": 210713,
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
  "duration": 926973367,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2190664442,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 69524475,
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
  "duration": 98803853,
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
  "duration": 199534378,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 811878161,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 112842739,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 1291680242,
  "status": "passed"
});
formatter.before({
  "duration": 148039,
  "status": "passed"
});
formatter.before({
  "duration": 124266,
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
  "duration": 774080035,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2336515100,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 72002784,
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
  "duration": 280676162,
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
  "duration": 155559121,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 850714722,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 109119604,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 756029498,
  "status": "passed"
});
formatter.before({
  "duration": 309586,
  "status": "passed"
});
formatter.before({
  "duration": 142096,
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
  "duration": 762316849,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2204180329,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 68250472,
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
  "duration": 264269725,
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
  "duration": 99284170,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "duration": 829546173,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "duration": 88488642,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 1091055558,
  "status": "passed"
});
formatter.uri("MixBasket.feature");
formatter.feature({
  "line": 2,
  "name": "Mix basket",
  "description": "",
  "id": "mix-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ignore"
    }
  ]
});
formatter.before({
  "duration": 224760,
  "status": "passed"
});
formatter.before({
  "duration": 143177,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on my account link",
  "keyword": "And "
});
formatter.match({
  "location": "Search.am_on_the_home_page()"
});
formatter.result({
  "duration": 660357164,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2298700766,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I want to see mix basket",
  "description": "",
  "id": "mix-basket;i-want-to-see-mix-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I search for products to add to basket",
  "rows": [
    {
      "cells": [
        "samsung"
      ],
      "line": 9
    },
    {
      "cells": [
        "Mouse"
      ],
      "line": 10
    },
    {
      "cells": [
        "DVD"
      ],
      "line": 11
    },
    {
      "cells": [
        "keyboard"
      ],
      "line": 12
    },
    {
      "cells": [
        "The Wheel of time"
      ],
      "line": 13
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I proceed to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "MixBasket.i_search_for_products_to_add_to_basket(DataTable)"
});
formatter.result({
  "duration": 19401833419,
  "status": "passed"
});
formatter.match({
  "location": "MixBasket.i_proceed_to_checkout()"
});
formatter.result({
  "duration": 2105574762,
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
  "duration": 167490,
  "status": "passed"
});
formatter.before({
  "duration": 156684,
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
  "duration": 1676293008,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2197132250,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 78038360,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_the_continue_button()"
});
formatter.result({
  "duration": 900646673,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_filled_the_mandatory_fields_to_register()"
});
formatter.result({
  "duration": 3105454819,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_continue_after_filling_the_mandatory_fieds()"
});
formatter.result({
  "duration": 1669160103,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_be_logged_in()"
});
formatter.result({
  "duration": 793266802,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "duration": 841069471,
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
  "duration": 162627,
  "status": "passed"
});
formatter.before({
  "duration": 250154,
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
  "duration": 585513537,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2246266193,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 70743368,
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
  "duration": 208224397,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1721393148,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 48384561,
  "status": "passed"
});
formatter.before({
  "duration": 129669,
  "status": "passed"
});
formatter.before({
  "duration": 126968,
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
  "duration": 619789514,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2111614661,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 63635858,
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
  "duration": 202478417,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1928406216,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 64788836,
  "status": "passed"
});
formatter.before({
  "duration": 116702,
  "status": "passed"
});
formatter.before({
  "duration": 177755,
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
  "duration": 592427083,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2275318109,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 52386486,
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
  "duration": 196278053,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1766657535,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 46172615,
  "status": "passed"
});
formatter.before({
  "duration": 118863,
  "status": "passed"
});
formatter.before({
  "duration": 130210,
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
  "duration": 577275200,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "duration": 2339672552,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "duration": 53576744,
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
  "duration": 187210912,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "duration": 1716927114,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "duration": 45699321,
  "status": "passed"
});
});
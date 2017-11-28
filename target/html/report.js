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
  "duration": 185202044,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Checkout.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_entered_correct_password_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3456641,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Checkout.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_added_this_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_click_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_click_continue_button()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3515099,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3690475,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3857372,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_on_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_verify_that_I_am_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3453071,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3423619,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3133557,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3445485,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_click_the_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_should_see_error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3199156,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Register.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_filled_the_mandatory_fields_to_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_click_continue_after_filling_the_mandatory_fieds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Register.i_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.i_log_out()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 7569266,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Search.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 3171488,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Search.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 36490630,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Search.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 6317093,
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:199)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:109)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:296)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat modules.TestBase.getDriver(TestBase.java:13)\r\n\tat step_Definitions.Search.\u003cinit\u003e(Search.java:17)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n\tat ✽.Given Am on the home page(Search.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.i_click_on_my_account_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_a_welcome_message_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_click_search_Icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_see_search_product_displayed()"
});
formatter.result({
  "status": "skipped"
});
});
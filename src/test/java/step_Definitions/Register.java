package step_Definitions;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import modules.TestBase;
import pageObjects.AccountSuccessPage;
import pageObjects.LoginPage;
import pageObjects.LogoffPage;
import pageObjects.RegisterPage;

public class Register extends TestBase{
//	WebDriver driver = getDriver();
	
	@Before
	public void setup() throws IOException{
		initialize();
	}
	
	@When("^I click the continue button$")
	public void i_click_the_continue_button() throws Throwable {
	  LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
	  loginpage.click_continue();
	}

	@When("^I filled the mandatory fields to register$")
	public void i_filled_the_mandatory_fields_to_register() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.click_gender();
		registerpage.type_first_name();
		registerpage.type_last_name();
		registerpage.type_DOB();
		registerpage.type_email();
		registerpage.type_street_address();
		registerpage.type_postcode();
		registerpage.type_city();
		registerpage.type_state();
		registerpage.type_country();
		registerpage.type_phone_number();
		registerpage.type_password();
		registerpage.type_confirm_password();	
	   
	}

	@When("^I click continue after filling the mandatory fieds$")
	public void i_click_continue_after_filling_the_mandatory_fieds() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.click_continue_button();
	    
	}

	@Then("^I should be logged in$")
	public void i_should_be_logged_in() throws Throwable {
		AccountSuccessPage accountsuccesspage =	PageFactory.initElements(driver, AccountSuccessPage.class);
		accountsuccesspage.account_created();
		
		LogoffPage logoff = PageFactory.initElements(driver, LogoffPage.class);
		logoff.click_continue();
	    
	}


	

}

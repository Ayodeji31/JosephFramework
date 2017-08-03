package step_Definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import modules.TestBase;
import pageObjects.Homepage;
import pageObjects.LoginPage;
import pageObjects.LogoffPage;

public class Login extends TestBase{
	WebDriver driver = getDriver();

	
	@Given("^I entered valid \"([^\"]*)\" email in the text field$")
	public void i_entered_valid_email_in_the_text_field(String email) throws Throwable {
	     LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
	     loginpage.type_email_address(email);
	}

	@Given("^I entered correct \"([^\"]*)\" password field$")
	public void i_entered_correct_password_field(String passwd) throws Throwable {
		 LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
	     loginpage.type_password(passwd); 
	}

	@Given("^I click on the signin button$")
	public void i_click_on_the_signin_button() throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
	     loginpage.click_signin();  
	}

	@Then("^I verify that I am logged in$")
	public void i_verify_that_I_am_logged_in() throws Throwable {
		Homepage homepage = PageFactory.initElements(driver, Homepage.class);
		homepage.check_account_info_message();
	   
	}

	@Then("^I log out$")
	public void i_log_out() throws Throwable {
		Homepage homepage = PageFactory.initElements(driver, Homepage.class);
		homepage.click_log_out();
		
//		LogoffPage logoffpage = PageFactory.initElements(driver, LogoffPage.class);
//		logoffpage.click_continue();
//	   
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
		//driver.close();
	  
	}
	
	@When("^I entered wrong \"([^\"]*)\" address in the email text field$")
	public void i_entered_wrong_address_in_the_email_text_field(String email) throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
		loginpage.type_email_address(email);
	    
	}

	@When("^I input invalid \"([^\"]*)\" password or blank password$")
	public void i_input_invalid_password_or_blank_password(String passwd) throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);		
		loginpage.type_password(passwd);
	}

	@When("^I click the signIn button$")
	public void i_click_the_signIn_button() throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);		
		loginpage.click_signin();
  
	}

	@Then("^I should see error message displayed$")
	public void i_should_see_error_message_displayed() throws Throwable {
		LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
		loginpage.check_error_message();
	}




}

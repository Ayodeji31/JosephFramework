  package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	@FindBy(how=How.NAME, using= "email_address")
	public static WebElement email_adds;
	
	@FindBy(how=How.NAME, using= "password")
	public static WebElement passwrd;
	
	@FindBy(how=How.ID, using= "tdb5")
	public static WebElement signin_button;
	
	@FindBy(how=How.ID, using= "tdb4")
	public static WebElement continue_button;
	
	@FindBy(how=How.CSS, using= "//*[@id='bodyContent']/table/tbody/tr/td")
	public static WebElement error_message;
	
	@FindBy(how=How.XPATH, using= "//*[@id='bodyContent']/div[2]/div/form/p[1]/a")
	public static WebElement forgot_password;
	
	@FindBy(how=How.XPATH, using= "//*[@id='bodyContent']/table/tbody/tr/td")
	public static WebElement Login_Error_message;
	
	
	public void type_email_address( String email){
		email_adds.sendKeys(email);
	}
	
	public void type_password( String passwd){
		passwrd.sendKeys(passwd);
	}
	
	public void click_signin(){
		signin_button.click();
	}
	

	public void error_message(){
		error_message.isDisplayed();
	}
	
	public void click_continue(){
		continue_button.click();
	}
	public void check_error_message(){
		Login_Error_message.isDisplayed();
	}

}

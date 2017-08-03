package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountSuccessPage {
	
	@FindBy(how=How.CSS, using= "#bodyContent > h1")
	public static WebElement account_success;
	
	@FindBy(how=How.ID, using= "tdb5")
	public static WebElement continue_button;
	
	
	public void account_created(){	
		account_success.isDisplayed();		
		}
	
	public void click_continue(){	
		continue_button.click();	
		}
	
	
	

}

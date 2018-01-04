package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ShoppingPage {
	
	
	@FindBy(how=How.ID, using= "tdb9")
	public static WebElement CheckOut_Button;
	
	
	
	
	public void click_checkout(){
		CheckOut_Button.click();
	}

}

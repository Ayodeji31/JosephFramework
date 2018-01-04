package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ShoppingPage {
	
	
	@FindBy(how=How.ID, using= "tdb5")
	public static WebElement CheckOut_Button;
	
	@FindBy(how=How.ID, using= "tdb9")
	public static WebElement Checkout_Button2;
	
	
	
	
	public void click_checkout(){
		CheckOut_Button.click();
	}
	
	public void clickCheckout2(){
		CheckOut_Button.click();
	}

}

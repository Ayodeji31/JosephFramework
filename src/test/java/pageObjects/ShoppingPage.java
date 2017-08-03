package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ShoppingPage {
	
	
	@FindBy(how=How.ID, using= "tdb5")
	public static WebElement Check_Out;
	
	
	
	
	public void click_checkout(){
		Check_Out.click();
	}

}

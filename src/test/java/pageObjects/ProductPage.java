package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProductPage {

	
	@FindBy(how=How.ID, using= "tdb4")
	public static WebElement Add_To_Cart;








   public void click_AddToCart(){
   Add_To_Cart.click();
   }



}
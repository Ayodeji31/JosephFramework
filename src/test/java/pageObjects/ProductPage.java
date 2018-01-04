package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProductPage {

	
	@FindBy(how=How.ID, using= "tdb4")
	public static WebElement Add_To_Cart;
	
	@FindBy(how=How.ID, using= "tdb5")
	public static WebElement Buy_Product_Now;
	
	@FindBy(how=How.ID, using= "tdb4")
	public static WebElement Buy_Keyboard;





   public void click_AddToCart(){
   Add_To_Cart.click();
   }
   
   public void clickBuyNow(){
   Buy_Product_Now.click();
   }
   
   public void clickBuyKeyBoard(){
   Buy_Keyboard.click();
   }



}
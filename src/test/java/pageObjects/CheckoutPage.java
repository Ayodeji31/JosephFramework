package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CheckoutPage {
	
	@FindBy(how=How.ID, using= "tdb6")
	public static WebElement Checkout_continue;
	
	@FindBy(how=How.NAME, using="payment")
	public static WebElement Payment_On_Delivery;
	
	@FindBy(how=How.ID, using= "tdb6")
	public static WebElement continue_Cash_On_Delivery;
	
	@FindBy(how=How.ID, using= "tdb5")
	public static WebElement Confirm_Order;
	
	@FindBy(how=How.CSS, using = "#bodyContent > h1")
	public static WebElement Message_Displayed;
	
	@FindBy(how=How.CSS, using = "tdb5")
	public static WebElement Click_Order_continue;
	
	
	
	
	
	
	public void click_Check_continue(){
		Checkout_continue.click();
	}

	public void click_PayOnDelivery(){
		Payment_On_Delivery.click();
	}
	
	public void click_CashOnDeliveryCont(){
		continue_Cash_On_Delivery.click();
	}
	
	
	public void click_ConfirmOrder(){
		Confirm_Order.click();
	}
	
	public void check_message_isdisplayed(){
		Message_Displayed.isDisplayed();
	}
	
	public void click_order_cont(){
		Message_Displayed.isDisplayed();
	}





}

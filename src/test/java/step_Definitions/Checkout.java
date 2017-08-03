package step_Definitions;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import modules.TestBase;
import pageObjects.CheckoutPage;
import pageObjects.Homepage;
import pageObjects.LoginPage;
import pageObjects.ProductPage;
import pageObjects.ShoppingPage;

public class Checkout extends TestBase{
	
	@When("^I entered valid email in the text field$")
	public void i_entered_valid_email_in_the_text_field() throws Throwable {
	LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
	loginpage.type_email_address("testof682@yahoo.com");
	}

	@When("^I entered correct password field$")
	public void i_entered_correct_password_field() throws Throwable {
	LoginPage loginpage = PageFactory.initElements(driver, LoginPage.class);
	loginpage.type_password("Password27");

	}

	@When("^I click on hardware and I selected the product$")
	public void i_selected_the_product() throws Throwable {
	Homepage homepage = PageFactory.initElements(driver, Homepage.class);
	homepage.click_Hard_Ware();
	homepage.click_LaserJet_Product();
	}

	@When("^I added this to cart$")
	public void i_added_this_to_cart() throws Throwable {
	ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
	productpage.click_AddToCart();
	}

	@When("^I click checkout button$")
	public void i_click_checkout_button() throws Throwable {
	ShoppingPage shoppingpage = PageFactory.initElements(driver, ShoppingPage.class);
	shoppingpage.click_checkout();
	}

	@When("^I click continue button$")
	public void i_click_continue_button() throws Throwable {
	CheckoutPage checkoutpage = PageFactory.initElements(driver, CheckoutPage.class);
	checkoutpage.click_New_customerContinue();
	Thread.sleep(1000);
	}

	@When("^I select cash on delivery$")
	public void i_select_cash_on_delivery() throws Throwable {
	CheckoutPage checkoutpage = PageFactory.initElements(driver, CheckoutPage.class);
	checkoutpage.click_PayOnDelivery();
	}

	@When("^continue button is clicked$")
	public void continue_button_is_clicked() throws Throwable {
	CheckoutPage checkoutpage = PageFactory.initElements(driver, CheckoutPage.class);
	checkoutpage.click_CashOnDeliveryCont();
	}

	@When("^I click confirm order$")
	public void i_click_confirm_order() throws Throwable {
		
	CheckoutPage checkoutpage = PageFactory.initElements(driver, CheckoutPage.class);
	checkoutpage.click_ConfirmOrder();

	}

	@Then("^I should see confirm order$")
	public void i_should_see_confirm_order() throws Throwable {
	CheckoutPage checkoutpage = PageFactory.initElements(driver, CheckoutPage.class);
	checkoutpage.check_message_isdisplayed();
	}

	@Then("^I click continue buttton to proceed to the next page$")
	public void i_click_continue_buttton_to_proceed_to_the_next_page() throws Throwable {
	CheckoutPage checkoutpage = PageFactory.initElements(driver, CheckoutPage.class);
	checkoutpage.click_order_cont();
	}


}

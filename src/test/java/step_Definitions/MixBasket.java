package step_Definitions;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import modules.TestBase;
import pageObjects.LandingPage;
import pageObjects.LoginPage;
import pageObjects.ProductPage;
import pageObjects.ShoppingPage;

public class MixBasket extends TestBase{
	
	@When("^I search for products to add to basket$")
	public void i_search_for_products_to_add_to_basket(DataTable product) throws Throwable {
//		ArrayList data = new ArrayList();   
		
		List<List<String>> data = product.raw();
		LandingPage landinpage = PageFactory.initElements(driver, LandingPage.class);
		landinpage.sendProduct(data.get(0).get(0));
		landinpage.click_searchIcon();
		ProductPage productpage = PageFactory.initElements(driver, ProductPage.class);
		productpage.click_AddToCart();
		
		driver.findElement(By.name("keywords")).clear();
		landinpage.sendProduct(data.get(1).get(0));
		landinpage.click_searchIcon();
		productpage.clickBuyNow();
		Thread.sleep(500);
		productpage.click_AddToCart();
		
		driver.findElement(By.name("keywords")).clear();
		landinpage.sendProduct(data.get(2).get(0));
		landinpage.click_searchIcon();
		productpage.clickBuyNow();
		Thread.sleep(500);
		productpage.click_AddToCart();
		
		driver.findElement(By.name("keywords")).clear();
		landinpage.sendProduct(data.get(3).get(0));
		landinpage.click_searchIcon();
		productpage.clickBuyKeyBoard();
		Thread.sleep(500);
		productpage.click_AddToCart();
		
		driver.findElement(By.name("keywords")).clear();
		landinpage.sendProduct(data.get(4).get(0));
		landinpage.click_searchIcon();
		productpage.clickBuyKeyBoard();
		Thread.sleep(500);
		productpage.click_AddToCart();

			    
	}

	@Then("^I proceed to checkout$")
	public void i_proceed_to_checkout() throws Throwable {
		ShoppingPage shopping = PageFactory.initElements(driver, ShoppingPage.class);
		shopping.clickCheckout2();
		
		LoginPage loginpage =PageFactory.initElements(driver, LoginPage.class);
		loginpage.clickCartContent();
	   
	}
	

}

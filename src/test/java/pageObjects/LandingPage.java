package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

//import modules.TestBase;

public class LandingPage extends MyBaseClass{
	public LandingPage(WebDriver driver){
		super(driver);
	}

	
	@FindBy(how=How.LINK_TEXT, using= "Cart Contents")
	public static WebElement cart_content;
	
	@FindBy(how=How.LINK_TEXT, using= "Checkout")
	public static WebElement checkout;
	
	@FindBy(how=How.LINK_TEXT, using="My Account")
	public static WebElement my_account;
	
	@FindBy(how=How.NAME, using= "keywords")
	public static WebElement quicksearch;
	
	@FindBy(how=How.XPATH, using= "//*[@id='columnLeft']/div[3]/div[2]/form/input[3]")
	public static WebElement searchIcon;
	
	
	
	public void click_cart_content(){
	cart_content.click();		
	}
	
	public void click_checkout(){	
	checkout.click();		
	}
	
	public void click_my_account(){	
	my_account.click();		
	}
	
	public void type_into_quicksearch (String product){	
	quicksearch.sendKeys(product);		
	}
	
	public void click_searchIcon(){	
	searchIcon.click();		
	}

	public void sendProduct (String test) {
		quicksearch.sendKeys(test);
		
	}
	
	
}



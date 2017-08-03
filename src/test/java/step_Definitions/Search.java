package step_Definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import modules.TestBase;
import pageObjects.LandingPage;
import pageObjects.SearchPage;

public class Search extends TestBase{
	WebDriver driver = getDriver();
	
		
	
	@Given("^Am on the home page$")
	public void am_on_the_home_page() throws Throwable {
	driver.navigate().to("http://www.carguruji.com/shop/");
	driver.manage().window().maximize();

	}

	@When("^I click on my account link$")
	public void i_click_on_my_account_link() throws Throwable {
		
		LandingPage landinpage = PageFactory.initElements(driver, LandingPage.class);
		landinpage.click_my_account();
		Thread.sleep(1000);
	    
	}

	@And("^I see a welcome message displayed$")
	public void i_see_a_welcome_message_displayed() throws Throwable {
		String ExpectedMessage = "Welcome, Please Sign In";
		String ActualMessage = driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();
		System.out.println(ActualMessage);
		//Assert.assertEquals(ExpectedMessage, ActualMessage);
	    
	}

	@And("^I type \"([^\"]*)\" in the search widget$")
	public void i_type_in_the_search_widget(String product) throws Throwable {
		LandingPage landinpage = PageFactory.initElements(driver, LandingPage.class);
		landinpage.type_into_quicksearch(product);
	    
	}

	@Given("^I click search Icon$")
	public void i_click_search_Icon() throws Throwable {
		LandingPage landinpage = PageFactory.initElements(driver, LandingPage.class);
		landinpage.click_searchIcon();
		Thread.sleep(1000);
	   
	}

	@Then("^I see search product displayed$")
	public void i_see_search_product_displayed() throws Throwable {
    SearchPage searchpage = PageFactory.initElements(driver, SearchPage.class);
    searchpage.IsDisplayed();
	}



}

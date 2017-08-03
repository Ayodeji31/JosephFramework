package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchPage extends MyBaseClass{
	
	public SearchPage(WebDriver driver){
		super(driver);
	}
	
	@FindBy(how=How.XPATH, using= "//*[@id='bodyContent']/h1")
	public static WebElement Display_Search;

	
	
	

	
	 public void IsDisplayed(){
	 Display_Search.isDisplayed();	 
	 }

	
}
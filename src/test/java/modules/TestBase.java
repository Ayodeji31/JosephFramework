package modules;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {
	
	public static WebDriver driver;
	
	public WebDriver getDriver(){
		if(driver == null){
		System.setProperty("webdriver.Chromedriver", "C:\\chromedriver");	
		driver = new ChromeDriver();	
		}
		return driver;
	}

}

package modules;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class TestBase {
	
//	
//	public static WebDriver driver;
//	
//	public WebDriver getDriver(){
//		if(driver == null){
//			System.setProperty("webdriver.Chrome.driver", "C:\\chromedriver.exe");	
//       	WebDriver driver = new ChromeDriver();
////       	WebDriver driver = new FirefoxDriver();
//		}
//		return driver;
//	}
	

    //initializing the property file reading  
    public static Properties CONFIG=null; 
    public static WebDriver driver=null;  

    public void initialize() throws IOException{ 
    if(driver == null){     
         
        //config property file
        CONFIG= new Properties();
        FileInputStream fn =new FileInputStream(System.getProperty("user.dir")+"\\src\\main\\java\\config\\config.properties");
        CONFIG.load(fn);

         
        //Initialize the webdriver
        if (CONFIG.getProperty("browser").equals("firefox")){
        	System.setProperty("webdriver.gecko.driver", "C:\\IEDriverServer.exe");
            driver = new FirefoxDriver();
             
        }else if(CONFIG.getProperty("browser").equals("IE")){
               System.setProperty("webdriver.ie.driver", "C:\\IEDriverServer.exe");
               //WebDriver driver = new InternetExplorerDriver();
            driver = new InternetExplorerDriver();

        }
         
        else if(CONFIG.getProperty("browser").equals("chrome")){
               System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
               driver = new ChromeDriver();
        }
         
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

}
}



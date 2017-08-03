package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Homepage {

	
	@FindBy(how=How.CSS, using= "#bodyContent > h1")
	public static WebElement account_information;
	
	@FindBy(how=How.ID, using= "tdb4")
	public static WebElement log_out;
	
	@FindBy(how=How.LINK_TEXT, using= "Hewlett Packard LaserJet 1100Xi")
	public static WebElement Hewlett_Packard;
	
	@FindBy(how=How.CSS, using= "#columnLeft > div:nth-child(1) > div.ui-widget-content.infoBoxContents > a:nth-child(1)")
	public static WebElement Hardware;


	public void click_log_out(){
		log_out.click();
	}
	
    public void check_account_info_message(){
	account_information.isDisplayed();
    }

    public void click_LaserJet_Product(){
    	Hewlett_Packard.click();
    }

    public void click_Hard_Ware(){
	log_out.click();
    }  

    }
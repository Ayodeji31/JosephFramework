package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LogoffPage {

	
	@FindBy(how=How.ID, using= "tdb4")
	public static WebElement continue_button;
	
	
	public void click_continue(){
		continue_button.click();
}


}

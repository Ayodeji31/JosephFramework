package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class RegisterPage {
	public int random;
	
	@FindBy(how=How.NAME, using= "gender")
	public static WebElement male_gender;
	
	@FindBy(how=How.NAME, using= "firstname")
	public static WebElement first_name;
	
	@FindBy(how=How.NAME, using="lastname")
	public static WebElement last_name;
	
	@FindBy(how=How.NAME, using= "dob")
	public static WebElement date_of_birth;
	
	@FindBy(how=How.NAME, using= "email_address")
	public static WebElement email_ad;
	
	@FindBy(how=How.NAME, using= "street_address")
	public static WebElement street_ad;
	
	@FindBy(how=How.NAME, using= "postcode")
	public static WebElement post_code;
	
	@FindBy(how=How.NAME, using= "city")
	public static WebElement city_city;
	
	@FindBy(how=How.NAME, using= "state")
	public static WebElement staty;
	
	@FindBy(how=How.NAME, using= "country")
	public static WebElement country_man;
	
	@FindBy(how=How.NAME, using= "telephone")
	public static WebElement telephone_no;
	
	@FindBy(how=How.NAME, using= "password")
	public static WebElement passwr;
	
	@FindBy(how=How.NAME, using= "confirmation")
	public static WebElement comf_passwr;
	
	@FindBy(how=How.ID, using= "tdb4")
	public static WebElement continue_button;
	
	
	
	public void click_gender(){	
		male_gender.click();		
		}
	
	public void type_first_name(){	
		first_name.sendKeys("Ayodeji");		
		}
	
	public void type_last_name(){	
		last_name.sendKeys("Joseph");		
		}
	
	public void type_DOB(){	
		date_of_birth.sendKeys("05/29/1984");		
		}
	
	public void type_email(){
		 random = 100 + (int)(Math.random() * ((1000 - 1) + 1));
		email_ad.sendKeys("testof" + random + "@yahoo.com");		
		}
	
	public void type_street_address(){	
		street_ad.sendKeys("117 Harts lane estate");		
		}
	
	public void type_postcode(){	
		post_code.sendKeys("IG11 8LY");		
		}
	
	public void type_city(){	
		city_city.sendKeys("Essex");		
		}
	
	public void type_state(){	
		staty.sendKeys("London");		
		}
	
	public void type_country(){	
		country_man.sendKeys("United Kingdom");		
		}
	
	public void type_phone_number(){	
		telephone_no.sendKeys("07933456334");		
		}
	
	public void type_password(){	
		passwr.sendKeys("Password27");		
		}
	
	public void type_confirm_password(){	
		comf_passwr.sendKeys("Password27");		
		}
	
	public void click_continue_button(){	
		continue_button.click();	
		}



}

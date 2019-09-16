package org.test1;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pojo extends Base {
	
	public Pojo() {
		
		PageFactory.initElements(driver, this);

	}
	
	@FindBy(xpath="//input[@ng-model='FirstName']")
	private WebElement fname;

	@FindBy(xpath="//input[@ng-model='LastName']")
	private WebElement lname;
	
	@FindBy(xpath="//textarea[@ng-model='Adress']")
	private WebElement add;
	
	@FindBy(xpath="//input[@ng-model='EmailAdress']")
	private WebElement mail;
	
	@FindBy(xpath="//input[@ng-model='Phone']")
	private WebElement phono;
	
	@FindBy(xpath="(//input[@ng-model='radiovalue'])[2]")
	private WebElement gender;
	
	@FindBy(xpath="//input[@id='checkbox2']")
	private WebElement mov;
	
	@FindBy(xpath="//div[@class='ui-autocomplete-multiselect ui-state-default ui-widget']")
	private WebElement lan;
	
	@FindBy(xpath="//a[text()='Danish']")
	private WebElement zech;
	
	
	public WebElement getZech() {
		return zech;
	}

	@FindBy(xpath="//label[text()='Skills']")
	private WebElement skilltext;
	
	@FindBy(xpath="//select[@ng-model='Skill']")
	private WebElement skill;
	
	@FindBy(xpath="//select[@id='countries']")
	private WebElement country;
	
	@FindBy(xpath="//select[@ng-model='yearbox']")
	private WebElement year;
	
	@FindBy(xpath="//select[@ng-model='monthbox']")
	private WebElement mon;
	
	public WebElement getFname() {
		return fname;
	}

	public WebElement getLname() {
		return lname;
	}

	public WebElement getAdd() {
		return add;
	}

	public WebElement getMail() {
		return mail;
	}

	public WebElement getPhono() {
		return phono;
	}

	public WebElement getGender() {
		return gender;
	}

	public WebElement getMov() {
		return mov;
	}

	public WebElement getLan() {
		return lan;
	}

	public WebElement getSkilltext() {
		return skilltext;
	}

	public WebElement getSkill() {
		return skill;
	}

	public WebElement getCountry() {
		return country;
	}

	public WebElement getYear() {
		return year;
	}

	public WebElement getMon() {
		return mon;
	}

	public WebElement getDay() {
		return day;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getCpass() {
		return cpass;
	}

	public WebElement getSumit() {
		return sumit;
	}

	@FindBy(xpath="//select[@ng-model='daybox']")
	private WebElement day;
	
	@FindBy(xpath="//input[@ng-model='Password']")
	private WebElement pass;
	
	@FindBy(xpath="//input[@ng-model='CPassword']")
	private WebElement cpass;
	
	@FindBy(xpath="//button[@id='submitbtn']")
	private WebElement sumit;
}

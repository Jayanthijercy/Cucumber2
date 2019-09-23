package org.Banggood.stepdefinition;

import java.util.Map;

import org.Banggood.objectrepository.Pojo;
import org.Banggood.resorce.Base;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Logic2 extends Base {
	
	@Given("Go to Automation Demo Site")
	public void go_to_Automation_Demo_Site() {
		launch("http://demo.automationtesting.in/Register.html");
		
	}

	@When("Enter the FirstName, LastName,Address and email,phone number select all the given options then  give password,cpassword click on summit")
	public void enter_the_FirstName_LastName_Address_and_email_phone_number_select_all_the_given_options_then_give_password_cpassword_click_on_summit(io.cucumber.datatable.DataTable val) {
		
		Map<String, String> e = val.asMap(String.class,String.class);
		
		Pojo p = new Pojo();
		
		p.getFname().sendKeys(e.get("FirstName"));
		p.getLname().sendKeys(e.get("LastName"));
		p.getAdd().sendKeys(e.get("Address"));
		p.getMail().sendKeys(e.get("email"));
		p.getPhono().sendKeys(e.get("phone"));
		p.getGender().click();
		p.getMov().click();
		p.getLan().click();
		p.getZech().click();
		p.getSkilltext().click();
		WebElement sele = p.getSkill();
		selectv(sele, "Art Design");
		clk(p.getSkilltext());
		WebElement contry = p.getCountry();
		selectv(contry, "Belgium");
		clk(p.getSkilltext());

		
		selectv(p.getYear(), "1993");

		selectv(p.getMon(), "April");

		
		selectv(p.getDay(), "25");

		p.getPass().sendKeys(e.get("password"));
		p.getCpass().sendKeys(e.get("cpassword"));

		p.getSumit().click();
	   
	}

@Then("valida{int}te you are able to get Register in the url")
public void valida_te_you_are_able_to_get_Register_in_the_url(Integer int1) {
		
		String url=driver.getCurrentUrl();
		boolean b=url.contains("WebTable");
		Assert.assertTrue(b);
	    
	}


}

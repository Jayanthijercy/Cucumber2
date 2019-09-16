package org.test2;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.test1.Base;
import org.test1.Pojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Logic2 extends Base{

	@Given("Go to Automation Demo Site")
	public void go_to_Automation_Demo_Site() {
		launch("http://demo.automationtesting.in/Register.html");
		
	}

	@When("Enter the {string}, {string},{string}, and <{string}>, {string} number select all the given options then  give {string},{string}click on summit")
	public void enter_the_and_number_select_all_the_given_options_then_give_click_on_summit(String fname, String lname, String add, String mail, String phono, String pass, String cpass, io.cucumber.datatable.DataTable val) {

		List<String> e=val.asList();
		Pojo p = new Pojo();
		p.getFname().sendKeys(e.get(0));
		p.getLname().sendKeys(e.get(1));
		p.getAdd().sendKeys(e.get(2));
		p.getMail().sendKeys(e.get(3));
		p.getPhono().sendKeys(e.get(4));
		p.getGender().click();
		p.getMov().click();
		p.getLan().click();
		p.getZech().click();
		p.getSkilltext().click();
		WebElement sele = p.getSkill();
		selectv(sele, "Art Design");
		p.getSkilltext().click();
		WebElement contry = p.getCountry();
		selectv(contry, "Belgium");
		p.getSkilltext().click();

		WebElement yr = p.getYear();
		selectv(yr, "1993");

		WebElement mo = p.getMon();
		selectv(mo, "April");

		WebElement da = p.getDay();
		selectv(da, "25");

		p.getPass().sendKeys(e.get(5));
		p.getCpass().sendKeys(e.get(6));

		p.getSumit().click();
	   
	}

	@Then("validate you are able to get WebTable in the url")
	public void validate_you_are_able_to_get_WebTable_in_the_url() {
		
		String url=driver.getCurrentUrl();
		boolean b=url.contains("WebTable");
		Assert.assertTrue(b);
	    
	}


}

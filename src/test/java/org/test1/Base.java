package org.test1;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Base {
	
	public static WebDriver driver;
    public static Select s;	
    public static Robot r;
	
    public static void launch(String url) {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\GT Sanatorium\\Desktop\\Jayanthi\\Cucumber\\driver\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.get(url);
	
	
	}

	public static void send(WebElement e,String msg) {
		e.sendKeys(msg);

	}
	
	public static void clk(WebElement e) {
		e.click();

	}
	
	public static void selectv(WebElement e,String option) {
		s=new Select(e);
		s.selectByValue(option);
	}
	
	
	public static void ent(WebElement e) throws AWTException {
		
		r=new Robot();
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);
		
	}
}

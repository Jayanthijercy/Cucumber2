package org.test1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "Features/pom.feature", glue= {"org.test2"})
public class TestRunner {


}

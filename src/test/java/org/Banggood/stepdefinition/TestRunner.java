package org.Banggood.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "Features/pom.feature", glue= {"org.Banggood.stepdefinition"},plugin= {"html:target","rerun:src/test/resources/failed.txt"})
public class TestRunner {


}
                      
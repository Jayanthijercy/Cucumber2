package org.Banggood.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"@src/test/resources/failed.txt"}, glue= {"org.test2"},plugin= {"html:target1"})

public class TestRunner2 {

}

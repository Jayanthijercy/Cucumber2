Feature: Automation Demo Site

  Scenario: Register in Automation Demo Site
    Given Go to Automation Demo Site
    When Enter the "<FirstName>", "<LastName>","<Address>", and <"email">, "<phone>" number select all the given options then  give "<password>","<cpassword>"click on summit
      | Jayanthi | Venkat | Chennai | ven@gmail.com | 9965745365 | Jay@2019 | Jay@2019 |
    Then valida1te you are able to get Register in the url

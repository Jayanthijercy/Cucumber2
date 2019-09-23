Feature: Automation Demo Site

@Jay
  Scenario: Register in Automation Demo Site
    Given Go to Automation Demo Site
    When Enter the FirstName, LastName,Address and email,phone number select all the given options then  give password,cpassword click on summit
      | FirstName | Jayanthi      |
      | LastName  | Venkat        |
      | Address   | Chennai       |
      | email     | ven@gmail.com |
      | phone     | 9965745365 |
      | pass      | Jay@2019      |
      | cpass     | Jay@2019      |
    Then valida1te you are able to get Register in the url

    @Bala
    Scenario: Register in Automation Demo Site
    Given Go to Automation Demo Site
    When Enter the FirstName, LastName,Address and email,phone number select all the given options then  give password,cpassword click on summit
      | FirstName | Bala      |
      | LastName  | Jay        |
      | Address   | Bangalore      |
      | email     | bala@gmail.com |
      | phone     | 9968745365 |
      | pass      | Bala@2019      |
      | cpass     | Bala@2019      |
    Then valida1te you are able to get Register in the url
@Smoke
Feature: Search functionality
  as a user i want to search different jobs


  Scenario Outline: Search functionality with different job criteria
    Given I am on home page
    When I enter job title "<jobTitle>"
    And I enter location "<location>"
    And I select distance "<distance>"
    And I click on more options
    And I enter salary min "<salaryMin>" and "<salaryMax>"
    And I select salary type "<salaryType>"
    And I select job type "<jobType>"
    And I click on find jobs button
    Then I should be able to see result with keyword "<result>"
    Examples:
      | jobTitle          | location | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                     |
      | Automation Tester | London   | up to 1 mile   | 40000     | 50000     | Per annum  | Permanent | Permanent Automation Tester jobs in London |
      | Qa Tester         | London   | up to 15 miles | 45000     | 55000     | Per annum  | Permanent | Permanent Qa Tester jobs in London         |

  Scenario Outline: Search job with fail result
    Given I am on home page
    When I enter job title "<jobTitle>"
    And I enter location "<location>"
    And I select distance "<distance>"
    And I click on more options
    And I enter salary min "<salaryMin>" and "<salaryMax>"
    And I select salary type "<salaryType>"
    And I select job type "<jobType>"
    And I click on find jobs button
    Then I should be able to see result with keyword "<result>"
    Examples:
      | jobTitle          | location | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                      |
      | Automation Tester | London   | up to 1 mile   | 40000     | 50000     | Per annum  | Permanent | Permanent Automation Tester1 jobs in London |
      | Qa Tester         | London   | up to 15 miles | 45000     | 55000     | Per annum  | Permanent | Permanent Qa1 Tester jobs in London         |

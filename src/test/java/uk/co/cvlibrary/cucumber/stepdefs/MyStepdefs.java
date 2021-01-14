package uk.co.cvlibrary.cucumber.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.cvlibrary.pages.HomePage;

public class MyStepdefs {

    HomePage homePage =new HomePage();

    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle)  {
        homePage.enterJobTitle(jobTitle);

    }

    @And("^I enter location \"([^\"]*)\"$")
    public void iEnterLocation(String location)  {
        homePage.enterLocation(location);

    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance)  {
        homePage.selectDistance(distance);

    }

    @And("^I click on more options$")
    public void iClickOnMoreOptions() {
        homePage.clickOnMoreSearchOptions();
    }

    @And("^I enter salary min \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iEnterSalaryMinAnd(String salaryMin, String salaryMax)  {
        homePage.enterSalaryMin(salaryMin);
        homePage.enterSalaryMax(salaryMax);

    }

    @And("^I select salary type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType)  {
        homePage.selectSalaryType(salaryType);

    }

    @And("^I select job type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType)  {
        homePage.selectJobType(jobType);

    }

    @And("^I click on find jobs button$")
    public void iClickOnFindJobsButton() {
        homePage.clickOnFindJobsBtn();
    }

    @Then("^I should be able to see result with keyword \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeResultWithKeyword(String result)  {
        Assert.assertTrue(new HomePage().verifySearchResultByText(result));

    }
}

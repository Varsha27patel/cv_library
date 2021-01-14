package uk.co.cvlibrary.pages;


import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.cvlibrary.utility.Utility;


public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class);

    @FindBy(id = "keywords")
    WebElement _jobTitle;
    @FindBy(id = "location")
    WebElement _location;
    @FindBy(id = "distance")
    WebElement _distance;
    @FindBy(id = "toggle-hp-search")
    WebElement _moreSearchOptions;
    @FindBy(id = "salarymin")
    WebElement _salaryMin;
    @FindBy(id = "salarymax")
    WebElement _salaryMax;
    @FindBy(id = "salarytype")
    WebElement _salaryType;
    @FindBy(id = "tempperm")
    WebElement _jobType;
    @FindBy(id = "hp-search-btn")
    WebElement _findJobsBtn;

    //This method will allow user to enter Job Title
    public void enterJobTitle(String jobTitle) {
        Reporter.addStepLog("enter job title " + _jobTitle.toString() + "<br>");
        log.info("enter job title " + _jobTitle.toString());
        sendTextToElement(_jobTitle, jobTitle);

    }

    //This method will allow user to enter Location
    public void enterLocation(String location) {
        Reporter.addStepLog("enter location " + _location.toString() + "<br>");
        log.info("enter location " + _location.toString());
        sendTextToElement(_location, location);

    }

    //This method will allow user to select Distance
    public void selectDistance(String distance) {
        Reporter.addStepLog("select distance from drop down " + _distance.toString() + "<br>");
        log.info("select distance from drop down " + _distance.toString());
        selectByVisibleTextFromDropDown(_distance, distance);

    }

    //This method will allow user to click on More Search options
    public void clickOnMoreSearchOptions() {
        Reporter.addStepLog("clicking on more search options" + _moreSearchOptions.toString() + "<br>");
        log.info("clicking on more search options" + _moreSearchOptions.toString());
        clickOnElement(_moreSearchOptions);

    }

    //This method will allow user to enter Salary Minimum
    public void enterSalaryMin(String salaryMin) {
        Reporter.addStepLog("enter salary minimum" + _salaryMin.toString() + "<br>");
        log.info("enter salary minimum" + _salaryMin.toString());
        sendTextToElement(_salaryMin, salaryMin);

    }

    //This method will allow user to enter Salary Maximum
    public void enterSalaryMax(String salaryMax) {
        Reporter.addStepLog("enter salary maximum" + _salaryMax.toString() + "<br>");
        log.info("enter salary maximum" + _salaryMax.toString());
        sendTextToElement(_salaryMax, salaryMax);

    }

    //This method will allow user to select Salary Type
    public void selectSalaryType(String salaryType) {
        Reporter.addStepLog("select salary type from drop down" + _salaryType.toString() + "<br>");
        log.info("select salary type from drop down" + _salaryType.toString());
        selectByVisibleTextFromDropDown(_salaryType, salaryType);

    }

    //This method will allow user to select Job Type
    public void selectJobType(String jobType) {
        Reporter.addStepLog("select job type from drop down" + _jobType.toString() + "<br>");
        log.info("select job type from drop down" + _jobType.toString());
        selectByValueFromDropDown(_jobType, jobType);

    }

    //This method will allow user to click on Find Jobs Button
    public void clickOnFindJobsBtn() {
        Reporter.addStepLog("clicking on find job button" + _findJobsBtn.toString() + "<br>");
        log.info("clicking on find job button" + _findJobsBtn.toString());
        clickOnElement(_findJobsBtn);
    }

    //This method will verify Search result successfully
    public boolean verifySearchResultByText(String text) {
       WebElement _result= driver.findElement(By.xpath("//h1[contains(text(),'"+text+"')]"));
        Reporter.addStepLog("verify search result successfully" + _result.toString() + "<br>");
        log.info("verify search result successfully" + _result.toString());
        if (getTextFromElement(_result).equals(text)) {
            return true;
        } else {
            return false;
        }

    }

}

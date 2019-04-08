package com.govtech.web.stepdefinitions;

import com.govtech.web.page.MyGrantPage;

import static com.govtech.web.utils.BrowserActions.*;
import static com.govtech.web.utils.UtilsConfigReader.getAdvanceDate;

import com.govtech.web.utils.BGPConstant;
import com.govtech.web.utils.BrowserActions;
import com.govtech.web.utils.BrowserAssertions;
import com.govtech.web.utils.BrowserManager;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class MyGrantPageStepDefinition {

    public static String parentWindow = null;
    public static String draftSavedName = null;
    public static Actions action = new Actions(BrowserManager.getDriver());

    @When("I select {string} and then {string}")
    public void i_select_and_then(String mainSelect, String subSelect) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'" + mainSelect + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElementContainsText(mainSelect);
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'" + subSelect + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElementContainsText(subSelect);
    }

    @When("I select {string}")
    public void i_select(String linkText) {
        By linkTxtElement = By.xpath("//*[contains(text(),'" + linkText + "')]");
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(linkTxtElement), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElement(BrowserManager.getDriver().findElement(linkTxtElement));
    }

    @When("I select {string} under My Grants")
    public void iSelectUnderMyGrants(String getNewGrant) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'" + getNewGrant + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElementContainsText(getNewGrant);
    }

    @Given("I am on {string} Slide Menu")
    public void i_am_on_Slide_Menu(String checkSlideMenu) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(MyGrantPage.preScopeHeader), BGPConstant.WAIT_LONG_TIMEOUT);
        switch (checkSlideMenu) {
            case BGPConstant.ELIGIBILITY_MENU:
                Assert.assertTrue(BrowserAssertions.isElementPresent(MyGrantPage.eligibilityHeader));
                break;
            case BGPConstant.CONTACT_DETAILS_MENU:
                Assert.assertTrue(BrowserAssertions.isElementPresent(MyGrantPage.contactDetailsHeader));
                break;
            case BGPConstant.PROPOSAL_MENU:
                Assert.assertTrue(BrowserAssertions.isElementPresent(MyGrantPage.proposalHeader));
                break;
            case BGPConstant.COST_MENU:
                Assert.assertTrue(BrowserAssertions.isElementPresent(MyGrantPage.costHeader));
                break;
            case BGPConstant.BUSINESS_IMPACT_MENU:
                Assert.assertTrue(BrowserAssertions.isElementPresent(MyGrantPage.businessImpactHeader));
                break;
            case BGPConstant.DECLARE_AND_REVIEW_MENU:
                Assert.assertTrue(BrowserAssertions.isElementPresent(MyGrantPage.declareAndReviewHeader));
                break;
        }
    }

    @Then("I should see {string} button is disabled")
    public void i_should_see_button_is_disabled(String nextButton) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(text(),'" + nextButton + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        Assert.assertFalse(BrowserAssertions.isElementEnabled(By.xpath("//button[contains(text(),'" + nextButton + "')]")));
    }

    @Then("I should see {string} button is enabled")
    public void i_should_see_button_is_enabled(String nextButton) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(text(),'" + nextButton + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        Assert.assertTrue(BrowserAssertions.isElementEnabled(By.xpath("//button[contains(text(),'" + nextButton + "')]")));
    }

    @Then("I should see below side menus are disabled")
    public void i_should_see_below_side_menus_are_disabled(DataTable slideMenus) {
        List<Map<String, String>> list = slideMenus.asMaps(String.class, String.class);
        for (int i = 0; i < list.size(); i++) {
            Assert.assertFalse(BrowserAssertions.isLinkTextEnabled(By.xpath("//span[text()='" + list.get(i).get("Side Menus") + "']//parent::a//parent::li")));
        }
    }

    @Then("I should see below side menus are enabled")
    public void i_should_see_below_side_menus_are_enabled(DataTable slideMenus) {
        List<Map<String, String>> list = slideMenus.asMaps(String.class, String.class);
        for (int i = 0; i < list.size(); i++) {
            Assert.assertTrue(BrowserAssertions.isLinkTextEnabled(By.xpath("//span[text()='" + list.get(i).get("Side Menus") + "']//parent::a//parent::li")));
        }
    }

    @Then("logout BGP user")
    public void logout_BGP_user() throws IOException {
        BrowserActions.takeScreenshot();
        clickElement(MyGrantPage.logoutButton);
        if (BrowserAssertions.isAlertPresent()) {
            BrowserManager.getDriver().switchTo().alert().accept();
        }
    }

    @When("I select {string} option for the question")
    public void i_select_option_for_the_question(String ratioButtonOption) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'" + ratioButtonOption + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElement(By.xpath("//span[contains(text(),'" + ratioButtonOption + "')]"));
    }

    @Then("I should see warning message {string}")
    public void iShouldSeeWarningMessage(String warningMessage) {
        String[] warningTexts = warningMessage.split(",");
        Assert.assertTrue(BrowserAssertions.isElementPresent(By.xpath("//span[contains(text(),'" + warningTexts[0] + "') or contains(text(),' " + warningTexts[2] + "')]//a[text()='" + warningTexts[1] + "']")));
    }

    @And("I click on link {string}")
    public void iClickOnLink(String linkText) throws IOException {
        parentWindow = BrowserManager.getDriver().getWindowHandle();
        BrowserActions.takeScreenshot();
        clickElementContainsText(linkText);
    }

    @Then("I should see a new tab opening url {string}")
    public void iShouldSeeANewTabOpeningUrl(String newUrl) throws InterruptedException, IOException {
        Set<String> winHandles = BrowserManager.getDriver().getWindowHandles();
        for (String handle : winHandles) {
            if (!handle.equals(parentWindow)) {
                BrowserManager.getDriver().switchTo().window(handle);
                Thread.sleep(3000);
                Assert.assertTrue(BrowserManager.getDriver().getCurrentUrl().startsWith(newUrl));
                BrowserActions.takeScreenshot();
                BrowserManager.getDriver().close();
            }
        }
        BrowserManager.getDriver().switchTo().window(parentWindow);
        waitForPageLoadComplete();
    }

    @And("I click {string} button")
    public void iClickButton(String buttonText) {
        By buttonTxt = By.xpath("//button[text()='" + buttonText + "']");
        waitForCondition(ExpectedConditions.elementToBeClickable(buttonTxt), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElement(BrowserManager.getDriver().findElement(buttonTxt));
    }

    @Then("I should see {string} message")
    public void iShouldSeeMessage(String saveMsg) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='growl-title']")), BGPConstant.WAIT_LONG_TIMEOUT);
        Assert.assertEquals(BrowserManager.getDriver().findElement(By.xpath("//div[@class='growl-title']")).getText(), saveMsg);
    }

    @Then("I fill below contact details")
    public void iFillBelowContactDetails(DataTable contactDetails) {
        List<Map<String, String>> details = contactDetails.asMaps(String.class, String.class);
        for (int i = 0; i < details.size(); i++) {
            fillElement(MyGrantPage.contactNameText, details.get(i).get("Name"));
            fillElement(MyGrantPage.contactJobTitleText, details.get(i).get("Job Title"));
            fillElement(MyGrantPage.contactNoText, details.get(i).get("Contact No"));
            fillElement(MyGrantPage.contactEmailText, details.get(i).get("Email"));
            fillElement(MyGrantPage.contactAlternateEmailText, details.get(i).get("Alternate Contact Person's Email"));
            if (details.get(i).get("Copy Mailing Address").equalsIgnoreCase("Yes")) {
                clickElement(MyGrantPage.contactCopyMailCheckBox);
            }
            if (details.get(i).get("Copy Addresse").equalsIgnoreCase("Yes")) {
                clickElement(MyGrantPage.contactCopyAddresseeCheckBox);
            }
        }
    }

    @When("I click {string} menu")
    public void iClickMenu(String menu) {
        clickElement(By.xpath("//a[contains(text(),'" + menu + "')]"));
    }

    @Then("I should see {string} under Drafts tag")
    public void iShouldSeeUnderDraftsTag(String draftWarningMsg) {
        Assert.assertTrue(BrowserAssertions.isElementPresent(draftWarningMsg));
    }


    @Then("I choose {string} on Proposal Page")
    public void iChooseOnProposalPage(String proposalTxt) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[text()='" + proposalTxt + "']")), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElement(BrowserManager.getDriver().findElement(By.xpath("//span[text()='" + proposalTxt + "']")));

    }

    @And("I fill the datetime value on Proposal Page")
    public void iFillTheDatetimeValueOnProposalPage() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        draftSavedName = "AUTO_" + String.valueOf(timestamp.getTime());
        clickElement(MyGrantPage.proposalTitle);
        action.sendKeys(draftSavedName).build().perform();
        clickElement(MyGrantPage.proposalselectDropDownValue);
    }

    @And("I click on recently saved Grant draft")
    public void iClickOnRecentlySavedGrantDraft() {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(text(),'" + draftSavedName + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        clickElement(By.xpath("//div[contains(text(),'" + draftSavedName + "')]"));
    }

    @Then("I fill Proposal details")
    public void iFillProposalDetails(DataTable proposalDetails) {
        List<Map<String, String>> details = proposalDetails.asMaps(String.class, String.class);
        for (int i = 0; i < details.size(); i++) {
            fillElement(MyGrantPage.proposalSolutionStartDate, getAdvanceDate(Integer.parseInt(details.get(i).get("intendedStartDateFromNow"))));
            if (details.get(i).get("isCurrentlyHaveThisSolution").equalsIgnoreCase("Yes")) {
                clickElement(MyGrantPage.proposalHaveSolutionYesFlag);
            } else if (details.get(i).get("isCurrentlyHaveThisSolution").equalsIgnoreCase("No")) {
                clickElement(MyGrantPage.proposalHaveSolutionNoFlag);
            }
            fillElement(MyGrantPage.proposalWhyNeedThisSolution, details.get(i).get("whyNeedThisSolution"));
            clickElement(By.xpath("//input[@name='react-project-vendors-0-local_vendor']/following-sibling::span[text()='" + details.get(i).get("vendorLocation") + "']"));

            fillElement(MyGrantPage.proposalVendorName, details.get(i).get("vendorNameToSearch"));
            BrowserManager.getDriver().findElement(MyGrantPage.proposalVendorName).sendKeys(Keys.ENTER);
            waitForCondition(ExpectedConditions.visibilityOfElementLocated(MyGrantPage.proposalVendorList), BGPConstant.WAIT_LONG_TIMEOUT);
            clickElement(MyGrantPage.proposalVendorList);

            fillElement(MyGrantPage.proposalWhyThisVendor, details.get(i).get("whyThisVendor"));
            fillElement(MyGrantPage.proposalDescripeSolution, details.get(i).get("describeSolution"));

            action.moveToElement(getElementByXpath(MyGrantPage.proposalUploadFile));
            getElementByXpath(MyGrantPage.proposalUploadFile).sendKeys(new File("Test scenario.docx").getAbsolutePath());

            waitForCondition(ExpectedConditions.visibilityOfElementLocated(MyGrantPage.proposalUploadDropDownSelection), BGPConstant.WAIT_LONG_TIMEOUT);
            clickElement(MyGrantPage.proposalUploadDropDownSelection);
            clickElement(MyGrantPage.proposalselectDropDownValue);
            clickElement(MyGrantPage.proposalselectDropDownValue);
            clickElement(MyGrantPage.proposalselectDropDownValue);

            fillElement(MyGrantPage.proposalQuoteRemarks, details.get(i).get("quoteRemarks"));
            clickElement(MyGrantPage.comboSelect);
            clickElement(By.xpath("//div[@id='react-select-project-locations-0-location_type--list']/child::div[text()='" + details.get(i).get("locationType") + "']"));
            fillElement(MyGrantPage.proposalLocationAddress, details.get(i).get("locationAddress"));
        }
    }

    @Then("I fill Cost details")
    public void iFillCostDetails(DataTable costDetails) {
        List<Map<String, String>> details = costDetails.asMaps(String.class, String.class);
        for (int i = 0; i < details.size(); i++) {
            clickElement(MyGrantPage.comboSelect);
            clickElement(By.xpath("//div[@id='react-select-project_cost-psg_payment_mode_id--list']/child::div[text()='" + details.get(i).get("typeOfPurchase") + "']"));
            fillElement(MyGrantPage.costPurchasePrice, details.get(i).get("purchasePrice"));
            fillElement(MyGrantPage.costOneTimeFee, details.get(i).get("oneTimeFee"));
        }
    }

    @Then("I fill Business Impact details")
    public void iFillBusinessImpactDetails(DataTable businessImpactDetails) {
        List<Map<String, String>> details = businessImpactDetails.asMaps(String.class, String.class);
        for (int i = 0; i < details.size(); i++) {
            fillElement(MyGrantPage.businessOverallImpact, details.get(i).get("overallImpact"));
            fillElement(MyGrantPage.businessProductivityGains, details.get(i).get("productivityGains"));
            fillElement(MyGrantPage.businessMeasuringUnit, details.get(i).get("measuringUnit"));
            fillElement(MyGrantPage.businessUnitsDoneNow, details.get(i).get("unitsDoneNow"));
            fillElement(MyGrantPage.businessUnitsDoneAfter, details.get(i).get("unitsDoneAfter"));
            fillElement(MyGrantPage.businessNoOfWorkersNow, details.get(i).get("noOfWorkersNow"));
            fillElement(MyGrantPage.businessNoOfWorkersAfter, details.get(i).get("noOfWorkersAfter"));
            fillElement(MyGrantPage.businessNoOfManDaysNow, details.get(i).get("noOfManDaysNow"));
            fillElement(MyGrantPage.businessNoOfManDaysAfter, details.get(i).get("noOfManDaysAfter"));
        }
    }

    @Then("I fill Declare and Review details")
    public void iFillDeclareAndReviewDetails(DataTable declareReviewDetails) {
        List<Map<String, String>> details = declareReviewDetails.asMaps(String.class, String.class);
        for (int i = 0; i < details.size(); i++) {
            clickElement(By.xpath("//input[@name='react-declaration-criminal_liability_check']/following-sibling::span[text()='" + details.get(i).get("criminalLiabilityCheck") + "']"));
            clickElement(By.xpath("//input[@name='react-declaration-civil_proceeding_check']/following-sibling::span[text()='" + details.get(i).get("civilProceedingCheck") + "']"));
            clickElement(By.xpath("//input[@name='react-declaration-insolvency_proceeding_check']/following-sibling::span[text()='" + details.get(i).get("insolvencyProceedingCheck") + "']"));
            clickElement(By.xpath("//input[@name='react-declaration-project_incentives_check']/following-sibling::span[text()='" + details.get(i).get("projectIncentivesCheck") + "']"));
            clickElement(By.xpath("//input[@name='react-declaration-project_commence_check']/following-sibling::span[text()='" + details.get(i).get("projectCommenceCheck") + "']"));
            clickElement(By.xpath("//input[@name='react-declaration-related_party_check']/following-sibling::span[text()='" + details.get(i).get("relatedPartyCheck") + "']"));
            clickElement(By.xpath("//input[@name='react-declaration-defray_cost_check']/following-sibling::span[text()='" + details.get(i).get("defrayCostCheck") + "']"));
            if (details.get(i).get("declarationConsentAcknowledgementCheck").equalsIgnoreCase("Yes")) {
                clickElement(MyGrantPage.declarationAcknowledgementCheck);
            }
        }
        waitForPageLoadComplete();
    }

    @And("I check Terms & Conditions")
    public void iCheckTermsConditions() throws IOException {
        clickElement(MyGrantPage.finalDeclarationInfoTruthfulnessCheck);
        BrowserActions.takeScreenshot();
    }

    @Then("I should see {string} message in page")
    public void iShouldSeeMessageInPage(String txtValidate) {
        waitForCondition(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'" + txtValidate + "')]")), BGPConstant.WAIT_LONG_TIMEOUT);
        Assert.assertTrue(BrowserAssertions.isElementPresent(txtValidate));
    }

    @Then("I should be able to modify the Contact No to {string} on Contact Details Menu")
    public void iShouldBeAbleToModifyTheContactNoToOnContactDetailsMenu(String newContactNumber) throws IOException {
        BrowserActions.takeScreenshot();
        if (BrowserAssertions.isElementPresent(MyGrantPage.contactDetailsHeader)) {
            clearTextBox(MyGrantPage.contactNoText);
            fillElement(MyGrantPage.contactNoText, newContactNumber);
        }
    }
}

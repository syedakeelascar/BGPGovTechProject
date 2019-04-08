package com.govtech.web.page;

import org.openqa.selenium.By;

public class MyGrantPage {
    public static By logoutButton = By.xpath("//*[@id='logout-button']");
    public static By preScopeHeader = By.xpath("//h1[text()='Pre-scoped Productivity Solutions']");
    public static By eligibilityHeader = By.xpath("//h2[contains(text(),'Check Your Eligibility')]");
    public static By contactDetailsHeader = By.xpath("//h2[contains(text(),'Provide Your Contact Details')]");
    public static By proposalHeader = By.xpath("//h2[contains(text(),'Submit Your Proposal')]");
    public static By costHeader = By.xpath("//h2[contains(text(),'Provide Details of Costs')]");
    public static By businessImpactHeader = By.xpath("//h2[contains(text(),'Explain The Business Impact')]");
    public static By declareAndReviewHeader = By.xpath("//h2[contains(text(),'Declare & Acknowledge Terms')]");
    public static By contactNameText = By.xpath("//input[@id='react-contact_info-name']");
    public static By contactJobTitleText = By.xpath("//input[@id='react-contact_info-designation']");
    public static By contactNoText = By.xpath("//input[@id='react-contact_info-phone']");
    public static By contactEmailText = By.xpath("//input[@id='react-contact_info-primary_email']");
    public static By contactAlternateEmailText = By.xpath("//input[@id='react-contact_info-secondary_email']");
    public static By contactCopyMailCheckBox = By.xpath("//input[@id='react-contact_info-correspondence_address-copied']");
    public static By contactCopyAddresseeCheckBox = By.xpath("//input[@id='react-contact_info-copied']");
    public static By proposalTitle = By.xpath("//span[@id='react-select-project-psg_solution_id--value']");
    public static By proposalSolutionStartDate = By.xpath("//*[@id='react-project-start_date']");
    public static By proposalHaveSolutionYesFlag = By.xpath("//*[@id='react-project-engaged_status-true']");
    public static By proposalHaveSolutionNoFlag = By.xpath("//*[@id='react-project-engaged_status-false']");
    public static By proposalWhyNeedThisSolution = By.xpath("//*[@id='react-project-reason_for_engagement']");
    public static By proposalVendorName = By.xpath("//*[@id='react-project-vendors-0-name']");
    public static By proposalVendorList = By.xpath("//span[@id='vendor-row-sub']");
    public static By proposalWhyThisVendor = By.xpath("//*[@id='react-project-vendors-0-vendor_reason']");
    public static By proposalDescripeSolution = By.xpath("//*[@id='react-project-vendors-0-vendor_products']");
    public static By proposalUploadFile = By.xpath("//*[@id='react-project-vendors-0-attachments-input']");
    public static By proposalUploadDropDownSelection = By.xpath("//*[@id='react-select-project-vendors-0-attachments-0-document_type-types--value']");
    public static By proposalselectDropDownValue = By.xpath("//div[@class='Select-menu-outer']");
    public static By proposalQuoteRemarks = By.xpath("//*[@id='react-project-vendors-0-quote_remarks']");
    public static By comboSelect = By.xpath("//div[@class='Select-placeholder']");
    public static By proposalLocationAddress = By.xpath("//*[@id='react-project-locations-0-remarks']");
    public static By costPurchasePrice = By.xpath("//*[@id='react-project_cost-cost_in_billing_currency']");
    public static By costOneTimeFee = By.xpath("//*[@id='react-project_cost-ot_cost_in_billing_currency']");
    public static By businessOverallImpact = By.xpath("//textarea[@id='react-project_impact-impact_description']");
    public static By businessProductivityGains = By.xpath("//textarea[@id='react-project_impact-task_description']");
    public static By businessMeasuringUnit = By.xpath("//input[@id='react-project_impact-task_unit']");
    public static By businessUnitsDoneNow = By.xpath("//input[@id='react-project_impact-task_now']");
    public static By businessUnitsDoneAfter = By.xpath("//input[@id='react-project_impact-task_after']");
    public static By businessNoOfWorkersNow = By.xpath("//input[@id='react-project_impact-task_no_workers_now']");
    public static By businessNoOfWorkersAfter = By.xpath("//input[@id='react-project_impact-task_no_workers_after']");
    public static By businessNoOfManDaysNow = By.xpath("//input[@id='react-project_impact-task_no_man_days_now']");
    public static By businessNoOfManDaysAfter = By.xpath("//input[@id='react-project_impact-task_no_man_days_after']");
    public static By declarationAcknowledgementCheck = By.xpath("//input[@id='react-declaration-consent_acknowledgement_check']");
    public static By finalDeclarationInfoTruthfulnessCheck = By.xpath("//*[@id='react-declaration-info_truthfulness_check']");

}

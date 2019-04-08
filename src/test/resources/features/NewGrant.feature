@regression
Feature: Create New Grant and check whether the details saved are available in Draft

  Background: Login to BGP Portal and navigate to New Grant page
    Given I am on BGP Home page
    And I logged as BGP user
    When I select "Get new grant" under My Grants
    And I select "Building & Construction" and then "Builders (Contractors)"
    And I select "Upgrade key business areas"
    And I select "Pre-scoped Productivity Solutions"
    And I click "Apply" button
    And I click "Proceed" button

  @ac1-1
  Scenario: Default behavior when no answer is selected for question 'Does the applicant meet the eligibility criteria’
    Given I am on "Eligibility" Slide Menu
    Then I should see "Next" button is disabled
    And I should see below side menus are disabled
      | Side Menus       |
      | Contact Details  |
      | Proposal         |
      | Cost             |
      | Business Impact  |
      | Declare & Review |
    And I should see below side menus are enabled
      | Side Menus  |
      | Eligibility |
    Then logout BGP user

  @ac1-2
  Scenario: When answer 'Yes' is selected for question 'Does the applicant meet the eligibility criteria’
    Given I am on "Eligibility" Slide Menu
    When I select "Yes" option for the question
    Then I should see "Next" button is enabled
    And I should see below side menus are enabled
      | Side Menus       |
      | Contact Details  |
      | Proposal         |
      | Cost             |
      | Business Impact  |
      | Declare & Review |
      | Eligibility      |
    Then logout BGP user

  @ac1-3
  Scenario: When answer 'No' is selected for question 'Does the applicant meet the eligibility criteria’
    Given I am on "Eligibility" Slide Menu
    When I select "No" option for the question
    Then I should see "Next" button is disabled
    And I should see below side menus are disabled
      | Side Menus       |
      | Contact Details  |
      | Proposal         |
      | Cost             |
      | Business Impact  |
      | Declare & Review |
    And I should see below side menus are enabled
      | Side Menus  |
      | Eligibility |
    Then logout BGP user

  @ac1-4
  Scenario: When click on the link of Smart Advisor, system shall launch the website on the same windows tab.
    Given I am on "Eligibility" Slide Menu
    When I select "No" option for the question
    Then I should see warning message "Visit,Smart Advisor,on the SME Portal for more information on other government assistance"
    When I click on link "Smart Advisor"
    Then I should see a new tab opening url "https://www.smeportal.sg/content/smeportal/en/moneymatters.html"
    Then logout BGP user

  @ac1-5
  Scenario: When answer is 'Yes' then click on the ‘Save’ button, should save the form as draft.
    Given I am on "Eligibility" Slide Menu
    When I select "Yes" option for the question
    And I click "Save" button
    Then I should see "Draft Saved" message
    Then logout BGP user

  @ac1-6
  Scenario: Saved Draft form should be available in home page and click on it system should retrieve the form for editing.
    Given I am on "Eligibility" Slide Menu
    When I select "Yes" option for the question
    And I click "Next" button
    When I am on "Contact Details" Slide Menu
    Then I fill below contact details
      | Name         | Job Title | Contact No | Email              | Alternate Contact Person's Email | Copy Mailing Address | Copy Addresse |
      | BGP UserName | CEO       | 12345678   | CEO@company.com.sg | MD@company.com.sg                | Yes                  | Yes           |
    And I click "Next" button
    Then I choose "IT Solution" on Proposal Page
    And I fill the datetime value on Proposal Page
    And I click "Save" button
    Then I should see "Draft Saved" message
    When I click "My Grants" menu
    And I select "Drafts" under My Grants
    Then I should see "Your drafts will be automatically deleted after 90 days." under Drafts tag
    And I click on recently saved Grant draft
    And I click "Proceed" button
    Then I am on "Eligibility" Slide Menu
    And I click "Next" button
    When I am on "Contact Details" Slide Menu
    Then I should be able to modify the Contact No to "87654321" on Contact Details Menu
    And I click "Save" button
    Then I should see "Draft Saved" message
    Then logout BGP user

  @ac1-7
  Scenario: Saved Draft form should be available in home page and click on it system should retrieve the form for editing.
    Given I am on "Eligibility" Slide Menu
    When I select "Yes" option for the question
    And I click "Next" button
    When I am on "Contact Details" Slide Menu
    Then I fill below contact details
      | Name         | Job Title | Contact No | Email              | Alternate Contact Person's Email | Copy Mailing Address | Copy Addresse |
      | BGP UserName | CEO       | 12345678   | CEO@company.com.sg | MD@company.com.sg                | Yes                  | Yes           |
    And I click "Next" button
    When I am on "Proposal" Slide Menu
    Then I choose "IT Solution" on Proposal Page
    And I fill the datetime value on Proposal Page
    Then I fill Proposal details
      | typeOfSolution | buildingContractorSolution | intendedStartDateFromNow | isCurrentlyHaveThisSolution | whyNeedThisSolution | vendorLocation | vendorNameToSearch | whyThisVendor          | describeSolution         | quoteRemarks   | locationType    | locationAddress  |
      | IT Solution    | Cognizant Testing          | 5                        | Yes                         | Just for Testing    | Singapore      | Enterprise         | To Automate BGP Portal | Cucumber, Selenium, Java | Not Applicable | Park/State Land | Testing Location |
    And I click "Next" button
    When I am on "Cost" Slide Menu
    Then I fill Cost details
      | typeOfPurchase  | purchasePrice | oneTimeFee |
      | Direct Purchase | 250000        | 5000       |
    And I click "Next" button
    When I am on "Business Impact" Slide Menu
    Then I fill Business Impact details
      | overallImpact  | productivityGains | measuringUnit    | unitsDoneNow | unitsDoneAfter | noOfWorkersNow | noOfWorkersAfter | noOfManDaysNow | noOfManDaysAfter |
      | Fully Autmated | Efficiency        | No Of Test Cases | 12           | 30             | 5              | 2                | 10             | 5                |
    And I click "Next" button
    When I am on "Declare & Review" Slide Menu
    Then I fill Declare and Review details
      | criminalLiabilityCheck | civilProceedingCheck | insolvencyProceedingCheck | projectIncentivesCheck | projectCommenceCheck | relatedPartyCheck | defrayCostCheck | declarationConsentAcknowledgementCheck |
      | No                     | No                   | No                        | No                     | No                   | No                | No              | Yes                                    |
    And I click " Review " button
    Then I should see "Review Your Application" message in page
    And I should see "Verify that the information provided is correct, then submit your grant" message in page
    And I check Terms & Conditions
    And I click "Submit" button
    Then I should see "Your application has been submitted" message in page
    And I should see "Ref ID" message in page
    And I should see "Status" message in page
    Then logout BGP user
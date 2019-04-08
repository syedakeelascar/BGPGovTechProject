$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/NewGrant.feature");
formatter.feature({
  "name": "Create New Grant and check whether the details saved are available in Draft",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.background({
  "name": "Login to BGP Portal and navigate to New Grant page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BGP Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_BGP_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged as BGP user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.iLoggedAsBGPUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Get new grant\" under My Grants",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Building \u0026 Construction\" and then \"Builders (Contractors)\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_and_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Upgrade key business areas\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Pre-scoped Productivity Solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Default behavior when no answer is selected for question \u0027Does the applicant meet the eligibility criteria’",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ac1-1"
    }
  ]
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Given "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Next\" button is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_button_is_disabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see below side menus are disabled",
  "rows": [
    {
      "cells": [
        "Side Menus"
      ]
    },
    {
      "cells": [
        "Contact Details"
      ]
    },
    {
      "cells": [
        "Proposal"
      ]
    },
    {
      "cells": [
        "Cost"
      ]
    },
    {
      "cells": [
        "Business Impact"
      ]
    },
    {
      "cells": [
        "Declare \u0026 Review"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_below_side_menus_are_disabled(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see below side menus are enabled",
  "rows": [
    {
      "cells": [
        "Side Menus"
      ]
    },
    {
      "cells": [
        "Eligibility"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_below_side_menus_are_enabled(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout BGP user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.logout_BGP_user()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to BGP Portal and navigate to New Grant page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BGP Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_BGP_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged as BGP user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.iLoggedAsBGPUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Get new grant\" under My Grants",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Building \u0026 Construction\" and then \"Builders (Contractors)\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_and_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Upgrade key business areas\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Pre-scoped Productivity Solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "When answer \u0027Yes\u0027 is selected for question \u0027Does the applicant meet the eligibility criteria’",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ac1-2"
    }
  ]
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Given "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Yes\" option for the question",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_option_for_the_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Next\" button is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_button_is_enabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see below side menus are enabled",
  "rows": [
    {
      "cells": [
        "Side Menus"
      ]
    },
    {
      "cells": [
        "Contact Details"
      ]
    },
    {
      "cells": [
        "Proposal"
      ]
    },
    {
      "cells": [
        "Cost"
      ]
    },
    {
      "cells": [
        "Business Impact"
      ]
    },
    {
      "cells": [
        "Declare \u0026 Review"
      ]
    },
    {
      "cells": [
        "Eligibility"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_below_side_menus_are_enabled(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout BGP user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.logout_BGP_user()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to BGP Portal and navigate to New Grant page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BGP Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_BGP_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged as BGP user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.iLoggedAsBGPUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Get new grant\" under My Grants",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Building \u0026 Construction\" and then \"Builders (Contractors)\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_and_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Upgrade key business areas\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Pre-scoped Productivity Solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "When answer \u0027No\u0027 is selected for question \u0027Does the applicant meet the eligibility criteria’",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ac1-3"
    }
  ]
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Given "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"No\" option for the question",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_option_for_the_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Next\" button is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_button_is_disabled(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see below side menus are disabled",
  "rows": [
    {
      "cells": [
        "Side Menus"
      ]
    },
    {
      "cells": [
        "Contact Details"
      ]
    },
    {
      "cells": [
        "Proposal"
      ]
    },
    {
      "cells": [
        "Cost"
      ]
    },
    {
      "cells": [
        "Business Impact"
      ]
    },
    {
      "cells": [
        "Declare \u0026 Review"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_below_side_menus_are_disabled(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see below side menus are enabled",
  "rows": [
    {
      "cells": [
        "Side Menus"
      ]
    },
    {
      "cells": [
        "Eligibility"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_should_see_below_side_menus_are_enabled(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout BGP user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.logout_BGP_user()"
});
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to BGP Portal and navigate to New Grant page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BGP Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_BGP_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged as BGP user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.iLoggedAsBGPUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Get new grant\" under My Grants",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Building \u0026 Construction\" and then \"Builders (Contractors)\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_and_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Upgrade key business areas\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Pre-scoped Productivity Solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "When click on the link of Smart Advisor, system shall launch the website on the same windows tab.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ac1-4"
    }
  ]
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Given "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"No\" option for the question",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_option_for_the_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see warning message \"Visit,Smart Advisor,on the SME Portal for more information on other government assistance\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeWarningMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on link \"Smart Advisor\"",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickOnLink(String)"
});
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a new tab opening url \"https://www.smeportal.sg/content/smeportal/en/moneymatters.html\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeANewTabOpeningUrl(String)"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout BGP user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.logout_BGP_user()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to BGP Portal and navigate to New Grant page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BGP Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_BGP_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged as BGP user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.iLoggedAsBGPUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Get new grant\" under My Grants",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Building \u0026 Construction\" and then \"Builders (Contractors)\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_and_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Upgrade key business areas\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Pre-scoped Productivity Solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "When answer is \u0027Yes\u0027 then click on the ‘Save’ button, should save the form as draft.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ac1-5"
    }
  ]
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Given "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Yes\" option for the question",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_option_for_the_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Save\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Draft Saved\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout BGP user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.logout_BGP_user()"
});
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to BGP Portal and navigate to New Grant page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BGP Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_BGP_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged as BGP user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.iLoggedAsBGPUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Get new grant\" under My Grants",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Building \u0026 Construction\" and then \"Builders (Contractors)\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_and_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Upgrade key business areas\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Pre-scoped Productivity Solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Saved Draft form should be available in home page and click on it system should retrieve the form for editing.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ac1-6"
    }
  ]
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Given "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Yes\" option for the question",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_option_for_the_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Contact Details\" Slide Menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill below contact details",
  "rows": [
    {
      "cells": [
        "Name",
        "Job Title",
        "Contact No",
        "Email",
        "Alternate Contact Person\u0027s Email",
        "Copy Mailing Address",
        "Copy Addresse"
      ]
    },
    {
      "cells": [
        "BGP UserName",
        "CEO",
        "12345678",
        "CEO@company.com.sg",
        "MD@company.com.sg",
        "Yes",
        "Yes"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillBelowContactDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"IT Solution\" on Proposal Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iChooseOnProposalPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill the datetime value on Proposal Page",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillTheDatetimeValueOnProposalPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Save\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Draft Saved\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"My Grants\" menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickMenu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Drafts\" under My Grants",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Your drafts will be automatically deleted after 90 days.\" under Drafts tag",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeUnderDraftsTag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on recently saved Grant draft",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickOnRecentlySavedGrantDraft()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Contact Details\" Slide Menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to modify the Contact No to \"87654321\" on Contact Details Menu",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldBeAbleToModifyTheContactNoToOnContactDetailsMenu(String)"
});
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Save\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Draft Saved\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout BGP user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.logout_BGP_user()"
});
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login to BGP Portal and navigate to New Grant page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on BGP Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_BGP_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I logged as BGP user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.iLoggedAsBGPUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Get new grant\" under My Grants",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iSelectUnderMyGrants(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Building \u0026 Construction\" and then \"Builders (Contractors)\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_and_then(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Upgrade key business areas\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Pre-scoped Productivity Solutions\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Apply\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Proceed\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Saved Draft form should be available in home page and click on it system should retrieve the form for editing.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@ac1-7"
    }
  ]
});
formatter.step({
  "name": "I am on \"Eligibility\" Slide Menu",
  "keyword": "Given "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"Yes\" option for the question",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_select_option_for_the_question(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Contact Details\" Slide Menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill below contact details",
  "rows": [
    {
      "cells": [
        "Name",
        "Job Title",
        "Contact No",
        "Email",
        "Alternate Contact Person\u0027s Email",
        "Copy Mailing Address",
        "Copy Addresse"
      ]
    },
    {
      "cells": [
        "BGP UserName",
        "CEO",
        "12345678",
        "CEO@company.com.sg",
        "MD@company.com.sg",
        "Yes",
        "Yes"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillBelowContactDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Proposal\" Slide Menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"IT Solution\" on Proposal Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iChooseOnProposalPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill the datetime value on Proposal Page",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillTheDatetimeValueOnProposalPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill Proposal details",
  "rows": [
    {
      "cells": [
        "typeOfSolution",
        "buildingContractorSolution",
        "intendedStartDateFromNow",
        "isCurrentlyHaveThisSolution",
        "whyNeedThisSolution",
        "vendorLocation",
        "vendorNameToSearch",
        "whyThisVendor",
        "describeSolution",
        "quoteRemarks",
        "locationType",
        "locationAddress"
      ]
    },
    {
      "cells": [
        "IT Solution",
        "Cognizant Testing",
        "5",
        "Yes",
        "Just for Testing",
        "Singapore",
        "Enterprise",
        "To Automate BGP Portal",
        "Cucumber, Selenium, Java",
        "Not Applicable",
        "Park/State Land",
        "Testing Location"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillProposalDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Cost\" Slide Menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill Cost details",
  "rows": [
    {
      "cells": [
        "typeOfPurchase",
        "purchasePrice",
        "oneTimeFee"
      ]
    },
    {
      "cells": [
        "Direct Purchase",
        "250000",
        "5000"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillCostDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Business Impact\" Slide Menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill Business Impact details",
  "rows": [
    {
      "cells": [
        "overallImpact",
        "productivityGains",
        "measuringUnit",
        "unitsDoneNow",
        "unitsDoneAfter",
        "noOfWorkersNow",
        "noOfWorkersAfter",
        "noOfManDaysNow",
        "noOfManDaysAfter"
      ]
    },
    {
      "cells": [
        "Fully Autmated",
        "Efficiency",
        "No Of Test Cases",
        "12",
        "30",
        "5",
        "2",
        "10",
        "5"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillBusinessImpactDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Next\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on \"Declare \u0026 Review\" Slide Menu",
  "keyword": "When "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.i_am_on_Slide_Menu(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill Declare and Review details",
  "rows": [
    {
      "cells": [
        "criminalLiabilityCheck",
        "civilProceedingCheck",
        "insolvencyProceedingCheck",
        "projectIncentivesCheck",
        "projectCommenceCheck",
        "relatedPartyCheck",
        "defrayCostCheck",
        "declarationConsentAcknowledgementCheck"
      ]
    },
    {
      "cells": [
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iFillDeclareAndReviewDetails(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \" Review \" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Review Your Application\" message in page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessageInPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Verify that the information provided is correct, then submit your grant\" message in page",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessageInPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check Terms \u0026 Conditions",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iCheckTermsConditions()"
});
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Submit\" button",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iClickButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Your application has been submitted\" message in page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessageInPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Ref ID\" message in page",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessageInPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Status\" message in page",
  "keyword": "And "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.iShouldSeeMessageInPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "logout BGP user",
  "keyword": "Then "
});
formatter.match({
  "location": "MyGrantPageStepDefinition.logout_BGP_user()"
});
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "status": "passed"
});
});
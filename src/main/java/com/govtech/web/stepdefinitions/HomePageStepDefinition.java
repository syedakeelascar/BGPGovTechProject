package com.govtech.web.stepdefinitions;

import com.govtech.web.utils.BGPEnvConfig;
import cucumber.api.java.en.Given;

import static com.govtech.web.utils.BrowserActions.loadPage;

public class HomePageStepDefinition {
    @Given("I am on BGP Home page")
    public void i_am_on_BGP_Home_page() {
        BGPEnvConfig.getEnvProperties();
        String bgpTestUrl = BGPEnvConfig.getEnvTestProtocol() + "://" + BGPEnvConfig.getBgpTestUsername() + ":" + BGPEnvConfig.getBgpTestPassword() + "@" + BGPEnvConfig.getEnvTestUrl();
        loadPage(bgpTestUrl);
    }
}

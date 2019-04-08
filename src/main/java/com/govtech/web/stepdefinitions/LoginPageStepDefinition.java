package com.govtech.web.stepdefinitions;

import com.govtech.web.page.HomePage;
import com.govtech.web.page.LoginPage;
import cucumber.api.java.en.Given;

import static com.govtech.web.utils.BGPEnvConfig.*;
import static com.govtech.web.utils.BrowserActions.*;

public class LoginPageStepDefinition {
    @Given("I logged as BGP user")
    public void iLoggedAsBGPUser() {
        clickElement(HomePage.loginButton);
        clearTextBox(LoginPage.loginUserNameTextBox);
        fillElement(LoginPage.loginUserNameTextBox, getBgpLoginUsername());
        clickElement(LoginPage.loginButton);
    }
}

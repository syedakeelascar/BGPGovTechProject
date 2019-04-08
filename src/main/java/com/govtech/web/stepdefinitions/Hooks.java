package com.govtech.web.stepdefinitions;

import com.govtech.web.utils.BrowserActions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hooks {
    private static Scenario scenario;

    @Before
    public static void before(final Scenario scenario) {
        Hooks.scenario = scenario;
    }

    public static Scenario getScenario() {
        return Hooks.scenario;
    }

    @After
    public void afterScenario(Scenario scenario) {
        try {
            BrowserActions.captureAndAttachScreenshotToScenario(scenario);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

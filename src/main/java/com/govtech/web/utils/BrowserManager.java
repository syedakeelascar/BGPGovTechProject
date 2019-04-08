package com.govtech.web.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.UnreachableBrowserException;

import java.io.File;
import java.util.concurrent.TimeUnit;

public class BrowserManager {
    public static WebDriver driver;
    private static int timeoutImplicitWaitInSec = 10;
    private static int timeoutPageLoadInSec = 60;

    public BrowserManager() {
        maximizeBrowser();
        clearBrowserCookies();
        setTimeOutImplicitWait();
        setTimeOutPageLoad();
    }

    public static WebDriver getDriver() {
        return driver;
    }

    public static void maximizeBrowser() {
        getDriver().manage().window().maximize();
    }

    public static void clearBrowserCookies() {
        getDriver().manage().deleteAllCookies();
    }

    public static void setTimeOutImplicitWait() {
        getDriver().manage().timeouts().pageLoadTimeout(timeoutImplicitWaitInSec, TimeUnit.SECONDS);
    }

    public static void setTimeOutPageLoad() {
        getDriver().manage().timeouts().pageLoadTimeout(timeoutPageLoadInSec, TimeUnit.SECONDS);
    }

    public static void quitWebDriver() {
        getDriver().quit();
    }
}

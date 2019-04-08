package com.govtech.web.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;

import static com.govtech.web.utils.BrowserActions.*;

public class BrowserAssertions {
    public static boolean isElementPresent(String textValue) {
        return (getElementByText(textValue) != null) ? true : false;
    }

    public static boolean isElementPresent(By elementXpath) {
        return (getElementByXpath(elementXpath) != null) ? true : false;
    }

    public static boolean isElementEnabled(By elementXpath) {
        return (getElementByXpath(elementXpath).isEnabled()) ? true : false;
    }

    public static boolean isLinkTextEnabled(By subMenu) {
        String linkTextValue = BrowserManager.getDriver().findElement(subMenu).getAttribute("class");
        return linkTextValue.equalsIgnoreCase("disabled") ? false : true;
    }

    public static boolean isAlertPresent() {
        try {
            BrowserManager.getDriver().switchTo().alert();
            return true;
        } catch (NoAlertPresentException e) {
            return false;
        }
    }

}

package com.govtech.web.utils;

import com.govtech.web.stepdefinitions.Hooks;
import cucumber.api.Scenario;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.MoveTargetOutOfBoundsException;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class BrowserActions {

    public static void loadPage(String url) {
        BrowserManager.getDriver().get(url);
    }

    public static void clickElement(By elementLocator) {
        BrowserManager.getDriver().findElement(elementLocator).click();
    }

    public static void clearTextBox(By elementLocator) {
        BrowserManager.getDriver().findElement(elementLocator).clear();
    }

    public static void fillElement(By elementLocator, String value) {
        BrowserManager.getDriver().findElement(elementLocator).sendKeys(value);
    }

    public static void clickElementContainsText(String textValue) {
        BrowserManager.getDriver().findElement(By.xpath("//*[contains(text(),'" + textValue + "')]")).click();
    }

    public static void waitForCondition(ExpectedCondition<?> conditionToWaitFor, int timeToWait) {
        (new WebDriverWait(BrowserManager.getDriver(), (long) timeToWait)).until(conditionToWaitFor);
    }

    public static WebElement getElementByText(String textValue) {
        return BrowserManager.getDriver().findElement(By.xpath("//*[contains(text(),'" + textValue + "')]"));
    }

    public static WebElement getElementByXpath(By elementLoactor) {
        return BrowserManager.getDriver().findElement(elementLoactor);
    }

    public static void clickElement(WebElement element) {
        waitForCondition(ExpectedConditions.elementToBeClickable(element), BGPConstant.WAIT_LONG_TIMEOUT);
        focusElement(element);
        executeJavaScript("arguments[0].click();", new Object[]{element});
        waitForPageLoadComplete();
    }

    public static Object executeJavaScript(String script, Object... args) {
        if (BrowserManager.getDriver() instanceof JavascriptExecutor) {
            JavascriptExecutor jsExec = (JavascriptExecutor) BrowserManager.getDriver();
            return args.length > 0 ? jsExec.executeScript(script, args) : jsExec.executeScript(script, new Object[0]);
        } else {
            throw new SessionNotCreatedException("No WebDriver session found");
        }
    }

    public static void focusElement(WebElement elementToFocus) {
        if (!elementToFocus.getTagName().equals("script")) {
            try {
                (new Actions(BrowserManager.getDriver())).moveToElement(elementToFocus).perform();
            } catch (MoveTargetOutOfBoundsException var2) {
                ;
            }
        }
    }

    public static void waitForPageLoadComplete() {
        ExpectedCondition<Boolean> pageLoadCondition = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                boolean check1 = "complete".equals(executeJavaScript("return document.readyState", new Object[0]));
                boolean check2 = true;

                try {
                    String var4 = executeJavaScript("return jQuery.active", new Object[0]).toString();
                    byte var5 = -1;
                    switch (var4.hashCode()) {
                        case -1038130864:
                            if (var4.equals("undefined")) {
                                var5 = 0;
                            }
                            break;
                        case 48:
                            if (var4.equals("0")) {
                                var5 = 1;
                            }
                    }

                    switch (var5) {
                        case 0:
                            break;
                        case 1:
                            check2 = true;
                            break;
                        default:
                            check2 = false;
                    }
                } catch (WebDriverException var6) {
                    check2 = true;
                }

                return check1 && check2;
            }
        };
        waitForCondition(pageLoadCondition, BGPConstant.WAIT_LONG_TIMEOUT);
    }

    public static String getElementText(By element) {
        return BrowserManager.getDriver().findElement(element).getText();
    }

    public static boolean isCheckBoxSelected(By element) {
        return BrowserManager.getDriver().findElement(element).isSelected();
    }

    public static void takeScreenshot() throws IOException {
        captureAndAttachScreenshotToScenario(Hooks.getScenario());
    }

    public static void captureAndAttachScreenshotToScenario(Scenario scenarioToAttach) throws IOException {
        byte[] imagesBytesToAttach = convertBufferedImageToByteArray(new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(BrowserManager.getDriver()).getImage());
        attachBytesToScenarioAsImage(scenarioToAttach, imagesBytesToAttach);
    }

    public static byte[] convertBufferedImageToByteArray(BufferedImage bufferedImage) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "png", baos);
        baos.flush();
        byte[] imageInByte = baos.toByteArray();
        baos.close();
        return imageInByte;
    }

    private static void attachBytesToScenarioAsImage(Scenario scenarioToAttach, byte[] imagesBytesToAttach) {
        scenarioToAttach.embed(imagesBytesToAttach, "image/png");
    }
}

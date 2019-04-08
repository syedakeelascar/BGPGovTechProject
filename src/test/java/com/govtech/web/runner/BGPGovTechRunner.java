package com.govtech.web.runner;

import java.io.File;
import java.io.IOException;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import com.govtech.web.utils.BrowserManager;

import static com.govtech.web.utils.BrowserManager.*;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber/html-report", "json:target/cucumber.json"},
        features = {"src/test/resources/features"},
        glue = {"com.govtech.web"}
)
public class BGPGovTechRunner {
    @BeforeClass
    public static void setUp() {
        String browser = System.getProperty("browser");
        switch (browser) {
            case ("CHROME"):
                System.setProperty("webdriver.chrome.driver", new File("Drivers\\chromedriver.exe").getAbsolutePath());
                driver = new ChromeDriver();
                break;
            case ("FIREFOX"):
                System.setProperty("webdriver.gecko.driver", new File("Drivers\\geckodriver.exe").getAbsolutePath());
                driver = new FirefoxDriver();
                break;
            default:
                System.out.println("Browser not supported");
                System.exit(-1);
                break;
        }
        if (driver != null) {
            new BrowserManager();
        }
    }

    @AfterClass
    public static void tearDown() throws IOException {
        quitWebDriver();
        Runtime.getRuntime().exec("taskkill /F /IM chromedriver.exe");
    }
}

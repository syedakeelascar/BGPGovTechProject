package com.govtech.web.page;

import org.openqa.selenium.By;

public class LoginPage {
    public static By loginUserNameTextBox = By.xpath("//input[@name='CPUID']");
    public static By loginButton = By.xpath("//*[text()='Login with your own user']//following::button");
}

package com.govtech.web.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

public class UtilsConfigReader {
    public static Properties prop = new Properties();

    public static void readPropertyFile(String envConfigFile) throws IOException {
        prop.load(new FileInputStream(envConfigFile));
    }

    public static String getAdvanceDate(int daysToAdd) {
        String pattern = "dd MMM yyyy";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        return (simpleDateFormat.format(new Date().getTime() + (daysToAdd * 24 * 60 * 60 * 1000)));
    }
}

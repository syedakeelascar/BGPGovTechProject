package com.govtech.web.utils;

import java.io.File;
import java.io.IOException;

public class BGPEnvConfig {
    private static final String ENV_PROPERTIES_PATH = "src/test/resources/environments/" + getEnv() + ".properties";

    public static String getEnv() {
        String bgpEnv = System.getProperty("bgpenv");
        return bgpEnv;
    }

    public static void getEnvProperties() {
        try {
            UtilsConfigReader.readPropertyFile(new File(ENV_PROPERTIES_PATH).getAbsolutePath());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static String getEnvTestProtocol() {
        return UtilsConfigReader.prop.getProperty("bgp.test.protocol");
    }

    public static String getEnvTestUrl() {
        return UtilsConfigReader.prop.getProperty("bgp.test.url");
    }

    public static String getBgpTestUsername() {
        return UtilsConfigReader.prop.getProperty("bgp.test.username");
    }

    public static String getBgpTestPassword() {
        return UtilsConfigReader.prop.getProperty("bgp.test.password");
    }

    public static String getBgpLoginUsername() {
        return UtilsConfigReader.prop.getProperty("bgp.login.username");
    }
}

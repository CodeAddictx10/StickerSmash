import { Stack } from "expo-router";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);
export default function RootLayout() {
   useEffect(() => {
       setTimeout(() => {
           setStatusBarStyle("light");
       }, 0);
   }, []);
    return (
        <>
            <StatusBar style="light" />
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen name="+not-found" options={{}} />
            </Stack>
        </>
    );
}
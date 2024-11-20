import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#25292e",
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Sticker Smash",
                    title: "Home",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            color={color}
                            name={focused ? "home-sharp" : "home-outline"}
                            size={30}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    headerTitle: "How it works",
                    title: "Guide",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            color={color}
                            name={
                                focused
                                    ? "information-circle"
                                    : "information-circle-outline"
                            }
                            size={30}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}

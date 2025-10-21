import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Auth Screens
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

// Main Tab Screens
import DashboardScreen from "../screens/DashboardScreen";
import DiagnosticsScreen from "../screens/DiagnosticsScreen";
import MechanicsScreen from "../screens/MechanicsScreen";
import AssistantScreen from "../screens/AssistantScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Other Screens
import HomeScreen from "../screens/HomeScreen";
import ScanScreen from "../screens/ScanScreen";
import HistoryScreen from "../screens/HistoryScreen";
import DTCDetailScreen from "../screens/DTCDetailScreen";
import AnomaliesScreen from "../screens/AnomaliesScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Dashboard Stack Navigator
function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen
        name="DashboardHome"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Anomalies" component={AnomaliesScreen} />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
}

// Diagnostics Stack Navigator
function DiagnosticsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen
        name="DiagnosticsHome"
        component={DiagnosticsScreen}
        options={{ title: "Diagnostics" }}
      />
      <Stack.Screen
        name="DTCDetail"
        component={DTCDetailScreen}
        options={{ title: "DTC Details" }}
      />
    </Stack.Navigator>
  );
}

// Mechanics Stack Navigator
function MechanicsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen
        name="MechanicsHome"
        component={MechanicsScreen}
        options={{ title: "Mechanics" }}
      />
    </Stack.Navigator>
  );
}

// Assistant Stack Navigator
function AssistantStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen
        name="AssistantHome"
        component={AssistantScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// Profile Stack Navigator
function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1a1a1a" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Stack.Screen
        name="ProfileHome"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen name="History" component={HistoryScreen} />
      {/* Add more profile sub-screens here as needed */}
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "speedometer" : "speedometer-outline";
          } else if (route.name === "Diagnostics") {
            iconName = focused ? "build" : "build-outline";
          } else if (route.name === "Mechanics") {
            iconName = focused ? "car" : "car-outline";
          } else if (route.name === "Assistant") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FFC107",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: "#1a1a1a",
          borderTopColor: "#3a3a3a",
          borderTopWidth: 1,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Diagnostics" component={DiagnosticsStack} />
      <Tab.Screen name="Mechanics" component={MechanicsStack} />
      <Tab.Screen name="Assistant" component={AssistantStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

// Root Navigator
export default function AppNavigator() {
  // For demo purposes, set to false to show auth screens
  // In production, this would be managed by your auth state
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isAuthenticated ? (
          // Auth Stack
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          // Main App
          <Stack.Screen name="MainTabs" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

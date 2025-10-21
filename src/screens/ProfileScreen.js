import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function ProfileScreen({ navigation }) {
  const menuItems = [
    { title: "My Vehicles", subtitle: "Manage your vehicles", icon: "🚗", screen: "MyVehicles" },
    { title: "OBD Dongle", subtitle: "Manage your OBD dongle", icon: "📱", screen: "OBDDongle" },
  ];

  const preferenceItems = [
    { title: "Privacy", subtitle: "Manage your privacy settings", icon: "🔒", screen: "Privacy" },
    { title: "Voice Assistant", subtitle: "Manage your voice assistant", icon: "🎤", screen: "VoiceAssistant" },
    { title: "Language", subtitle: "Change your language", value: "English", icon: "🌐" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.name}>Zain Malik</Text>
        <Text style={styles.badge}>Premium User</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>{item.icon}</Text>
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Preferences Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        {preferenceItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => item.screen && navigation.navigate(item.screen)}
          >
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>{item.icon}</Text>
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
            </View>
            {item.value ? (
              <Text style={styles.valueText}>{item.value}</Text>
            ) : (
              <Text style={styles.arrow}>›</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 32,
    borderBottomWidth: 1,
    borderBottomColor: "#3a3a3a",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2a2a2a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  badge: {
    fontSize: 14,
    color: "#999",
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#3a3a3a",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#3a3a3a",
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#3a3a3a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuIconText: {
    fontSize: 24,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
    color: "#999",
  },
  arrow: {
    fontSize: 28,
    color: "#666",
  },
  valueText: {
    fontSize: 14,
    color: "#999",
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ef4444",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
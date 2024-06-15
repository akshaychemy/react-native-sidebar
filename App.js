import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Importing images for the menu and close button
import menu from "./assets/menu.png";
import close from "./assets/close.png";

// Importing profile image
import profileImage from "./assets/profile.jpeg";
// Importing custom components
import { TabButton } from "./components/TabButton";
import { Profile } from "./components/profile";
import CurrentScreen from "./screens/CurrentScreen";
// Importing tabs and logout button configuration
import { logOutTab, tabs } from "./utils/tabs";

export default function App() {
  // State to manage the currently selected tab
  const [currentTab, setCurrentTab] = useState("Home");
  // State to manage the visibility of the menu
  const [showMenu, setShowMenu] = useState(false);

  // Animated values for the menu animation
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      {/* Container for the menu and tabs */}
      <View style={styles.menuContainer}>
        {/* Profile Component (commented out) */}
        {/* <Profile name="Allamed" profileImage={profileImage} /> */}

        {/* Container for tab buttons */}
        <View style={styles.tabsContainer}>
          {tabs.map((item) => (
            <TabButton
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              text={item.text}
              icon={item.icon}
              key={item.id}
            />
          ))}
        </View>

        {/* Logout button */}
        <View style={styles.logoutContainer}>
          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            text={logOutTab.text}
            icon={logOutTab.icon}
            key={logOutTab.id}
          />
        </View>
      </View>

      {/* Overlay view for the main content */}
      <Animated.View
        style={[
          styles.overlay,
          {
            borderRadius: showMenu ? 15 : 0, // Change border radius based on menu visibility
            transform: [{ scale: scaleValue }, { translateX: offsetValue }], // Apply scale and translation animations
          },
        ]}
      >
        {/* Animated container for the menu button and current screen */}
        <Animated.View style={{ transform: [{ translateY: closeButtonOffset }] }}>
          {/* Menu button */}
          <TouchableOpacity
            onPress={() => {
              // Toggle menu visibility and animate transitions
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            {/* Display menu or close icon based on menu state */}
            <Image
              source={showMenu ? close : menu}
              style={styles.menuIcon}
            />
          </TouchableOpacity>

          {/* Display the current screen based on selected tab */}
          <CurrentScreen tabTitle={currentTab} />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// Stylesheet to manage all styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "yellow",
  },
  tabsContainer: {
    flexGrow: 1,
    marginTop: 50,
    backgroundColor: "grey",
  },
  logoutContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingBottom: 5,
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: "black",
    marginTop: 40,
  },
});

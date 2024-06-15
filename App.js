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
  Dimensions,
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

// Get device dimensions
const { width, height } = Dimensions.get("window");

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
    padding: width * 0.04, // Relative padding
    backgroundColor: "yellow",
    width: width * 0.8, // Use 80% of the screen width
  },
  tabsContainer: {
    flexGrow: 1,
    marginTop: height * 0.05, // Relative margin top
    backgroundColor: "grey",
  },
  logoutContainer: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingBottom: height * 0.01, // Relative padding bottom
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: width * 0.04, // Relative horizontal padding
    paddingVertical: height * 0.02, // Relative vertical padding
  },
  menuIcon: {
    width: width * 0.05, // Relative width
    height: height * 0.025, // Relative height
    tintColor: "black",
    marginTop: height * 0.05, // Relative margin top
  },
});

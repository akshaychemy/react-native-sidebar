import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

// Get device dimensions
const { width, height } = Dimensions.get("window");

// TabButton component
export const TabButton = ({ currentTab, setCurrentTab, text, icon }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (text == "LogOut") {
          // Handle logout
        } else {
          setCurrentTab(text);
        }
      }}
    >
      <View
        style={[
          styles.buttonContainer,
          { backgroundColor: currentTab == text ? 'white' : 'transparent' },
        ]}
      >
        {/* Icon from @rneui/themed */}
        <Icon
          name={icon}
          color={currentTab == text ? "#5359D1" : "white"}
          size={width * 0.06} // Relative icon size
        />

        {/* Tab text */}
        <Text
          style={[
            styles.buttonText,
            { color: currentTab == text ? "#5359D1" : "white" },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// Stylesheet to manage styles
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.01, // Relative vertical padding
    paddingLeft: width * 0.03, // Relative left padding
    paddingRight: width * 0.09, // Relative right padding
    borderRadius: 8,
    marginTop: height * 0.02, // Relative margin top
  },
  buttonText: {
    fontSize: width * 0.04, // Relative font size
    fontWeight: "bold",
    paddingLeft: width * 0.04, // Relative left padding
  },
});

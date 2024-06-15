import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";

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
    paddingVertical: 8,
    paddingLeft: 13,
    paddingRight: 35,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 15,
  },
});

import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import React from "react";

// Importing profile image
import profile from "../assets/profile.png";

// Get device dimensions
const { width, height } = Dimensions.get("window");

// Profile component
export const Profile = ({ name, profileImage }) => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={profileImage} style={styles.image} />

      {/* Profile Name */}
      <Text style={styles.name}>{name}</Text>

      {/* View Profile Button */}
      <TouchableOpacity>
        <Text style={styles.viewProfileText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

// Stylesheet to manage styles
const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.15, // 15% of screen height
    marginLeft: width * 0.03, // 3% of screen width
  },
  image: {
    width: width * 0.18, // 18% of screen width
    height: width * 0.18, // Keep aspect ratio square
    borderRadius: 10,
    marginTop: height * 0.01, // 1% of screen height
  },
  name: {
    fontSize: width * 0.05, // 5% of screen width
    fontWeight: "bold",
    color: "white",
    marginTop: height * 0.01, // 1% of screen height
  },
  viewProfileText: {
    marginTop: height * 0.005, // 0.5% of screen height
    color: "white",
    fontSize: width * 0.04, // 4% of screen width
  },
});

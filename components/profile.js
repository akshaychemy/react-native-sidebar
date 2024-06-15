import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";

// Importing profile image
import profile from "../assets/profile.png";

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
    marginTop: "15%",
    marginLeft: "3%",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginTop: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  viewProfileText: {
    marginTop: 4,
    color: "white",
  },
});

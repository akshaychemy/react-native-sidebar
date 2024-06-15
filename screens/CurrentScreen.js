import { Image, Text, StyleSheet, Dimensions } from "react-native";
import random from "../assets/1122563.jpg";
import React from "react";

// Get device dimensions
const { width, height } = Dimensions.get("window");

// CurrentScreen component
const CurrentScreen = ({ tabTitle }) => {
  return (
    <>
      {/* Title Text */}
      <Text style={styles.title}>{tabTitle}</Text>

      {/* Image */}
      <Image source={random} style={styles.image} />

      {/* Subtitle Text */}
      <Text style={styles.subtitle}>Lorum epsum</Text>

      {/* Body Text */}
      <Text style={styles.bodyText}>Lorem ipsum dolor sit amet.</Text>
    </>
  );
};

// Stylesheet to manage styles
const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.08, // Relative font size
    fontWeight: "bold",
    color: "black",
    paddingTop: height * 0.03, // Relative padding top
  },
  image: {
    width: "100%",
    height: height * 0.4, // Relative height
    borderRadius: 15,
    marginTop: height * 0.03, // Relative margin top
  },
  subtitle: {
    fontSize: width * 0.05, // Relative font size
    fontWeight: "bold",
    paddingTop: height * 0.02, // Relative padding top
    paddingBottom: height * 0.01, // Relative padding bottom
  },
  bodyText: {
    fontSize: width * 0.04, // Relative font size
    color: "gray",
  },
});

export default CurrentScreen;

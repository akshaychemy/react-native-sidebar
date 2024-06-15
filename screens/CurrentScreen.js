import { Image, Text, StyleSheet } from "react-native";
import random from "../assets/1122563.jpg";
import React from "react";

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
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    paddingTop: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginTop: 25,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    color: "gray",
  },
});

export default CurrentScreen;

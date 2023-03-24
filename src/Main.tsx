import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";

import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

import { Constraints } from "../assets/Global";
import Colors from "../assets/Colors";

import Navbar from "./components/Navbar";

import Analytics from "./components/Analytics";
import Homework from "./components/Homework";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";

export default function Main() {
  const [page, setPage] = useState("home");

  if (Constraints.IsLandscape) {
    return (
      <View style={landscapeStyle.container}>
        <View style={landscapeStyle.navbar}>
          <Navbar setPage={setPage}></Navbar>
        </View>
        <View style={landscapeStyle.content}>
          <View style={landscapeStyle.primarySection}>
            <Home></Home>
          </View>
          <View style={landscapeStyle.sectionsContainer}></View>
        </View>
      </View>
    );
  }
  return (
    <View style={portraitStyle.container}>
      <View style={portraitStyle.backgroundContainer}></View>
      <View style={portraitStyle.contentContainer}>
        <View style={portraitStyle.content}>
          {page == "analytics" ? <Analytics /> : undefined}
          {page == "homework" ? <Homework /> : undefined}
          {page == "home" ? <Home /> : undefined}
          {page == "calendar" ? <Calendar /> : undefined}
          {page == "settings" ? <Settings /> : undefined}
        </View>
        <View style={portraitStyle.navbar}>
          <Navbar setPage={setPage}></Navbar>
        </View>
      </View>
    </View>
  );
}

const landscapeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.grey,
  },
  navbar: {
    width: 60,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
  },
  primarySection: {
    flex: 2,
    margin: Constraints.Margin,
    borderRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
  },
  sectionsContainer: {
    flex: 5,
    flexDirection: "row",
    margin: Constraints.Margin,
    marginTop: 0,
  },
  section1: {
    flex: 1,
    marginRight: Constraints.Margin,
    borderRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
  },
  section2: {
    flex: 1,
    marginRight: Constraints.Margin,
    borderRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
  },
  section3: {
    flex: 1,
    borderRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
  },
});

const portraitStyle = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.grey,
  },
  backgroundContainer: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  contentContainer: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "flex-end",
    position: "absolute",
  },
  content: {
    borderTopLeftRadius: Constraints.BorderRadius,
    borderTopRightRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
  },
  navbar: {
    height: 64,
    backgroundColor: Colors.white,
  },
});

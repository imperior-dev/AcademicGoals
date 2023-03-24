import { StyleSheet, View } from "react-native";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import { Constraints } from "../assets/Global";
import Colors from "../assets/Colors";

export default function Main() {
  const sectionCount = Math.floor(width / 350);
  if (Constraints.IsLandscape) {
    return (
      <View style={landscapeStyle.container}>
        <View style={landscapeStyle.navbar}></View>
        <View style={landscapeStyle.content}>
          <View style={landscapeStyle.primarySection}></View>
          <View style={landscapeStyle.sectionsContainer}>
            <View style={landscapeStyle.section1}></View>
            {sectionCount > 3 ? (
              <View style={landscapeStyle.section2}></View>
            ) : undefined}
            {sectionCount > 2 ? (
              <View style={landscapeStyle.section3}></View>
            ) : undefined}
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={portraitStyle.container}>
      <View style={portraitStyle.backgroundContainer}></View>
      <View style={portraitStyle.contentContainer}>
        <View style={portraitStyle.content}></View>
        <View style={portraitStyle.navbar}></View>
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
    position: "absolute",
  },
  content: {
    flex: 1,
  },
  navbar: {
    height: 64,
    backgroundColor: Colors.white,
  },
});

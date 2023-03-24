import { View, StyleSheet } from "react-native";

import { Constraints } from "../../assets/Global";
import { H2 } from "../../assets/Font";

export default function Home() {
  if (Constraints.IsLandscape) {
    return (
      <View style={landscapeStyle.container}>
        <View style={landscapeStyle.currentTaskContainer}>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={landscapeStyle.progressContainer}></View>
        <View style={landscapeStyle.space}></View>
        <View style={landscapeStyle.timeContainer}></View>
      </View>
    );
  }
  return (
    <View style={portraitStyle.container}>
      <H2>Today's Progress</H2>
      <ProgressBar />
      <H2>Current Task</H2>
      <CurrentTaskPlate />
    </View>
  );
}

const portraitStyle = StyleSheet.create({
  container: {
    padding: 20,
  },
});

const landscapeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  currentTaskContainer: {
    backgroundColor: "black",
    aspectRatio: 2,
  },
  progressContainer: {
    aspectRatio: 2,
  },
  space: {
    flex: 1,
  },
  timeContainer: {
    aspectRatio: 1.3,
    backgroundColor: "black",
  },
});

function ProgressBar() {
  return <View></View>;
}

function CurrentTaskPlate() {
  return <View></View>;
}

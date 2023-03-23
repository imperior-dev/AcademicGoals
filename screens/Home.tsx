import { View, StyleSheet, Text } from "react-native";
import Global from "../assets/Global";

import CurrentTask from "./home/CurrentTask";
import ProgressBar from "./home/ProgressBar";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.margin}>
        <Text style={[Global.fonts.h2, styles.texts]}>Today's Process</Text>
        <ProgressBar value={50}></ProgressBar>
        <Text style={[Global.fonts.h2, styles.texts]}>Current Task</Text>
        <CurrentTask
          subject="Math"
          remainingTime="25 Minutes Remaining"
          progress="10"
        ></CurrentTask>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: Global.IsLandscape ? 0.45 : 0.5,
    borderTopRightRadius: Global.BorderRadius,
    borderTopLeftRadius: Global.IsLandscape ? undefined : Global.BorderRadius,
    borderBottomRightRadius: Global.IsLandscape
      ? Global.BorderRadius
      : undefined,
    backgroundColor: "white",
  },
  margin: {
    flex: 1,
    margin: Global.margin,
  },
  texts: {
    marginTop: Global.margin,
  },
});

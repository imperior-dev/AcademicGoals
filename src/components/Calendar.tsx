import { View, StyleSheet } from "react-native";
import { Constraints } from "../../assets/Global";

export default function Calendar() {
  if (Constraints.IsLandscape) {
    return <View style={landscapeStyle.container}></View>;
  }
  return <View style={portraitStyle.container}></View>;
}

const landscapeStyle = StyleSheet.create({
  container: {},
});

const portraitStyle = StyleSheet.create({
  container: {},
});

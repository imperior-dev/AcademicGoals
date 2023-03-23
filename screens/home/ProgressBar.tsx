import { View, StyleSheet } from "react-native";

import Global from "../../assets/Global";
import Colors from "../../assets/Colors";

export default function ProgressBar(props: any) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.bar,
          {
            flex: props.value / 100,
          },
        ]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Global.margin,
    flex: 1,
    maxHeight: Global.IsLandscape ? 50 : 30,
    borderRadius: Global.BorderRadius * 0.8,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: Colors.grey,
  },
  bar: {
    backgroundColor: Colors.pink,
  },
});

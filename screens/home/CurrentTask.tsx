import { View, StyleSheet, Text } from "react-native";

import Colors from "../../assets/Colors";
import Global from "../../assets/Global";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CurrentTask(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <MaterialCommunityIcons
          name="menu"
          size={Global.IconSize * 1.5}
          color="white"
          style={styles.menu}
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.body}>
        <Text style={[Global.fonts.h3, styles.subject]}>{props.subject}</Text>
        <Text style={[Global.fonts.h4, styles.remainingTime]}>
          {props.remainingTime}
        </Text>
      </View>
      <View
        style={[styles.progressContainer, { width: props.progress + "%" }]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Global.margin,
    height: Global.IsLandscape ? 200 : 120,
    backgroundColor: Colors.green,
    borderRadius: Global.BorderRadius,
    position: "relative",
    overflow: "hidden",
  },
  menuContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
  },
  menu: {
    marginRight: Global.margin,
    marginTop: Global.margin,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    marginLeft: Global.IsLandscape ? 70 : 30,
  },
  progressContainer: {
    flex: 1,
    maxHeight: Global.IsLandscape ? 20 : 10,
    backgroundColor: Colors.transparentWhite,
  },
  subject: {},
  remainingTime: {
    marginTop: 5,
  },
});

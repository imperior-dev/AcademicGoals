import { View, StyleSheet, Button } from "react-native";

import Global from "../assets/Global";
import Colors from "../assets/Colors";

import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Navbar(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.body}>
        <MaterialCommunityIcons
          name="google-analytics"
          size={24}
          color="white"
          onPress={() => {
            props.setPage(Global.pages.analytics);
          }}
          style={styles.icon}
        ></MaterialCommunityIcons>
        <Ionicons
          name="book"
          size={Global.IconSize}
          color="white"
          onPress={() => {
            props.setPage(Global.pages.homework);
          }}
          style={styles.icon}
        ></Ionicons>
        <Entypo
          name="home"
          size={Global.IconSize}
          color="white"
          onPress={() => {
            props.setPage(Global.pages.home);
          }}
          style={styles.icon}
        ></Entypo>
        <Entypo
          name="calendar"
          size={Global.IconSize}
          color="white"
          onPress={() => {
            props.setPage(Global.pages.schedule);
          }}
          style={styles.icon}
        ></Entypo>
        <View style={styles.settingIconContainer}>
          <Ionicons
            name="settings"
            size={Global.IconSize}
            color="white"
            onPress={() => {
              props.setPage(Global.pages.settings);
            }}
            style={[styles.icon, styles.settingsIcon]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: Global.IsLandscape ? "row-reverse" : "column",
  },
  line: {
    height: Global.IsLandscape ? "100%" : Global.LineWidth * 2,
    width: !Global.IsLandscape ? "100%" : Global.LineWidth * 2,
    backgroundColor: Colors.orange,
    marginBottom: Global.IsLandscape ? 0 : Global.LineWidth,
    marginLeft: !Global.IsLandscape ? 0 : Global.LineWidth,
  },
  body: {
    flex: 1,
    flexDirection: Global.IsLandscape ? "column" : "row",
    justifyContent: Global.IsLandscape ? undefined : "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.orange,
  },
  icon: {
    marginTop: Global.IsLandscape ? 30 : undefined,
  },
  settingsIcon: {
    marginBottom: Global.IsLandscape ? 30 : undefined,
  },
  settingIconContainer: {
    flex: Global.IsLandscape ? 1 : undefined,
    justifyContent: Global.IsLandscape ? "flex-end" : undefined,
  },
});

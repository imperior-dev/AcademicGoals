import { StyleSheet, View, TouchableOpacity } from "react-native";

import {
  AnalyticsIcon,
  CalendarIcon,
  HomeIcon,
  HomeworkIcon,
  SettingsIcon,
} from "../../assets/Icons";

const IconColor = "black";

export default function Navbar(props: any) {
  const { setPage } = props;
  return (
    <View style={styles.contianer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setPage("analytics");
        }}
      >
        <AnalyticsIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setPage("homework");
        }}
      >
        <HomeworkIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setPage("home");
        }}
      >
        <HomeIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setPage("calendar");
        }}
      >
        <CalendarIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setPage("settings");
        }}
      >
        <SettingsIcon color={IconColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    height: 64,
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

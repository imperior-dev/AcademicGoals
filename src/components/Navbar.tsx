import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Constraints } from "../../assets/Global";

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
  if (Constraints.IsLandscape) {
    return (
      <View style={landscapeStyle.container}>
        <View style={landscapeStyle.lastIconContainer}>
          <View>
            <SettingsIcon color={IconColor} />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={portraitStyle.contianer}>
      <TouchableOpacity
        onPress={() => {
          setPage("analytics");
        }}
      >
        <AnalyticsIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPage("homework");
        }}
      >
        <HomeworkIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPage("home");
        }}
      >
        <HomeIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPage("calendar");
        }}
      >
        <CalendarIcon color={IconColor} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPage("settings");
        }}
      >
        <SettingsIcon color={IconColor} />
      </TouchableOpacity>
    </View>
  );
}

const landscapeStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  icon: {
    marginTop: 10,
  },
  lastIconContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
});

const portraitStyle = StyleSheet.create({
  contianer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

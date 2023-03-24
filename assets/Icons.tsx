import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import { Constraints } from "./Global";

const { width, height } = Dimensions.get("window");

let IconSize = width / 12;
if (Constraints.IsLandscape) {
  IconSize = height / 26;
}

export function AnalyticsIcon(props: any) {
  return (
    <MaterialCommunityIcons
      name="google-analytics"
      size={IconSize}
      color={props.color}
    ></MaterialCommunityIcons>
  );
}

export function HomeworkIcon(props: any) {
  return <Ionicons name="book" size={IconSize} color={props.color}></Ionicons>;
}

export function HomeIcon(props: any) {
  return <Entypo name="home" size={IconSize} color={props.color}></Entypo>;
}

export function CalendarIcon(props: any) {
  return <Entypo name="calendar" size={IconSize} color={props.color}></Entypo>;
}

export function SettingsIcon(props: any) {
  return (
    <Ionicons name="settings" size={IconSize} color={props.color}></Ionicons>
  );
}

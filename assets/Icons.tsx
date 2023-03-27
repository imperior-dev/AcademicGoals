import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Dimensions } from "react-native";

const IconSize = 26;

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

export function EditsIcon(props: any) {
  return (
    <MaterialIcons
      name="edit"
      size={IconSize * 0.6}
      color={props.color}
    ></MaterialIcons>
  );
}

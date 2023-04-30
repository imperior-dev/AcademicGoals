import { useState } from "react"
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View
} from "react-native"

import {
  AnalyticsIcon,
  CalendarIcon,
  HomeIcon,
  HomeworkIcon,
  SettingsIcon
} from "../../../assets/Icons"
import Images from "../../../assets/Images"
import { System } from "../../System"
import { TextComponent } from "../Text/TextComponent"
import { HeaderStyle as Style } from "./HeaderStyle"

export function HeaderComponent({ system }: { system: System }) {
  const [title, setTitle] = useState<string>(
    system.storage.exists ? "" : "Setup"
  );
  system.setHeader = setTitle;
  if (title == "") return null;
  return (
    <ImageBackground source={Images.header}>
      <View
        style={
          Platform.OS === "android" && StatusBar.currentHeight !== undefined
            ? { height: StatusBar.currentHeight / 2 }
            : {}
        }
      ></View>
      <SafeAreaView>
        <View style={Style.body}>
          <TextComponent style={Style.title}>{title}</TextComponent>
        </View>
      </SafeAreaView>
      <View style={Style.line}></View>
    </ImageBackground>
  );
}

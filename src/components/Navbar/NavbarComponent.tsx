import { useState } from "react"
import { ImageBackground, TouchableOpacity, View } from "react-native"

import {
  AnalyticsIcon,
  CalendarIcon,
  HomeIcon,
  HomeworkIcon,
  SettingsIcon
} from "../../../assets/Icons"
import Images from "../../../assets/Images"
import { System } from "../../System"
import { NavbarStyle as Style } from "./NavbarStyle"

export function NavbarComponent({ system }: { system: System }) {
  const [selectedIcon, setSelectedIcon] = useState("Home");
  system.setSelectedIcon = setSelectedIcon;

  return (
    <ImageBackground source={Images.navbar} style={Style.body}>
      <View style={Style.line}></View>
      <View style={Style.iconList}>
        <TouchableOpacity
          style={[
            Style.iconOuter,
            { opacity: selectedIcon === "Analytics" ? 0.7 : 1 },
          ]}
          onPress={() => {
            system.navigateTo("Analytics");
          }}
        >
          <AnalyticsIcon color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Style.iconOuter,
            { opacity: selectedIcon === "Homework" ? 0.7 : 1 },
          ]}
          onPress={() => {
            system.navigateTo("Homework");
          }}
        >
          <HomeworkIcon color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Style.iconOuter,
            { opacity: selectedIcon === "Home" ? 0.7 : 1 },
          ]}
          onPress={() => {
            system.navigateTo("Home");
          }}
        >
          <HomeIcon color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Style.iconOuter,
            { opacity: selectedIcon === "Calendar" ? 0.7 : 1 },
          ]}
          onPress={() => {
            system.navigateTo("Calendar");
          }}
        >
          <CalendarIcon color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Style.iconOuter,
            { opacity: selectedIcon === "Settings" ? 0.7 : 1 },
          ]}
          onPress={() => {
            system.navigateTo("Settings");
          }}
        >
          <SettingsIcon color="white" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

import { ImageBackground, Text, View } from "react-native"

import Images from "../assets/Images"
import { HeaderComponent } from "./components/Header/HeaderComponent"
import { NavbarComponent } from "./components/Navbar/NavbarComponent"
import { CalendarComponent } from "./screens/Calendar/CalendarComponent"
import { HomeComponent } from "./screens/Home/HomeComponent"
import { SettingComponent } from "./screens/Setting/SettingComponent"
import { SetupComponent } from "./screens/Setup/SetupComponent"
import { System } from "./System"

export function MainComponent({ system }: { system: System }) {
  return (
    <ImageBackground style={{ flex: 1 }} source={Images.background}>
      <HeaderComponent system={system} />
      <View style={{ flex: 1 }}>
        <system.Screen name="Home" Component={HomeComponent} />
        <system.Screen name="Settings" Component={SettingComponent} />
        <system.Screen name="Setup" Component={SetupComponent} />
        <system.Screen name="Calendar" Component={CalendarComponent} />
      </View>
      <NavbarComponent system={system} />
    </ImageBackground>
  );
}

import { ImageBackground, Text, View } from "react-native"

import Images from "../assets/Images"
import { HeaderComponent } from "./components/Header/HeaderComponent"
import { NavbarComponent } from "./components/Navbar/NavbarComponent"
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
        <system.Screen name="Setting" Component={SettingComponent} />
        <system.Screen name="Setup" Component={SetupComponent} />
      </View>
      <NavbarComponent system={system} />
    </ImageBackground>
  );
}

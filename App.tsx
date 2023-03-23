import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
  Text,
} from "react-native";

import Colors from "./assets/Colors";
import Images from "./assets/Images";
import Global from "./assets/Global";

import Navbar from "./screens/Navbar";
import Home from "./screens/Home";
import Analytics from "./screens/Analytics";
import Homework from "./screens/Homework";
import Schedule from "./screens/Schedule";
import Settings from "./screens/Settings";

import { useState } from "react";

export default function App() {
  let backgroundImage = Images["background-mobile"];
  if (Global.IsLandscape) backgroundImage = Images["background"];

  StatusBar.setBarStyle("light-content");

  const [page, setPage] = useState(Global.pages.homework);

  return (
    <View style={style.container}>
      <View style={style.backgroundContainer}>
        <ImageBackground style={style.background} source={backgroundImage}>
          <Text style={Global.fonts.h1}>12:00 PM</Text>
        </ImageBackground>
      </View>
      <View style={style.navbar}>
        <Navbar setPage={setPage}></Navbar>
      </View>
      <View style={style.body}>
        {
          {
            analytics: <Analytics />,
            homework: <Homework />,
            home: <Home />,
            schedule: <Schedule />,
            settings: <Settings />,
          }[page]
        }
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: Global.IsLandscape ? "row" : "column-reverse",
    position: "relative",
  },
  statusbar: {
    height: 0,
  },
  backgroundContainer: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
    flexDirection: Global.IsLandscape ? "row-reverse" : "column",
    backgroundColor: Colors.grey,
  },
  background: {
    height: Global.IsLandscape ? undefined : Dimensions.get("window").width,
    width: Global.IsLandscape ? Dimensions.get("window").height : undefined,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundBody: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  body: {
    flex: 1,
    flexDirection: Global.IsLandscape ? "row" : "column-reverse",
  },
  navbar: {
    height: !Global.IsLandscape ? 64 : undefined,
    width: Global.IsLandscape ? 76 : undefined,
  },
});

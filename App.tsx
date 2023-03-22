import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";

import Colors from "./assets/Colors";

const IsLandscape =
  Dimensions.get("window").width > Dimensions.get("window").height;

export default function App() {
  let backgroundImage = require("./assets/images/background-mobile.jpg");
  if (IsLandscape) backgroundImage = require("./assets/images/background.jpg");

  StatusBar.setBarStyle("light-content");

  return (
    <View style={style.container}>
      <View style={style.backgroundContainer}>
        <ImageBackground
          style={style.background}
          source={backgroundImage}
        ></ImageBackground>
      </View>
      <View style={style.navbar}></View>
      <View style={style.body}></View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: IsLandscape ? "row" : "column-reverse",
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
    flexDirection: IsLandscape ? "row-reverse" : "column",
    backgroundColor: Colors.grey,
  },
  background: {
    height: IsLandscape ? undefined : Dimensions.get("window").width,
    width: IsLandscape ? Dimensions.get("window").height : undefined,
  },
  backgroundBody: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  body: {
    backgroundColor: "orange",
  },
  navbar: {
    height: !IsLandscape ? 56 : undefined,
    width: IsLandscape ? 64 : undefined,
    backgroundColor: "yellow",
  },
});

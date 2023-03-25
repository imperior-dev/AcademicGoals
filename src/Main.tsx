import { StyleSheet, Image, View, StatusBar } from "react-native";
import { useState } from "react";

import { Constraints } from "../assets/Global";
import Colors from "../assets/Colors";
import Images from "../assets/Images";

import Analytics from "./screens/Analytics";
import Homework from "./screens/Homework";
import Home from "./screens/Home";
import Calendar from "./screens/Calendar";
import Settings from "./screens/Settings";

import Navbar from "./components/Navbar";

export default function Main() {
  StatusBar.setBarStyle("light-content");

  const [page, setPage] = useState("home");

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={Images.background}
        ></Image>
      </View>
      <View style={styles.contentContainer}>
        <View
          style={[
            styles.content,
            page !== "home" ? { borderRadius: 0, flex: 1 } : {},
          ]}
        >
          {
            {
              analytics: <Analytics />,
              homework: <Homework />,
              home: <Home />,
              calendar: <Calendar />,
              settings: <Settings />,
            }[page]
          }
        </View>
        <View style={styles.navbar}>
          <Navbar page={page} setPage={setPage}></Navbar>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.grey,
  },
  backgroundContainer: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  backgroundImage: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: "flex-end",
    position: "absolute",
  },
  content: {
    borderTopLeftRadius: Constraints.BorderRadius,
    borderTopRightRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
  },
  navbar: {
    backgroundColor: Colors.white,
  },
});

import { StyleSheet, Image, View } from "react-native";
import { useState } from "react";

import { Constraints } from "../assets/Global";
import Colors from "../assets/Colors";

import Navbar from "./components/Navbar";

import Analytics from "./components/Analytics";
import Homework from "./components/Homework";
import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";

export default function Main() {
  const [page, setPage] = useState("home");

  console.log(require("../assets/images/background.jpg"));

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* <Image
          style={styles.backgroundImage}
          source={require("./assets/images/background.jpg")}
        ></Image> */}
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
          <Navbar setPage={setPage}></Navbar>
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
    // backgroundColor: "black",
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

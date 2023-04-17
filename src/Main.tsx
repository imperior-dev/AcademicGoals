import { Image, View, StyleSheet, StatusBar } from "react-native";
import { useEffect, useState } from "react";

import { Constraints, Style } from "../assets/Global";
import Colors from "../assets/Colors";
import Images from "../assets/Images";

import {
  Analytics,
  Homework,
  Home,
  Schedule,
  Settings,
} from "./screens/Screens";

import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Core from "./Core";
import { pageType, screenType } from "./types/core";

export default function Main({ core }: { core: Core }) {
  const [screen, setScreen] = useState<screenType>(core.screen);
  const [page, setPage] = useState<pageType>(core.page);

  useEffect(() => {
    core.attachScreenHook(setScreen);
    core.attachPageHook(setPage);
  });

  const PageElement = {
    home: Home,
    setting: Settings,
    homework: Homework,
    analytics: Analytics,
    schedule: Schedule,
  }[page];

  return (
    <View style={styles.container}>
      <View style={Style.absoluteFlex}>
        <Image style={{ flex: 1 }} source={Images.background}></Image>
      </View>
      <View style={[Style.absoluteFlex, { justifyContent: "flex-end" }]}>
        <View
          style={[
            styles.pageContainer,
            ,
            screen == "home" || screen == "setup"
              ? null
              : { borderRadius: 0, flex: 1 },
          ]}
        >
          <PageElement core={core} />
        </View>
        {screen !== "setup" ? <Navbar core={core}></Navbar> : null}
      </View>

      {screen == "input" ? <Input core={core} /> : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: Colors.grey,
  },
  pageContainer: {
    borderTopLeftRadius: Constraints.BorderRadius,
    borderTopRightRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
  },
});

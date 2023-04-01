import {
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { useState } from "react";

import * as Storage from "./Storage";

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

export default function Main({ storage }: { storage: Storage.New }) {
  StatusBar.setBarStyle("light-content");

  const [page, setPage] = useState("home");
  const [input, setInput] = useState<null | {
    Element: Function;
    submit: {
      text: string;
      function: () => boolean;
    };
  }>(null);

  if (storage.data == undefined) return null;

  const Body = () => (
    <View
      style={[
        {
          borderTopLeftRadius: Constraints.BorderRadius,
          borderTopRightRadius: Constraints.BorderRadius,
          backgroundColor: Colors.white,
        },
        page !== "home" ? { borderRadius: 0, flex: 1 } : {},
      ]}
    >
      {
        {
          analytics: <Analytics data={storage.data} />,
          homework: <Homework data={storage.data} />,
          home: <Home data={storage.data} />,
          calendar: <Schedule data={storage.data} />,
          settings: <Settings data={storage.data} AskInput={setInput} />,
        }[page]
      }
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: Colors.grey,
      }}
    >
      <View style={Style.absoluteFlex}>
        <Image style={{ flex: 1 }} source={Images.background}></Image>
      </View>
      <View style={[Style.absoluteFlex, { justifyContent: "flex-end" }]}>
        <Body />
        <Navbar page={page} setPage={setPage}></Navbar>
      </View>
      {input ? (
        <Input
          Element={input.Element}
          submit={input.submit}
          Cancel={() => setInput(null)}
        />
      ) : undefined}
    </View>
  );
}

import {
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { useState, useRef, ReactNode } from "react";

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

export default function Main({ storage }: { storage: Storage.New }) {
  StatusBar.setBarStyle("light-content");

  const [page, setPage] = useState("home");
  const [Input, AskInput] = useState<
    | undefined
    | {
        element: Function;
        submitText: string;
        submitFunction: (event: GestureResponderEvent) => void;
      }
  >(undefined);

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
          settings: <Settings data={storage.data} AskInput={AskInput} />,
        }[page]
      }
    </View>
  );

  const styles = StyleSheet.create({
    buttonContainer: {
      flex: 1,
      margin: 10,
      borderRadius: 15,
      borderColor: Colors.grey,
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

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
      {Input !== undefined ? (
        <View
          style={[
            Style.absoluteFlex,
            {
              zIndex: Input ? undefined : -1,
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: Constraints.Margin,
              flexDirection: "row",
              alignItems: "center",
              position: "relative",
            },
          ]}
        >
          <TouchableOpacity
            style={Style.absoluteFlex}
            onPress={() => AskInput(undefined)}
          />
          <View
            style={{
              flex: 1,
              width: "100%",
              aspectRatio: 12 / 9,
              backgroundColor: "white",
              borderRadius: Constraints.BorderRadius,
              overflow: "hidden",
            }}
          >
            <View style={{ flex: 1 }}>
              <Input.element />
            </View>
            <View
              style={{
                height: 64,
                flexDirection: "row",
                backgroundColor: Colors.grey,
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => AskInput(undefined)}
              >
                <Text style={Style.text}>Cancel</Text>
              </TouchableOpacity>
              <View
                style={{
                  height: "60%",
                  width: 2,
                  borderRadius: 2,
                  backgroundColor: Colors.dark,
                }}
              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={Input.submitFunction}
              >
                <Text style={Style.text}>{Input.submitText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : undefined}
    </View>
  );
}

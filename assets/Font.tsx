import { Text } from "react-native";
import { Dimensions } from "react-native";

const scaleFactor = Dimensions.get("window").width > 400 ? 1.3 : 1;

export function H1(props: any) {
  return (
    <Text
      style={{
        fontFamily: "Sora",
        fontSize: scaleFactor * 40,
        fontWeight: "500",
        color: "white",
      }}
    >
      {props.children}
    </Text>
  );
}

export function H2(props: any) {
  return (
    <Text
      style={{
        fontFamily: "Sora",
        fontSize: scaleFactor * 20,
        fontWeight: "400",
      }}
    >
      {props.children}
    </Text>
  );
}

export function H3(props: any) {
  return (
    <Text
      style={{
        fontFamily: "Sora",
        fontSize: scaleFactor * 20,
        fontWeight: "400",
        color: "white",
      }}
    >
      {props.children}
    </Text>
  );
}

export function H4(props: any) {
  return (
    <Text
      style={{
        fontFamily: "Sora",
        fontSize: scaleFactor * 18,
        fontWeight: "400",
        color: "white",
      }}
    >
      {props.children}
    </Text>
  );
}

export function H5(props: any) {
  return (
    <Text
      style={{
        fontFamily: "Sora",
        fontSize: scaleFactor * 10,
        fontWeight: "400",
        color: "white",
      }}
    >
      {props.children}
    </Text>
  );
}

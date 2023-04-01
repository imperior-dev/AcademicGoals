import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

import { Constraints } from "../../assets/Global";
import { Style } from "../../assets/Global";
import Colors from "../../assets/Colors";

export default function Input({
  Element,
  submit,
  Cancel,
}: {
  Element: Function;
  submit: { text: string; function: () => boolean };
  Cancel: Function;
}) {
  return (
    <View
      style={[
        Style.absoluteFlex,
        {
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.7)",
          padding: Constraints.Margin,
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        },
      ]}
    >
      <TouchableOpacity style={Style.absoluteFlex} onPress={() => Cancel()} />
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
        <View style={{ flex: 1 }}>{<Element />}</View>
        <View
          style={{
            height: 2,
            marginBottom: 2,
            backgroundColor: Colors.blue,
          }}
        />
        <View
          style={{
            height: 48,
            backgroundColor: Colors.blue,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Cancel();
            }}
          >
            <Text style={[Style.text, { color: "white" }]}>Cancel</Text>
          </TouchableOpacity>
          <View
            style={{
              height: "60%",
              width: 1,
              backgroundColor: Colors.white,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              if (submit.function()) Cancel();
            }}
          >
            <Text style={[Style.text, { color: "white" }]}>{submit.text}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

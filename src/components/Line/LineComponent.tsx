import { View } from "react-native"

import Colors from "../../../assets/Colors"

export function LineComponent({ style }: { style?: any }) {
  return (
    <View
      style={[
        {
          height: 1,
          backgroundColor: Colors.grey,
          marginVertical: 8,
        },
        style,
      ]}
    ></View>
  );
}

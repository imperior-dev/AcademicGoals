import { View } from "react-native"

export function BlockComponent({
  children,
  style,
}: {
  children?: any;
  style?: any;
}) {
  return (
    <View
      style={[
        { margin: 20, marginBottom: 0, marginTop: 14, overflow: "hidden" },
        style,
      ]}
    >
      {children}
    </View>
  );
}

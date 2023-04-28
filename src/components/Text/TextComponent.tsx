import { Text } from "react-native"

export function TextComponent({
  children,
  style,
  type,
}: {
  children: string;
  style?: Object;
  type?: "heading" | "value" | "button";
}) {
  let customStyle = {};
  if (type == "heading")
    customStyle = {
      fontSize: 20,
      marginBottom: 6,
      fontWeight: "600",
    };
  else if (type == "value")
    customStyle = {
      fontSize: 15,
      fontWeight: "900",
      textAlignVertical: "center",
    };
  else if (type == "button")
    customStyle = {
      width: 64,
      textAlign: "center",
      textAlignVertical: "center",
    };
  return (
    <Text
      style={[
        { fontFamily: "Sora", fontWeight: "900", flex: 1 },
        customStyle,
        style,
      ]}
    >
      {children}
    </Text>
  );
}

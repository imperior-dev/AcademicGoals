import { TextInput } from "react-native"

export function TextInputComponent({
  style,
  autoFocus,
}: {
  style?: Object;
  autoFocus: boolean;
}) {
  return (
    <TextInput
      style={[
        {
          fontFamily: "Sora",
          fontWeight: "900",
          fontSize: 15,
          paddingHorizontal: 4,
        },
        style,
      ]}
      defaultValue="Default Value"
      autoFocus={autoFocus}
    />
  );
}

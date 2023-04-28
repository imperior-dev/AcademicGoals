import { TextInput } from "react-native"

export function TextInputComponent({
  style,
  autoFocus,
  onChange,
  defaultValue,
  type,
  maxLength,
}: {
  style?: Object;
  autoFocus?: boolean;
  defaultValue?: string;
  maxLength?: any;
  onChange: (newValue: string) => void;
  type?: any;
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
      maxLength={maxLength}
      keyboardType={type}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      onChangeText={onChange}
    />
  );
}

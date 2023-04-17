import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import Colors from "../../assets/Colors";
import { Style } from "../../assets/Global";

export default function TimeInput({
  defaultTime,
  onChange,
}: {
  defaultTime: number;
  onChange: Function;
}) {
  let hours = Math.floor(defaultTime / 60) % 12;
  let minutes = defaultTime % 60;
  let period: "AM" | "PM" = defaultTime < 720 ? "AM" : "PM";
  if (hours == 0) hours = 12;

  const update = () => {
    let tempHours = (hours == 12 ? 0 : hours) + (period == "AM" ? 0 : 12);
    onChange(tempHours * 60 + minutes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          defaultValue={hours.toString()}
          style={[Style.inputText]}
          inputMode="numeric"
          onChangeText={(newValue) => {
            if (
              parseFloat(newValue || "0") > 12 ||
              parseFloat(newValue || "0") == 0
            )
              return;
            hours = parseFloat(newValue || "0");
            update();
          }}
        />
        <Text style={Style.inputText}>:</Text>
        <TextInput
          defaultValue={minutes.toString()}
          style={[Style.inputText]}
          inputMode="numeric"
          onChangeText={(newValue) => {
            if (parseFloat(newValue || "0") >= 60) return;
            minutes = parseFloat(newValue || "0");
            update();
          }}
        />
      </View>
      <View style={{ flex: 1 }} />
      <PeriodBlock
        defaultState={period}
        onChange={(newPeriod: "AM" | "PM") => {
          period = newPeriod;
          update();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  inputContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

function PeriodBlock({
  defaultState,
  onChange,
}: {
  defaultState: "AM" | "PM";
  onChange: Function;
}) {
  const [state, setState] = useState<"AM" | "PM">(defaultState);
  return (
    <View style={{ flexDirection: "row", flex: 2 }}>
      <TouchableOpacity
        style={[
          { flex: 1, alignItems: "center", justifyContent: "center" },
          state == "AM" ? { backgroundColor: Colors.grey } : null,
        ]}
        onPress={() => {
          onChange("AM");
          setState("AM");
        }}
      >
        <Text style={Style.labelText}>AM</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          { flex: 1, alignItems: "center", justifyContent: "center" },
          state == "PM" ? { backgroundColor: Colors.grey } : null,
        ]}
        onPress={() => {
          onChange("PM");
          setState("PM");
        }}
      >
        <Text style={Style.labelText}>PM</Text>
      </TouchableOpacity>
    </View>
  );
}

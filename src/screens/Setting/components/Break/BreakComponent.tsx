import { useState } from "react"
import { TouchableOpacity, View } from "react-native"

import Colors from "../../../../../assets/Colors"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { BreakStyle as Style } from "./BreakStyle"

export function BreakComponent({ system }: { system: System }) {
  const [breakSettings, setBreakSetting] = useState(
    JSON.parse(JSON.stringify(system.storage.data.settings.break))
  );
  const [canSave, setCanSave] = useState(false);
  const [saveButton, setSaveButton] = useState(false);

  function verifyData() {
    if (
      parseInt(breakSettings.duration.hr) >= 0 &&
      parseInt(breakSettings.duration.hr) < 3 &&
      parseInt(breakSettings.interval.hr) >= 0 &&
      parseInt(breakSettings.interval.hr) < 5 &&
      parseInt(breakSettings.duration.min) >= 0 &&
      parseInt(breakSettings.duration.min) < 60 &&
      parseInt(breakSettings.interval.min) >= 0 &&
      parseInt(breakSettings.interval.min) < 60
    ) {
      if (
        (parseInt(breakSettings.duration.hr) === 0 &&
          parseInt(breakSettings.duration.min) < 15) ||
        (parseInt(breakSettings.interval.hr) === 0 &&
          parseInt(breakSettings.interval.min) < 30)
      ) {
        setCanSave(false);
      } else setCanSave(true);
    } else setCanSave(false);
    if (
      JSON.stringify(breakSettings) ===
      JSON.stringify(system.storage.data.settings.break)
    )
      setSaveButton(false);
    else setSaveButton(true);
  }

  return (
    <View style={Style.outer}>
      <View style={Style.inner}>
        <TextComponent children="Duration: " style={{ flex: 1 }} />
        <TextInputComponent
          defaultValue={breakSettings.duration.hr}
          onChange={(newHour) => {
            breakSettings.duration.hr = newHour || "00";
            setBreakSetting(breakSettings);
            verifyData();
          }}
        />
        <TextComponent children="Hour " style={{ flex: 0 }} />
        <TextInputComponent
          defaultValue={breakSettings.duration.min}
          onChange={(newMin) => {
            breakSettings.duration.min = newMin || "00";
            setBreakSetting(breakSettings);
            verifyData();
          }}
        />
        <TextComponent children="Minutes " style={{ flex: 0 }} />
      </View>
      <View style={Style.line} />
      <View style={Style.inner}>
        <TextComponent children="Interval: " style={{ flex: 1 }} />
        <TextInputComponent
          defaultValue={breakSettings.interval.hr}
          onChange={(newHour) => {
            breakSettings.interval.hr = newHour || "00";
            setBreakSetting(breakSettings);
            verifyData();
          }}
        />
        <TextComponent children="Hour " style={{ flex: 0 }} />
        <TextInputComponent
          defaultValue={breakSettings.interval.min}
          onChange={(newMin) => {
            breakSettings.interval.min = newMin || "00";
            setBreakSetting(breakSettings);
            verifyData();
          }}
        />
        <TextComponent children="Minutes " style={{ flex: 0 }} />
      </View>
      {saveButton ? (
        <View>
          <TouchableOpacity
            style={[
              Style.buttonOuter,
              { backgroundColor: canSave ? Colors.orange : Colors.grey },
            ]}
            onPress={() => {
              if (canSave) system.storage.data.settings.break = breakSettings;
              system.storage.write().then(() => {
                setSaveButton(false);
              });
            }}
          >
            <TextComponent type="button" style={Style.buttonText}>
              Save
            </TextComponent>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

import { useState } from "react"
import { TouchableOpacity, View } from "react-native"

import Colors from "../../../../../assets/Colors"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SlotsStyle as Style } from "./SlotsStyle"

export function SlotsComponent({ system }: { system: System }) {
  const [canSave, setCanSave] = useState(false);
  const [saveButton, setSaveButton] = useState(false);
  const [isWeekday, setIsWeekday] = useState(true);

  let [timings, setTimings] = useState(
    JSON.parse(JSON.stringify(system.storage.data.settings.timings))
  );

  function verifyData() {
    if (
      timings.weekdays.filter(
        ({
          from,
          to,
        }: {
          from: {
            hr: string;
            min: string;
            am: boolean;
          };
          to: {
            hr: string;
            min: string;
            am: boolean;
          };
          id: number;
        }) =>
          parseInt(from.hr) < 13 &&
          parseInt(from.hr) > 0 &&
          parseInt(from.min) < 60 &&
          parseInt(to.hr) < 13 &&
          parseInt(to.hr) > 0 &&
          parseInt(to.min) < 60
      ).length === timings.weekdays.length &&
      timings.weekends.filter(
        ({
          from,
          to,
        }: {
          from: {
            hr: string;
            min: string;
            am: boolean;
          };
          to: {
            hr: string;
            min: string;
            am: boolean;
          };
          id: number;
        }) =>
          parseInt(from.hr) < 13 &&
          parseInt(from.hr) > 0 &&
          parseInt(from.min) < 60 &&
          parseInt(to.hr) < 13 &&
          parseInt(to.hr) > 0 &&
          parseInt(to.min) < 60
      ).length === timings.weekends.length
    ) {
      setCanSave(true);
    } else setCanSave(false);

    if (
      JSON.stringify(timings) ===
      JSON.stringify(system.storage.data.settings.timings)
    )
      setSaveButton(false);
    else setSaveButton(true);
  }

  return (
    <View style={Style.outer}>
      <View style={[Style.dayTypeOuter]}>
        <TouchableOpacity
          style={[
            Style.dayType,
            { backgroundColor: isWeekday ? Colors.blue : undefined },
          ]}
          onPress={() => {
            setIsWeekday(true);
          }}
        >
          <TextComponent
            children="Weekdays"
            style={{ color: isWeekday ? Colors.white : null }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Style.dayType,
            { backgroundColor: !isWeekday ? Colors.blue : undefined },
          ]}
          onPress={() => {
            setIsWeekday(false);
          }}
        >
          <TextComponent
            children="Weekends"
            style={{ color: !isWeekday ? Colors.white : null }}
          />
        </TouchableOpacity>
      </View>

      {timings[isWeekday ? "weekdays" : "weekends"].map(
        (timing: {
          from: {
            hr: string;
            min: string;
            am: boolean;
          };
          to: {
            hr: string;
            min: string;
            am: boolean;
          };
          id: number;
        }) => {
          return (
            <View key={timing.id} style={Style.blockOuter}>
              <View style={Style.slotOuter}>
                <TextComponent style={Style.slottypeText}>From</TextComponent>
                <View style={Style.slotInner}>
                  <TextInputComponent
                    defaultValue={timing.from.hr}
                    onChange={(newHour) => {
                      timing.from.hr = newHour;
                      verifyData();
                    }}
                  />
                  <TextComponent> Hr</TextComponent>
                  <TextInputComponent
                    defaultValue={timing.from.min}
                    onChange={(newMin) => {
                      timing.from.min = newMin;
                      verifyData();
                    }}
                  />
                  <TextComponent> Min</TextComponent>
                </View>

                <TouchableOpacity
                  style={[
                    Style.buttonOuter,
                    {
                      backgroundColor: timing.from.am
                        ? Colors.orange
                        : undefined,
                    },
                  ]}
                  onPress={() => {
                    timing.from.am = true;
                    verifyData();
                    setTimings({ ...timings });
                  }}
                >
                  <TextComponent
                    style={[
                      Style.buttonText,
                      { color: timing.from.am ? Colors.white : undefined },
                    ]}
                  >
                    AM
                  </TextComponent>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    Style.buttonOuter,
                    {
                      backgroundColor: !timing.from.am
                        ? Colors.orange
                        : undefined,
                    },
                  ]}
                  onPress={() => {
                    timing.from.am = false;
                    verifyData();
                    setTimings({ ...timings });
                  }}
                >
                  <TextComponent
                    style={[
                      Style.buttonText,
                      { color: !timing.from.am ? Colors.white : undefined },
                    ]}
                  >
                    PM
                  </TextComponent>
                </TouchableOpacity>
              </View>
              <View style={Style.slotOuter}>
                <TextComponent style={Style.slottypeText}>To</TextComponent>
                <View style={Style.slotInner}>
                  <TextInputComponent
                    defaultValue={timing.to.hr}
                    onChange={(newHour) => {
                      timing.to.hr = newHour;
                      verifyData();
                    }}
                  />
                  <TextComponent> Hr</TextComponent>
                  <TextInputComponent
                    defaultValue={timing.to.min}
                    onChange={(newMin) => {
                      timing.to.min = newMin;
                      verifyData();
                    }}
                  />
                  <TextComponent> Min</TextComponent>
                </View>

                <TouchableOpacity
                  style={[
                    Style.buttonOuter,
                    {
                      backgroundColor: timing.to.am ? Colors.orange : undefined,
                    },
                  ]}
                  onPress={() => {
                    timing.to.am = true;
                    verifyData();
                    setTimings({ ...timings });
                  }}
                >
                  <TextComponent
                    style={[
                      Style.buttonText,
                      { color: timing.to.am ? Colors.white : undefined },
                    ]}
                  >
                    AM
                  </TextComponent>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    Style.buttonOuter,
                    {
                      backgroundColor: !timing.to.am
                        ? Colors.orange
                        : undefined,
                    },
                  ]}
                  onPress={() => {
                    timing.to.am = false;
                    verifyData();
                    setTimings({ ...timings });
                  }}
                >
                  <TextComponent
                    style={[
                      Style.buttonText,
                      { color: !timing.to.am ? Colors.white : undefined },
                    ]}
                  >
                    PM
                  </TextComponent>
                </TouchableOpacity>
              </View>
            </View>
          );
        }
      )}

      <View style={Style.addRemoveButtonOuter}>
        <TouchableOpacity
          onPress={() => {
            timings[isWeekday ? "weekdays" : "weekends"].push({
              from: {
                hr: "01",
                min: "00",
                am: true,
              },
              to: {
                hr: "01",
                min: "00",
                am: true,
              },
              id: timings[isWeekday ? "weekdays" : "weekends"].length,
            });
            setTimings({ ...timings });
            verifyData();
          }}
          style={{ marginHorizontal: 10, justifyContent: "center" }}
        >
          <TextComponent>Add</TextComponent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            timings[isWeekday ? "weekdays" : "weekends"].pop();
            setTimings({ ...timings });
            verifyData();
          }}
          style={{ marginHorizontal: 10, justifyContent: "center" }}
        >
          <TextComponent>Remove</TextComponent>
        </TouchableOpacity>
      </View>

      {saveButton ? (
        <View>
          <TouchableOpacity
            style={[
              Style.saveButtonOuter,
              { backgroundColor: canSave ? Colors.orange : Colors.grey },
            ]}
            onPress={() => {
              if (canSave) system.storage.data.settings.timings = timings;
              system.storage.write().then(() => {
                setSaveButton(false);
              });
            }}
          >
            <TextComponent type="button" style={Style.saveButtonText}>
              Save
            </TextComponent>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

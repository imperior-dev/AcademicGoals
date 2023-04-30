import { useEffect, useState } from "react"
import { TouchableOpacity, View } from "react-native"

import Colors from "../../../../../assets/Colors"
import { BlockComponent } from "../../../../components/Block/BlockComponent"
import { LineComponent } from "../../../../components/Line/LineComponent"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SetupStyle } from "../../SetupStyle"

export function Stage7Component({
  system,
  stage,
  buttonData,
}: {
  system: System;
  stage: number;
  buttonData: any;
}) {
  const settings = system.storage.data.settings;

  const [timings, setTimings] = useState(settings.timings.weekends);

  function verifyData() {
    if (
      settings.timings.weekends.filter(
        ({ from, to }) =>
          parseInt(from.hr) < 13 &&
          parseInt(from.hr) > 0 &&
          parseInt(from.min) < 60 &&
          parseInt(to.hr) < 13 &&
          parseInt(to.hr) > 0 &&
          parseInt(to.min) < 60
      ).length === settings.timings.weekends.length
    )
      buttonData.setCanNext(true);
    else buttonData.setCanNext(false);
    console.log(JSON.stringify(settings.timings, null, 4));
  }
  return (
    <View>
      <BlockComponent>
        <TextComponent style={SetupStyle.questionBorderBox}>
          You can make changes to the weekends schedule now.
        </TextComponent>
      </BlockComponent>

      <BlockComponent style={[SetupStyle.answerBorderBox, { padding: 0 }]}>
        {timings.map((timing) => {
          return (
            <View key={timing.id}>
              <View style={SetupStyle.buttonInputOuter}>
                <View
                  style={[
                    SetupStyle.buttonInputOuter,
                    {
                      padding: 10,
                      flex: 1,
                    },
                  ]}
                >
                  <TextComponent type="value">From</TextComponent>
                  {stage === 7 ? (
                    <TextInputComponent
                      defaultValue={timing.from.hr}
                      type="numeric"
                      maxLength={2}
                      onChange={(newValue) => {
                        timing.from.hr = newValue;
                        setTimings([...timings]);
                        settings.timings.weekends = timings;
                        verifyData();
                      }}
                    />
                  ) : (
                    <TextComponent
                      type="value"
                      style={{ paddingHorizontal: 8, flex: 0 }}
                    >
                      {timing.from.hr}
                    </TextComponent>
                  )}
                  <TextComponent type="value" style={{ flex: 0 }}>
                    :
                  </TextComponent>
                  {stage === 7 ? (
                    <TextInputComponent
                      defaultValue={timing.from.min}
                      type="numeric"
                      maxLength={2}
                      onChange={(newValue) => {
                        timing.from.min = newValue;
                        setTimings([...timings]);
                        settings.timings.weekends = timings;
                        verifyData();
                      }}
                    />
                  ) : (
                    <TextComponent
                      type="value"
                      style={{ paddingHorizontal: 8, flex: 0 }}
                    >
                      {timing.from.min}
                    </TextComponent>
                  )}
                </View>

                <View style={SetupStyle.buttonInputOuter}>
                  <TouchableOpacity
                    onPress={() => {
                      if (stage !== 7) return;
                      timing.from.am = true;
                      setTimings([...timings]);
                      settings.timings.weekends = timings;
                    }}
                    style={[
                      SetupStyle.addButtonOuter,
                      {
                        backgroundColor: timing.from.am
                          ? Colors.orange
                          : undefined,
                      },
                    ]}
                  >
                    <TextComponent
                      type="value"
                      style={{
                        color: timing.from.am ? Colors.white : undefined,
                      }}
                    >
                      AM
                    </TextComponent>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (stage !== 7) return;
                      timing.from.am = false;
                      setTimings([...timings]);
                      settings.timings.weekends = timings;
                    }}
                    style={[
                      SetupStyle.addButtonOuter,
                      {
                        backgroundColor: !timing.from.am
                          ? Colors.orange
                          : undefined,
                      },
                    ]}
                  >
                    <TextComponent
                      type="value"
                      style={{
                        color: !timing.from.am ? Colors.white : undefined,
                      }}
                    >
                      PM
                    </TextComponent>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={SetupStyle.buttonInputOuter}>
                <View
                  style={[
                    SetupStyle.buttonInputOuter,
                    {
                      padding: 10,
                      flex: 1,
                    },
                  ]}
                >
                  <TextComponent type="value">To</TextComponent>
                  {stage === 7 ? (
                    <TextInputComponent
                      defaultValue={timing.to.hr}
                      type="numeric"
                      maxLength={2}
                      onChange={(newValue) => {
                        timing.to.hr = newValue;
                        setTimings([...timings]);
                        settings.timings.weekends = timings;
                        verifyData();
                      }}
                    />
                  ) : (
                    <TextComponent
                      type="value"
                      style={{ paddingHorizontal: 8, flex: 0 }}
                    >
                      {timing.to.hr}
                    </TextComponent>
                  )}
                  <TextComponent type="value" style={{ flex: 0 }}>
                    :
                  </TextComponent>
                  {stage === 7 ? (
                    <TextInputComponent
                      defaultValue={timing.to.min}
                      type="numeric"
                      maxLength={2}
                      onChange={(newValue) => {
                        timing.to.min = newValue;
                        setTimings([...timings]);
                        settings.timings.weekends = timings;
                        verifyData();
                      }}
                    />
                  ) : (
                    <TextComponent
                      type="value"
                      style={{ paddingHorizontal: 8, flex: 0 }}
                    >
                      {timing.to.min}
                    </TextComponent>
                  )}
                </View>

                <View style={SetupStyle.buttonInputOuter}>
                  <TouchableOpacity
                    onPress={() => {
                      if (stage !== 7) return;
                      timing.to.am = true;
                      setTimings([...timings]);
                      settings.timings.weekends = timings;
                      verifyData();
                    }}
                    style={[
                      SetupStyle.addButtonOuter,
                      {
                        backgroundColor: timing.to.am
                          ? Colors.orange
                          : undefined,
                      },
                    ]}
                  >
                    <TextComponent
                      type="value"
                      style={{
                        color: timing.to.am ? Colors.white : undefined,
                      }}
                    >
                      AM
                    </TextComponent>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      if (stage !== 7) return;
                      timing.to.am = false;
                      setTimings([...timings]);
                      settings.timings.weekends = timings;
                    }}
                    style={[
                      SetupStyle.addButtonOuter,
                      {
                        backgroundColor: !timing.to.am
                          ? Colors.orange
                          : undefined,
                      },
                    ]}
                  >
                    <TextComponent
                      type="value"
                      style={{
                        color: !timing.to.am ? Colors.white : undefined,
                      }}
                    >
                      PM
                    </TextComponent>
                  </TouchableOpacity>
                </View>
              </View>
              <LineComponent
                style={{
                  marginVertical: 0,
                }}
              />
            </View>
          );
        })}

        <View
          style={[
            SetupStyle.buttonInputOuter,
            {
              padding: 10,
              justifyContent: "space-between",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              if (stage !== 7) return;
              timings.push({
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
                id: timings.length,
              });
              setTimings([...timings]);
              settings.timings.weekends = timings;
            }}
            style={{ marginHorizontal: 10, justifyContent: "center" }}
          >
            <TextComponent>Add</TextComponent>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (stage !== 7) return;
              timings.pop();
              setTimings([...timings]);
              settings.timings.weekends = timings;
              verifyData();
            }}
            style={{ marginHorizontal: 10, justifyContent: "center" }}
          >
            <TextComponent>Remove</TextComponent>
          </TouchableOpacity>
        </View>
      </BlockComponent>
    </View>
  );
}

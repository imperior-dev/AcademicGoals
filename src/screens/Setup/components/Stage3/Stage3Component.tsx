import { useEffect, useState } from "react"
import { TouchableOpacity, View } from "react-native"

import Colors from "../../../../../assets/Colors"
import { BlockComponent } from "../../../../components/Block/BlockComponent"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SetupStyle } from "../../SetupStyle"

export function Stage3Component({
  system,
  stage,
  buttonData,
}: {
  system: System;
  stage: number;
  buttonData: any;
}) {
  const settings = system.storage.data.settings;

  const [subjects, setSubjects] = useState<
    Array<{ name: string; id: number; difficult: boolean }>
  >(settings.subjects);

  function verifyData() {
    buttonData.setCanNext(true);
  }

  return (
    <View>
      <BlockComponent>
        <TextComponent style={SetupStyle.questionBorderBox}>
          Are these subject hard or time consuming?
        </TextComponent>
      </BlockComponent>

      <BlockComponent style={[SetupStyle.answerBorderBox, { padding: 0 }]}>
        {subjects.map(
          (subject: { name: string; id: number; difficult: boolean }) => {
            return (
              <View key={subject.id} style={SetupStyle.buttonInputOuter}>
                <TextComponent type="value" style={{ padding: 10 }}>
                  {subject.name}
                </TextComponent>
                <TouchableOpacity
                  onPress={() => {
                    if (stage !== 3) return;
                    subject.difficult = true;
                    setSubjects([...subjects]);
                    settings.subjects = subjects;
                    verifyData();
                  }}
                  style={[
                    SetupStyle.addButtonOuter,
                    {
                      backgroundColor: subject.difficult
                        ? Colors.orange
                        : undefined,
                    },
                  ]}
                >
                  <TextComponent
                    type="button"
                    style={{
                      color: subject.difficult ? Colors.white : undefined,
                    }}
                  >
                    Hard
                  </TextComponent>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (stage !== 3) return;
                    subject.difficult = false;
                    setSubjects([...subjects]);
                    settings.subjects = subjects;
                    verifyData();
                  }}
                  style={{
                    backgroundColor: !subject.difficult
                      ? Colors.orange
                      : undefined,
                  }}
                >
                  <TextComponent
                    type="button"
                    style={{
                      color: !subject.difficult ? Colors.white : undefined,
                    }}
                  >
                    Easy
                  </TextComponent>
                </TouchableOpacity>
              </View>
            );
          }
        )}
      </BlockComponent>
    </View>
  );
}

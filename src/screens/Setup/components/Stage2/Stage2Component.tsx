import { useState } from "react"
import { TouchableOpacity, View } from "react-native"

import { BlockComponent } from "../../../../components/Block/BlockComponent"
import { LineComponent } from "../../../../components/Line/LineComponent"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SetupStyle } from "../../SetupStyle"

export function Stage2Component({
  system,
  stage,
  buttonData,
}: {
  system: System;
  stage: number;
  buttonData: any;
}) {
  const settings = system.storage.data.settings;
  const [subjects, setSubjects] = useState(settings.subjects);

  function verifyData() {
    const filteredList = settings.subjects.filter((subject) => subject.name);
    if (filteredList.length > 0) {
      settings.subjects = filteredList;
      buttonData.setCanNext(true);
    } else buttonData.setCanNext(false);
  }

  return (
    <View>
      <BlockComponent style={SetupStyle.questionBorderBox}>
        <TextComponent>
          {`Pleased to meet you ${settings.user.name}. What are your subjects?`}
        </TextComponent>
      </BlockComponent>

      <BlockComponent style={SetupStyle.answerBorderBox}>
        {subjects.map((subject: any) => {
          return (
            <View key={subject.id}>
              {stage === 2 ? (
                <View style={SetupStyle.buttonInputOuter}>
                  <TextInputComponent
                    defaultValue={subject.name}
                    autoFocus={true}
                    onChange={(newName) => {
                      subjects[subject.id].name = newName;
                      settings.subjects = subjects;
                      verifyData();
                    }}
                    style={SetupStyle.buttonInputInner}
                  />
                  {subjects.indexOf(subject) === subjects.length - 1 ? (
                    <TouchableOpacity
                      onPress={() => {
                        if (
                          subjects.filter((subject) => !subject.name).length ===
                          0
                        ) {
                          subjects.push({
                            name: "",
                            id: subjects.length,
                            difficult: false,
                          });
                          setSubjects([...subjects]);
                          settings.subjects = subjects;
                        }
                      }}
                      style={SetupStyle.addButtonOuter}
                    >
                      <TextComponent type="button">Add</TextComponent>
                    </TouchableOpacity>
                  ) : null}
                </View>
              ) : (
                <TextComponent type="value">{subject.name}</TextComponent>
              )}

              {subjects.indexOf(subject) !== subjects.length - 1 ? (
                <LineComponent />
              ) : null}
            </View>
          );
        })}
      </BlockComponent>
    </View>
  );
}

import { useState } from "react"
import { TouchableOpacity, View } from "react-native"

import Colors from "../../../../../assets/Colors"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SubjectsStyle as Style } from "./SubjectsStyle"

export function SubjectsComponent({ system }: { system: System }) {
  const [canSave, setCanSave] = useState(false);
  const [saveButton, setSaveButton] = useState(false);

  let [subjects, setSubjects] = useState(
    JSON.parse(JSON.stringify(system.storage.data.settings.subjects))
  );

  function verifyData() {
    if (
      JSON.stringify(subjects) ===
      JSON.stringify(system.storage.data.settings.subjects)
    ) {
      setSaveButton(false);
    } else setSaveButton(true);

    const filteredList = subjects.filter(
      (subject: { name: string; id: number; difficult: boolean }) =>
        subject.name
    );
    if (filteredList.length === subjects.length) {
      setCanSave(true);
    } else setCanSave(false);
  }
  return (
    <View style={Style.outer}>
      <View style={Style.inner}>
        {subjects.map(
          (subject: { name: string; id: number; difficult: boolean }) => {
            return (
              <View key={subject.id} style={Style.slot}>
                <TextInputComponent
                  style={Style.name}
                  defaultValue={subject.name}
                  onChange={(newName) => {
                    subject.name = newName;
                    verifyData();
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    subject.difficult = true;
                    setSubjects([...subjects]);
                    verifyData();
                  }}
                  style={[
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
                    children="Hard"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    subject.difficult = false;
                    setSubjects([...subjects]);
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
                    children="Easy"
                  />
                </TouchableOpacity>
              </View>
            );
          }
        )}

        <View style={Style.addRemoveButtonOuter}>
          <TouchableOpacity
            onPress={() => {
              subjects.push({
                name: "New Subject",
                difficult: false,
                id: subjects.length,
              });
              setSubjects([...subjects]);
              verifyData();
            }}
            style={{ marginHorizontal: 10, justifyContent: "center" }}
          >
            <TextComponent>Add</TextComponent>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              subjects.pop();
              setSubjects([...subjects]);
              verifyData();
            }}
            style={{ marginHorizontal: 10, justifyContent: "center" }}
          >
            <TextComponent>Remove</TextComponent>
          </TouchableOpacity>
        </View>
      </View>

      {saveButton ? (
        <View>
          <TouchableOpacity
            style={[
              Style.saveButtonOuter,
              { backgroundColor: canSave ? Colors.orange : Colors.grey },
            ]}
            onPress={() => {
              if (canSave) system.storage.data.settings.subjects = subjects;
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

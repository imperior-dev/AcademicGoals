import { View } from "react-native"

import { TextComponent } from "../../../../components/Text/TextComponent"
import { System } from "../../../../System"
import { SubjectsStyle as Style } from "./SubjectsStyle"

export function SubjectsComponent({ system }: { system: System }) {
  system.storage.data.subjects = [
    { id: 0, name: "English", importance: 1 },
    { id: 1, name: "Hindi", importance: 0.5 },
    { id: 2, name: "SST", importance: 0.5 },
    { id: 3, name: "Science", importance: 0 },
    { id: 4, name: "Math", importance: 1 },
    { id: 5, name: "Marathi", importance: 0.5 },
  ];
  return (
    <View style={Style.outer}>
      {system.storage.data.subjects.map(
        ({
          id,
          name,
          importance,
        }: {
          id: number;
          name: string;
          importance: number;
        }) => {
          return (
            <View key={id} style={Style.slot}>
              <TextComponent type="value">{name}</TextComponent>
              <TextComponent>
                {
                  [
                    "Slightly Important",
                    "Fairly Important",
                    "Really Important",
                  ][importance * 2]
                }
              </TextComponent>
            </View>
          );
        }
      )}
    </View>
  );
}

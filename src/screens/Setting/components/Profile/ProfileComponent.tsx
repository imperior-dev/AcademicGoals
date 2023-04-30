import { useState } from "react"
import { TouchableOpacity, View } from "react-native"

import Colors from "../../../../../assets/Colors"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { ProfileStyle as Style } from "./ProfileStyle"

export function ProfileComponent({ system }: { system: System }) {
  const user = JSON.parse(JSON.stringify(system.storage.data.settings.user));
  const [canSave, setCanSave] = useState(false);
  const [saveButton, setSaveButton] = useState(false);

  function verifyData() {
    if (
      JSON.stringify(user) == JSON.stringify(system.storage.data.settings.user)
    )
      setSaveButton(false);
    if (user.name.split(".").length == 1 && user.name.split("").length > 1) {
      if (user.name.split(" ").length == 2 && user.name.split(" ")[1] == "") {
        user.name = user.name.split(" ")[0];
      }
      if (user.name.split(" ").length == 1) {
        setCanSave(true);
      } else setCanSave(false);
    } else setCanSave(false);
  }

  return (
    <View style={Style.outer}>
      <View style={Style.inner}>
        <TextInputComponent
          style={Style.username}
          defaultValue={user.name}
          onChange={(newName) => {
            user.name = newName;
            setSaveButton(true);
            verifyData();
          }}
        />
        <TextComponent style={Style.exp}>{123 + " Exp"}</TextComponent>
      </View>
      {saveButton ? (
        <View>
          <View style={Style.line} />
          <TouchableOpacity
            style={[
              Style.buttonOuter,
              { backgroundColor: canSave ? Colors.orange : Colors.grey },
            ]}
            onPress={() => {
              if (canSave) system.storage.data.settings.user = user;
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
  ); // TODO Add exp in settings profile
}

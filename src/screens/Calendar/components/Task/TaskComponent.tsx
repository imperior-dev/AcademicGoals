import { Text, View } from "react-native"

import { TaskType } from "../../../../types/DataType"
import { TaskStyle as Style } from "./TaskStyle"

export function TaskComponent({ from, duration, subjectId }: TaskType) {
  return (
    <View style={Style.outer}>
      <View style={Style.leftMargin} />
      <View style={Style.dateOuter}></View>
      <View style={Style.inner}>
        <Text>{JSON.stringify(from)}</Text>
        <Text>{JSON.stringify(duration)}</Text>
        <Text>{JSON.stringify(subjectId)}</Text>
      </View>
    </View>
  );
}

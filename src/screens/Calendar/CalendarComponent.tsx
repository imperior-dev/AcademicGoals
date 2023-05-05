import { FlatList, Text, View } from "react-native"

import { System } from "../../System"
import { CalendarStyle as Style } from "./CalendarStyle"
import { TaskComponent } from "./components/Task/TaskComponent"

export function CalendarComponent({ system }: { system: System }) {
  const { date, tasks } =
    system.storage.data.schedule[system.storage.data.schedule.length - 1];
  return (
    <View style={Style.outer}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskComponent
            from={item.from}
            duration={item.duration}
            subjectId={item.subjectId}
            id={item.id}
            statusPercentage={item.statusPercentage}
          />
        )}
      />
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoForm from "./component/TodoForm";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Add the task </Text>
      <ToDoForm addTask={addTask} />
      {tasks.map((text, i) => (
        <Text key={i}>{text}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 600,
  },
});

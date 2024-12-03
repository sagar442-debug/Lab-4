import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = () => {
    if (taskText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    addTask(taskText); // Call the parent function to add the task
    setTaskText(""); // Clear the input field
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
});

export default ToDoForm;

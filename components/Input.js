import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

function Input(props) {
  const [enteredText, setEnteredText] = useState("");

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    props.addGoal(enteredText);
    setEnteredText("");
  }

  return (
    <Modal
      presentationStyle="fullScreen"
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add goal"
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color={"#898989"} onPress={props.onCancel} title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button
              color={"#76885B"}
              title="Add Goal"
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 24,

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  textInput: {
    padding: 12,
    width: "85%",
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 0,
    color: "#627254",
    backgroundColor: "#DDDDDD",

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    paddingHorizontal: 15,
  },
});

export default Input;

import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button color={"#76885B"} title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: .8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#76885b76",

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  textInput: {
    marginRight: 8,
    padding: 12,
    width: "70%",
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
});

export default Input;

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  const renderItem = ({ itemData }) => {
    return (
      <View style={styles.goalList}>
        <Text style={styles.goalItem}>{itemData}</Text>
      </View>
    );
  };

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <View style={styles.goalList}>
              <Text style={styles.goalItem}>{itemData.item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#EEEEEE",

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  goalsContainer: {
    flex: 4,

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  goalList: {
    margin: 8,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#DDDDDD",
  },
  goalItem: {
    color: "#76885B",
    fontSize: 18,
    fontWeight: "bold",
  },
});

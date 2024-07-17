import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Item from "./components/Item";
import Input from "./components/Input";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <Input addGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <Item text={itemData.item.text} />}
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
  goalsContainer: {
    flex: 4,

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
});

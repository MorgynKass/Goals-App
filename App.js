import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import Input from "./components/Input";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    concealAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function displayAddGoalHandler() {
    setModalIsVisible(true);
  }

  function concealAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.toggleModalButton}>
        <Button
          title="Add new goal"
          color={"#76885B"}
          onPress={displayAddGoalHandler}
        />
      </View>
      {modalIsVisible && (
        <Input
          addGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={concealAddGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              deleteItem={deleteGoalHandler}
            />
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
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
  toggleModalButton: {
    marginTop: 40,
    marginBottom: 20,
  },
});

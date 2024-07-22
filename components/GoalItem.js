import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

function GoalItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function displayAddGoalHandler() {
    setModalIsVisible(true);
  }

  function concealAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.goalList}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={displayAddGoalHandler}
      >
        <Text style={styles.goalItem}>{props.text}</Text>
        {modalIsVisible && (
          <DeleteModal
            text={props.text}
            onCancel={concealAddGoalHandler}
            id={props.id}
            deleteItem={props.deleteItem}
          />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalList: {
    margin: 8,
    backgroundColor: "#DDDDDD",
    borderRadius: 10,

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  goalItem: {
    padding: 15,
    color: "#76885B",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  pressedItem: {
    backgroundColor: "#cbcbcb",
    borderRadius: 10,
  },
});

export default GoalItem;

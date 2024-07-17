import { StyleSheet, View, Text } from "react-native";

function Item(props) {
  return (
    <View style={styles.goalList}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default Item;

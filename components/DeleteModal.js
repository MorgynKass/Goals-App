import { View, Text, Modal, StyleSheet, Button, Image } from "react-native";

function DeleteModal(props) {
  return (
    <Modal animationType="slide">
      <View style={styles.deleteContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              color={"#898989"}
              title="Cancel"
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.button}
              color={"#f65c5c"}
              title="Delete goal"
              onPress={props.deleteItem.bind(this, props.id)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  deleteContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    fontSize: 20,
  },
  textContainer: {
    padding: 15,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  text: {
    width: 360,
    fontSize: 20,
    color: "#76885B",
    fontWeight: "bold",

    // for visuals
    // borderWidth: 1,
    // borderColor: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: "35%",
    paddingHorizontal: 15,
  },
});

export default DeleteModal;

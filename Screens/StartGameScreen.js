import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen({ pickedNumberHandler }) {
  const [eneteredNumber, setEnteredNumber] = useState("");

  const inputHandler = (input) => {
    setEnteredNumber(input);
  };

  const confirmInputHandler = () => {
    const eneteredNum = parseInt(eneteredNumber);

    if (isNaN(eneteredNum) || eneteredNum <= 0 || eneteredNum > 99) {
      Alert.alert("Invalid Number", "should be between 0 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setEnteredNumber(""),
        },
      ]);
      return;
    }
    pickedNumberHandler(eneteredNum);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          value={eneteredNumber}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.fullWidth}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.fullWidth}>
            <PrimaryButton onPressed={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#4e0329",
    width: "80%",
    borderRadius: 10,
    elevation: 8,
    alignItems: "center",
  },
  textInput: {
    fontSize: 32,
    height: 50,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  fullWidth: {
    flex: 1,
  },
});

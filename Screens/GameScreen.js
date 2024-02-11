import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../Components/Title";
import NumberContainer from "../Components/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";

let min = 1;
let max = 100;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function GameScreen({ chosenNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gusses, setGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver();
    }
  }, [currentGuess]);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  const guessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "high" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie", "foul play", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }

    const newRand = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(newRand);
    setGuesses((prev) => [...prev, newRand]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <View>
          <PrimaryButton onPressed={() => guessHandler("high")}>
            <Ionicons name="add" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPressed={() => guessHandler("lower")}>
            <Ionicons name="remove-sharp" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          contentInset={{ top: 0, bottom: 20, left: 0, right: 0 }}
          contentInsetAdjustmentBehavior="automatic"
          data={gusses}
          renderItem={({ item }) => (
            <Item
              title={`Your guess was ${item}`}
              keyExtractor={(item) => item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  item: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    borderRadius: 5,
    padding: 12,
    marginVertical: 12,
  },
  title: {
    fontSize: 24,
  },
});

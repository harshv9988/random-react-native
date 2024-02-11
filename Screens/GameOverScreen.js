import { Text, View, StyleSheet } from "react-native";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";

export default function GameOverScreen({ onStartNewGame }) {
  return (
    <View style={styles.rootScreen}>
      <Title>The game is over mothefucker</Title>
      <View style={styles.buttonWrapper}>
        <PrimaryButton onPressed={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    marginVertical: 12,
  },
});

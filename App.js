import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [over, setOver] = useState(false);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  const onStartNewGame = () => {
    setUserNumber(null);
    setOver(false);
  };

  const pickedNumberHandler = (num) => {
    setUserNumber(num);
    setOver(false);
  };

  const gameOverHandler = () => {
    setOver(true);
  };

  let screen = userNumber ? (
    <GameScreen onGameOver={gameOverHandler} chosenNumber={userNumber} />
  ) : (
    <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
  );

  if (over && userNumber) {
    screen = <GameOverScreen onStartNewGame={onStartNewGame} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{
          opacity: 0.15,
        }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (num) => {
    setUserNumber(num);
  };

  let screen = userNumber ? (
    <GameScreen />
  ) : (
    <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
  );

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={{
          opacity: 0.15,
        }}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

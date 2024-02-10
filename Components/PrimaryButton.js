import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({ children, onPressed }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPressed}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.container] : styles.container
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

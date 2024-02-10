import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPressed }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPressed}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.container] : styles.container
        }
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
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

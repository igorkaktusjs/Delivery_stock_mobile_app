import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton(props) {
  return (
    <Pressable style={styles.container}>
      <Ionicons
        onPress={props.onPress}
        style={props.style}
        name={props.name}
        size={props.size}
        color={props.color}
      />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    padding: 13
  }
});

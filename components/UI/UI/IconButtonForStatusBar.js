import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButtonForStatusBar(props) {

  return (
    <Pressable style={styles.container}>
      <Ionicons
        onPress={props.onPress}
        style={styles.search}
        name="filter"
        size={28}
        color="white"
      />
      <Ionicons style={styles.add} name="add" size={36} color="white" />
    </Pressable>
  );
}

export default IconButtonForStatusBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  search: {
    padding: 10,
  },
  add: {
    padding: 14,
    paddingTop: 6,
  },
});

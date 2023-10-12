import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

function IconButtonForStatusBar(props) {

  return (
    <Pressable style={styles.container}>
      <MaterialCommunityIcons
        onPress={props.onPress}
        style={styles.search}
        name="filter-variant-plus"
        size={30}
        color="white"
      />
      {/* <Ionicons style={styles.add} name="add" size={36} color="white" /> */}
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
    marginHorizontal: 15
  },
  search: {
    padding: 10,
  },
  add: {
    padding: 14,
    paddingTop: 6,
  },
});

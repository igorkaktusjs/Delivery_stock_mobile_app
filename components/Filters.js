import { View, Text } from "react-native";
import { navigation } from "@react-navigation/native";

function Filters({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="test" />
    </View>
  );
}

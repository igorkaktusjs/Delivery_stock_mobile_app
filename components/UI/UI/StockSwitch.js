import { useMemo, useState } from "react";
import { Switch } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { triggerAvailableStock } from "../../../store/allProductsStockSlice";

const StockSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => dispatch(triggerAvailableStock(!filterAllStock));

  const dispatch = useDispatch();

  const filterAllStock = useSelector(
    (state) => state.stockSlice.filterAllStock
  );

  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        value={filterAllStock}
        onValueChange={toggleSwitch}
        color="#ff4500"
      />
      <Text style={styles.title}>In Stock</Text>
    </View>
  );
};

export default StockSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
  switch: {
    marginLeft: 15,
    marginRight: 5,
  },
});

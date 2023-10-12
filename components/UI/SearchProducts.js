import { View, TextInput, StyleSheet } from "react-native";
import { useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { searchProduct, currentFocusOnSearch } from "../../store/allProductsStockSlice";

function SearchProducts(props) {

  const dispatch = useDispatch();

  const [focusing, setFocusing] = useState('');

  const customOnFocus = () => {
    setFocusing({ textAlign: "left" })

  };

  const InputHandler = (e) => {
    dispatch(searchProduct(e));
    
  };

  const input = useSelector((state) => state.stockSlice.searchProduct);

  return (
    <View style={styles.inputConteiner}>
      <TextInput
        style={[styles.input, focusing]}
        placeholder="Search..."
        onFocus={customOnFocus}
        onChangeText={InputHandler}
        value={input}
      />
    </View>
  );
}

export default SearchProducts;

const styles = StyleSheet.create({
  inputConteiner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 24,
  },
  input: {
    flex: 1,
    height: 35,
    margin: 6,
    borderWidth: 0.2,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#f8f8ff",
    textAlign: "center",
  },
});

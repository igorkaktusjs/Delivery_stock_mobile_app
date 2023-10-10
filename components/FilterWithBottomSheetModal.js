import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState, useMemo } from "react";
import { SegmentedButtons, Chip, Button } from "react-native-paper";

import IconButton from "./UI/UI/IconButton";
import CustomHandler from './CustomHandler'

import { useGetAllFiltersQuery } from "../store/ApiSlice";

import { useSelector, useDispatch } from "react-redux";
import { triggerAvailableStock } from "./../store/allProductsStockSlice";

import { currentFilters } from '../store/allProductsStockSlice'


const FilterWithBottomSheetModal = (props) => {

  const { currentFilterTag } = useSelector((state) => state.stockSlice);

  const dispatch = useDispatch();

  const toggleSwitch = () => dispatch(triggerAvailableStock(!filterAllStock));

  const filterAllStock = useSelector(
    (state) => state.stockSlice.filterAllStock
  );

  const bottomSheetModalRef = useRef();

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const snapPoints = ["45%"];

  const handleClosePress = () => bottomSheetModalRef.current.close();

  const {
    data: getAllFilters = []
    }= useGetAllFiltersQuery();

  const getFilters = useMemo(() => {
    
    let filters = '';

    return filters = getAllFilters.map(({name, type, id}) => {
      return (<Chip
        textStyle={styles.chipText}
        style={styles.chip}
        mode="outlined"
        onPress={() => dispatch(currentFilters(type))}
        key= {id}
      >
        {name}
  </Chip>)
      
    })
      
  }, [getAllFilters,currentFilterTag])

  return (
    <BottomSheetModal ref={props.FilterRef} index={0} snapPoints={snapPoints} handleComponent={CustomHandler}>
      <View style={styles.conteiner}>
        <View style={styles.headerConteiner}>
          <IconButton
            onPress={props.close}
            name={"close"}
            size={30}
            color={"black"}
            style={styles.icon}
          />
          <Text style={styles.title}>Filters</Text>
        </View>
        <SafeAreaView style={styles.segmentedButtons}>
          <SegmentedButtons
            value={!filterAllStock}
            checkedColor="black"
            onValueChange={toggleSwitch}
            buttons={[
              {
                value: true,
                label: "In Stock",
              },
              {
                value: false,
                label: "Out of Stock",
              },
            ]}
          />
        </SafeAreaView>
        <View style={styles.chipConteiner}>
            {getFilters}
        </View>

        <View style={styles.bottomConteiner}>
          <Button
            icon="delete"
            textColor='#696969'
            mode="elevated"
            onPress={() => console.log("Pressed")}
          >
            Clear All
          </Button>
          <Button
            icon="update"
            mode="contained"
            buttonColor='#0a4d44'
            onPress={() => console.log("Pressed")}
          >
            Show items
          </Button>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default FilterWithBottomSheetModal;

const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 20,
    backgroundColor: '#f5f5f5'
  },
  headerConteiner: {
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f8f8ff",
    borderRadius: 20,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    right: 25,
    color: "#696969",
  },
  icon: {
    color: "#696969",
  },
  segmentedButtons: {
    marginVertical: 20,
  },
  chip: {
    margin: 5,
    padding: 2,
    alignItems: "center",
  },
  chipConteiner: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: 20,
  },
  chipText: {
    fontSize: 12,
  },
  bottomConteiner: {
    backgroundColor: '#f8f8ff',
    borderTopWidth: 1,
    borderBlockColor: '#d3d3d3"',
    marginTop: 10,
    paddingVertical: 30,
    marginHorizontal: 10,
    paddingBottom: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

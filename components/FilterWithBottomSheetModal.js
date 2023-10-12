import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, useState, useMemo } from "react";
import { SegmentedButtons, Chip, Button } from "react-native-paper";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";


import IconButton from "./UI/UI/IconButton";
import CustomHandler from "./CustomHandler";

import { useGetAllFiltersQuery } from "../store/ApiSlice";

import { useSelector, useDispatch } from "react-redux";
import { triggerAvailableStock } from "./../store/allProductsStockSlice";

import { currentFilters } from "../store/allProductsStockSlice";

const FilterWithBottomSheetModal = (props) => {
  const { currentFilterTag, defaultAllFilters } = useSelector(
    (state) => state.stockSlice
  );

  const dispatch = useDispatch();

  const filterAllStock = useSelector(
    (state) => state.stockSlice.filterAllStock
  );

  const bottomSheetModalRef = useRef();

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const snapPoints = ["45%"];

  const handleClosePress = () => bottomSheetModalRef.current.close();

  const { data: getAllFilters = [] } = useGetAllFiltersQuery();

  const getFilters = useMemo(() => {
    let filters = "";

    return (filters = getAllFilters.map(({ name, type, id }) => {
      return (
        <Chip
          textStyle={styles.chipText}
          style={styles.chip}
          mode="outlined"
          onPress={() => dispatch(currentFilters(type))}
          key={id}
        >
          {name}
        </Chip>
      );
    }));
  }, [getAllFilters, currentFilterTag]);

  const clearAllHandler = () => {
    return (
      dispatch(triggerAvailableStock(false)),
      dispatch(currentFilters(defaultAllFilters)),
      props.close()
      )
    
  }

  const toggleSwitch = () => dispatch(triggerAvailableStock(!filterAllStock));

  return (
    <BottomSheetModal
      ref={props.FilterRef}
      index={0}
      snapPoints={snapPoints}
      handleComponent={CustomHandler}
      
    >
      <View style={styles.conteiner}>
        <View style={styles.headerConteiner}>
          <IconButton
            onPress={props.close}
            name={"close"}
            size={30}
            color={"black"}
            style={styles.icon}
          />
          <View style={styles.titleConteinerWithIcon}>
          <MaterialCommunityIcons
                        name="filter-variant-plus"
                        size={28}
                        color="#0a4d44"
                    />
          <Text style={styles.title}>Filters</Text>
          </View>
          
        </View>
        <View style={styles.body}>
        <SafeAreaView style={styles.segmentedButtons}>
          <SegmentedButtons
            value={!filterAllStock}
            checkedColor="black"
            onValueChange={toggleSwitch}
            buttons={[
              {
                value: true,
                label: "In Stock",
                accessibilityLabel: 'In Stock',
                icon: "cookie-settings",
                checkedColor: '#20b2aa',
                style: {
                  borderRadius: 10,
                  fontWeight: "800",
                  fontStyle: "italic",
                  backgroundColor: '#f8f8ff'
                },
                changedTouches: {
                  borderRadius: 10,
                }
              },
              {
                value: false,
                label: "Out of Stock",
                accessibilityLabel: 'Out of Stock',
                icon: "cookie-remove",
                checkedColor: '#ff4500',
                style: {
                  borderRadius: 10,
                  backgroundColor: '#f8f8ff'
                }
              },
            ]}
          />
        </SafeAreaView>
        <View style={styles.chipConteiner}>{getFilters}</View>
        </View>
        <View style={styles.bottomConteiner}>
          <Button
            icon="delete"
            textColor="#696969"
            mode="elevated"
            onPress={clearAllHandler}
          >
            Clear All
          </Button>
          <Button
            icon="update"
            mode="contained"
            buttonColor="#0a4d44"
            onPress={() => props.close()}
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
    backgroundColor: '#f5f5f5',
    paddingBottom: 10
  },
  headerConteiner: {
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f8f8ff",
    borderRadius: 20,
    marginHorizontal: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "800",
    color: "#0a4d44",
    fontStyle: "italic",
    paddingHorizontal: 5
  },
  titleConteinerWithIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    padding: 10,
    fontWeight: "800",
    color: "#0a4d44",
    left: 90,
    
  },
  icon: {
    color: "#0a4d44",
  },
  segmentedButtons: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 20
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
    backgroundColor: "#f8f8ff",
    marginVertical: 20,
  },
  chipText: {
    fontSize: 12,
  },
  bottomConteiner: {
    backgroundColor: "#f8f8ff",
    paddingVertical: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 20,

  },
  body: {
    backgroundColor: "#f8f8ff",
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    
  }
  
});

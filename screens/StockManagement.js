import React, { useMemo, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Cell,
} from "react-native-reanimated-table";

import SearchProducts from "../components/UI/SearchProducts.js";

import { useSelector } from "react-redux";

import {
  useGetAllStockQuery,
  useTriggerItemDeliveryMutation,
  useTriggerItemOnlineMutation,
  useTriggerItemMutation,
} from "../store/ApiSlice";

const tableHead = ["Name", "Online", "Delivery"];

function StockManagement() {
  const [triggerItemDelivery] = useTriggerItemDeliveryMutation();
  const [triggerItemOnline] = useTriggerItemOnlineMutation();

  const { searchProduct, filterAllStock, currentFilterTag } = useSelector(
    (state) => state.stockSlice
  );

  const {
    data: getAllStock = [],
    isLoading,
    isError,
    refetch,
    currentData,
  } = useGetAllStockQuery();

  console.log(currentFilterTag)

  const filteredData = useMemo(() => {

    let searchData = " ";
    let filterTagData = '';
    let filterStockData = " ";

    searchData = getAllStock.filter((item) =>
      item.name.includes(searchProduct)
    );

    if (currentFilterTag === 'All') {
        filterTagData = searchData;
      } else {
         filterTagData = searchData.filter(item => item.type === currentFilterTag)      
      }

    if (filterAllStock === false) {
        return  filterStockData = filterTagData;
    }

    filterStockData = searchData.filter(
      (item) =>
        item.online === !filterAllStock || item.delivery === !filterAllStock
    );



    return filterStockData;
  }, [getAllStock, searchProduct, filterAllStock,currentFilterTag ]);

  return (
    <View>
      <SearchProducts />
      <View style={styles.containerTable}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={[styles.text, styles.textHeader]}
        />
        <FlatList
          data={filteredData}
          renderItem={(itemData) => (
            <View style={styles.row}>
              <Text style={[styles.item, styles.text, styles.textName]}>
                {itemData.item.name}
              </Text>
              <Pressable
                style={
                  itemData.item.online
                    ? [styles.item, styles.buttonsContainer, styles.buttonOn]
                    : [styles.item, styles.buttonsContainer, styles.buttonOff]
                }
                onPress={() =>
                  triggerItemOnline({
                    id: itemData.item.key,
                    online: itemData.item.online,
                  })
                }
              >
                <Text style={styles.text}>
                  {itemData.item.online ? "On" : "Off"}
                </Text>
              </Pressable>
              <Pressable
                style={
                  itemData.item.delivery
                    ? [styles.item, styles.buttonsContainer, styles.buttonOn]
                    : [styles.item, styles.buttonsContainer, styles.buttonOff]
                }
                onPress={() =>
                  triggerItemDelivery({
                    id: itemData.item.key,
                    delivery: itemData.item.delivery,
                  })
                }
              >
                <Text style={[styles.text]}>
                  {itemData.item.delivery ? "On" : "Off"}
                </Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    </View>
  );
}

export default StockManagement;

const styles = StyleSheet.create({
  containerTable: {
    marginBottom: 130,
  },
  head: {
    height: 25,
    margin: 1,

    borderTopColor: "gray",
    borderBottomWidth: 0.1,
    borderEndColor: "gray",
  },
  textHeader: {
    fontWeight: 400,
    fontSize: 11,
  },
  text: {
    margin: 6,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: 500,
  },
  textName: {
    paddingTop: 10,
    fontSize: 14,
    elevation: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    borderEndColor: "gray",
    borderBottomWidth: 0.3,
    backgroundColor: "#f8f8ff",
  },

  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    textAlign: "center",
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    padding: 1,
    borderColor: "#f0f0f0",
    borderRadius: 6,
    backgroundColor: "red",
  },
  buttonOn: {
    backgroundColor: "#6b8e23",
  },
  buttonOff: {
    backgroundColor: "#ff4500",
  },

  textStyle: {
    textAlign: "center",
    marginBottom: 8,
  },
  
});

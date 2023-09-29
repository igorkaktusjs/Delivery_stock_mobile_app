import React, {useMemo, useState} from 'react'
import {Text, View, FlatList, StyleSheet, Pressable, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Table, TableWrapper,Row, Rows, Cell } from 'react-native-reanimated-table';

import axios from 'axios';

import { Data } from '../deliveryData'

import {
  useGetAllStockQuery,
  useTriggerItemDeliveryMutation,
  useTriggerItemOnlineMutation,
  useTriggerItemMutation
  } from '../store/ApiSlice';
import { Button } from 'react-native-paper';

const tableHead = ['Name','Online','Delivery'];

 async function All() {

  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');

  const allStock = [];

  //  console.log(response.data.meals);

    for(const key in response.data) {
      const stockObj = {
        id: response.data.meals,
        name: response.data.meals
      };
      allStock.push(stockObj);
    }
    // console.log(allStock);
    return allStock;

}

const renderAxios = All();

function StockManagement  (){

const {stock_product} = Data;

const {
    data: post,
    isLoading,
    isError,
    refetch,
    currentData
}  = useGetAllStockQuery();

const [triggerItemDelivery]  = useTriggerItemDeliveryMutation();
      
      return (
      <View>
        <View style={styles.containerTable}>
                <Table borderStyle={{borderColor: 'transparent'}}>
                  <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                </Table>
        </View>
      <FlatList 
        data={stock_product}
        renderItem={(itemData) => 
        <View style={styles.container}>
        <Row style={styles.head}> {itemData.item.name} </Row>

        <Pressable 
        style={{padding:10}}
        onPress={() => triggerItemDelivery({id: itemData.item.id, delivery: !itemData.item.delivery})
      }>
          <Text>{itemData.item.delivery ? 'On' : 'Off'}</Text>
        </Pressable>
        <Pressable 
        style={{padding:10}}
        onPress={() => console.log(post)
      }>
          <Text>{itemData.item.delivery ? 'On' : 'Off'}</Text>
        </Pressable>
        </View>
      
      }
        keyExtractor={ itemData => itemData.id}
      />
    
    </View>)
}

// export default StockManagement;

const styles = StyleSheet.create({
    containerTable:
       { flex: 1, padding: 16, marginTop: 10 },
        head: { height: 40 },
        text: { margin: 6 },
        row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
        btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
        btnText: { textAlign: 'center', color: '#fff' },
    container: {
        flex: 1,
        padding: 16,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E4E2',
        fontWeight: 'bold'
        
    },
    item: {
        flex: 2,
        margin: 10,
        textAlign: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#E5E4E2',
        fontWeight: '300'
            
    },
    buttonsContainer: {
        padding: 10,
        borderColor: '#f0f0f0',

      },
    buttonOn: {
        backgroundColor: 'green'
    },
    buttonOff: {
        backgroundColor: 'red'
    },

    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
        
      },
})
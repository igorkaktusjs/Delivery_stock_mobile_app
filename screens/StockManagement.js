import React, {useMemo, useState} from 'react'
import {Text, View, FlatList, StyleSheet, Pressable, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { Table, TableWrapper,Row, Rows, Cell } from 'react-native-reanimated-table';

import SearchProducts from '../components/UI/SearchProducts.js';


import {
  useGetAllStockQuery,
  useTriggerItemDeliveryMutation,
  useTriggerItemOnlineMutation,
  useTriggerItemMutation
  } from '../store/ApiSlice';
import { Button } from 'react-native-paper';

const tableHead = ['Name','Online','Delivery'];

function StockManagement  (){

const [ triggerItemDelivery ] = useTriggerItemDeliveryMutation();
const [ triggerItemOnline ] = useTriggerItemOnlineMutation();

const {
    data: post,
    isLoading,
    isError,
    refetch,
    currentData
}  = useGetAllStockQuery();

console.log(post);
      
      return (
        
      <View style={styles.containerTable}>
          <SearchProducts/>
            <Row data={tableHead} style={styles.head} textStyle={[styles.text,styles.textHeader]}/>
                <FlatList
                    data={post}
                    renderItem={({item,index}) => 
                        <View style={styles.row}>
                            <Text style={[styles.item,styles.text, styles.textName] } >{item.name}</Text>
                        <Pressable 
                            style={
                                item.online
                                ?[styles.item, styles.buttonsContainer, styles.buttonOn]
                                :[styles.item, styles.buttonsContainer, styles.buttonOff]}
                            onPress={() => triggerItemOnline({id: item.key, online: item.online})
                            }>
                            <Text style= {styles.text}>{item.online ? 'On' : 'Off'}</Text>
                        </Pressable>
                        <Pressable 
                            style={ 
                                item.delivery
                                ?[styles.item, styles.buttonsContainer, styles.buttonOn ] 
                                :[styles.item, styles.buttonsContainer, styles.buttonOff ]}
                            onPress={() => triggerItemDelivery({id: item.key, delivery: item.delivery}) 
                            }>
                            <Text style= { [styles.text]}>{item.delivery ? 'On' : 'Off'}</Text>
                        </Pressable>
                        </View>
                    }
                     keyExtractor={(item, index) => item.key}
                />
    </View>)
}

 export default StockManagement;

const styles = StyleSheet.create({
    containerTable:{ 
        marginBottom: 50
            },
    head: { 
            height: 30,
            margin:10,
            borderBottomWidth:0.4,
            borderEndColor: 'gray',
            
            
            },
    textHeader: {
            fontWeight: 700,
            fontSize: 15,
        },
    text: {
            margin: 6, 
            textAlign: 'center',
            fontStyle: 'italic',
            fontWeight: 500,
            },
    textName: {
            paddingTop:10,
            fontSize: 14,
            elevation:6,
            shadowColor: '#b0c4de',
            shadowRadius: 2,
            shadowOffset: {width: 2, hight: 2 },
            shadowOpacity: 3
        },
    row: { 
            flexDirection: 'row',
            justifyContent: 'center',
            borderEndColor: 'gray',
            borderBottomWidth:0.3,
            backgroundColor: '#f8f8ff',
            
         },
        btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
        btnText: { textAlign: 'center', color: '#fff' },

    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        textAlign: 'center',
        borderBottomWidth:1,
        
    },
    buttonsContainer: {
        padding:1,
        borderColor: '#f0f0f0',
        borderRadius: 6,
        backgroundColor:'red'

      },
    buttonOn: {
        backgroundColor: '#6b8e23'
    },
    buttonOff: {
        backgroundColor: '#ff4500'
    },

    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
        
      },
})
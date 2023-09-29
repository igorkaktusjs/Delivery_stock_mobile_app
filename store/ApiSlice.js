import { createApi, fetchBaseQuery, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { db} from './firebase';

import {
  arrayUnion,
  collection,
  doc,
  updateDoc,
  getDocs,
  setDoc,
  where,
  
} from 'firebase/firestore';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery:fakeBaseQuery(),
         tagTypes:['Stock'],
        endpoints: builder => ({
            getAllStock: builder.query({
                  async queryFn()  {
                    try{
                      const stockRef = collection(db, 'stock_app');
                      const querySnapshot = await getDocs(stockRef);
                      let stock = [];
                      querySnapshot?.forEach((doc) => {
                        stock.push({
                          ...doc.data(),
                          key: doc.id
                        });
                      });
                      return { data: stock};
                    } catch(err){
                      return {error: err}
                    }
                   
                 },
                providesTags:['Stock']
            }),
            triggerItemDelivery: builder.mutation({
                async  queryFn(data) {
                    try{
                      const { id, delivery } = data;
                      const stockRef = doc(db, 'stock_app', id);
                      await updateDoc(stockRef, {delivery: !delivery});
                       return {data}
                    } catch(err){
                      return {error: err}
                    }
                  },
                invalidatesTags: ['Stock']
            }),
            triggerItemOnline: builder.mutation({
                 async queryFn(data) {
                    try{
                      const { id, online } = data;
                      const stockRef = doc(db, 'stock_app', id);
                      await updateDoc(stockRef, {online: !online});
                       return {data}
                    } catch(err){
                      return {error: err}
                    }
                  },
                invalidatesTags: ['Stock']
            }),
            getCurrentData: builder.query({
                query: () =>  '/stock_product', 
                providesTags:['Stock']
            
          })
            
        }) 
})

export const {
    useGetAllStockQuery,
    useTriggerItemDeliveryMutation, 
    useTriggerItemOnlineMutation,
    useGetCurrentDataQuery,
} = apiSlice;
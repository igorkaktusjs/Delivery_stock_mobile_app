import {View, TextInput, StyleSheet} from 'react-native';
import{ useState } from 'react'

import {
    useGetAllStockQuery,
    } from '../../store/ApiSlice';


function SearchProducts () {

    const { data: post }  = useGetAllStockQuery();

    const [focusing, setFocusing] = useState('');

    const customOnFocus = (e) => {
        setFocusing({textAlign: 'left'});
        console.log(e.target.value);
    }

    return (
    <View style={styles.inputConteiner}>
        <TextInput 
        style={[styles.input,focusing]}
        placeholder="Search..."
        onFocus={customOnFocus}
        />
    </View>
    )
}

export default SearchProducts;

const styles = StyleSheet.create({
    inputConteiner:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40
        

    },
    input: {
      flex:1,
      height: 50,
      margin: 12,
      borderWidth: 0.2,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#E5E4E2',
      textAlign: 'center'

    },
  });
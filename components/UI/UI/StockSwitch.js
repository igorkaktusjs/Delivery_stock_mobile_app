import { useState } from 'react';
import { Switch } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native'

const StockSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <View style={styles.container}> 
            <Text style={styles.title}>In Stock</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#8b0000'/>
          </View>
  ;
};

export default StockSwitch;

const styles = StyleSheet.create({
  container: {
    paddingBottom:10
  },
  title: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom:2
  },
  switch: {
    margin:3
  }
})
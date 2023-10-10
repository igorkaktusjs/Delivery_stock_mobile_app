import { React } from 'react';
import { Chip } from 'react-native-paper';

const FilterStockByTags = () => (
    <View style = {styles.chipConteiner}>
                <Chip icon="information" onPress={() => console.log('Pressed')}>Salads</Chip>

        <Chip icon="information" onPress={() => console.log('Pressed')}>Sweet</Chip>
        <Chip icon="information" onPress={() => console.log('Pressed')}>Drink</Chip>
        <Chip icon="information" onPress={() => console.log('Pressed')}>Bread</Chip>
        <Chip icon="information" onPress={() => console.log('Pressed')}>Savouries</Chip>

    </View>);

export default FilterStockByTags;
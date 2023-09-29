import { Pressable, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function IconButton () {
    return <Pressable style={styles.container}> 
        <Text style={styles.filtersTitle}>Filters</Text>
        <Ionicons name='filter' size={28} color='white' />
    </Pressable>
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 1
    },
    filtersTitle:{
        color: 'white',
        fontSize: 12,
        
    }
})
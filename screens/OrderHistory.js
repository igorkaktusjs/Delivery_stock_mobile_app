import { Text, View, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useGetAllOrdersQuery } from "./../store/ApiSlice";

function OrderHistory() {
  const { data: getAllOrders = [] } = useGetAllOrdersQuery();

  return (
    <View style={styles.conteiner}>
      <FlatList
        data={getAllOrders}
        renderItem={(itemData) => (
          <View style={styles.itemConteiner}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                <MaterialCommunityIcons
                        name="food"
                        size={28}
                        color="#0a4d44"
                    />
              <Text style={styles.type}>{itemData.item.type}</Text>

                </View>
              <View style={styles.headerItem}>
                <Text style={styles.headerItem}>Food</Text>
                <Text style={styles.headerItem}>Drink</Text>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.food}> {itemData.item.food}</Text>
              <Text style={styles.drink}>{itemData.item.drink}</Text>
            </View>
            <View style={styles.footer}>
                
              <Text style={styles.id}>Number order - {itemData.item.key.slice(14)}</Text>
             <View style={styles.date}>
             <MaterialCommunityIcons
                        name="clock-time-eight-outline"
                        size={28}
                        color="#0a4d44"
                    />
                    <Text style={styles.dateString}>{itemData.item.date}</Text>
             </View>
              
            </View>
          </View>
        )}
        keyExtractor={(item) => item.key}
      ></FlatList>
    </View>
  );
}

export default OrderHistory;

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#f5f5f5",
  },

  itemConteiner: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    paddingVertical: 10,
  },
  type: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    padding: 10,
    fontWeight: "800",
    color: '#0a4d44'
  },
  body: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  header: {
    borderBlockEndColor: "grey",
    borderBottomWidth: 0.4,
    padding: 10,
    
  },
  headerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "600",
  },
  food: {
    color: "#2f4f4f",
    fontWeight: '500',
    fontSize: 15
  },
  drink: {
    fontSize: 15,
    color: "#2f4f4f",
    fontWeight: '500',
    
  },
  footer: {
    borderBlockStartColor: "grey",
    borderTopWidth: 0.4,
    padding:10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateString: {
      fontWeight: '600',
      padding: 3,
      color: '#0a4d44'
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  id: {
    marginVertical: 4,
    color: "#2f4f4f",
    fontWeight: '500',
    fontSize: 14
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

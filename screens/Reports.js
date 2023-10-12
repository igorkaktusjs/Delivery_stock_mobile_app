import { Text, View, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { useGetAllReportsQuery } from "./../store/ApiSlice";

function Reports() {
  const { data: getAllReports = [] } = useGetAllReportsQuery();

  return (
    <View style={styles.conteiner}>
      <FlatList
        data={getAllReports}
        renderItem={(itemData) => (
          <View style={styles.itemConteiner}>
            <View style={styles.header}>
              <View style={styles.headerTitle}>
                <MaterialCommunityIcons
                  name="food-variant"
                  size={30}
                  color="#0a4d44"
                />
                <Text style={styles.type}>{itemData.item.typeOrder}</Text>
              </View>
              <View style={styles.headerItem}>
                <Text style={styles.headerItemTitle}>Food</Text>
              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.drink}>{itemData.item.food}</Text>
            </View>
            <View style={styles.headerItem}>
              <Text style={styles.headerItemTitle}>Drink</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.drink}>{itemData.item.drink}</Text>
              <Text style={styles.options}>{itemData.item.options}</Text>
            </View>
            <View style={styles.orderStatusConteiner}>
                    { itemData.item.orderStatusForIcon ? 
                    <MaterialCommunityIcons
                    name="food"
                    size={28}
                    color="green"
                    /> :
                    <MaterialCommunityIcons
                    name="food-off"
                    size={28}
                    color="red"
                    />
                }
                <Text style={styles.orderStatusItem}> {itemData.item.orderStatus}</Text>
                </View>
            <View style={styles.footer}>
              <Text style={styles.id}>
                Number order - {itemData.item.key.slice(14)}
              </Text>
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

export default Reports;

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
    alignItems: 'center',
    textAlign: "center",
    fontSize: 18,
    fontStyle: "italic",
    padding: 10,
    fontWeight: "800",
    color: "#0a4d44",
  },
  body: {
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: "center",
    padding: 5,
    borderBlockEndColor: "grey",
    borderBottomWidth: 0.4,
  },
  header: {
    padding: 2,
  },
  headerItem: {
    flexDirection: "row",
    justifyContent: "center",
    
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerItemTitle:{
    marginVertical: 3,
    fontSize: 18,
    fontWeight: "600"
  },
  food: {
    fontSize: 16,
    color: "#2f4f4f",
    fontWeight: '500'
  },
  drink: {
    fontSize: 16,
    color: "#2f4f4f",
    fontWeight: '500'
  },
  footer: {
    borderBottomStartRadius: 3,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateString: {
    fontWeight: "600",
    padding: 3,
    color: "#0a4d44",
  },
  date: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  id: {
    marginVertical: 4,
    color: "#2f4f4f",
    fontWeight: '600',
    fontSize: 14

  },
  
  options: {
    fontSize: 14,
    color: "#228b22",
    padding: 5
  },
  orderStatusConteiner: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5
      
  },
  orderStatusItem: {
    color: '#0a4d44',
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: '800'
  }
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Image style={styles.image} source={{ uri: props.imageUrl }} />
      </View>
      <View style={styles.itemDataTitle}>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
      </View>
      <View style={styles.itemDataPrice}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Ionicons
              name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
              size={23}
              color="red"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    //justifyContent: "flex-start",
    //marginHorizontal: 20
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  itemDataTitle: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
    marginRight: 20,
  },
  itemDataPrice: {
    flexDirection: "row",
    marginRight: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  quantity: {
    fontFamily: "open-sans",
    color: "#888",
    fontSize: 16,
    textAlign: "right",
  },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;

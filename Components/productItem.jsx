import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import MyButton from "./MyButton";
export default function ProductItem({
  product,
  onPress,
  onConfirm,
  onDelete
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.2 : 1 },
        styles.item,
      ]}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.images[0] }} />
      </View>
      <View style={styles.main}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.mutual}>{`${product.price} EGP`}</Text>

        <View style={styles.sideBySide}>
          <MyButton style={styles.button1} onPress={onConfirm}>
            <Text style={{ color: "white" }}>Add to cart</Text>
          </MyButton>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "yellow"
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 5,
    marginVertical: 1,
    // marginHorizontal: 16,
    flexDirection: "row",
    // justifyContent: "space-between",
    height: 108,
  },
  title: {
    flex: 1,
    fontSize: 15,
    // maxHeight:70,
    overflow: "hidden",
  },
  mutual: {
    // flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  imageContainer: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    objectFit: "contain",
  },
  sideBySide: {
    flexDirection: "row",
  },
  button1: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: "rgb(27,116,228)",
    borderRadius: 6,
  },
  button2: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: "red",
    borderRadius: 6,
  }
});

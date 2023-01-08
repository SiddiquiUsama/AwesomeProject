import { StyleSheet, Text, View } from "react-native";

function MealDetails(props) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailItem, props.textStyle]}>{props.duration}m</Text>
      <Text style={[styles.detailItem, props.textStyle]}>{props.complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, props.textStyle]}>{props.affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
    mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      backgroundColor: "white",
      elevation: 4,
      shadowColor: "black",
      backgroundColor: "white",
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.35,
      shadowRadius: 8,
    },
    innerContainer: {
      borderRadius: 8,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: 200,
    },
    title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18,
      margin: 8,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    details: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
    },
  });
  
import { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../Components/IconButton";
import List from "../Components/MealDetail/List";
import Subtitle from "../Components/MealDetail/Subtitle";
import MealDetails from "../Components/MealDetails";

import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function handleOnPress(){
    console.log("Hello THere")
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
        title: "Meal Detail" ,
        headerRight: () =>{
          return <IconButton icon={"heart"} color={"white"} onPress={handleOnPress}/>
        }
    })
  }, [navigation, handleOnPress])
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

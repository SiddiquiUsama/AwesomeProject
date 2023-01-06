import { useNavigation } from "@react-navigation/native";
import { FlatList, Text } from "react-native";
import CategoryGridTile from "../Components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";


function CategoriesScreen() {
  
  const navigation = useNavigation();
  
  
  function renderCategoryItem(itemData) {

    function _onPressHandler (){
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={_onPressHandler}
      />
    );
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;

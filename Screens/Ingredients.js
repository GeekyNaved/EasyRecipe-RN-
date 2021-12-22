import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IngredientsList from '../components/IngredientsList';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default function Ingredients({route, navigation}) {
  const dish = route.params;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.ingredientsContainer}>
          <IngredientsList
            title={dish.strIngredient1}
            quantity={dish.strMeasure1}
          />
          <IngredientsList
            title={dish.strIngredient2}
            quantity={dish.strMeasure2}
          />
          <IngredientsList
            title={dish.strIngredient3}
            quantity={dish.strMeasure3}
          />
          <IngredientsList
            title={dish.strIngredient4}
            quantity={dish.strMeasure4}
          />
          <IngredientsList
            title={dish.strIngredient5}
            quantity={dish.strMeasure5}
          />
          <IngredientsList
            title={dish.strIngredient6}
            quantity={dish.strMeasure6}
          />
          <IngredientsList
            title={dish.strIngredient7}
            quantity={dish.strMeasure7}
          />
          <IngredientsList
            title={dish.strIngredient8}
            quantity={dish.strMeasure8}
          />
          <IngredientsList
            title={dish.strIngredient9}
            quantity={dish.strMeasure9}
          />
          <IngredientsList
            title={dish.strIngredient10}
            quantity={dish.strMeasure10}
          />
          <IngredientsList
            title={dish.strIngredient11}
            quantity={dish.strMeasure11}
          />
          <IngredientsList
            title={dish.strIngredient12}
            quantity={dish.strMeasure12}
          />
          <IngredientsList
            title={dish.strIngredient13}
            quantity={dish.strMeasure13}
          />
          <IngredientsList
            title={dish.strIngredient14}
            quantity={dish.strMeasure14}
          />
          <IngredientsList
            title={dish.strIngredient15}
            quantity={dish.strMeasure15}
          />
          <IngredientsList
            title={dish.strIngredient16}
            quantity={dish.strMeasure16}
          />
          <IngredientsList
            title={dish.strIngredient17}
            quantity={dish.strMeasure17}
          />
          <IngredientsList
            title={dish.strIngredient18}
            quantity={dish.strMeasure18}
          />
          <IngredientsList
            title={dish.strIngredient19}
            quantity={dish.strMeasure19}
          />
          <IngredientsList
            title={dish.strIngredient20}
            quantity={dish.strMeasure20}
          />
          <TouchableOpacity
            style={styles.recipeButton}
            activeOpacity={1}
            onPress={() => navigation.navigate('Recipe', dish)}>
            <Text style={styles.recipeText}>Recipe</Text>
            <SimpleLineIcons
              style={styles.iconStyle}
              name="arrow-right"
              size={17}
              color="white"
              borderRadius="10"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ingredientsContainer: {
    padding: 20,
  },
  recipeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    paddingHorizontal: 55,
    paddingVertical: 20,
    borderRadius: 18,
  },
  recipeText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 19,
  },
  iconStyle: {
    paddingLeft: 10,
  },
});

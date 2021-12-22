import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
// import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedLottieView from 'lottie-react-native';
export default function Home({navigation}) {
  const [dish, setDish] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setloading] = useState(false);
  const [searchTimer, setSearchTimer] = useState(null);
  useEffect(() => {
    getRandomMeal();
  }, []);

  async function getRandomMeal() {
    setloading(true);
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    response
      .json()
      .then(res => {
        const [meals] = res.meals;
        setDish(meals);
        setloading(false);
      })
      .catch(err => console.log(err));
  }

  async function fetchData(text) {
    setloading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`,
    );
    response
      .json()
      .then(res => {
        if (res.meals !== null) {
          const [meals] = res.meals;
          setDish(meals);
          setloading(false);
        } else {
          alert('Not found');
          setloading(false);
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Find Best Recipe
            <Text> For Cooking</Text>
          </Text>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search for meal"
            onChangeText={text => {
              if (searchTimer) {
                clearTimeout(searchTimer);
              }
              setInput(text);
              setSearchTimer(
                setTimeout(() => {
                  fetchData(text);
                }, 1500),
              );
            }}
            value={input}
          />

          {loading ? (
            <AnimatedLottieView
              source={require('../assets/54605-food-toss.json')}
              style={styles.animatedLoader}
              autoPlay
              loop
            />
          ) : (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Ingredients', dish)}>
              <View style={styles.Imagecontainer}>
                <Image style={styles.image} source={{uri: dish.strMealThumb}} />
                <View style={styles.overlay} />
                <Text style={styles.dishName}>{dish.strMeal}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    minHeight: Dimensions.get('window').height,
  },
  heading: {
    marginVertical: 30,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchBar: {
    borderRadius: 30,
  },
  dishName: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  ImageContainer: {
    backgroundColor: '#f4f4f4',
    // borderRadius: 15,
    // elevation: 5,
    // width: '100%',
    // height: 450,
    // width: 370,
    // minWidth: Dimensions.get('window').width,
    // position: 'relative',
  },
  image: {
    marginTop: 40,
    borderRadius: 10,
    width: '100%',
    minHeight: Dimensions.get('window').height * 0.6,
    resizeMode: 'cover',
    // flex: 1,
    // minWidth: 350,
    // minHeight: 450,
    // minWidth: Dimensions.get('window').width,
    // resizeMode: 'contain',
    // minHeight: 450,
  },
  overlay: {
    marginTop: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.3,
    borderRadius: 10,
    width: undefined,
    // minWidth: 350,
    // minWidth: Dimensions.get('window').width,
    // resizeMode: 'cover',
  },
  animatedLoader: {
    display: 'flex',
    height: Dimensions.get('window').height * 0.4,
    marginTop: 50,
    alignSelf: 'center',
    // alignItems: 'center',
    // width: 20,
    // height: 270,
    // backgroundColor: 'red',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // minWidth: Dimensions.get('window').width - 20,
    // minHeight: 400,
    // height: 250,
    // justifyContent: 'center'
  },
});

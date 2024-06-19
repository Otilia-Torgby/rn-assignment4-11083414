import { View, Text, ScrollView, TextInput, FlatList, StyleSheet, Image, Button } from 'react-native';
import FeaturedCard from './components/FeaturedCard';
import PopularCard from './components/PopularCard';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  const { name, email} = route.params;
  

  const featureData = [
    { id: '1', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '2', image: require('./assets/google.png'),   job: 'Product Manager',   company: 'Google',   salary: '$160,000', location: 'Volta, Ghana' },
    { id: '3', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '4', image: require('./assets/google.png'),   job: 'Product Manager',   company: 'Google',   salary: '$160,000', location: 'Volta, Ghana' },
    { id: '5', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '6', image: require('./assets/google.png'),   job: 'Product Manager',   company: 'Google',   salary: '$160,000', location: 'Volta, Ghana' },
    { id: '7', image: require('./assets/facebook.png'), job: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Volta, Ghana' },
    { id: '8', image: require('./assets/google.png'),   job: 'Product Manager',   company: 'Google',   salary: '$160,000', location: 'Accra, Ghana' },
    
  ];

  const popularData = [
    { id: '1', image: require('./assets/burgerKing.png'), job: 'Jr Executive',      company: 'Burger King',       salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '2', image: require('./assets/brainminds.png'), job: 'Product Manager',  company: 'Brain Minds',       salary: '$84,000/y', location: 'Florida, US' },
    { id: '3', image: require('./assets/google.png'),     job: 'UI/UX Designer',    company: 'Google',       salary: '$86,000/y', location: 'Los Angeles, US' },
    { id: '4', image: require('./assets/burgerKing.png'), job: 'Data Analyst',      company: 'Burger King',       salary: '$90,000/y', location: 'Florida, US' },
    { id: '5', image: require('./assets/brainminds.png'), job: 'Software Developer', company: 'Brain Minds',    salary: '$76,000/y', location: 'Los Angeles, US' },
    { id: '6', image: require('./assets/google.png'),     job: 'AI Analyst',              company: 'Google',     salary: '$95,000/y', location: 'Florida, US' },
    { id: '7', image: require('./assets/burgerKing.png'), job: 'Systems Administrator', company: 'Burger King', salary: '$60,000/y', location: 'Los Angeles, US' },
    { id: '8', image: require('./assets/brainminds.png'), job: 'Web Developer',         company: 'Brain Minds',   salary: '$80,000/y', location: 'Florida, US' },
  ];

  return (
   <View style={styles.container}>
<ScrollView>
      <View style={styles.header}>
        <View style={styles.profile}>
        <Button title="Back" onPress={() => navigation.goBack()} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('./assets/profile.png')} style={styles.profileImage} />
      </View>
      <TextInput style={styles.search} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={featureData}
        renderItem={({ item }) => <FeaturedCard {...item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalList}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularData}
        renderItem={({ item }) => <PopularCard {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.verticalList}
      />
    </ScrollView>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profile: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#6C757D',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  search: {
    height: 50,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalList: {
    marginBottom: 20,
  },
  verticalList: {
    flex: 1,
  },
});

export default HomeScreen;


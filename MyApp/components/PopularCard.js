import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PopularCard = ({ image, job, company, salary, location }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.job}>{job}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  job: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    color: '#6C757D',
  },
  detailsContainer: {
    alignItems: 'flex-end',
  },
  salary: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  location: {
    fontSize: 14,
    color: '#6C757D',
  },
});

export default PopularCard;
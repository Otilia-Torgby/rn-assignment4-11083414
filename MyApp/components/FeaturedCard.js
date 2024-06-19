import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FeatureCard = ({ image, job, company, salary, location }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={image} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.job}>{job}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4285F4', // Adjust the color to match the design
    borderRadius: 10,
    padding: 20,
    width: 250,
    marginRight: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  job: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: '#FFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  salary: {
    fontSize: 14,
    color: '#FFF',
  },
  location: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default FeatureCard;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>Smart Dress Tracker</Title>
          <Paragraph>Welcome to your personal outfit recommendation system.</Paragraph>
        </Card.Content>
      </Card>

      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => console.log('Wardrobe pressed')} style={styles.button}>
          View Wardrobe
        </Button>
        <Button mode="outlined" onPress={() => console.log('Timetable pressed')} style={styles.button}>
          View Timetable
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 20,
    elevation: 4,
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    borderRadius: 8,
  },
});

export default HomeScreen;

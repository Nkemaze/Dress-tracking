import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text variant="headlineMedium" style={[styles.appName, { color: theme.colors.primary }]}>
          AURA
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <View style={[styles.iconContainer, { backgroundColor: '#E8E9F2' }]}>
            <MaterialCommunityIcons name="hanger" size={40} color={theme.colors.primary} />
          </View>

          <Text variant="headlineSmall" style={styles.title}>
            Your Wardrobe, Reimagined
          </Text>

          <Text variant="bodyLarge" style={styles.description}>
            A seamless digital twin of your physical closet, curated with precision and style.
          </Text>
        </View>

        <View style={styles.pagination}>
          <View style={[styles.dot, { backgroundColor: theme.colors.primary }]} />
          <View style={[styles.dot, { backgroundColor: '#D1D1D1' }]} />
          <View style={[styles.dot, { backgroundColor: '#D1D1D1' }]} />
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Light grey background like in the image
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  appName: {
    fontWeight: '700',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 40,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1A1A1A',
  },
  description: {
    textAlign: 'center',
    color: '#666666',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  button: {
    borderRadius: 25,
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OnboardingScreen;

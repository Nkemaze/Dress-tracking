import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, useTheme, Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text variant="displaySmall" style={[styles.appName, { color: theme.colors.primary }]}>
          AURA
        </Text>
        <Text variant="titleMedium" style={styles.subtitle}>
          Welcome back
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            mode="flat"
            placeholder="alex@example.com"
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon="email-outline" />}
            style={styles.input}
            underlineColor="transparent"
            activeUnderlineColor={theme.colors.primary}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.row}>
            <Text style={styles.label}>Password</Text>
            <TouchableOpacity>
              <Text style={[styles.forgotText, { color: theme.colors.primary }]}>Forgot?</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            mode="flat"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            left={<TextInput.Icon icon="lock-outline" />}
            style={styles.input}
            underlineColor="transparent"
            activeUnderlineColor={theme.colors.primary}
          />
        </View>

        <View style={styles.requirements}>
           <Text style={styles.requirementTitle}>Enter a strong password</Text>
           <View style={styles.requirementGrid}>
             <View style={styles.requirementItem}>
                <MaterialCommunityIcons name="check-circle-outline" size={16} color="#666" />
                <Text style={styles.requirementText}>8+ Characters</Text>
             </View>
             <View style={styles.requirementItem}>
                <MaterialCommunityIcons name="check-circle-outline" size={16} color="#666" />
                <Text style={styles.requirementText}>Uppercase</Text>
             </View>
             <View style={styles.requirementItem}>
                <MaterialCommunityIcons name="check-circle-outline" size={16} color="#666" />
                <Text style={styles.requirementText}>Number</Text>
             </View>
             <View style={styles.requirementItem}>
                <MaterialCommunityIcons name="check-circle-outline" size={16} color="#666" />
                <Text style={styles.requirementText}>Special Char</Text>
             </View>
           </View>
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          style={styles.loginButton}
          contentStyle={styles.loginButtonContent}
        >
          Login to Aura →
        </Button>

        <View style={styles.dividerContainer}>
           <View style={styles.line} />
           <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
           <View style={styles.line} />
        </View>

        <View style={styles.socialButtons}>
          <Button
            mode="outlined"
            onPress={() => {}}
            style={styles.socialButton}
            icon={() => <MaterialCommunityIcons name="google" size={20} color="#4285F4" />}
          >
            Google
          </Button>
          <Button
            mode="contained"
            onPress={() => {}}
            style={[styles.socialButton, { backgroundColor: '#1A1A1F' }]}
            icon={() => <MaterialCommunityIcons name="apple" size={20} color="#FFF" />}
          >
            Apple
          </Button>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.signupText, { color: theme.colors.primary }]}>Sign up for free</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F9FE',
    padding: 24,
    paddingTop: 80,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appName: {
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
  },
  subtitle: {
    color: '#666',
  },
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#F0F2FA',
    borderRadius: 12,
    height: 56,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '600',
  },
  requirements: {
    marginBottom: 24,
  },
  requirementTitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  requirementGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 4,
  },
  requirementText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  loginButton: {
    borderRadius: 16,
    marginBottom: 24,
  },
  loginButtonContent: {
    height: 56,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#EEE',
  },
  dividerText: {
    fontSize: 10,
    color: '#999',
    marginHorizontal: 10,
    fontWeight: '600',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 0.48,
    borderRadius: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    paddingBottom: 20,
  },
  footerText: {
    color: '#666',
  },
  signupText: {
    fontWeight: '600',
  },
});

export default LoginScreen;

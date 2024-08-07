import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {AppleButton} from '@invertase/react-native-apple-authentication';
import React from 'react';
import {RootStackParamList} from '../../App';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAuth} from '../contexts/Auth';
import {useTheme} from '@utils/ThemeContext';
import {useTranslation} from 'react-i18next';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

function WelcomeScreen({navigation}: Props) {
  const {colors} = useTheme();
  const {t, i18n} = useTranslation();
  const {googleSignIn, anonymousSignIn, appleSignIn} = useAuth();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.title, {color: colors.text}]}>
        {t('welcome.title')}
      </Text>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.primary}]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.buttonText, {color: colors.text}]}>
          {t('welcome.loginButton')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.secondary}]}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={[styles.buttonText, {color: colors.text}]}>
          {t('welcome.signupButton')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.text}]}
        onPress={googleSignIn}>
        <Text style={[styles.buttonText, {color: colors.secondary}]}>
          Google Sign in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.text}]}
        onPress={anonymousSignIn}>
        <Text style={[styles.buttonText, {color: colors.secondary}]}>
          Anonim
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.text}]}
        onPress={appleSignIn}>
        <Text style={[styles.buttonText, {color: colors.secondary}]}>
          Apple
        </Text>
      </TouchableOpacity>
      {/* <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: 160,
          height: 45,
        }}
        onPress={appleSignIn}
      /> */}
      <TouchableOpacity
        style={[styles.languageButton, {backgroundColor: colors.accent}]}
        onPress={toggleLanguage}>
        <Text style={[styles.buttonText, {color: colors.text}]}>
          {t('common.language')}: {i18n.language?.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  languageButton: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default WelcomeScreen;

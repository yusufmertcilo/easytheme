import en from '@/translations/en';
import { Language } from '@/context/LanguageContext';

const translations = {
  en,
  // Diğer diller buraya eklenecek
};

type TranslationKey = string;
type TranslationValue = string | number | boolean | null | undefined;

export function t(key: TranslationKey, language: Language = 'en'): TranslationValue {
  const keys = key.split('.');
  let value: any = translations[language] || translations['en'];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  return value || key;
} 
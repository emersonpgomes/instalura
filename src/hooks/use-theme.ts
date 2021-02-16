import { useState } from 'react';
import { getTheme, Themes } from '../components/theme/theme-config';

export function useTheme(initialTheme: Themes) {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  return {
    theme: getTheme(currentTheme),
    changeTheme: setCurrentTheme,
  }
}

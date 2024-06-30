import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LogoLight } from '../icons/LogoLight';
import { LogoNight } from '../icons/LogoNight';



export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      className="p-2"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode
        ? <LogoLight className="text-yellow-400 w-7"/>
        : <LogoNight className="text-gray-600 w-7"/>
      }
    </button>
  );
};
import { ThemeProvider } from './context/ThemeContext';
import { MemoryGame } from './components/MemoryGame';
import { ThemeToggle } from './components/ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
          <h1 className="text-xl font-bold">Memorama</h1>
          <ThemeToggle />
        </header>
        <main className="p-4">
          <MemoryGame />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

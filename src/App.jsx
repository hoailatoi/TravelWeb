import { useEffect, useState } from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import Content from './pages/Content';
import './Lang/language';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
      <Header isDarkMode={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <main className="flex-1">
        <Hero />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;

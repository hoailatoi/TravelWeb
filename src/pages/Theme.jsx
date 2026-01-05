export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <label className="flex items-center cursor-pointer space-x-2">
      <span className="text-sm text-gray-700 dark:text-gray-300">🌞</span>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDark}
          onChange={onToggle}
        />
        <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner dark:bg-gray-600"></div>
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
            isDark ? 'translate-x-5' : ''
          }`}
        ></div>
      </div>
      <span className="text-sm text-gray-700 dark:text-gray-300">🌙</span>
    </label>
  );
}

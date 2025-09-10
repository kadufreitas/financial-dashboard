import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center">
        <div className="mb-8 flex justify-center space-x-8">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={viteLogo}
              className="h-24 w-24 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:drop-shadow-[0_0_2em_#646cffaa]"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={reactLogo}
              className="h-24 w-24 animate-spin rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="mb-8 text-5xl font-bold text-gray-900 dark:text-white">
          Financial Dashboard
        </h1>

        <div className="mb-8 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <button
            type="button"
            onClick={() => setCount(count => count + 1)}
            className="rounded-lg border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-800"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Edit{' '}
            <code className="rounded bg-gray-100 px-2 py-1 dark:bg-gray-700">
              src/App.tsx
            </code>{' '}
            and save to test HMR
          </p>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;

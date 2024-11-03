// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
// import Auth from './assets/auth'; // Make sure 'Auth' is correctly exported from this file

// function App() {
//   // If you're using 'useState' but commented out the usage, I will leave it as is.
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       {/* Vite and React Logos
//       <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}

//       {/* Authentication Component */}
//       <Auth />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Auth from './auth';

function App() {
  return (
    <div>
        <Auth />
    </div>
  );
}

export default App;



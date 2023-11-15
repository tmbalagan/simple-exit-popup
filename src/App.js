import './App.css';

import ExitPopup from './components/ExitPopup';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Exit Popup Demo</h2>
      </header>
      <div className='main-content'>
        <p>Below scenarios we can find exit pop dialog</p>
        <ul>
          <li>Mouseover to switch tabs</li>
          <li>Set timeout after 5 seconds</li>
          <li>Scroll down the page more than 300px.</li>
        </ul>
      </div>
      <ExitPopup />
    </div>
  );
}

export default App;

import { Profile } from './components/Profile';
import { Links } from './components/Links';
import { EmailButton } from './components/EmailButton';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Profile />
        <Links />
      </div>
      <EmailButton />
    </div>
  );
}

export default App;


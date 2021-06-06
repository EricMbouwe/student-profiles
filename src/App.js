import Home from './pages/Home';
import { ProfileProvider } from './contexts/ProfileContext';

function App() {
  return (
    <div>
      <span>Home</span>
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    </div>
  );
}

export default App;

import Home from './containers/Home';
import { ProfileProvider } from './contexts/ProfileContext';

function App() {
  return (
    <div>
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    </div>
  );
}

export default App;

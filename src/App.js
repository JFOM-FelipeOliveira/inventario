import './App.css';
import { AuthProvider } from './contexts/auth';
import RotasApp from './routes/rotas';

function App() {
  return (
    <AuthProvider>
      <RotasApp />
    </AuthProvider>
  );
}

export default App;

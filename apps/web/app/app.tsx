import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import GamesPage from './pages/GamesPage';

export function App() {
  return (
    <Auth0Provider
      domain={process.env.NX_AUTH0_DOMAIN!}
      clientId={process.env.NX_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: process.env.NX_AUTH0_AUDIENCE!,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;

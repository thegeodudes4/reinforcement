import App from './App'
import './stylesheets/index.css';
import { store } from './state/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);
import { GoogleOAuthProvider } from "@react-oauth/google";

root.render(
    <Provider store={store}>
      <GoogleOAuthProvider clientId="126874123890-m8lumkjj2n2gd9l1kg0ci4g8v5h91kd1.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
);

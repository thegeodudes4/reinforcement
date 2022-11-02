import App from './App'
import './stylesheets/index.css';
import { store } from './state/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <Provider store={store}>
    <App />
  </Provider>
);

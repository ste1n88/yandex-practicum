import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import App from './components/app/app.jsx'
import './index.css'

// reducer
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './services/reducers';

// инициализация общего хранилища
const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

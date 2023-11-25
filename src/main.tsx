import ReactDOM from 'react-dom/client';
import App from './containers/App.tsx';
import './styles/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreContext, store } from './stores/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StoreContext.Provider value={store}>
      <Router>
            <App />
      </Router>
    </StoreContext.Provider>    
  ,
)

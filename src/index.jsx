import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import store from './redux/store';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
  <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>
  <ReactQueryDevtools initialIsOpem={false} position='bottom-right'/>
  </QueryClientProvider>
);

reportWebVitals();

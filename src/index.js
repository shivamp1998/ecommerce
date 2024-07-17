import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3}>
                <CssBaseline />
                <App />
            </SnackbarProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

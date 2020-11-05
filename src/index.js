import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import App from './App'
import * as serviceWorker from './serviceWorker'
import './assets/scss/style.scss'
// import rootReducer from './reducers/index' 

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   rootReducer,
//   composeEnhancers(
//       applyMiddleware(thunk)
//   )
// )

const theme = createMuiTheme({
  palette: {
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    typography: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: 14,
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
      fontFamilySecondary: "'Roboto Condensed', sans-serif",
    },
  },
});


const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

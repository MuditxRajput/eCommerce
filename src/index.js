// import { Apple } from '@material-ui/icons'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { AppProvider } from './productProvider';
import { Provider } from 'react-redux';
import store from './reduxToolkit/store';
// import { AppProvider } from './productProvider';
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>


,document.getElementById("root"));
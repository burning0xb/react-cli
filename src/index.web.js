import 'babel-polyfill';
import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './web/utils/configureStore';
import getRoutes from './web/routes';
import * as storage from './web/utils/browserStorage';
import '../assets/styles/global.less';

const initialState = {
  application: {
    user: JSON.parse(storage.get('application/user'))
  }
};

export const store = configureStore(initialState);

const component = getRoutes(store);

// 配置路由
ReactDOM.render(
  <div className="react-container">
    <Provider store={store}>
        {component}
    </Provider>
  </div>,
  document.getElementById('root')
);

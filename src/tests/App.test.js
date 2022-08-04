import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import App from '../App';

it('App Component snapshot test', () => {
  const AppRender = TestRenderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    .toJSON();
  expect(AppRender).toMatchSnapshot();
});

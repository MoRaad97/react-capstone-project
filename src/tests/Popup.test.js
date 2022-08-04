import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Popup from '../Components/popup';

it('popup Component snapshot test', () => {
  const PopupRender = TestRenderer
    .create(
      <Provider store={store}>
        <Popup />
      </Provider>,
    )
    .toJSON();
  expect(PopupRender).toMatchSnapshot();
});
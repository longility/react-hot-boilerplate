
import { AppContainer } from 'react-hot-loader';
import * as ReactDOM from "react-dom";
import * as React from "react";
import App from "./App";

declare let module: any;
const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));

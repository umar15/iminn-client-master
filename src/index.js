import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// styles
import "./styles/font.styles.css";
import "./styles/color.styles.css";
import "./styles/index.css";
import "./styles/custom-components.css";
import "./styles/checkbox.styles.css";
import "./styles/calendar.styles.css";
import "./styles/chat.styles.css";
import "./styles/ratings-statistic.styles.css";
import "./styles/button.styles.css";
import "./styles/sidebar.styles.css";
import "./styles/footer.styles.css";
import "./styles/scroll.styles.css";
import "./styles/success.styles.css";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

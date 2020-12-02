import ReactDOM from 'react-dom';
import App from './App';
import logger from "./services/loggerservices"

logger.init()

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);



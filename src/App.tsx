import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RoutesComponent from '@/router';
import store from '@/store/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RoutesComponent />
      </Router>
    </Provider>
  );
}

export default App;


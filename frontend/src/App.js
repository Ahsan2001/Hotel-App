import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Toast from './components/Toast/Toast';
import Routing from './routing'
import Context from '../src/contextApi/context'

function App() {
  return (
      <Context >
        <Routing />  
        <Toast/>
      </Context>
  );
}

export default App;
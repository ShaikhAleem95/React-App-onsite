//import logo from './logo.svg';
import './App.css';
// import Familiarprops from './Familiarprops';

import Avatar from './Avatar.js';
//import { getImageUrl } from './utils.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Avatar>
        size={100}
        person={{name: 'Katsuko Saruhashi',  imageId: 'YfeOqp2'}}
      </Avatar>
  );
}
      </header>
    </div>
  );
}

export default App;

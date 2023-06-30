import './App.css';
import Avatar from './Avatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Avatar>
        {/* person={{ fname ="shaikh aleem" , imageId="1bx5QH6"}} */}
        size={100}
        name={"shaikh aleem"}
        </Avatar>
      </header>
    </div>
  );
}

export default App;

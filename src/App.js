
import './App.css';
import NavBar from "./components/NavBar";
import BookSearch from "./components/BookSearch";

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className="app-container">
            <BookSearch/>
        </div>

    </div>
  );
}

export default App;

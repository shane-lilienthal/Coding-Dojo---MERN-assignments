import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Tom"} lastName = {"Foolery"} age = {37} hairColor = {"brown"} />
      <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {50} hairColor = {"red"} />
      <PersonCard firstName = {"James"} lastName = {"Bond"} age = {40} hairColor = {"black"} />
    </div>
  );
}

export default App;

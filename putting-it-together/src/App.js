import logo from './logo.svg';
import './App.css';
import Person from './components/PersonCard';


const people = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "black",
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "brown",
  },
  {
    firstName: "Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor: "brown",
  },
  {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "black",
  }
];

function App() {
  return (
    <div className="App">
      {people.map((person, index) => {
        return (
          <Person
            key = {index}
            firstName = {person.firstName}
            lastName = {person.lastName}
            age = {person.age}
            hairColor = {person.hairColor}
          />
        );
      })}
    </div>
  );
}

export default App;

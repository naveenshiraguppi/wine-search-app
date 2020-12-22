import { useState, useEffect} from 'react';
import logo from './logo.svg';
import icon from './ICON.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        <div>
        </div>
      </header>
    </div>
  );
}

function Results({ records }) {
  return (
    <ul>
      {
        <li className="label">{JSON.stringify(records, undefined, 2)}</li>
      }
    </ul>
  );
}
function SearchText() {
  const [val, setVal] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(null);
    fetch('http://localhost:8080/api/search/' + val)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, [val]);
  

  return (
    <>
        <input id="searchtext" name="searchtext" type="input"
             className="search" placeholder="Search by lot code or description...."
             value = {val}
             onChange={ e => setVal(e.target.value)}/>
       <Results records={data}/>
    </>
  );
}
function Search() {
    return ( 
        <>
          <div>
            
            <label className="label">Wine Search</label>  <img src={icon} className="inline" alt="icon"/>
            </div>
            <SearchText/>
            
        </>
      );
}
export default App;

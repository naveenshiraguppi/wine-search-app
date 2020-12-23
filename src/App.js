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

function SearchText() {
  const [val, setVal] = useState("");
  const [data, setData] = useState(null);
  
  useEffect(() => {
    console.log('val: ' + val);
    if(val) {
      setData(null);
      console.log('is array1: ' + Array.isArray(data));
      fetch('http://localhost:8080/api/search/' + val)
        .then(res => {return res.json()})
        .then(setData)
        .catch(console.error);
        
    }
  }, [val]);

  const result1 = ["one", "two"];

  function ResultLine (props) {
    return (
      <ul>
        { props.result != null && 
          props.result.map(e=> ( 
            <div className="searchResultBox">
              <p className="searchReslutLotCode">{e.lotCode}</p>
              <p className="searchReslutDesc">{e.description}</p>
            </div>
          ))}
      </ul>
    );
  }
  
  
  return (
    <>
        <input id="searchtext" name="searchtext" type="input"
             className="search" placeholder="Search by lot code or description...."
             value = {val}
             onChange={ e => setVal(e.target.value)}/>
        <ResultLine result={data}/>

        
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

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const axios = require("axios");
function App() {
  const [forms,setForms] = useState([]);
  // const [name, setName] = useState("");
  // const [country, setCountry] = useState([]);
  // const [fetching, setfetching] = useState("");
  // const url = `https://api.nationalize.io/?name=${name}`;
  // const search = async () =>{
  //
  //   // const res = await axios.get(url)
  //   // setCountry(res.data.country);
  //
  //
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setCountry(data.country);
  //   // const counry = data
  //   //   .then(res=>res.country)
  //   //   .then((res)=>setCountry(res))
  //
  // };

  const setusr = (e) => {
    console.log(e);
    setName(e);
  };

  return (
    <div className="App">
      <header className="App-header">
      <form>
      {form.map((item, index)=>(
        <input type="text" placeholder="name" />
      ))}
      </form>
  <!--      <input
          type="text"
          placeholder="UserName"
          onChange={(e) => setusr(e.target.value)}
        />
        <input type="submit" value="Submit" onClick={search} />
        <div>
        {country && country.map((item,key)=>(
          <h4 key={key}>country : {item.country_id}</h4>))
        }
        </div>-->
      </header>
    </div>
  );
}

export default App;

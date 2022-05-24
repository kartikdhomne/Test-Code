import './App.css';
import {useState, useEffect} from "react";
import Cardlist from "./Components/Cardlist"


function App() {
  const [value, setValue] = useState("");
  const [post, setPost] = useState([]);
  const [duplicate, setDuplicate] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>res.json())
    .then((data)=> {
      setPost(data)
      setDuplicate(data)
    })
  },[])

  const searchFunc=(search)=>{
    setDuplicate(post.filter((e)=>{
      return e["title"].toLowerCase().includes(search.toLowerCase())
    }))
  }
  
  return (
    <div className="App">
      <input className="searchbox" value={value} placeholder="Search here" onChange={(e)=>setValue(e.target.value)}/>
      <button className="btn" onClick={()=> searchFunc(value)}>Search</button>
      <Cardlist posts={duplicate}/>
    </div>
  );
}

export default App;

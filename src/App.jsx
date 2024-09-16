
import { useState } from 'react'
import './App.css'
import EnrolmentForm from './components/EnrolmentForm'

function App() {

  const [program,setProgram] = useState("UG");
  const [Useats,setUSeats] = useState(70);
  const [Pseats,setPSeats] = useState(45);

  const handleChange = (event) =>{
    setProgram(event.target.value);
  };

  const setUpdatedSeats = (updatedSeats) => {
        if(program == "UG") {
            setUSeats(updatedSeats);
        }else{
          setPSeats(updatedSeats);
        }
       
  };

  return (
    <div className="App">
     <div className="programs">
      <div><label>Remaining UG Setas - {Useats}</label></div>
      <div><label>Remaining PG Setas - {Pseats}</label></div>
      <br/>
      <br/>
      <label >Choose Program:</label>
      <select
        className="appDropDowns"
        onChange={handleChange}
        value={program}
      >
        <option value="UG">Undergraduate</option>
        <option value="PG">Postgraduate</option>
      </select>
     </div>

     <EnrolmentForm
        chosenProgram ={program}
        setUpdatedSeats={setUpdatedSeats}
        currentSeats={program === "UG" ? Useats : Pseats}
     />
    </div>
  )
}

export default App


import { useState } from 'react'
import './App.css'
import EnrolmentForm from './components/EnrolmentForm'

function App() {

  const [program,setProgram] = useState("UG");
  const [Useats,setUSeats] = useState(70);
  const [Pseats,setPSeats] = useState(45);

  const handleChange = (event) =>{
    setProgram(event.target.value);
    setPSeats(Pseats);
    setUSeats(Useats);
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
      <h3 className="title">Student Enrolment Forms</h3>
      <ul className="ulEnrol">

        <li className='parentLabels' onChange={handleChange}>

          <input
            type="radio"
            value="UG"
            name="programGroup"
            defaultChecked
          />
          Undergraduate
          <input type="radio" 
          value="PG" 
          name="programGroup"
          />
          Postgraduate
        </li>
          <li>
            <label className="parentLabels">
              Remaining {program} Seats - {program === "UG" ? Useats
              : Pseats}
            </label>
          </li>
      </ul>
      

     <EnrolmentForm
        chosenProgram ={program}
        setUpdatedSeats={setUpdatedSeats}
        currentSeats={program === "UG" ? Useats : Pseats}
     />
     </div>
    </div>
  )
}

export default App

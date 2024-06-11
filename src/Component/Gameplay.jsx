import {useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button,OutLineButton } from '../styled/Button'
import Rules from './Rules'

const Gameplay = () => {
  const [score,setScore]= useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [Error,setError] = useState("");
  const [showRules,setShowRules]= useState(false);



  const GenerateRandomNumber =(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}

const roleDice = () =>{
  if(!selectedNumber) {setError("Number must be selected");
    return;
  }



  
  
  const randomNumber = GenerateRandomNumber(1,7);
  setCurrentDice((prev) =>randomNumber);

  if(selectedNumber===randomNumber){
    setScore ((prev)=>prev+randomNumber);

  }
  else{
    setScore((prev)=>prev-1);
  }
  setSelectedNumber(undefined);
}
const ResetScore = () =>{
  setScore(0);
}


  return (
<MainContener>
  <div className="topSection">
    <TotalScore score={score}/>
    <NumberSelect 
    Error = {Error}
    setError={setError}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}/>
  </div>
  <RoleDice currentDice={currentDice} 
  roleDice={roleDice}/>
  <div className="btns">
  <OutLineButton onClick={ResetScore}>Reset</OutLineButton>
  <Button
  onClick={()=> setShowRules(prev=>!prev)}>{showRules ? "Hide": "show"}Show Rules</Button>
  </div>
  {showRules && <Rules/>}

</MainContener>
  )
}

export default Gameplay;

const MainContener= styled.main`
padding-top: 60px;
.topSection{
  display: flex;
  justify-content: space-around;
  align-items: end;


}
.btns{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap:10px;
}` ; 


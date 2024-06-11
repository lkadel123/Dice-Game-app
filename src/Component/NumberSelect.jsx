
import styled from 'styled-components'



const NumberSelect = ({ setError, Error, selectedNumber,setSelectedNumber}) => {
    const arryNumber = [1,2,3,4,5,6];

    const numberSlectorHandler =(value)=>{
      setSelectedNumber(value);
      setError("");
    } 

  return (
    <NumberContainer>
      <p className='Error'>{Error}</p>
      <div className="flex">
      {
            arryNumber.map((value,i)=>(
                <Box
                isSelected={value === selectedNumber} key={i}
                onClick={()=>numberSlectorHandler(value)}>{value}</Box>    
            ))
        }
      </div>
      <p>Select Number</p>
    </NumberContainer>
  )
}

export default NumberSelect

const NumberContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display:flex;
  gap: 24px;
}
p{
 font-size: 24px;
 font-weight: 700px; 
}
.Error{
  color:red;
}`;

const Box = styled.div`
height:72px;
width:72px;
border: 1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color: ${(props)=>(props.isSelected?"black":"white")};
color: ${(props)=>(!props.isSelected?"black":"white")};
`;

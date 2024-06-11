import React from 'react';
import styled from 'styled-components'
import { Button } from '../styled/Button';

const Home = ({toggle}) => {
  return (
    <Contener>
        <div>
            <img src="/Image/dices 1.png" alt="" /> 
        </div>

        <div className="Content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Contener>
  )
}

export default Home;
const Contener= styled.div`
height: 100vh;
width: 1182px;
align-items: center;
display:flex;
margin: 0 auto;
.Content{
    h1{
        font-size:96px;
        white-space: nowrap;
    }
}
`;



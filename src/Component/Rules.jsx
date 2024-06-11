import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContener>
        <h2>How To Play Dice Game</h2>
        <div className="text">
            <p>Select any number.</p>
            <p>Click on dice image.</p>
            <p>If selected number equals to dice number you will get score as dice{""}</p>
            <p>If you get wrong guess then one point will be dedcuted</p>
        </div>
      
    </RulesContener>
  )
}

export default Rules

const RulesContener = styled.div`
max-width:800px;
margin: 0 auto;
margin-top:20px;
border-radius:10px;
background-color: #fbf1f1;
padding:15px;
h2{
    font-size: 24px;
}
.test{
    margin-top:20px;
}
`;

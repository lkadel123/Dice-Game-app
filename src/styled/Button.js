import styled from 'styled-components';
export const Button= styled.button`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 10px;
    width: 220px;
    height: 44px;
    background-color:black;
    color:white;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: #9c9999;
        color:black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`;

export const OutLineButton= styled(Button)`
    background-color:white;
    color:black;
    border: 1px solid black;
`;
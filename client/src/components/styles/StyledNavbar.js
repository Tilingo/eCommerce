import styled from 'styled-components'

const StyledNavbar = styled.div`
padding: 0 5% 0 5%;
margin: 0;
height: 10.5vh;
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;
font-family: 'Pacifico', cursive;
color: white;


h1{
    font-family: 'Pacifico', cursive;
    color: #DF440D;
    font-size: 3em;
    margin: 0;
}

a{
    color: #EAC435;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        color: #00C8F0;
    }
}

button{
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus{
        outline: none;
    }

    svg{
        color: #EAC435; 

        &:hover{
            color: #00C8F0;
        }      
    }
}
`

export default StyledNavbar
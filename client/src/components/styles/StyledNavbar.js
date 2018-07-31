import styled from 'styled-components'

const StyledNavbar = styled.div`
width: 100vw;
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
    font-size: 3vw;
    margin: 0;
}

a{
    color: #EAC435;
    font-size: 1.2vw;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        color: #00C8F0;
    }
}

button{
    background: transparent;
    font-size: 1.2vw;
    border: none;
    cursor: pointer;
    padding: 0;

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

@media screen and (max-width: 600px){
    h1{
        font-size: 6vw;
    }

    a{
        font-size: 3vw;

        &:hover{
            color: #EAC435;
        }

        &:active{
            color: #00C8F0;
        }
    }

    button{
        font-size: 3vw;

        &:hover{
            color: #EAC435;
        }

        &:active{
            color: #00C8F0;
        }
    }
}

`

export default StyledNavbar
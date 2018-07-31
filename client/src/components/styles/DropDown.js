import styled from 'styled-components'

const StyledDropDown = styled.div`
font-family: 'Pacifico', cursive;
font-size: 1.5em;
color: #EAC435;
position: relative;

&:hover div{
    display: flex;

}

button{
    background: transparent;
    border: none;
    cursor: pointer;
    color: #EAC435;
    display: flex;
    align-items: center;
    padding: 0;

    &:focus{
        outline: none;
    }

}
div{
    display: none;
    padding: 10%;
    border: 2px solid;
    background-color: black;
    border-radius: 5px;
    width: 200px;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    margin-top: 1px;
    right: 0;
    line-height: 1.7;
    z-index: 1;

    a{
        font-size: 1.1em;
        color: #DF440D;

    }
}

@media screen and (max-width: 600px){
    div{
        margin-top: 15px;
    }
}
`

export default StyledDropDown
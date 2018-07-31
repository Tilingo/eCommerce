import styled from 'styled-components'

const StyledDropDown = styled.div`
font-family: 'Pacifico', cursive;
font-size: 1.5em;
color: #EAC435;
position: relative;

&:hover div{
    display: flex;
    left: 10px;
    top: 30px;
    padding: 5%;
    border: solid;
    width: inherit;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    line-height: 1.5;
    z-index: 1;
    font-size: 0.5em;
    }

button{
    font-family: 'Pacifico', cursive;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;
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
}
`

export default StyledDropDown
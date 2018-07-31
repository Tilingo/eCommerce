import styled from 'styled-components'

const SecondProduct = styled.div`
border: solid;
height: 475px;
width: 50vw;
display: flex;
justify-content: flex-start;
align-items: flex-end;
flex-direction: column;
background-image: url('https://www.thinkgeek.com/images/products/zoom/jmmi_the_keyboard_waffle_iron.jpg');
background-position: center;
background-color: #000000;
background-size: cover;
background-repeat: no-repeat;

div{
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    margin: 10px 20px 0 0;

    h2{
        font-family: 'Pacifico', cursive;
        color: #DF440D;
        font-size: 2em;
        text-shadow: 1px 1px black
    }
}

@media screen and (max-width: 600px){
    width: 100vw;
    height:37.5vh;
}
`

export default SecondProduct
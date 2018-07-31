import styled from 'styled-components'

const FirstProduct = styled.div`
border: solid;
height: 475px;
width: 50vw;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
background-image: url('https://microsites.lomography.com/diana/images/instant-sq.png?1529500677');
background-position: center;
background-color: #000000;
background-size: contain;
background-repeat: no-repeat;

div{
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 25px 0 0 25px;

    h2{
        font-family: 'Pacifico', cursive;
        color: #DF440D;
        font-size: 2em;
    }
}

@media screen and (max-width: 600px){
    width: 100vw;
    height:37.5vh;
}
`

export default FirstProduct
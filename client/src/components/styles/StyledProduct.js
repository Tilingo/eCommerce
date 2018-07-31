import styled from 'styled-components'

const StyledProduct = styled.div`
border: solid;
width: 50vw;
overflow: hidden;
height:60vh;

@media screen and (max-width: 600px){
    width: 100vw; 
    height:37.5vh;

    img{
        max-width: 100%;
        height: auto;
    }
}

`

export default StyledProduct
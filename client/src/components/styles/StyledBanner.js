import styled from 'styled-components'

const StyledBanner = styled.section`
width: 100vw;
height: 35vh;
display: flex;
align-items: center;
background-color: #DF440D;

img{
    background-color: #E1E0DA;
    padding: 1% 2%;
    width: 100vw;
}

@media screen and (max-width: 600px){
    height: 15vh;
}
`

export default StyledBanner
import styled from 'styled-components'

const StyledFeaturedProduct = styled.section`
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 100vw;
height: 60vh;
background-image: url('https://orig00.deviantart.net/8eed/f/2010/243/7/2/vintage_bike_png_by_absurdwordpreferred-d2xq8bu.png');
background-size: contain;
background-repeat: no-repeat;
background-position: center;
background-color: #EAC435;

div{
    margin: 20px 0 0 40px;

    h2{
        font-family: 'Pacifico', cursive;
        color: #DF440D;
        font-size: 3em;
        text-shadow: 1px 1px black;
        margin: 0;
    }
}

@media screen and (max-width: 600px){
    background-position: 50% 100%;
    div{
        margin: 20px 0 0 0;
        text-align: center;
        h2{
            font-size: 2.3em;   
        }
        h1{
            margin: 0;
        }
    }
}

`

export default StyledFeaturedProduct
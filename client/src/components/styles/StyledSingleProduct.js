import styled from 'styled-components'

const StyledSingleProduct = styled.div`
display: flex;
justify-content: center;

img{
    max-width: 600px;
    box-shadow: 0px 0px 19px 1px rgba(0,0,0,0.75);
}

div{
    margin-left: 100px;

    h1{
        font-family: 'Pacifico', cursive;
        color: #DF440D;
        font-size: 3em;
        text-shadow: -1px 1px black;
        text-align: center;
    }

    p{
        font-size: 1.2em;
    }

    h2{
        margin: 0 0 10px 0;
        align-self: flex-start;
    }

    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
}

@media screen and (max-width: 600px){
    margin: 5% 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        max-width: 80vw;
    }
    div{
        margin: 20px 0 0 0;
        align-items: center;

        h1{
            font-size: 2em;
            text-align: center;
        }
    }

}
`

export default StyledSingleProduct
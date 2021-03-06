import styled from 'styled-components'

const Slide = styled.div`
display: flex;
justify-content: flex-end;
width: 100vw;
height: 90vh;
padding: 0;
background-image: url('https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4910c787e5c5a31049583e85aa109c80&auto=format&fit=crop&w=1050&q=80');
background-size: cover;
background-position: center;

div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 3% 5% 0 0;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #DF440D;
    height: 15vh;
    padding: 1%;
    border-radius: 5px;
    box-shadow: -8px 11px 5px 0px rgba(0,0,0,0.75);

    span{
        font-family: 'Pacifico', cursive;
        color: #DF440D;
    }
    
    p{
        font-size: 2em;
    }
}

h1 {
    /* margin: 0; */
    color: black;
    font-size: 2.5em;

}

@media screen and (max-width: 600px){
    justify-content: center;

    div{
    margin: 10% 0 0 0;
    height: 15vh;
    width: 90vw;
    box-shadow: -8px 11px 5px 0px rgba(0,0,0,0.75);

    span{
        font-family: 'Pacifico', cursive;
        color: #DF440D;
    }
    
    p{
        font-size: 1.2em;
    }

    h1{
        font-size: 1.5em;
    }
} 
}
`

export default Slide
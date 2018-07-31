import styled from 'styled-components'

const SlideTwo = styled.div`
display: flex;
justify-content: center;
width: 100vw;
height: 90vh;
padding: 0;
background-image: url('https://images.unsplash.com/photo-1497290368232-b6323e8ee5ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4ba39bf2bb04748a492da4bf5149912&auto=format&fit=crop&w=1050&q=80');
background-size: cover;
background-position: center;

div{
    display: flex;
    width: 80vw;
    /* line-height: 1.1; */
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 3% 0 0 0;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #DF440D;
    height: 20vh;
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
    font-size: 3em;
}

@media screen and (max-width: 600px){

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

export default SlideTwo
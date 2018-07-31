import styled from 'styled-components'

const SlideThree = styled.div`
display: flex;
justify-content: flex-start;
width: 100vw;
height: 90vh;
padding: 0;
background-image: url('https://images.unsplash.com/photo-1523053537371-688443deef0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb01eb03e251b486e9fc3638479b5fef&auto=format&fit=crop&w=1500&q=80');
background-size: cover;
background-position: center;

div{
    display: flex;
    width: 50vw;
    /* line-height: 1.1; */
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 5% 0% 0 2%;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #DF440D;
    height: 25vh;
    /* padding: 1%; */
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
    font-size: 3em;
    color: black;
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

export default SlideThree
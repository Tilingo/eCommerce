import styled from 'styled-components'

const CartItemQty = styled.div`
color: white;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 7vw;
height: 5vh;
border: 1px solid;
background-color: #0C1C4C;

p{
    margin: 0;
    color: #E1E0DA;
    font-size: 1.25em;
}

button{
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #E1E0DA;

    &:focus{
        outline: none;
    }
}

@media screen and (max-width: 600px){
    width: 25vw;
    height: 8vh;
}

@media screen and (min-width: 601px) and (max-width: 1000px){

    width: 12vw;
    height: 7vh;
}
`

export default CartItemQty
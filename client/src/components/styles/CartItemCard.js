import styled from 'styled-components'

const CartItemCard = styled.div`
width: 25vw;
height: 15vh;
display: flex;
margin: 5% 0;

img{
    width: 10vw;
}

@media screen and (max-width: 600px){
    width: 80vw;

    img{
    width: 30vw;
}
}

@media screen and (min-width: 601px) and (max-width: 1000px){

    img{
        width: 20vw;
    }
}


`

export default CartItemCard
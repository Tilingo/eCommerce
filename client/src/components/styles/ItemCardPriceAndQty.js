import styled from 'styled-components'

const ItemCardPriceAndQty = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 15vw;

h4{
    margin: 0;
}

@media screen and (max-width: 600px){
    width: 50vw;
}

@media screen and (min-width: 601px) and (max-width: 1000px){
    width: 30vw;
}
`

export default ItemCardPriceAndQty
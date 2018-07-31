import styled from 'styled-components'

const HomeProductsWrap = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

@media screen and (max-width: 600px){
    grid-template-columns: 1fr;
}
`

export default HomeProductsWrap
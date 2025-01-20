import { styled } from "styled-components";

const RodapeEstilo = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`

const Container = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    li {
        display: inline-block;
        margin-right: 32px;
    }
`
const Icone = styled.img`
    width: 40px;
`

const Texto = styled.p`
    font-size: 36px;
    color: white;
    margin: 0;
`

function Rodape () {
    return(
        <RodapeEstilo>
            <Container>
                <a href="#">
                    <Icone src="./public/imagens/redes/facebook.svg" alt="Logo do Facebook" />
                </a>
                <a href="#">
                    <Icone src="./public/imagens/redes/twitter.svg" alt="Logo do Twitter" />
                </a>
                <a href="#">
                    <Icone src="./public/imagens/redes/instagram.svg" alt="Logo do Instagram" />
                </a>
            </Container>
            <Texto>Desenvolvido por Miuxa</Texto>
        </RodapeEstilo>
    )
}

export default Rodape
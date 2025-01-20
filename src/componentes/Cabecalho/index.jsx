import { styled } from "styled-components"
import CampoTexto from "../CampoTexto";


const HeaderEstilizado = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;

    img {
        max-width: 212px;
    }
`

const Cabecalho = ({ setFiltro }) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/Logo.png" alt="Logo do Space App" />
            <CampoTexto setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho;
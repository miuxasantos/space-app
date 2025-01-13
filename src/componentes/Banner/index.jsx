import { styled } from "styled-components";


const FiguraEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 1;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 60px;
`

const Banner = ({texto, backgroungImage}) => {
    return (
        <FiguraEstilizada $backgroundImage={backgroungImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FiguraEstilizada>

    )
}

export default Banner;
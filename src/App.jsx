import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import bannerBackground from './assets/banner.png'
import Banner from "./componentes/Banner"

const FundoGrad = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0px auto;  
`

function App() {

  return (
    <FundoGrad>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <BarraLateral />
        <Banner 
        texto="A galeria mais completa de fotos do espaço!"
        backgroungImage={bannerBackground}
        />
      </AppContainer>
    </FundoGrad>
  )
}

export default App

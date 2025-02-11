import Header from './components/header'
import Footer from './components/footer'
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div> 
      <Header/>
      <main class="main py-5">
        <Container>
          <HomeScreen/>
        </Container>

      </main>
      <Footer/>
    </div>
  )
}

export default App

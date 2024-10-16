import Header  from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/Maincontent"
import WelcomeMessage from "./components/WelcomeMessage"
import Expression from "./components/Expression"
import Greeting from "./components/Greeting"
import ProductInfo from "./components/ProductInfo"
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Header/>
      <Footer/>
      <MainContent/>
      <WelcomeMessage/>
      <Expression/>
      <Greeting/>
      <ProductInfo/>
    </div>
  )
}

export default App
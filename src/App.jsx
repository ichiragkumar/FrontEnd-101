import Header  from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/Maincontent"
import WelcomeMessage from "./components/WelcomeMessage"
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Header/>
      <Footer/>
      <MainContent/>
      <WelcomeMessage/>
    </div>
  )
}

export default App
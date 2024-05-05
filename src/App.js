// import Muse from "./component/muse/muse"
import  Header  from "./component/header/header";
import Main from "./component/main/main"
import Footer from "./component/footer/footer";
import "./App.scss"
function App() {
  return (
    <div className="App" >
      {/* <Muse/> */}
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

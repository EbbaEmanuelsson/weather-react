import './App.css';
import Search from "./Search";
import Footer from "./Footer";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
  crossorigin="anonymous"
/>;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;

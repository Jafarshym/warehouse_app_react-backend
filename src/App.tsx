import { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import HelloWorld from './components/Head'
import ContentAll from './components/Content'
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ComercCard from "./components/ComercCard"
import './App.css'

function App() {
        const [search, setSearch] = useState("");
        // console.log(search);
  return (
    <>
      <div className="container">
          <header className="header">
            <HelloWorld setSearch={setSearch} />
         </header>

          <main className="main">
            <Routes>
                <Route path="/" element={<ContentAll search={search}/>} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/edit/:id" element={<EditProduct />}/>
                <Route path="/comerc" element={<ComercCard />}/>
            </Routes>
          </main>

          <footer className="footer">
            <p>© 2026 Все права защищены</p>
          </footer>
      </div>
    </>
  )
}

export default App
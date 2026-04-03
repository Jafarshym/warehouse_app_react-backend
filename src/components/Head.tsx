import { Link } from "react-router-dom";
// import { useState } from 'react'
import './Head.css'
export default function HelloWorld() {
  return (
            <div className="headboos">
                <div className="blocklogo">Logo</div>
                <div className="blocknav">
                    <ul>
                        <li><Link to="/" className="link_nav">Все товары</Link></li>
                        <li><Link to="/add" className="link_nav">Добовление товара</Link></li>
                        <li><Link to="/comerc" className="link_nav">Магазин</Link></li>
                        <li><input type="text" className="searge-my"></input></li>
                        
                    </ul>
                </div>
            </div>
        );
}

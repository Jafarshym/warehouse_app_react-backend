import { Link } from "react-router-dom";
import { useState } from 'react'
import './Head.css'

type HeadProps = {
  setSearch: (value: string) => void
}

export default function HelloWorld({ setSearch }: HeadProps) {

      const [value, setValue] = useState("")

        function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            const val = e.target.value

            setValue(val)

            if (val.length >= 3) {
            setSearch(val)
            } else {
            setSearch("")
            }
        }
  return (
            <div className="headboos">
                <div className="blocklogo">Logo</div>
                <div className="blocknav">
                    <ul>
                        <li><Link to="/" className="link_nav">Все товары</Link></li>
                        <li><Link to="/add" className="link_nav">Добовление товара</Link></li>
                        <li><Link to="/comerc" className="link_nav">Магазин</Link></li>
                        <li><input 
                                type="text" 
                                className="form-control" 
                                placeholder="Поиск..."
                                value={value}
                                onChange={handleChange}>
                                </input>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
}

import { useState } from "react";
import './AddProduct.css'

function AddProduct(){
    const [name, setName] = useState("");
    const [unit, setUnit] = useState("");
    const [minStock, setMinStock] = useState(0);
    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const data = {
            products:[
                {
                    name: name,
                    unit:unit,
                    min_stock: Number(minStock),
                },
            ],
        };

        try {
            const res = await fetch("http://localhost:8000/products/bulk",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),

            }

            );
            if (!res.ok) throw new Error("Ошибка при отправке");
            const result = await res.json();
            console.log("Усрех:", result);
            // очистка формы
            setName("");
            setUnit("");
            setMinStock(0);

        } catch (err) {
            console.error("Ошибка:", err);
        }
    }
    return(
        <>
            <div className="master_conteiner">
                <div className="div_h1">
                    <h1>Добавление нового товара</h1>
                </div>
                <div className="div_content">
                    <div className="div_form">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Наименование</label>
                                <input type="text" className="form-control" value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Еденица измерения</label>
                                <input type="text" className="form-control" value={unit}
                                    onChange={(e) => setUnit(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Количество</label>
                                <input type="text" className="form-control" value={minStock}
                                    onChange={(e) => setMinStock(Number(e.target.value))} />
                            </div>                         
                            <button type="submit" className="btn btn-primary">Создать</button>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    );
}
export default AddProduct
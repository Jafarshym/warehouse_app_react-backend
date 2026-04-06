import { useEffect, useState } from "react";
import axios from "axios";
import "./ComercCard.css";

type Product = {
  id: number;
  title: string;
  description: string;
  images: string;
  price: number;
  
  
};

export default function ComercCard(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(
        () => {
            async function getProducts() {
                try{
                        const res = await axios.get("https://dummyjson.com/products/");
                        setProducts(res.data.products);
                }catch(err){
                    console.error(err);
                }
                
            }
            getProducts();
        }, []
    );



    return(
        <>
        <div className="div_root_master">
            <div className="master_conteiner">
                <div className="div_h1">
                    <h1>Магазин</h1>
                </div>
                <div className="master-card">
                    {products.map((p) => (
                    <div key={p.id} className="my-card">
                        
                            
                                <img src={p.images[0]} className="card_img" alt="..." />
                                <div className="card_body">
                                    <h5 className="card_title_my">{p.title}</h5>
                                    <div className="discription_my">
                                        <p className="">{p.description}</p>
                                    </div>
                                </div>
                                <div className="price_card">
                                   <div className="price">{p.price} тенге</div>
                                   <div className="price_order">
                                    <button className="button_card_my">+</button>
                                    </div> 
                                </div>
                            
                        
                    </div>
                     ))}
                </div>
                   
            </div>
        </div>
        </>
    );
}
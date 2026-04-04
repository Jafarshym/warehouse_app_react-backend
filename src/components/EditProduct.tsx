import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AddProduct.css'

type Product = {
  id: number;
  name: string;
  unit: string;
  min_stock: number;
};

export default function EditProduct() {
   const { id } = useParams();
   const [product, setProduct] = useState<Product>({
                                                        id: 0,
                                                        name: "",
                                                        unit: "",
                                                        min_stock: 0,
                                                        });
   const navigate = useNavigate();
   useEffect(() => {
        async function oneproduct() {
            try{
                const res = await axios.get(`http://localhost:8000/OneProduct/${id}`);
                // console.log(res.data)
                setProduct(res.data);
            } catch(err){
                console.error(err);
            }
            
        }
        oneproduct();
   }, [id]

   ) 

   async function updateproduct(e: React.FormEvent) {
        
        e.preventDefault();
        try{
             await axios.put(`http://localhost:8000/products/${id}`, product);
             setTimeout(() => {
                    navigate("/");
                    }, 300);
        }catch(err){console.error(err)}
   }


  return (
    <>
    <div className="div_root_master">
        <div className="master_conteiner">
            <div className="div_h1">
                <h1>Редактирование товара id: {id}</h1>
            </div>
            <div className="div_content">
                <div className="div_form">
                    <form  onSubmit={updateproduct}>
                        <div className="mb-3">
                            <label className="form-lable">Наименование</label>
                            <input type="text" className="form-control" value={product?.name || ""}
                                onChange={(e) =>
                                    setProduct(prev => ({
                                        ...prev,
                                        name: e.target.value
                                    }))
                                    }
                            />
                        </div>
                                                <div className="mb-3">
                            <label className="form-lable">Еденица измерения</label>
                            <input type="text" className="form-control" value={product?.unit || ""}
                                onChange={(e) =>
                                    setProduct(prev => ({
                                        ...prev,
                                        unit: e.target.value
                                    }))
                                    }
                            />
                        </div>
                                                <div className="mb-3">
                            <label className="form-lable">Количесво</label>
                            <input type="text" className="form-control" value={product?.min_stock || ""}
                                onChange={(e) =>
                                    setProduct(prev => ({
                                        ...prev,
                                        min_stock: Number(e.target.value)
                                    }))
                                    }
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Редактировать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>    
    </>


  );
}
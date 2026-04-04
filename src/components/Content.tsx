
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Content.css'

type Product = {
  id: number;
  name: string;
  unit: string;
  min_stock: number;
};
type ContentProps = {
  search: string
}


function ContentAll({ search }: ContentProps) {
   const [products, setProducts] = useState<Product[]>([]);
   const navigate = useNavigate();
  useEffect(() => {
    async function getProducts() {
      try {
        if(!search){
          const res = await axios.get<Product[]>("http://localhost:8000/products/");
          
          setProducts(res.data);
          
        }else{
         const res = await axios.get<Product[]>(`http://localhost:8000/search/${search}`);
         console.log(`Строка поиска : ${search}`);
         setProducts(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getProducts();
  }, [search]);

          async function delProduct(id: number){
                const res = await fetch(`http://localhost:8000/products/${id}`,{
                  method: "DELETE",
                }

                );
                if(!res.ok){
                  throw new Error("Ошибка удалена");
                }
                setProducts(prev => prev.filter(p => p.id !== id));
                console.log(`Deleted : ${id}`);
        }

  return (
    <div className="div_root_master">
      <div className="master_conteiner">
        <div className="div_h1">
            <h1>Список складских товаров</h1>
        </div>  
        <div className="container mt-4">

          {/* Заголовок */}
          <div className="d-flex fw-bold border-bottom py-2">
            <div className="flex-fill border_div">ID</div>
            <div className="flex-fill border_div">Название</div>
            <div className="flex-fill border_div">ед</div>
            <div className="flex-fill border_div">Stock</div>
            <div className="flex-fill border_div">Edit</div>
            <div className="flex-fill border_div">Del</div>
          </div>

          {/* Данные из API */}
          {products.map((p) => (
            <div key={p.id} className="d-flex border-bottom py-2">
              <div className="flex-fill border_div">{p.id}</div>
              <div className="flex-fill border_div">{p.name}</div>
              <div className="flex-fill border_div">{p.unit}</div>
              <div className="flex-fill border_div">{p.min_stock}</div>
              <div className="flex-fill border_div">
                <button className="btn btn-info" onClick={() => navigate(`/edit/${p.id}`)}>Edit</button>
              </div>
              <div className="flex-fill border_div">
                <button className="btn btn-danger" onClick={ () => delProduct(p.id) } >Del</button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default ContentAll;

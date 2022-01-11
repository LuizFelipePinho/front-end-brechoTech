import React,{useEffect, useState} from "react";
import Gallery from "./Gallery/Gallery";
import HotDeal from "./HotDeal/HotDeal";
import axios from 'axios'
import Product from "./Gallery/Card/Card";

import Input from '../Components/Products/Input'

export default function Pages() {
  const [produtos, setProdutos] = useState([]) ;
  
  const getData = async () => {
   
    await axios.get('/product')
    .then(response => {
        setProdutos(response.data)
       
    })
  }
  useEffect(() => {
    getData()
  })
  return (
    <div>
      <HotDeal />
      <Gallery>
      {
               produtos.map(product => (
                 <Product
                   id={product.id}
                   image={product.productPhotosHard}
                   title={product.modelHard}
                   type={product.typeHard}
                   preco={product.priceHard}
                   seller={product.Vendedor.name}
                   key={product.id}
                 />
               ))
             }
      </Gallery>
      
      
      {/* <HotDeal /> */}
      {/* <Input /> */}
     
    </div>
  );
}

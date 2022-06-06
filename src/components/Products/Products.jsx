import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product/Product";


const Products = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:8080/products");

      setData(res.data);
    };
    getData();
  }, []);



  return <div>
    {data.map((e) => (
      <Product product={e}/>
    ))}
  </div>;
};

export default Products;

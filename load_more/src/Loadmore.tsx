import React, { useEffect, useState } from "react";
import "./App.css";

interface Product {
  id: string;
  thumbnail: string;
  title: string;
}

const Loadmore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0); // State for total

  const fetchTotal = async (): Promise<void> => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: { total: number } = await response.json();
      setTotal(data.total); // Update total state
    } catch (error) {
      console.error("Error fetching total:", error);
    }
  };

  const fetchProdcuts = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result?.products?.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
      setLoading(false);
    } catch (e) {
      console.error("Error fetching products:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotal(); // Fetch total when component mounts
  }, []);

  useEffect(() => {
    fetchProdcuts(); // Fetch products when count changes
  }, [count]);

  if (loading) {
    return <div>Loading Data! Please wait</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Load more</button>
        <p>
          {count === 0 ? 20 : (count + 1) * 20}/{total}
        </p>
      </div>
    </div>
  );
};

export default Loadmore;

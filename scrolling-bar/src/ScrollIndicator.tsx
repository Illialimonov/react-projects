import React, { useEffect, useState } from "react";
import "./index.css";

interface ScrollIndicatorProps {
  url: string;
}

interface Product {
  id: string; // Ensure each product has a unique identifier
  title: string;
}

const ScrollIndicator = ({ url }: ScrollIndicatorProps) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const jsonData = await response.json();

      if (jsonData && jsonData.products) {
        setData(jsonData.products);
      }
    } catch (error) {
      setErrorMsg("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleScrollPercentage() {
    const scrollingAmount = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrollingAmount / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (loading) {
    return <div>Loading data, please wait...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data.length > 0 ? (
          data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;

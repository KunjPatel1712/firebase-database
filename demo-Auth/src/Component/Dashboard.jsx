import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {data.map((el) => (
          <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" }} key={el.id}>
            <img src={el.image} alt={el.title} style={{ width: "100%", height: "auto", borderRadius: "10px", marginBottom: "15px" }} />
            <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>{el.title}</h4>
            <h6 style={{ fontSize: "16px", color: "#777" }}>{el.category}</h6>
            <p style={{ fontSize: "18px", color: "#4caf50", marginTop: "10px" }}>Rs. {el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

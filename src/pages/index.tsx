import React from "react";
import ListProducts from "@components/Productos/listProduct";
import Producto from "models/producto";
//getStaticProps
//getServerSideProps
export const getStaticProps =  async () => {
  const response =  await fetch("https://platzi-avo.vercel.app/api/avo")
  const {data:productList} = await response.json();
  return {
    props: {
      productList
    }
  };
};

const HomePage = ({productList}:{productList:Producto[]}) => {
  return (
    <div>
      <ListProducts productList={productList}/>
    </div>
  );
};

export default HomePage;

import ListProducts, { ProductListProp } from "@components/Productos/listProduct";
import Producto from "@models/producto";
import React from "react";


//getStaticProps
//getServerSideProps
export const getStaticProps =  async () => {
  const response =  await fetch("https://platzi-avo.vercel.app/api/avo")
  const productList:ProductListProp = await response.json();
  return {
    props: {
      productList
    }
  };
};

const HomePage = ({ productList }:ProductListProp) => {
  return (
    <div>
      <ListProducts productList= { productList }/>
    </div>
  );
};

export default HomePage;

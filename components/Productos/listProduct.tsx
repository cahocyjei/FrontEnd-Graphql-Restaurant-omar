import React from "react";
import Producto from "@models/producto";
import styles from "@/styles/products.module.css";
import Link from "next/link";
import { Card, Image } from "semantic-ui-react";

const ListProducts = ({ productList }: { productList: Producto[] }) => (
  <div>
    <h1 className={styles.h1}>LISTA DE AVOCADOS</h1>
    {productList.map((prod) => (
      <div className="ui container" >
        <div className="ui three cards"style={{display:"inline-block"}}>
          <div className="card">
            <div className="content">
              <Link href={`/products/api/${prod.id}`}>
                <Image src={prod.image}></Image>
                <div className="header">{prod.name}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ListProducts;

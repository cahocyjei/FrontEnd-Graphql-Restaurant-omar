import React from 'react'
import Producto from "@models/producto";
import styles from "@/styles/products.module.css";
import Link from 'next/link';

const ListProducts = ({productList}:{productList:Producto[]}) => (
    <div>
      <h1 className={styles.h1}>LISTA DE AVOCADOS</h1>
      <table className={styles.table}>
        
        <thead>
          <th className={styles.th}>Id</th>
          <th className={styles.title}>Name</th>
          <th className={styles.th}>Price</th>
          <th className={styles.title}>Image</th>
        </thead>
        <tbody>
          {productList?productList.map((prod) => (
                <tr>
                  <td className= {styles.textDate}>{prod.id}</td>
                  <td className= {styles.textDate}>{prod.name}</td>
                  <td className= {styles.textDate}>{prod.price}</td>
                  <Link href={`/products/api/${prod.id}`}>
                    <td className= {styles.textDate}><img className={styles.imag} src={prod.image} alt="Foto"></img> </td>
                  </Link>
                </tr>
              )): null}
        </tbody>
      </table>
    </div>
    
  )

export default ListProducts
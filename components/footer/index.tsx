import React from 'react'
import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
    <div >
      <div className={styles.footer}>
        <div className={styles.col1}>
          <img src="/images/avocados.jpg" style={{width:100,borderRadius:100,height:100}} alt="NASA" />
        </div>
        <div className={styles.col2}>
          <h2>cahocyjei@gmail.com</h2>
        </div>
        <div className={styles.col3}></div>
      </div>
    </div>
  )
}

export default Footer

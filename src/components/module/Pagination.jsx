import React, { useState } from 'react'

import styles from "../css/pagination.module.css"

function Pagination({pagination,setPagination}) {
   

    const previousHandler =()=>{
        if (pagination <= 1) return 
        setPagination( num => num - 1)
    }

    const nextHandler =()=>{
        if (pagination >= 10) return 
        setPagination( num => num + 1)
    }



  return (
    <div className={styles.pagination}>
        <button onClick={previousHandler} className={pagination ===1? styles.disabled:null}>Previous</button>
         <p className={pagination ===1 ? styles.selected : null}>1</p>
         <p className={pagination ===2 ? styles.selected : null}>2</p>
         <span>...</span>
          {
            pagination>2 && pagination<9 && (
                <>
                <p className={styles.selected}>{pagination}</p>
                <span>...</span>
                </>
            )
          }
         <p className={pagination ===9 ? styles.selected : null}>9</p>
         <p className={pagination ===10 ? styles.selected : null}>10</p>
        <button onClick={nextHandler} className={pagination ===10? styles.disabled:null}>Next</button>
    </div>
  )
}

export default Pagination
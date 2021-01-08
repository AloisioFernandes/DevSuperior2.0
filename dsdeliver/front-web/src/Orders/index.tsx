import React, { useEffect, useState } from 'react'
import './styles.css'
import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import OrderLocation from './OrderLocation'

import { OrderLocationdata, Product } from './types'
import { fetchProducts } from '../api'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>()

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data)) //response.data vem do axios
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} /> {/*Componente filho está enviando uma função para componente pai*/}
    </div>
  )
}

export default Orders
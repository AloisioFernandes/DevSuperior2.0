import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './styles.css'

import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import OrderLocation from './OrderLocation'
import OrderSummary from './OrderSummary'
import Footer from '../components/Footer'

import { OrderLocationData, Product } from './types'
import { fetchProducts, saveOrder } from '../api'
import { checkIsSelected } from './helpers'

function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data)) //response.data vem do axios
      .catch(() => {
        toast.warning('Erro ao listar produtos')
      })
  }, [])

  const handleSelectProduct = (product: Product) => { //funcção que será chamada pelo clique em um card. Será executada por ser passada como propriedade
    const isAlreadySelected = checkIsSelected(selectedProducts, product)
  
    if (isAlreadySelected) { //verifica se item está selecionado
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else { //adiciona novo produto selecionado
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id })); //percorrendo lista de produtos selecionados e extraindo apenas ID
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }

  return (
    <>
      <div className="orders-container">
        <StepsHeader />
        <ProductsList 
          products={products} 
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation onChangeLocation={location => setOrderLocation(location)} /> {/*Componente filho está enviando uma função para componente pai*/}
        <OrderSummary 
          amount={selectedProducts.length} 
          totalPrice={totalPrice} 
          onSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </>
  )
}

export default Orders
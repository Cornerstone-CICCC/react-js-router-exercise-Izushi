import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Product } from "../../types/product.types"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const getProductById = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    getProductById()
  }, [id])

  return (
    <div>
      <h1>Product Detail</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ProductDetail
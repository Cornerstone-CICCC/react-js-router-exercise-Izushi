import { useEffect, useState } from "react"
import type { Product } from "../../types/product.types"
import { Link } from "react-router-dom"

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      setProducts(data.products)
    }
    getProducts()
  }, [])

  return (
    <>
      <h1>Products list</h1>
      <ul className="grid grid-cols-3 gap-4">
        {products?.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsList
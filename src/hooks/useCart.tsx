// shopping cart hooks
import { useEffect, useState } from 'react'
import cartHelper from '../helper/cart'
import type { CartItem, CartListener } from '../helper/cart'

/**
 * shopping cart status hooks
 * @returns
 */
export function useCart (): {
  total: number
  productTotal: number
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (item: CartItem) => void
  update: (item: CartItem) => void
  clear: () => void
} {
  const [total, setTotal] = useState(0)
  const [productTotal, setProductTotal] = useState(0)
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    setTotal(cartHelper.total)
    setProductTotal(cartHelper.productTotal)
    setItems(cartHelper.items)

    const listener: CartListener = cart => {
      setTotal(cart.total)
      setProductTotal(cart.productTotal)
      setItems(cart.items)
    }
    cartHelper.registerListener(listener)

    return () => {
      cartHelper.removeListener(listener)
    }
  }, [])

  return {
    total,
    productTotal,
    items,
    add: item => { cartHelper.add(item) },
    remove: item => { cartHelper.remove(item) },
    update: item => { cartHelper.update(item) },
    clear: () => { cartHelper.clear() }
  }
}
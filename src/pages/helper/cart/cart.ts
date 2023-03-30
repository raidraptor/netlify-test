export interface CartItem {
  id: string
  name: string
  price: number // unit price
  quantity: number
}

export type CartUpdateItem = Omit<CartItem, 'price'>

export interface CartProfile {
  items: CartItem[]
  total: number // count of all items purchased by the user
  productTotal: number // count of all products purchased by the user
}

export type CartListener = (cart: Cart) => void

const LOCAL_STORAGE_CART_KEY = 'shopping_cart'
const INITIAL_STORAGE_DATA = `{
  "items": [],
  "total": 0,
  "productTotal": 0
}`

/**
 * shopping cart class
 */
export class Cart {
  _total: number
  _productTotal: number
  _items: CartItem[]
  _listener: CartListener[]
  static instance: Cart

  constructor () {
    const cache = this._read()
    this._total = cache.total
    this._productTotal = cache.productTotal
    this._items = cache.items
    this._listener = []
  }

  static getInstance (): Cart {
    if (this.instance == null) {
      this.instance = new Cart()
    }

    return this.instance
  }

  /**
   * all product items purchased by the user
   */
  get items (): CartItem[] {
    return this._items
  }

  /**
   * count of all items purchased by the user
   */
  get total (): number {
    return this._total
  }

  /**
   * count of all products purchased by the user
   */
  get productTotal (): number {
    return this._productTotal
  }

  /**
   * read records from localStorage
   * @returns
   * @private
   */
  _read (): CartProfile {
    const storageText = (typeof window !== "undefined" ? localStorage.getItem(LOCAL_STORAGE_CART_KEY):INITIAL_STORAGE_DATA) ?? INITIAL_STORAGE_DATA
    console.log(storageText)
    return JSON.parse(storageText)
  }

  /**
   * write records to localStorage
   * @private
   */
  _write (): void {
    const cache = {
      items: this._items,
      total: this._total,
      productTotal: this._productTotal
    }

    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cache))

    this._listener.forEach(listener => {
      listener(this)
    })
  }

  /**
   * find a product by id
   * @param id
   * @returns
   * @private
   */
  _find (id: string): number {
    return this._items.findIndex(item => item.id === id)
  }

  /**
   * add a item to cart
   * @param item
   */
  add (item: CartItem): void {
    console.log(this)
    const index = this._find(item.id)
    if (index < 0) {
      this._items.push(item)
      this._productTotal += item.quantity
    } else {
      this._items[index].quantity += item.quantity
    }

    this._total += item.quantity

    this._write()
  }

  /**
   * remove one or all items from the cart
   * @param item
   */
  remove (item: CartUpdateItem): void {
    const index = this._find(item.id)
    if (index < 0) {
      return
    }

    this._items[index].quantity -= item.quantity
    this._total -= item.quantity
    this._write()
  }

  /**
   * clear shopping cart
   */
  clear (): void {
    this._items = []
    this._total = 0
    this._productTotal = 0
    this._write()
  }

  update (item: CartUpdateItem): void {
    const index = this._find(item.id)

    if (index < 0) {
      return
    }

    const offset = item.quantity - this._items[index].quantity
    this._items[index].quantity = item.quantity
    this._total += offset
    this._write()
  }

  /**
   * register global cart change listener
   * @param callback
   */
  registerListener (callback: CartListener): void {
    const index = this._listener.findIndex(listener => listener === callback)
    if (index < 0) {
      this._listener.push(callback)
    }
  }

  /**
   * remove a global listener
   * @param callback
   */
  removeListener (callback: CartListener): void {
    this._listener = this._listener.filter(listener => listener !== callback)
  }
}

export default Cart.getInstance()
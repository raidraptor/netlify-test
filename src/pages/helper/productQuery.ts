import productJson from '../mock/product.json'


export function getItem(productName:string) {
  return productJson.find(x=>x.name===productName)
}

export function getItems(){
  return productJson
}
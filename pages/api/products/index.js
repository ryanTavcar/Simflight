import products from '../../../src/util/products'; 

export default function handler(req, res) {
  res.status(200).json(products)
}
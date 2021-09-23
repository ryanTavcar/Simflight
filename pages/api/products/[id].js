import products, {elite, igate} from '../../../src/util/products'; 

export default function handler({ query: { id } }, res) {
  const {all} = products
  const filtered = all.filter((product) => product.id === id )

  // console.log('filtered', filtered)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Product with the id of ${id} is not found` })
  }
}
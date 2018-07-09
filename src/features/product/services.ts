export const fetchProducts = () => {
  return fetch('/api/products.json')
    .then(res => {
      return res.json();
    })
    .then(result => result.products);
};

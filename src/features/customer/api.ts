export const fetchDiscounts = () => {
  return fetch('/api/customer-discounts.json')
    .then(res => {
      return res.json();
    })
    .then(result => result.customers);
};

import { customerModels } from '../customer';
import { productModels } from '../product';
import { checkoutModels } from '../adsCheckout';

export const getProduct =
  (products: productModels.Product[], id: checkoutModels.sku) =>
    products.find((product: productModels.Product) => product.id === id);

export const getQuantity =
  (quantityByID: checkoutModels.quantityById, id: checkoutModels.sku) => quantityByID[id] || 0;

export const getReducedPrice =
  (discounts: customerModels.DiscountRules, id: checkoutModels.sku, qty: number, originalPrice: number) => {
    const { premium, standout, classic } = discounts;
    if (id === 'premium' && premium !== undefined) {
      const { perAd } = premium;
      if (qty >= perAd.minQty) {
        return perAd.price;
      }
    } else if (id === 'standout' && standout !== undefined) {
      return standout.price;
    } else if (id === 'classic' && classic !== undefined &&
      qty > classic.trigger - 1 && originalPrice) {
      const reducePricebyN = qty / classic.trigger;
      if (reducePricebyN > 0) {
        return -reducePricebyN * originalPrice;
      }
    }
    return 0;
  };

export const getAddedSKUs =
  (skus: checkoutModels.quantityById) => Object.keys(skus).filter((id: checkoutModels.sku) => skus[id] > 0);

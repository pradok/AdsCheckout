import { testSaga } from 'redux-saga-test-plan';
import { CustomerDiscounts } from '../../models';
import {fetchDiscounts} from '../../api';
import {actionTypes as at} from '../../constants';
import {fetchCustomerDiscounts} from '../fetchCustomerDiscounts';

describe('Saga fetchCustomerDiscounts', () => {
  describe('Scenario 1: API request success', () => {
    const discounts: CustomerDiscounts = {
      unilever: {
        rulesDescription: [
          'Get 3 for 2 deal on Classic Ads',
        ],
        classic: {
          trigger: 3,
        },
      },
      apple: {
        rulesDescription: [
          'Standout Ad drops to $299.99 per ad',
        ],
        standout: {
          price: 299.99,
        },
      },
      nike: {
        rulesDescription: [
          'Premium Ad drops to $379.99 per ad when 4 or more are purchased',
        ],
        premium: {
          perAd: {
            minQty: 4,
            price: 379.99,
          },
        },
      },
      ford: {
        rulesDescription: [
          '5 for 4 deal on Classic Ads',
          'Standout Ad drops to $309.99 per ad',
          'Premium Ads drop to $389.99 per ad when 3 or more are purchased',
        ],
        classic: {
          trigger: 5,
        },
        standout: {
          price: 309.99,
        },
        premium: {
          perAd: {
            minQty: 3,
            price: 389.99,
          },
        },
      },
    };
    const action = {
      type: at.CUSTOMER_DISCOUNTS_FETCH_SUCCESS,
      payload: discounts,
    };
    it('fetchCustomerDiscounts works!', () => {
      testSaga(fetchCustomerDiscounts)
        .next()
        .call(fetchDiscounts)
        .next(action)
        .next()
        .isDone();
    });
  });
});

import reducer, {initialState} from '../reducer';
import {actionTypes as at} from '../constants';

describe('product reducers', () => {
  it(`Actioon ${at.PRODUCTS_COLLECTION_FETCH} should return state`, () => {
    expect(
      reducer(initialState,
        {
          type: at.PRODUCTS_COLLECTION_FETCH,
        }
      )
    ).toMatchSnapshot();
  });

  it(`Actioon ${at.PRODUCTS_COLLECTION_FETCH_SUCCESS} should return a state with list of ad products`, () => {
    expect(
      reducer(initialState,
        {
          type: at.PRODUCTS_COLLECTION_FETCH_SUCCESS,
          payload: [
            {
              id: 'classic',
              title: 'Classic Ad',
              price: 269.99,
            },
            {
              id: 'standout',
              title: 'Standout Ad',
              price: 322.99,
            },
          ],
        }
      )
    ).toMatchSnapshot();
  });

  it(`Actioon ${at.PRODUCTS_COLLECTION_FETCH_ERROR} should return state`, () => {
    expect(
      reducer(initialState,
        {
          type: at.PRODUCTS_COLLECTION_FETCH_ERROR,
        }
      )
    ).toMatchSnapshot();
  });

});

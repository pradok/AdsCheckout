// tslint:disable-next-line:no-import-side-effect
import 'tslib';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import styled from 'styled-components';

import store from './store';
import {router} from './router';
// tslint:disable-next-line:no-import-side-effect
import './index.css';

const styles: React.CSSProperties = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const StyledRootContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: absolute;
    background-image: radial-gradient(circle at top, #53455b 0%, #201e22 70%);
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 100%;
    min-height: 100%;
    line-height: 1.5;
    padding: 2.5em 0;
`;

const Root = () => (
  <StyledRootContainer style={styles}>
    <Provider store={store}>
      {router}
    </Provider>
  </StyledRootContainer>
);

render(<Root/>, document.getElementById('root'));

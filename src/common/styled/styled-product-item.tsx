import styled from 'styled-components';

const StyledProductItem = styled.div`
    border: 2px solid #5d4e65;
    min-height: 400px;
    padding: 1.25em;
    position: relative;
    text-align: center;
    transition: all .2s ease-in-out;
    width: 250px;
    &:hover {
      background-image: linear-gradient(to bottom, #53455b 0%, #201d22 100%);
      border-left: 2px solid #ec7a37;
      border-top: 2px solid #ec7a37;
      border-bottom: 2px solid #ff4f69;
      border-right: 2px solid #ff4f69;
      box-shadow: 0px 0px 10px 0px #323232;
      transform: scale(1.025);
      z-index: 2;
    }
    h3 {
      font-weight: 100;
      margin: 0 0 0.5em;
      text-transform: uppercase;
    }
    ul {
      list-style-type: none;
      color: #bfabca;
      font-size: 0.75em;
      list-style-type: none;
      padding: 0;
      li {
        margin: 1px 0 0.83em;
      }
    }
`;

export default StyledProductItem;

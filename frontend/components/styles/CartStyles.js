import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 10px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid var(--black);
    padding-bottom: 1rem;
  }
  footer {
    border-top: 10px double var(--black);
    padding-top: 1rem;
    /* display: grid;
    grid-template-columns: auto auto; */
    align-items: center;
    font-size: 1.5rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export default CartStyles;

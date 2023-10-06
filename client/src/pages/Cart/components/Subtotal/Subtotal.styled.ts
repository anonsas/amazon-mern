import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  align-items: center;

  column-gap: 0.4rem;
  .total-text {
    font-size: 1.6rem;
  }

  .total-price-container {
    display: flex;
  }

  .dollar-sign {
    font-size: 1.4rem;
    font-weight: 500;
    align-self: flex-start;
  }

  .price-dollar {
    font-size: 1.8rem;
    font-weight: 600;
    align-self: center;
  }

  .price-cents {
    font-size: 1.2rem;
    font-weight: 600;
    align-self: flex-start;
  }
`;

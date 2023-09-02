import styled from 'styled-components';

export const Component = styled.div`
  z-index: 30;
  position: relative;
  height: auto;
  // height: 42rem;
  // width: 30rem;
  font-size: 1.4rem;
  padding: 2.5rem;
  margin: 1.5rem;
  background-color: var(--white-color);

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .category {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: #777;
    font-style: italic;
  }

  .image {
    height: 20rem;
    width: 20rem;
    object-fit: contain;
    align-self: center;
  }

  .price-container {
    margin-bottom: 1rem;
  }
`;
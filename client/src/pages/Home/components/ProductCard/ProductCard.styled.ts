import styled from 'styled-components';
import { color, deviceWidth } from 'app/utils';

export const Component = styled.li`
  z-index: 30;
  position: relative;
  height: auto;
  /* height: 45rem; */
  height: auto;
  width: 100%;
  font-size: 1.4rem;
  padding: 2.5rem;
  background-color: ${color.white};

  display: grid;
  grid-template-rows: 20rem 1fr;
  justify-content: space-between;
  row-gap: 2rem;

  @media ${deviceWidth.md_down} {
    max-width: 40rem;
  }

  .category {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: ${color.black100};
    font-style: italic;
  }

  .image {
    height: 20rem;
    width: 20rem;
    object-fit: contain;
    justify-self: center;
  }

  .description {
    display: inline-block;
    width: 100%;
  }

  .description-button {
    display: inline-block;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    margin-left: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  /* .price-container {
    margin-bottom: 1rem;
  } */
`;

import styled from 'styled-components';
import { color, deviceWidth } from 'app/utils';

export const Component = styled.li`
  z-index: 30;
  position: relative;
  height: auto;
  width: 26rem;
  font-size: 1.4rem;
  padding: 2.5rem;
  background-color: ${color.white};

  display: grid;
  grid-template-rows: 20rem 1fr;
  justify-content: space-between;
  row-gap: 2rem;

  @media ${deviceWidth.md_up} {
    width: 28rem;
  }
  @media ${deviceWidth.xl_up} {
    width: 30rem;
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
    margin-left: 0.5rem;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }

  /* .price-container {
    margin-bottom: 1rem;
  } */
`;

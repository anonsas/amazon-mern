import styled from 'styled-components';
import { color } from 'app/utils';

export const Component = styled.li`
  display: grid;
  grid-template-rows: 20rem 1fr;
  justify-content: space-between;
  row-gap: 2rem;

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

  .details-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
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
`;

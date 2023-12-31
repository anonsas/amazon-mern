import styled from 'styled-components';

export const Component = styled.div`
  padding-top: 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  .register {
    &__logo {
      width: 10rem;
      object-fit: contain;
    }

    &__form-container {
      width: 40rem;
      padding: 2rem;
      border: 1px solid lightgray;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      row-gap: 2rem;
    }

    &__heading {
      font-size: 3rem;
      font-weight: 400;
      margin: 0;
    }
  }
`;

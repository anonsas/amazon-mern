import styled from 'styled-components';

export const Component = styled.div`
  padding-top: 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;

  .logo {
    width: 10rem;
    object-fit: contain;
  }

  .form-container {
    width: 30rem;
    padding: 2rem;
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .heading {
    font-size: 3rem;
    font-weight: 400;
    margin: 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .label {
    font-weight: 500;
  }

  .input {
    height: 3rem;
    width: 100%;
    border: 1px solid darkgray;
  }

  .signin-btn {
    height: 3rem;
    width: 100%;
    background-color: #f0c14b;
    border: 1px solid;
    border-radius: 2px;
    border-color: #a88734 #9c7e31 #846a29;

    &:hover {
      cursor: pointer;
    }
  }

  .paragraph {
    font-size: 1.2rem;
  }

  .register-btn {
    height: 3rem;
    width: 100%;
    border: 1px solid darkgray;
    border-radius: 2px;
    background-color: #dee1e7;
    display: grid;
    place-items: center;
  }
`;

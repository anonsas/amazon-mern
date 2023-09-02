import styled from 'styled-components';

export const Component = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .label {
    font-weight: 500;
  }

  .input-container {
    border: 1px solid darkgray;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input {
    height: 3rem;
    width: 100%;
  }

  .input-icon {
    height: 1.6rem;
    width: 1.6rem;
  }

  .signin-btn {
    cursor: pointer;
    height: 3rem;
    width: 100%;
    background-color: #f0c14b;
    border: 1px solid;
    border-radius: 2px;
    border-color: #a88734 #9c7e31 #846a29;
  }
`;

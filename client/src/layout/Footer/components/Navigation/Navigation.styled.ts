import styled from 'styled-components';

export const Component = styled.nav`
  grid-area: socials;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1.6rem;

  .link,
  .link:link,
  .link:visited {
    height: 2.4rem;
    width: 2.4rem;

    display: grid;
    place-items: center;
  }
`;

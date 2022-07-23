import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 173px 100px;
  gap: 80px;
  .pages {
    display: flex;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    .pages {
      flex-direction: column;
    }
    margin: 3rem;
  }
`;

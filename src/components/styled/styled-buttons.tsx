import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #282c34;
  color: white;
  cursor: pointer;
  padding: 7px 10px;
  width: max-content;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  margin-bottom: 20px;
  
  :hover {
    background-color: #383c44;
  }
`;

export const ExpandableButton = styled(StyledButton)`
  width: calc(90% + 2px);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0px;
`;

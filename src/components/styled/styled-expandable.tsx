import styled from 'styled-components'

interface Props {
  collapsed: boolean,
};

export const StyledExpandable = styled.div`
  display: ${(props: Props) => props.collapsed ? 'none' : 'block'};
  max-height: ${(props: Props) => props.collapsed ? '0' : '100%'};
  overflow: hidden;
  width: 90%;
  margin-left: calc(5% - 1px);
  border: 1px solid white;
  border-top: 0;
`;

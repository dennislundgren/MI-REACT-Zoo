import styled from "styled-components";

////////////////
// VARIABLES //
//////////////

const Block = styled.div`
  background-color: orange;
  width: 10px;
  height: 100px;
  color: ${({ color }) => color || ""};
`;

export { Block };

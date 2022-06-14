import styled from "styled-components";

const Block = styled.div`
  background-color: ${({ color }) => color || "var(--primary-color)"};
  width: 10px;
  height: 100px;
  color: ${({ color }) => color || ""};
`;

export { Block };

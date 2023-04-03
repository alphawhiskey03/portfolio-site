import styled from "styled-components";

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

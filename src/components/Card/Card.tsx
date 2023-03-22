import { Container } from "./Card.styles";
import type { IProps } from "./Card.types";

const Card: React.FC<IProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Card;

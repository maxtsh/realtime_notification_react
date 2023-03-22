import { BsPlus } from "react-icons/bs";
import { Container } from "./Story.styles";
import type { IProps } from "./Story.types";

const Story: React.FC<IProps> = ({ data }) => {
  return (
    <Container src={data.src} avatar={data.avatar}>
      <div className="info">
        <div className="info__avatar">
          {data.id === 1 && (
            <div className="info__avatar__add">
              <BsPlus className="info__avatar__add__icon" />
            </div>
          )}
        </div>
        <h4 className="info__name">{data.name}</h4>
      </div>
    </Container>
  );
};

export default Story;

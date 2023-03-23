import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegCommentDots, FaRegShareSquare } from "react-icons/fa";
import { Container } from "./Post.styles";
import type { IProps } from "./Post.types";
import useSocket from "@/hooks/useSocket";
import { readFromLS } from "@/utils/Storage/LocalStorage";

const Post: React.FC<IProps> = ({ data }) => {
  const { socket } = useSocket();
  const username = readFromLS("notification_username");
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    if (!liked) {
      socket?.emit("like", {
        liker: username,
        owner: data.name,
        postId: data.id,
      });
    }
  };

  return (
    <Container avatar={data.avatar}>
      <div className="info">
        <div className="info__avatar"></div>
        <h4 className="info__name">{data.name}</h4>
      </div>
      <img src={data.src} width="100%" height="300px" className="image" />
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sed modi
        quis error nisi pariatur obcaecati minus labore porro voluptates sit
        veritatis.
      </p>
      <div className="toolbar">
        <div className="toolbar__left"></div>
        <div className="toolbar__right">
          <ul className="toolbar__right__list">
            <li className="toolbar__right__list__item">
              {liked ? (
                <BsHeartFill
                  className="toolbar__right__list__item__icon"
                  color="var(--liked)"
                  onClick={handleLike}
                />
              ) : (
                <BsHeart
                  className="toolbar__right__list__item__icon"
                  onClick={handleLike}
                />
              )}
              <span className="toolbar__right__list__item__count">234</span>
            </li>
            <li className="toolbar__right__list__item">
              <FaRegCommentDots className="toolbar__right__list__item__icon" />
              <span className="toolbar__right__list__item__count">45</span>
            </li>
            <li className="toolbar__right__list__item">
              <FaRegShareSquare className="toolbar__right__list__item__icon" />
              <span className="toolbar__right__list__item__count">22</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Post;

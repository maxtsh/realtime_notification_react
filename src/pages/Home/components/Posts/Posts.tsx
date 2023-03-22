import Post from "./components/Post";
import { Container } from "./Posts.styles";

const data = [
  {
    id: 1,
    name: "Snake",
    src: "/posts/post_1.jpg",
    avatar: "avatars/avatar_1.jpg",
  },
];

const Posts: React.FC = () => {
  return (
    <Container>
      {data.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Posts;

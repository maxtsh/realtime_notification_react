import Story from "./components/Story";
import { Container } from "./Stories.styles";

const data = [
  {
    id: 1,
    name: "Snake",
    src: "/stories/story_1.jpg",
    avatar: "/avatars/avatar_1.jpg",
  },
  {
    id: 2,
    name: "Jessica",
    src: "/stories/story_2.jpg",
    avatar: "/avatars/avatar_2.jpg",
  },
  {
    id: 3,
    name: "Alicia",
    src: "/stories/story_3.jpg",
    avatar: "/avatars/avatar_3.jpg",
  },
  {
    id: 4,
    name: "Max",
    src: "/stories/story_4.jpg",
    avatar: "/avatars/avatar_4.jpg",
  },
  {
    id: 5,
    name: "David",
    src: "/stories/story_5.jpg",
    avatar: "/avatars/avatar_5.jpg",
  },
];

const Stories: React.FC = () => {
  return (
    <Container>
      {data.map((item) => (
        <Story key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Stories;

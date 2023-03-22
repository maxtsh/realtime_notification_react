import Story from "./components/Story";
import { Container } from "./Stories.styles";

const data = [
  {
    id: 1,
    name: "Maxtsh",
    src: "/stories/story_1.jpg",
    avatar: "/avatars/avatar_1.jpg",
  },
  {
    id: 2,
    name: "Robo",
    src: "/stories/story_2.jpg",
    avatar: "/avatars/avatar_2.jpg",
  },
  {
    id: 3,
    name: "Sauron",
    src: "/stories/story_3.jpg",
    avatar: "/avatars/avatar_3.jpg",
  },
  {
    id: 4,
    name: "Jessica",
    src: "/stories/story_4.jpg",
    avatar: "/avatars/avatar_4.jpg",
  },
  {
    id: 5,
    name: "John",
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

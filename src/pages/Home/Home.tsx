import Card from "@/components/Card";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import { Container } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Card>
        <Stories />
      </Card>
      <Card className="posts">
        <Posts />
      </Card>
    </Container>
  );
};

export default Home;

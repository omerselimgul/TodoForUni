import Card from "../Components/Card/Card";
import MainLayout from "../Layouts/MainLayout";

const HomePage = () => {
  const Array = [1, 2, 3, 4, 5, 6];
  return (
    <MainLayout>
      {Array.map((item) => {
        return <Card />;
      })}
    </MainLayout>
  );
};

export default HomePage;

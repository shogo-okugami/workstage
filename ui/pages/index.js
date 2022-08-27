import Layout from "components/layouts/Layout";
import Calendar from "components/pages/Home/Calendar/Calendar";

const Home = () => {
  return <Calendar />;
};

Home.getLayout = (page) => {
  return <Layout title={"シフト"}>{page}</Layout>;
};

export default Home;

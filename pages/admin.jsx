import dynamic from "next/dynamic";

const ReactAdmin = dynamic(
  () => {
    return import("../components/admin/adminComponent");
  },
  {
    ssr: false,
  }
);

const HomePage = () => {
  return <ReactAdmin />;
};

export default HomePage;

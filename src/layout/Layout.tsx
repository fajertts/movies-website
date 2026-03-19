import Trending from "../components/footer/Trending";
import Navbar from "../components/Navbar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* TODO: Implement Footer */}
      <Trending />
    </>
  );
};

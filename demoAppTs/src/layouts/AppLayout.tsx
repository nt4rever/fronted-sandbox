import { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface AppLayoutProps {
  children?: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div className="pt-4 px-[10%]">{children} </div>
    </div>
  );
};

export default AppLayout;

import { SidebarProvider } from "@/components/ui/sidebar";
import Wrapper from "@/components/Layout/Wrappers";
import SidebarApp from "@/components/Sidebar/SidebarApp";

const AppSidebarProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <SidebarApp />
      <div className="pt-4 pb-4 pr-4 pl-4 md:pl-0 relative w-full">
        <Wrapper>{children}</Wrapper>
      </div>
    </SidebarProvider>
  );
};
export default AppSidebarProvider;

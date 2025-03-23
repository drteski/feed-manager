import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/Sidebar/AppSidebar";
import Wrapper from "@/components/Layout/Wrappers";

const AppSidebarProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="pt-4 pb-4 pr-4 pl-4 md:pl-0 relative w-full">
        <Wrapper>{children}</Wrapper>
      </div>
    </SidebarProvider>
  );
};
export default AppSidebarProvider;

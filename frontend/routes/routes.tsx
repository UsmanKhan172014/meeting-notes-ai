export interface Route {
  name: string;
  icon: string; // Icon can be a string path or a React component if needed
  path: string;
  component: string; // Component can also be a lazy-loaded component
  protected: boolean;
}

export const routes: Route[] = [
  {
    name: "Home",
    icon: "",
    path: "/",
    component: "HomePage",
    protected: false,
  },
  {
    name: "Meeting Summaries",
    icon: "",
    path: "/meetingSummaries",
    component: "HomePage",
    protected: false,
  },
  {
    name: "Dashboard",
    icon: "dashboard-icon",
    path: "/dashboard",
    component: "DashboardPage",
    protected: true,
  },
  {
    name: "Admin",
    icon: "admin-icon",
    path: "/admin",
    component: "AdminPage",
    protected: true,
  },
];

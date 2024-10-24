import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";

const items = [
  {
    title: "liner algebra",
    url: "/Lecture",
    index: 1,
    icon: "https://static.thenounproject.com/png/4998394-200.png",
  },
  {
    title: "Data Structures",
    url: "/Lecture",
    index: 0,

    icon: "https://cdn-icons-png.flaticon.com/512/8637/8637707.png",
  },
  {
    title: "Finite Mathematics",
    url: "/Lecture",
    index: 2,
    icon: "https://cdn0.iconfinder.com/data/icons/6-data-devices-flat-long-shadow/614/40_-_Discrete_Math-512.png",
  },
  {
    title: "Data Base",
    url: "/Lecture",
    index: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/149/149206.png",
  },
  {
    title: "multimedia system",
    url: "/Lecture",
    index: 4,
    icon: "https://cdn-icons-png.flaticon.com/512/1225/1225864.png",
  },
  {
    title: "Network Fundamentals",
    url: "/Lecture",
    index: 5,
    icon: "https://cdn-icons-png.flaticon.com/512/149/149181.png",
  },
  {
    title: "OOP",
    url: "/Lecture",
    index: 6,
    icon: "https://cdn4.iconfinder.com/data/icons/technology-83/1000/object_programming_development_oriented_developer_object-oriented_programming_software-512.png",
  },
  {
    title: "System Analysis",
    url: "/Lecture",
    index: 7,
    icon: "https://cdn3.iconfinder.com/data/icons/research-and-analysis-glyph-1/64/business-analysis-data-visualisation-system-512.png",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key={1}>
                <SidebarMenuButton asChild>
                  <Link href="/Home">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/846/846449.png"
                      width={20}
                    />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel> Materials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={{
                        pathname: `${item.url}`,
                        query: { index: item.index },
                      }}
                    >
                      <img src={item.icon} width={20} />

                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroupLabel>Home Works</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem key={1}>
              <SidebarMenuButton asChild>
                <Link href="/Assignments">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4805/4805833.png"
                    width={20}
                  />
                  <span>Assignments</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  );
}

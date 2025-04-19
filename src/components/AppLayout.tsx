
import React from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  FileSpreadsheet, 
  Link, 
  Heart, 
  ClipboardList,
  FileText,
  Settings
} from "lucide-react";

interface AppLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function AppLayout({ title, children }: AppLayoutProps) {
  const location = useLocation();
  
  const menuItems = [
    { title: "Dashboard", path: "/", icon: BarChart3 },
    { title: "Clientes", path: "/clientes", icon: Users },
    { title: "Serviços", path: "/servicos", icon: FileSpreadsheet },
    { title: "Links", path: "/links", icon: Link },
    { title: "Recursos", path: "/recursos", icon: Heart },
    { title: "Tarefas", path: "/tarefas", icon: ClipboardList },
    { title: "Contratos", path: "/contratos", icon: FileText },
  ];
  
  return (
    <>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Principal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild>
                      <a 
                        href={item.path} 
                        className={location.pathname === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Configurações</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings className="w-5 h-5" />
                      <span>Preferências</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      
      <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
        <SidebarTrigger />
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        </div>
        {children}
      </div>
    </>
  );
}

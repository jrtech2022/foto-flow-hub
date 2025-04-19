
import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Camera, FileText, Link, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <AppLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card: Total de Clientes */}
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl font-bold">Total de Clientes</CardTitle>
            <Users className="h-5 w-5 text-fotoflow-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">28</div>
            <p className="text-sm text-muted-foreground">+4 no último mês</p>
          </CardContent>
        </Card>

        {/* Card: Links Enviados */}
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl font-bold">Links Enviados</CardTitle>
            <Link className="h-5 w-5 text-fotoflow-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">42</div>
            <p className="text-sm text-muted-foreground">12 este mês</p>
          </CardContent>
        </Card>

        {/* Card: Faturamento do Mês */}
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl font-bold">Faturamento</CardTitle>
            <FileText className="h-5 w-5 text-fotoflow-pink" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2">R$ 4.250</div>
            <p className="text-sm text-muted-foreground">Estimativa para Abril</p>
          </CardContent>
        </Card>

        {/* Card: Agenda de Hoje */}
        <Card className="md:col-span-2 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl font-bold">Agenda de Hoje</CardTitle>
            <CalendarDays className="h-5 w-5 text-fotoflow-purple" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-fotoflow-blue" />
                  <div>
                    <h3 className="font-medium">Ensaio Pré-Wedding</h3>
                    <p className="text-sm text-muted-foreground">Casal Marina e João</p>
                  </div>
                </div>
                <span className="text-sm font-medium">14:30</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-2">
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-fotoflow-blue" />
                  <div>
                    <h3 className="font-medium">Book Profissional</h3>
                    <p className="text-sm text-muted-foreground">Carla Mendes</p>
                  </div>
                </div>
                <span className="text-sm font-medium">17:00</span>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">Ver Agenda Completa</Button>
          </CardContent>
        </Card>

        {/* Card: Tarefas Pendentes */}
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl font-bold">Tarefas</CardTitle>
            <FileText className="h-5 w-5 text-fotoflow-pink" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="task1" className="w-4 h-4" />
                <label htmlFor="task1" className="text-sm">Editar ensaio da Bruna</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="task2" className="w-4 h-4" />
                <label htmlFor="task2" className="text-sm">Postar no Instagram</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="task3" className="w-4 h-4" />
                <label htmlFor="task3" className="text-sm">Enviar contrato - Pedro</label>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full">Ver Todas</Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export default Dashboard;

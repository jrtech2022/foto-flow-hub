
import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

const Clientes = () => {
  return (
    <AppLayout title="Gerenciamento de Clientes">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar clientes..."
              className="pl-9"
            />
          </div>
          <Button className="gap-2 bg-fotoflow-purple hover:bg-fotoflow-purple/90 w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cliente 1 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Marina Silva</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3 w-3" />
                <span>+55 11 98765-4321</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2 mb-4">
                <h4 className="font-medium text-fotoflow-blue">Serviços Recentes:</h4>
                <div className="space-y-1 ml-2">
                  <p>Ensaio Pré-Wedding - 12/04/2023</p>
                  <p>Book Corporativo - 03/01/2023</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" className="gap-1">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  WhatsApp
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Cliente 2 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">João Pereira</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3 w-3" />
                <span>+55 11 91234-5678</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2 mb-4">
                <h4 className="font-medium text-fotoflow-blue">Serviços Recentes:</h4>
                <div className="space-y-1 ml-2">
                  <p>Ensaio Pré-Wedding - 12/04/2023</p>
                  <p>Casamento - 15/04/2023</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" className="gap-1">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  WhatsApp
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Cliente 3 */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Carla Mendes</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3 w-3" />
                <span>+55 11 97777-8888</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm space-y-2 mb-4">
                <h4 className="font-medium text-fotoflow-blue">Serviços Recentes:</h4>
                <div className="space-y-1 ml-2">
                  <p>Book Profissional - 18/04/2023</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm" className="gap-1">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  WhatsApp
                </Button>
                <Button variant="ghost" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

export default Clientes;

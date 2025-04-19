
import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Plus, Copy, Calendar, ExternalLink, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Links = () => {
  return (
    <AppLayout title="Gerenciamento de Links">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar links ou clientes..."
            className="pl-9"
          />
        </div>
        <Button className="gap-2 bg-fotoflow-purple hover:bg-fotoflow-purple/90 w-full sm:w-auto">
          <Plus className="h-4 w-4" />
          Novo Link
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Link 1 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2 flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-lg">Ensaio Pré-Wedding</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Marina e João</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
              <Calendar className="h-3 w-3" />
              <span>15/04/2023</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
              <span className="text-sm truncate font-mono text-muted-foreground">
                https://photos.meusite.com.br/marina-joao-pre-wedding
              </span>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Abrir
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Copy className="h-4 w-4" />
                  Copiar
                </Button>
              </div>
              <Button className="gap-1 bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4" />
                Enviar
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Link 2 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2 flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-lg">Book Profissional</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Carla Mendes</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
              <Calendar className="h-3 w-3" />
              <span>18/04/2023</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
              <span className="text-sm truncate font-mono text-muted-foreground">
                https://photos.meusite.com.br/carla-book-profissional
              </span>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Abrir
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Copy className="h-4 w-4" />
                  Copiar
                </Button>
              </div>
              <Button className="gap-1 bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4" />
                Enviar
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Link 3 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2 flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-lg">Casamento</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Marina e João</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
              <Calendar className="h-3 w-3" />
              <span>30/04/2023</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
              <span className="text-sm truncate font-mono text-muted-foreground">
                https://photos.meusite.com.br/marina-joao-casamento
              </span>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Abrir
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Copy className="h-4 w-4" />
                  Copiar
                </Button>
              </div>
              <Button className="gap-1 bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4" />
                Enviar
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Link 4 */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2 flex flex-row justify-between items-start">
            <div>
              <CardTitle className="text-lg">Família</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Roberto Santos</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
              <Calendar className="h-3 w-3" />
              <span>10/03/2023</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
              <span className="text-sm truncate font-mono text-muted-foreground">
                https://photos.meusite.com.br/roberto-familia
              </span>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-4 w-4" />
                  Abrir
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Copy className="h-4 w-4" />
                  Copiar
                </Button>
              </div>
              <Button className="gap-1 bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4" />
                Enviar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export default Links;

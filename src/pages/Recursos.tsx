
import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Plus, Pencil, Instagram, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Recursos = () => {
  return (
    <AppLayout title="Central de Recursos">
      <div className="mb-6">
        <p className="text-muted-foreground max-w-xl">
          Gerencie seus recursos frequentes como links, chaves PIX e informações de contato para rápido acesso.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Links Rápidos</h2>
            <Button variant="outline" size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Adicionar
            </Button>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Instagram className="h-5 w-5 text-fotoflow-pink" />
                Instagram Profissional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                <span className="text-sm truncate font-mono text-muted-foreground">
                  https://instagram.com/meu.perfil.fotografico
                </span>
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Website / Portfólio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                <span className="text-sm truncate font-mono text-muted-foreground">
                  https://meustudio.com.br/portfolio
                </span>
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                WhatsApp Business
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                <span className="text-sm truncate font-mono text-muted-foreground">
                  https://wa.me/5511987654321
                </span>
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Informações de Pagamento</h2>
            <Button variant="outline" size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Adicionar
            </Button>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Chave PIX</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                <span className="text-sm truncate font-mono text-muted-foreground">
                  contato@meustudio.com.br
                </span>
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Dados Bancários</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-md">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Banco:</span>
                    <span>Banco Digital</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Agência:</span>
                    <span>0001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conta:</span>
                    <span>123456-7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nome:</span>
                    <span>Meu Studio Ltda.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CNPJ:</span>
                    <span>12.345.678/0001-90</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" className="gap-1">
                  <Copy className="h-4 w-4" />
                  Copiar Tudo
                </Button>
                <Button variant="ghost" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Mensagem de Confirmação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-md">
                <p className="text-sm">
                  Olá! Obrigado pela confirmação do pagamento. Seu horário está reservado. Qualquer dúvida, estou à disposição.
                </p>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" className="gap-1">
                  <Copy className="h-4 w-4" />
                  Copiar Texto
                </Button>
                <Button variant="ghost" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

export default Recursos;

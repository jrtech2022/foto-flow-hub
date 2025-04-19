
import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2, DollarSign, Calculator } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Servicos = () => {
  return (
    <AppLayout title="Precificação de Serviços">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground max-w-xl">
            Gerencie seus serviços, valores e precificação. Calcule os custos adicionais e gere valores finais para seus clientes.
          </p>
        </div>
        <Button className="gap-2 bg-fotoflow-purple hover:bg-fotoflow-purple/90 w-full sm:w-auto">
          <PlusCircle className="h-4 w-4" />
          Novo Serviço
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Serviços Cadastrados</h2>
          
          {/* Ensaio */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Ensaio Pré-Wedding</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Ensaio de fotos para casais antes do casamento. Inclui 50 fotos editadas e 2 horas de serviço.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Valor base:</span>
                  <span className="font-bold text-fotoflow-blue">R$ 450,00</span>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Edição adicional:</span>
                  <span>R$ 150,00</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Deslocamento:</span>
                  <span>R$ 50,00</span>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between font-bold">
                  <span>Valor Total:</span>
                  <span className="text-lg text-fotoflow-purple">R$ 650,00</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Casamento */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle>Casamento Completo</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Cobertura completa de casamento, inclui cerimônia e festa. 200 fotos editadas e 8 horas de serviço.</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Valor base:</span>
                  <span className="font-bold text-fotoflow-blue">R$ 2.800,00</span>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Segundo fotógrafo:</span>
                  <span>R$ 600,00</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Álbum físico:</span>
                  <span>R$ 400,00</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Deslocamento:</span>
                  <span>R$ 100,00</span>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between font-bold">
                  <span>Valor Total:</span>
                  <span className="text-lg text-fotoflow-purple">R$ 3.900,00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-6">Calculadora de Serviços</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-fotoflow-purple" />
                Simulador de Preços
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Serviço</label>
                  <select className="w-full border border-input px-3 py-2 rounded-md">
                    <option value="ensaio">Ensaio Pré-Wedding</option>
                    <option value="casamento">Casamento Completo</option>
                    <option value="book">Book Profissional</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Valor Base (R$)</label>
                  <input 
                    type="number" 
                    className="w-full border border-input px-3 py-2 rounded-md" 
                    placeholder="450" 
                    value="450"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Custos Adicionais</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="adicional1" checked />
                      <label htmlFor="adicional1">Edição adicional (R$ 150)</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="adicional2" checked />
                      <label htmlFor="adicional2">Deslocamento (R$ 50)</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="adicional3" />
                      <label htmlFor="adicional3">Impressão (R$ 100)</label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Desconto (%)</label>
                  <input 
                    type="number" 
                    className="w-full border border-input px-3 py-2 rounded-md" 
                    placeholder="0" 
                    value="0"
                  />
                </div>
                
                <Separator />
                
                <div className="p-4 bg-muted rounded-md space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Valor Base:</span>
                    <span>R$ 450,00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Adicionais:</span>
                    <span>+ R$ 200,00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Desconto:</span>
                    <span>- R$ 0,00</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-bold">
                    <span>Valor Final:</span>
                    <span className="text-xl text-fotoflow-purple">R$ 650,00</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button className="flex-1 bg-fotoflow-blue hover:bg-fotoflow-blue/90">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Gerar Orçamento
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

export default Servicos;

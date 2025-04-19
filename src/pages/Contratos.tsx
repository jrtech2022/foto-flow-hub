
import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Plus, FileSignature, Mail, Smartphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Contratos = () => {
  return (
    <AppLayout title="Controle de Contratos">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-muted-foreground max-w-xl">
            Gerencie seus contratos e envie-os rapidamente para seus clientes.
          </p>
        </div>
        <Button className="gap-2 bg-fotoflow-purple hover:bg-fotoflow-purple/90 w-full sm:w-auto">
          <Plus className="h-4 w-4" />
          Novo Contrato
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileSignature className="h-5 w-5 text-fotoflow-blue" />
                Contratos Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Contrato 1 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="font-medium">Contrato - Ensaio Pré-Wedding</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-muted-foreground">
                      <span>Marina e João</span>
                      <span className="hidden sm:inline">•</span>
                      <span>R$ 650,00</span>
                      <span className="hidden sm:inline">•</span>
                      <span>15/04/2023</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <FileText className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button size="sm" className="flex-1 sm:flex-none bg-fotoflow-blue hover:bg-fotoflow-blue/90">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                </div>

                {/* Contrato 2 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="font-medium">Contrato - Casamento Completo</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-muted-foreground">
                      <span>Marina e João</span>
                      <span className="hidden sm:inline">•</span>
                      <span>R$ 3.900,00</span>
                      <span className="hidden sm:inline">•</span>
                      <span>30/04/2023</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <FileText className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button size="sm" className="flex-1 sm:flex-none bg-fotoflow-blue hover:bg-fotoflow-blue/90">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                </div>

                {/* Contrato 3 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="font-medium">Contrato - Book Profissional</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-muted-foreground">
                      <span>Carla Mendes</span>
                      <span className="hidden sm:inline">•</span>
                      <span>R$ 350,00</span>
                      <span className="hidden sm:inline">•</span>
                      <span>18/04/2023</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <FileText className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button size="sm" className="flex-1 sm:flex-none bg-fotoflow-blue hover:bg-fotoflow-blue/90">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                </div>

                {/* Contrato 4 */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="font-medium">Contrato - Família</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-muted-foreground">
                      <span>Roberto Santos</span>
                      <span className="hidden sm:inline">•</span>
                      <span>R$ 450,00</span>
                      <span className="hidden sm:inline">•</span>
                      <span>10/03/2023</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      <FileText className="h-4 w-4 mr-2" />
                      Visualizar
                    </Button>
                    <Button size="sm" className="flex-1 sm:flex-none bg-fotoflow-blue hover:bg-fotoflow-blue/90">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gerar Contrato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de Serviço</label>
                  <select className="w-full border border-input px-3 py-2 rounded-md">
                    <option value="ensaio">Ensaio Pré-Wedding</option>
                    <option value="casamento">Casamento Completo</option>
                    <option value="book">Book Profissional</option>
                    <option value="familia">Ensaio Família</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Nome do Cliente</label>
                  <input 
                    type="text"
                    className="w-full border border-input px-3 py-2 rounded-md"
                    placeholder="Nome completo"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Data do Evento</label>
                    <input 
                      type="date"
                      className="w-full border border-input px-3 py-2 rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Valor (R$)</label>
                    <input 
                      type="number"
                      className="w-full border border-input px-3 py-2 rounded-md"
                      placeholder="0,00"
                    />
                  </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-fotoflow-purple hover:bg-fotoflow-purple/90">
                    <FileText className="h-4 w-4 mr-2" />
                    Gerar Contrato
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Enviar por Email
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Smartphone className="h-4 w-4" />
                    Enviar por WhatsApp
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

export default Contratos;


import React from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, Plus, Trash2, FileEdit, Save, CalendarClock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const Tarefas = () => {
  return (
    <AppLayout title="Notas e Tarefas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Seção de Tarefas */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Lista de Tarefas</h2>
            <Button className="gap-2 bg-fotoflow-purple hover:bg-fotoflow-purple/90">
              <Plus className="h-4 w-4" />
              Nova Tarefa
            </Button>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckSquare className="h-5 w-5 text-fotoflow-blue" />
                Tarefas Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Tarefa 1 */}
                <div className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4" />
                    <div>
                      <h3 className="font-medium">Editar ensaio da Bruna</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <CalendarClock className="h-3 w-3" />
                        Vence em 20/04/2023
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon">
                      <FileEdit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                {/* Tarefa 2 */}
                <div className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4" />
                    <div>
                      <h3 className="font-medium">Postar no Instagram</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <CalendarClock className="h-3 w-3" />
                        Vence em 21/04/2023
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon">
                      <FileEdit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                {/* Tarefa 3 */}
                <div className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4" />
                    <div>
                      <h3 className="font-medium">Enviar contrato - Pedro</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <CalendarClock className="h-3 w-3" />
                        Vence em 19/04/2023
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon">
                      <FileEdit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                {/* Tarefa 4 */}
                <div className="flex items-center justify-between p-3 border border-border rounded-md hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-4 w-4" checked />
                    <div>
                      <h3 className="font-medium line-through text-muted-foreground">Ligação com Marina</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <CalendarClock className="h-3 w-3" />
                        Concluída
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon">
                      <FileEdit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Notas */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Bloco de Notas</h2>
            <Button className="gap-2 bg-fotoflow-purple hover:bg-fotoflow-purple/90">
              <Plus className="h-4 w-4" />
              Nova Nota
            </Button>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Ideias para Ensaio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                className="min-h-32 resize-none"
                value="- Explorar o Parque Ibirapuera no final da tarde
- Trazer adereços vintage para o próximo ensaio
- Sugerir looks em tons pastéis para contraste com o pôr do sol
- Verificar locação no mirante para fotos panorâmicas"
              />
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Equipamentos para Comprar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea 
                className="min-h-32 resize-none"
                value="1. Nova bateria para Canon
2. Difusor para flash externo
3. Cartão de memória 128GB
4. Lente 35mm f/1.8"
              />
              <div className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Salvar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

export default Tarefas;

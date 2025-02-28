import { ArrowLeft, Search, Home } from "lucide-react";
import ButtonLink from "@atoms/button-link";
import { Card } from "@atoms/card";
import { GradientBackground } from "@molecules/gradient-background";

export default function NotFound() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8">
          <div className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full bg-primary/10 flex items-center justify-center animate-pulse" />
              <Search className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-primary" />
            </div>

            <h1 className="text-5xl font-bold tracking-tight mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page introuvable</h2>
            <p className="text-muted-foreground mb-8">
              Désolé, la page que vous recherchez n&lsquo;existe pas ou a été
              déplacée.
            </p>

            <div className="space-y-4">
              <ButtonLink className="w-full" href="/">
                <Home className="mr-2 h-4 w-4" />
                Retour à l&lsquo;accueil
              </ButtonLink>

              <ButtonLink
                asChild
                variant="outline"
                className="w-full"
                href="javascript:history.back()"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Page précédente
              </ButtonLink>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}

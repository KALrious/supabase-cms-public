import { Card, CardContent } from "@/atoms/card";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

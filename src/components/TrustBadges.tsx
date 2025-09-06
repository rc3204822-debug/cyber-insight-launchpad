import { Shield, Award, Lock, CheckCircle2, Star, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ISO 27001",
      subtitle: "Certificado"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "100% Sigiloso",
      subtitle: "Garantido"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "15+ Anos",
      subtitle: "Experiência"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "98% Sucesso",
      subtitle: "Taxa Comprovada"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5.0 Estrelas",
      subtitle: "Avaliação"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "500+ Casos",
      subtitle: "Resolvidos"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-8">
      <h3 className="text-center text-foreground font-semibold mb-6">
        Confiado por mais de 500 clientes em todo o Brasil
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="text-center">
            <div className="text-primary mb-2 flex justify-center">
              {badge.icon}
            </div>
            <div className="text-sm font-semibold text-foreground">{badge.title}</div>
            <div className="text-xs text-muted-foreground">{badge.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
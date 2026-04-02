interface AiOverviewSectionProps {
  title: string;
  summary: string;
  bullets: string[];
}

const AiOverviewSection = ({ title, summary, bullets }: AiOverviewSectionProps) => {
  return (
    <section className="border-t border-border/60 bg-muted/20 py-12">
      <div className="container mx-auto max-w-4xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          AI Overview
        </p>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-base leading-8 text-muted-foreground">{summary}</p>
        <ul className="space-y-2 text-sm leading-7 text-muted-foreground md:text-base">
          {bullets.map((bullet) => (
            <li key={bullet}>- {bullet}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AiOverviewSection;

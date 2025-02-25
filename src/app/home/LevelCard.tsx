import { RacketRating } from "@/app/home/RacketRating";
import { Card } from "@/components/ui/card";

type LevelCardProps = {
  level: number;
  title: string;
  color: string;
  criteria: string[];
};

export const LevelCard = ({
  level,
  title,
  color,
  criteria,
}: LevelCardProps) => {
  if (criteria.length === 0) return null;

  return (
    <Card key={level} className={`p-6 ${color} border-2`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="text-6xl font-bold text-primary/80">{level}</div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <RacketRating level={level} />
        </div>
      </div>

      <ul className="space-y-3">
        {criteria.map((criterion, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>{criterion}</span>
          </li>
        ))}
      </ul>
      {/* {competition.length > 0 && (
        <>
          <span className="underline">Critères compétition :</span>
          <ul className="space-y-3">
            {competition.map((compet, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>{compet}</span>
              </li>
            ))}
          </ul>
        </>
      )} */}
    </Card>
  );
};

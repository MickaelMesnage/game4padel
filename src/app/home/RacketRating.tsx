import { IconRacket } from "@/components/icons/IconRacket";

export const RacketRating = ({ level }: { level: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(10)].map((_, index) => (
        <IconRacket
          key={index}
          className={`w-4 h-4 ${
            index < level ? "stroke-primary" : "stroke-gray-400"
          }`}
        />
      ))}
    </div>
  );
};

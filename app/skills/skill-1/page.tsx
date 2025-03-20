import { Card } from "@/components/ui/card";

export default function Skill1() {
  return (
    <article className="w-full p-6 bg-card text-card-foreground prose prose-invert max-w-none">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Skill 12</h1>
        <div className="space-y-4">
          <p>
            Description for Skill 1. Edit this content to match the specific skill.
          </p>
          <h2 className="text-xl font-semibold pt-2">Expertise</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Area of expertise 1</li>
            <li>Area of expertise 2</li>
            <li>Area of expertise 3</li>
            <li>Area of expertise 4</li>
            <li>Area of expertise 5</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
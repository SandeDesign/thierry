import { Card } from "@/components/ui/card";

export default function MotionDesign() {
  return (
    <article className="w-full p-6 bg-card text-card-foreground prose prose-invert max-w-none">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Motion Design</h1>
        <div className="space-y-4">
          <p>
            I create engaging motion graphics and animations that bring stories to life and
            capture audience attention. From simple animated logos to complex video productions,
            I deliver high-quality motion design solutions.
          </p>
          <h2 className="text-xl font-semibold pt-2">Expertise</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>2D Animation</li>
            <li>Motion Graphics</li>
            <li>Character Animation</li>
            <li>Video Effects</li>
            <li>Animated Presentations</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
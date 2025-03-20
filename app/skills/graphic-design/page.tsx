import { Card } from "@/components/ui/card";

export default function GraphicDesign() {
  return (
    <article className="w-full p-6 bg-card text-card-foreground prose prose-invert max-w-none">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Graphic & Web Design</h1>
        <div className="space-y-4">
          <p>
            With over a decade of experience in graphic and web design, I specialize in creating
            beautiful, functional, and user-friendly designs that help businesses stand out in
            the digital landscape.
          </p>
          <h2 className="text-xl font-semibold pt-2">Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Brand Identity Design</li>
            <li>Website Design</li>
            <li>UI/UX Design</li>
            <li>Print Design</li>
            <li>Digital Marketing Materials</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
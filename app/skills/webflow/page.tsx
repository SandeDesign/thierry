import { Card } from "@/components/ui/card";

export default function Webflow() {
  return (
    <article className="w-full p-6 bg-card text-card-foreground prose prose-invert max-w-none">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Webflow Expert</h1>
        <div className="space-y-4">
          <p>
            As a certified Webflow expert, I help businesses create stunning, responsive
            websites without compromising on functionality or design. I leverage Webflow's
            powerful features to build custom solutions that meet your specific needs.
          </p>
          <h2 className="text-xl font-semibold pt-2">Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Custom Webflow Development</li>
            <li>Responsive Design</li>
            <li>CMS Integration</li>
            <li>E-commerce Solutions</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
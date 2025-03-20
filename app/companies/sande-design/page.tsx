import Image from "next/image";

export default function SandeDesign() {
  return (
    <article className="w-full min-h-screen bg-card text-card-foreground">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src="https://fl-group.org/wp-content/uploads/2025/02/Adobe-Express-file.png"
            alt="SandeDesign"
            width={80}
            height={80}
            className="rounded-lg object-contain"
          />
          <h1 className="text-2xl font-bold">SandeDesign</h1>
        </div>
        <div className="prose prose-invert max-w-none">
          <p>Company description and details go here...</p>
        </div>
      </div>
    </article>
  );
}
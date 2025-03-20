import Image from "next/image";

export default function Company3() {
  return (
    <article className="w-full min-h-screen bg-card text-card-foreground">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src="/company3-logo.png"
            alt="Company Three"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <h1 className="text-2xl font-bold">Company Three</h1>
        </div>
        <div className="prose prose-invert max-w-none">
          <p>Company description and details go here...</p>
        </div>
      </div>
    </article>
  );
}
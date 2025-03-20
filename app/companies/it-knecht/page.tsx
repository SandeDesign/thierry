import Image from "next/image";

export default function ITKnecht() {
  return (
    <article className="w-full min-h-screen bg-card text-card-foreground">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src="https://itknecht.nl/wp-content/uploads/2025/01/cropped-cropped-file-1-1-e1736278706265.webp"
            alt="IT Knecht bv"
            width={80}
            height={80}
            className="rounded-lg object-contain"
          />
          <h1 className="text-2xl font-bold">IT Knecht bv</h1>
        </div>
        <div className="prose prose-invert max-w-none">
          <p>Company description and details go here...</p>
        </div>
      </div>
    </article>
  );
}
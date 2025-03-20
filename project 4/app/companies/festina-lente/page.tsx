import Image from "next/image";

export default function FestinaLente() {
  return (
    <article className="w-full min-h-screen bg-card text-card-foreground">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src="https://fl-group.org/wp-content/uploads/2024/11/Logo-FESTINA-LENTE-1-e1732628560926.png"
            alt="Festina Lente Groep"
            width={80}
            height={80}
            className="rounded-lg object-contain"
          />
          <h1 className="text-2xl font-bold">Festina Lente Groep</h1>
        </div>
        <div className="prose prose-invert max-w-none">
          <p>Company description and details go here...</p>
        </div>
      </div>
    </article>
  );
}
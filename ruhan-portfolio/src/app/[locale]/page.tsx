import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 min-h-screen items-center justify-center bg-slate-900">
      <h1 className="text-5xl font-bold text-white">Hello World 👋</h1>
      <Button>Hello World</Button>
    </main>
  );
}
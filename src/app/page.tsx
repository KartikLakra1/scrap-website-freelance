import ThemeToggleButton from "@/components/ThemeButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-slate-950 dark:text-white">
      <h1>HELLO</h1>
      <ThemeToggleButton />
    </main>
  );
}

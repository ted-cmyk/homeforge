import TopBar from "@/components/app/TopBar";
import BottomTabs from "@/components/app/BottomTabs";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#0B1220] text-[#EAF0FF]">
      <div className="mx-auto flex min-h-dvh max-w-md flex-col">
        <TopBar />
        <main className="flex-1 px-4 pb-24 pt-4">{children}</main>
        <BottomTabs />
      </div>
    </div>
  );
}
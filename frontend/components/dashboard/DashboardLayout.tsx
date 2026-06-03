interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardLayout({
  sidebar,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="flex h-screen">
        <main className="w-[70%] p-6 overflow-auto border-r border-slate-800">
          {children}
        </main>

        <aside className="w-[30%] p-6 overflow-auto bg-[#0B1117]">
          {sidebar}
        </aside>
      </div>
    </div>
  );
}
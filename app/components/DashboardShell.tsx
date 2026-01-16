import Link from "next/link";

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    badge: "Hot",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M3 12h8V3H3v9zM13 21h8v-6h-8v6zM13 10h8V3h-8v7zM3 21h8v-7H3v7z" />
      </svg>
    ),
  },
  {
    label: "Penyedia",
    href: "/dashboard/provider",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    label: "Owner",
    href: "/dashboard/owner",
    badge: "Live",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    label: "HR",
    href: "/dashboard/hr",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M7 7h10M7 12h10M7 17h6" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    ),
  },
  {
    label: "Karyawan",
    href: "/dashboard/employee",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M5 20h14M7 20v-6h10v6M8 9h8M10 13h4" />
        <rect x="4" y="3" width="16" height="14" rx="2" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Overview", href: "/" },
  { label: "Performance", href: "/dashboard/hr" },
  { label: "Attendance", href: "/dashboard/owner" },
  { label: "People", href: "/dashboard/employee" },
];

export function DashboardShell({
  active,
  children,
}: {
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen min-w-0">
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
          <div className="flex items-center gap-3 px-6 py-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-sm font-semibold text-white">
              AP
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Absensi Pulse
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                HR suite
              </p>
            </div>
          </div>
          <div className="px-6 pb-2 text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Main Menu
          </div>
          <nav className="flex flex-col gap-1 px-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                  active === item.label
                    ? "bg-orange-50 text-orange-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-current shadow-sm">
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {item.badge ? (
                  <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-rose-600">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-6 text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Insights
          </div>
          <div className="px-4 pb-4">
            <div className="min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold text-slate-700">
                Active accounts
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>1,248 users</span>
                <span className="text-emerald-600">+12%</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[72%] rounded-full bg-orange-400" />
              </div>
            </div>
            <div className="mt-3 min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold text-slate-700">
                Queue health
              </p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>Latency 0.8s</span>
                <span className="text-slate-500">Stable</span>
              </div>
              <div className="mt-2 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[86%] rounded-full bg-sky-400" />
              </div>
            </div>
          </div>
          <div className="mt-auto border-t border-slate-200 px-6 py-5">
            <div className="min-w-0 rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold text-slate-700">
                Platform Status
              </p>
              <p className="text-xs text-slate-500">All systems normal</p>
            </div>
          </div>
        </aside>

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3">
                <span className="hidden text-xs text-slate-400 md:inline">
                  CTRL + /
                </span>
                <div className="relative w-full min-w-0 sm:max-w-md">
                  <input
                    type="text"
                    placeholder="Search in HRMS"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
                <button className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 sm:inline-flex">
                  + Add
                </button>
                <button className="hidden rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 sm:inline-flex">
                  Export
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500">
                  ?
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-500">
                  !
                </button>
                <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                  <span className="h-6 w-6 rounded-full bg-slate-200" />
                  Admin
                </button>
              </div>
            </div>
            <nav className="mt-3 flex gap-2 overflow-x-auto text-xs uppercase tracking-[0.2em] text-slate-400 lg:hidden">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>

          <div className="min-w-0 flex-1 px-4 py-4 sm:px-6 sm:py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

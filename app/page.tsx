import Link from "next/link";
import { DashboardShell } from "@/app/components/DashboardShell";

const roles = [
  {
    title: "Penyedia Platform",
    description:
      "Kelola perusahaan pelanggan, pemilik usaha, dan pantau pertumbuhan revenue langganan.",
    href: "/dashboard/provider",
    tone: "bg-orange-50 text-orange-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Owner Usaha",
    description:
      "Pantau kehadiran, performa jam kerja, status karyawan, dan persetujuan cuti.",
    href: "/dashboard/owner",
    tone: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    title: "HR",
    description:
      "Atur data karyawan, shift kerja, jadwal libur, dan rekap absensi perusahaan.",
    href: "/dashboard/hr",
    tone: "bg-amber-50 text-amber-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M7 7h10M7 12h10M7 17h6" />
        <rect x="3" y="4" width="18" height="16" rx="2" />
      </svg>
    ),
  },
  {
    title: "Karyawan",
    description:
      "Lihat ringkasan kehadiran, jam kerja, status tim, dan absensi harian.",
    href: "/dashboard/employee",
    tone: "bg-sky-50 text-sky-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M7 4h10v4H7zM5 8h14v12H5z" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
];

const quickStats = [
  {
    label: "Perusahaan aktif",
    value: "124",
    tone: "bg-orange-50 text-orange-600",
  },
  {
    label: "HR online",
    value: "36",
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Approval pending",
    value: "18",
    tone: "bg-amber-50 text-amber-600",
  },
  {
    label: "Notifikasi",
    value: "7",
    tone: "bg-sky-50 text-sky-600",
  },
];

export default function Home() {
  return (
    <DashboardShell active="Dashboard">
      <div className="space-y-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            HR Performance Suite
          </span>
          <h1 className="mt-3 font-[var(--font-display)] text-3xl font-semibold text-slate-900">
            Absensi Pulse Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-500">
            Tampilan ringkas untuk penyedia platform, owner usaha, HR, dan
            karyawan. Setiap dashboard dirancang agar mudah dibaca dan cepat
            mengambil keputusan.
          </p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((item) => (
            <article
              key={item.label}
              className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs ${item.tone}`}>
                  {item.value}
                </span>
              </div>
              <div className="mt-4 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[62%] rounded-full bg-orange-400" />
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <Link
              key={role.title}
              href={role.href}
              className="flex min-w-0 items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-full text-base font-semibold ${role.tone}`}
              >
                {role.icon}
              </span>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  {role.title}
                </h3>
                <p className="text-sm text-slate-500">{role.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    Dashboard lengkap
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1">
                    Data real-time
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </DashboardShell>
  );
}

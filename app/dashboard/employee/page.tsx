import { DashboardShell } from "@/app/components/DashboardShell";
import { LineChart } from "@/app/components/charts/LineChart";

const summaries = [
  {
    label: "Kehadiran bulan ini",
    value: "20 hari",
    meta: "Target 22 hari",
    tone: "border-l-emerald-400",
    iconBg: "bg-emerald-50 text-emerald-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 8v5l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    label: "Terlambat bulan ini",
    value: "2 hari",
    meta: "Membaik 40%",
    tone: "border-l-orange-400",
    iconBg: "bg-orange-50 text-orange-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    label: "Jam kerja hari ini",
    value: "6j 12m",
    meta: "Sisa 1j 48m",
    tone: "border-l-sky-400",
    iconBg: "bg-sky-50 text-sky-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M12 3v4M12 17v4" />
        <path d="M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
  {
    label: "Sisa cuti",
    value: "7 hari",
    meta: "Reset tahunan",
    tone: "border-l-indigo-400",
    iconBg: "bg-indigo-50 text-indigo-600",
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

const performanceTrend = {
  labels: ["1", "5", "10", "15", "20", "25", "30"],
  values: [8, 7.5, 8.2, 7.8, 8.6, 8.4, 8.9],
};

const teamStatus = [
  { nama: "Ayu Pratiwi", status: "Hadir" },
  { nama: "Bimo Setia", status: "Cuti" },
  { nama: "Damar Wijaya", status: "Dinas luar" },
  { nama: "Sinta Wardani", status: "Hadir" },
];

const employeeDirectory = [
  { nama: "Ayu Pratiwi", divisi: "Marketing", status: "Aktif" },
  { nama: "Bimo Setia", divisi: "Finance", status: "Cuti" },
  { nama: "Damar Wijaya", divisi: "Sales", status: "Dinas luar" },
  { nama: "Sinta Wardani", divisi: "HR", status: "Aktif" },
];

const highlights = [
  {
    label: "Poin kehadiran",
    value: "92",
    note: "Stabil",
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Streak hadir",
    value: "8 hari",
    note: "Personal best",
    tone: "bg-sky-50 text-sky-600",
  },
  {
    label: "Sisa lembur",
    value: "3 jam",
    note: "Minggu ini",
    tone: "bg-amber-50 text-amber-600",
  },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";
const cardSoft =
  "min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:shadow-md";

export default function EmployeeDashboard() {
  return (
    <DashboardShell active="Karyawan">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Karyawan
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">
            Kehadiran dan performa harianmu
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Pantau ringkasan kehadiran, jam kerja, serta status tim agar lebih
            mudah mengelola target bulanan.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaries.map((item) => (
            <article
              key={item.label}
              className={`${cardBase} border-l-4 ${item.tone}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    {item.value}
                  </p>
                </div>
                <span
                  className={`grid h-10 w-10 place-items-center rounded-full ${item.iconBg}`}
                >
                  {item.icon}
                </span>
              </div>
              <p className="mt-3 text-xs text-emerald-600">{item.meta}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className={cardSoft}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>
                <span className={`rounded-full px-3 py-1 text-xs ${item.tone}`}>
                  {item.note}
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-slate-900">
                {item.value}
              </p>
              <div className="mt-3 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[58%] rounded-full bg-amber-400" />
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr,1.2fr]">
          <article className={cardSoft}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Absensi hari ini
              </h2>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                Today
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                {
                  title: "Absen masuk",
                  note: "Scan wajah dan lokasi",
                  endpoint: "/absen/masuk",
                  tone: "bg-emerald-50 text-emerald-600",
                },
                {
                  title: "Absen pulang",
                  note: "Catat jam pulang",
                  endpoint: "/absen/pulang",
                  tone: "bg-sky-50 text-sky-600",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-lg ${item.tone}`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path d="M12 8v5l3 3" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500">{item.note}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500">
                    {item.endpoint}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Performa bulanan
              </h2>
              <span className="text-xs text-slate-400">30 hari</span>
            </div>
            <div className="mt-4 h-44 sm:h-52">
              <LineChart
                labels={performanceTrend.labels}
                values={performanceTrend.values}
                stroke="#0ea5e9"
                fill="rgba(14,165,233,0.18)"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-600">
                Tepat waktu 18
              </span>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-orange-600">
                Terlambat 2
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-600">
                Absen 0
              </span>
            </div>
          </article>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Status tim
              </h2>
              <span className="text-xs text-slate-400">Hari ini</span>
            </div>
            <div className="mt-4 space-y-3">
              {teamStatus.map((member) => (
                <div
                  key={member.nama}
                  className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="h-9 w-9 rounded-full bg-slate-100" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {member.nama}
                      </p>
                      <p className="text-xs text-slate-500">{member.status}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      member.status === "Hadir"
                        ? "bg-emerald-50 text-emerald-600"
                        : member.status === "Cuti"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Daftar karyawan
              </h2>
              <span className="text-xs text-slate-400">Tim hari ini</span>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm">
                <thead>
                  <tr>
                    <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Nama
                    </th>
                    <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Divisi
                    </th>
                    <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employeeDirectory.map((row) => (
                    <tr key={row.nama} className="border-b border-slate-200">
                      <td className="px-2 py-3 text-slate-700">{row.nama}</td>
                      <td className="px-2 py-3 text-slate-500">{row.divisi}</td>
                      <td className="px-2 py-3 text-slate-500">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </DashboardShell>
  );
}

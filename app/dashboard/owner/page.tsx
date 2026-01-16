import { DashboardShell } from "@/app/components/DashboardShell";
import { BarChart } from "@/app/components/charts/BarChart";
import { DonutChart } from "@/app/components/charts/DonutChart";

const totals = [
  {
    label: "Total karyawan",
    value: "86",
    meta: "+3 bulan ini",
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
        <path d="M7 11c2 0 3.5-1.6 3.5-3.5S9 4 7 4 3.5 5.6 3.5 7.5 5 11 7 11z" />
        <path d="M17 11c2 0 3.5-1.6 3.5-3.5S19 4 17 4s-3.5 1.6-3.5 3.5S15 11 17 11z" />
        <path d="M3 20c0-3 2.5-5.5 5.5-5.5S14 17 14 20" />
        <path d="M10 20c0-2.4 1.9-4.3 4.3-4.3H18" />
      </svg>
    ),
  },
  {
    label: "Masuk hari ini",
    value: "72",
    meta: "84% hadir",
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
    label: "Terlambat",
    value: "9",
    meta: "Perlu perhatian",
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
    label: "Tidak hadir",
    value: "5",
    meta: "Follow-up HR",
    tone: "border-l-rose-400",
    iconBg: "bg-rose-50 text-rose-600",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M6 18L18 6M6 6l12 12" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

const attendanceBreakdown = {
  labels: ["Hadir", "Terlambat", "Tidak hadir"],
  values: [72, 18, 10],
  colors: ["#22c55e", "#f97316", "#facc15"],
};

const workHourChart = {
  labels: ["Ayu", "Damar", "Naya", "Raka", "Sinta", "Ilham"],
  values: [8.1, 7.4, 7.8, 8.6, 6.9, 7.5],
};

const checkTimes = [
  { nama: "Raka Putra", masuk: "08:02", pulang: "17:06", status: "Tepat waktu" },
  { nama: "Sinta Wardani", masuk: "08:19", pulang: "17:05", status: "Terlambat" },
  { nama: "Ilham Ardi", masuk: "08:01", pulang: "--", status: "Sedang bekerja" },
];

const statusList = [
  { nama: "Ayu Pratiwi", status: "Aktif" },
  { nama: "Damar Wijaya", status: "Dinas luar" },
  { nama: "Naya Kinanti", status: "Cuti" },
  { nama: "Raka Putra", status: "Aktif" },
];

const leaveRequests = [
  { nama: "Naya Kinanti", alasan: "Cuti tahunan", tanggal: "15-17 Jan" },
  { nama: "Bimo Setia", alasan: "Izin keluarga", tanggal: "18 Jan" },
];

const highlights = [
  {
    label: "Punctual streak",
    value: "11 hari",
    note: "Tim utama",
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Avg jam kerja",
    value: "7.8 jam",
    note: "Hari ini",
    tone: "bg-sky-50 text-sky-600",
  },
  {
    label: "Approval pending",
    value: "6",
    note: "Butuh review",
    tone: "bg-orange-50 text-orange-600",
  },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";
const cardSoft =
  "min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:shadow-md";

export default function OwnerDashboard() {
  return (
    <DashboardShell active="Owner">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Owner Usaha
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">
            Pantau performa tim dan kesehatan absensi
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Ringkasan cepat untuk memastikan kehadiran hari ini, jam kerja
            karyawan, dan persetujuan cuti berjalan rapi.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {totals.map((item) => (
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
                <div className="h-1 w-[64%] rounded-full bg-indigo-400" />
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Kehadiran hari ini
            </h2>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
              Hari ini
            </span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <article className={cardBase}>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Distribusi kehadiran
              </p>
              <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="h-40 w-40 sm:h-44 sm:w-44 sm:mx-0">
                  <DonutChart
                    labels={attendanceBreakdown.labels}
                    values={attendanceBreakdown.values}
                    colors={attendanceBreakdown.colors}
                  />
                </div>
                <div className="space-y-2 text-xs text-slate-500">
                  <p className="text-lg font-semibold text-slate-900">
                    {attendanceBreakdown.values[0]}% hadir
                  </p>
                  <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Hadir {attendanceBreakdown.values[0]}
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-orange-600">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Terlambat {attendanceBreakdown.values[1]}
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-600">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Tidak hadir {attendanceBreakdown.values[2]}
                  </span>
                </div>
              </div>
            </article>

            <article className={cardBase}>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Jam masuk dan pulang
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[420px] text-sm">
                  <thead>
                    <tr>
                      <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Karyawan
                      </th>
                      <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Masuk
                      </th>
                      <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Pulang
                      </th>
                      <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {checkTimes.map((row) => (
                      <tr key={row.nama} className="border-b border-slate-200">
                        <td className="px-2 py-3 text-slate-700">{row.nama}</td>
                        <td className="px-2 py-3 text-slate-500">{row.masuk}</td>
                        <td className="px-2 py-3 text-slate-500">{row.pulang}</td>
                        <td className="px-2 py-3 text-slate-500">
                          {row.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className={cardBase}>
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Performa jam kerja
              </p>
              <div className="mt-4 h-44 sm:h-48">
                <BarChart
                  labels={workHourChart.labels}
                  values={workHourChart.values}
                  color="#fb7185"
                />
              </div>
            </article>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Status karyawan
              </h2>
              <span className="text-xs text-slate-400">Hari ini</span>
            </div>
            <div className="mt-4 space-y-3">
              {statusList.map((item) => (
                <div
                  key={item.nama}
                  className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="h-9 w-9 rounded-full bg-slate-100" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.nama}
                      </p>
                      <p className="text-xs text-slate-500">{item.status}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      item.status === "Aktif"
                        ? "bg-emerald-50 text-emerald-600"
                        : item.status === "Cuti"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={cardSoft}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Cuti dan persetujuan
              </h2>
              <span className="text-xs text-slate-400">Perlu tindakan</span>
            </div>
            <div className="mt-4 space-y-3">
              {leaveRequests.map((req) => (
                <div
                  key={req.nama}
                  className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-50 text-orange-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                      >
                        <path d="M7 4h10v4H7zM5 8h14v12H5z" />
                        <path d="M9 14h6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {req.nama}
                      </p>
                      <p className="text-xs text-slate-500">
                        {req.alasan} - {req.tanggal}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500">
                    Tinjau
                  </span>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </DashboardShell>
  );
}

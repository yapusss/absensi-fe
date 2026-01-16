import { DashboardShell } from "@/app/components/DashboardShell";
import { DonutChart } from "@/app/components/charts/DonutChart";

const totals = [
  {
    label: "Total karyawan",
    value: "132",
    meta: "+6 bulan ini",
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
    value: "110",
    meta: "83% hadir",
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
    value: "12",
    meta: "Perlu follow-up",
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
    value: "10",
    meta: "Cek alasan",
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
  values: [83, 9, 8],
  colors: ["#22c55e", "#f97316", "#facc15"],
};

const shiftList = [
  { nama: "Shift Pagi", jam: "08:00 - 17:00", jumlah: "64 karyawan" },
  { nama: "Shift Siang", jam: "10:00 - 19:00", jumlah: "48 karyawan" },
  { nama: "Shift Malam", jam: "21:00 - 06:00", jumlah: "20 karyawan" },
];

const outstationApprovals = [
  { nama: "Nisa Lestari", tanggal: "14 Jan", status: "Menunggu" },
  { nama: "Rendi Haris", tanggal: "15 Jan", status: "Menunggu" },
];

const highlights = [
  {
    label: "Shift coverage",
    value: "92%",
    note: "Hari ini",
    tone: "bg-sky-50 text-sky-600",
  },
  {
    label: "Pengajuan cuti",
    value: "6",
    note: "Menunggu",
    tone: "bg-orange-50 text-orange-600",
  },
  {
    label: "Outstation",
    value: "4",
    note: "Butuh approval",
    tone: "bg-emerald-50 text-emerald-600",
  },
];

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";
const cardSoft =
  "min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:shadow-md";

export default function HrDashboard() {
  return (
    <DashboardShell active="HR">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Human Resource
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">
            Operasional HR harian yang tertata
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Kelola karyawan, shift, absensi, dan approval dalam satu dashboard
            yang mudah dibaca.
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
                <div className="h-1 w-[70%] rounded-full bg-sky-400" />
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-4">
          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Absensi hari ini
              </h2>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                Today
              </span>
            </div>
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

          <div className="grid gap-4 lg:grid-cols-2">
            <article className={cardSoft}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  Assign absensi
                </h2>
                <span className="text-xs text-slate-400">Hari ini</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  {
                    title: "Absen masuk",
                    note: "Verifikasi lokasi dan wajah",
                    endpoint: "/absen/masuk",
                    tone: "bg-emerald-50 text-emerald-600",
                  },
                  {
                    title: "Absen pulang",
                    note: "Catat jam pulang hari ini",
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

            <article className={cardSoft}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  List absensi
                </h2>
                <span className="text-xs text-slate-400">Filter periode</span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                  Harian
                </button>
                <button className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs text-orange-600">
                  Bulanan
                </button>
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                  Tahunan
                </button>
                <div className="w-full sm:w-auto sm:ml-auto">
                  <select className="w-full rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                    <option>Pilih bulan</option>
                    <option>Januari</option>
                    <option>Februari</option>
                    <option>Maret</option>
                    <option>April</option>
                    <option>Mei</option>
                    <option>Juni</option>
                    <option>Juli</option>
                    <option>Agustus</option>
                    <option>September</option>
                    <option>Oktober</option>
                    <option>November</option>
                    <option>Desember</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  {
                    nama: "Ayu Pratiwi",
                    status: "Hadir",
                    waktu: "08:02 - 17:04",
                  },
                  {
                    nama: "Bimo Setia",
                    status: "Terlambat",
                    waktu: "08:28 - 17:12",
                  },
                  {
                    nama: "Damar Wijaya",
                    status: "Cuti",
                    waktu: "Cuti 1 hari",
                  },
                ].map((row) => (
                  <div
                    key={row.nama}
                    className="flex flex-col gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {row.nama}
                      </p>
                      <p className="text-xs text-slate-500">{row.waktu}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-600">
                      {row.status}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Menampilkan 3 dari 42 karyawan</span>
                  <button className="text-orange-600">Lihat semua</button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-4">
          <article className={cardSoft}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Manajemen karyawan
              </h2>
              <span className="text-xs text-slate-400">CRUD utama</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                {
                  title: "CRUD karyawan",
                  note: "Tambah, ubah, dan nonaktifkan",
                  endpoint: "/api/v1/hr/karyawan",
                  tone: "bg-indigo-50 text-indigo-600",
                },
                {
                  title: "Set kuota cuti",
                  note: "Atur jatah cuti tahunan",
                  endpoint: "/karyawan/cuti",
                  tone: "bg-emerald-50 text-emerald-600",
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
                        <path d="M7 7h10M7 12h10M7 17h6" />
                        <rect x="3" y="4" width="18" height="16" rx="2" />
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
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Shift kerja
              </h2>
              <span className="text-xs text-slate-400">Daftar shift</span>
            </div>
            <div className="mt-4 space-y-3">
              {shiftList.map((shift) => (
                <div
                  key={shift.nama}
                  className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky-50 text-sky-600">
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
                        {shift.nama}
                      </p>
                      <p className="text-xs text-slate-500">
                        {shift.jam} - {shift.jumlah}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500">
                    Kelola
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={cardBase}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Outstation
              </h2>
              <span className="text-xs text-slate-400">Approval</span>
            </div>
            <div className="mt-4 space-y-3">
              {outstationApprovals.map((item) => (
                <div
                  key={item.nama}
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
                        <path d="M12 8v5l3 3" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.nama}
                      </p>
                      <p className="text-xs text-slate-500">{item.tanggal}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500">
                    Setujui
                  </span>
                </div>
              ))}
              <div className="flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="M7 7h10M7 12h6M7 17h4" />
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Update status approval
                    </p>
                    <p className="text-xs text-slate-500">
                      Persetujuan dinas luar karyawan
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500">
                  /outstation-approval
                </span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </DashboardShell>
  );
}

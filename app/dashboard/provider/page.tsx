import { DashboardShell } from "@/app/components/DashboardShell";
import { LineChart } from "@/app/components/charts/LineChart";

const kpis = [
  {
    label: "Usaha aktif",
    value: "124",
    meta: "+12% bulan ini",
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
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    label: "Owner terdaftar",
    value: "180",
    meta: "+8 baru",
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
        <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    label: "Langganan aktif",
    value: "96",
    meta: "77% konversi",
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
        <path d="M7 4h10l2 4H5l2-4zM5 8h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    label: "MRR",
    value: "Rp 86 jt",
    meta: "+14% vs bulan lalu",
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
        <path d="M3 12h4l3 6 4-12 3 6h4" />
      </svg>
    ),
  },
];

const incomeRows = [
  { usaha: "Kedai Tiga", paket: "Growth", nominal: "Rp 3,2 jt", tanggal: "12 Jan" },
  { usaha: "Studio Kin", paket: "Core", nominal: "Rp 2,1 jt", tanggal: "11 Jan" },
  { usaha: "Batik Reka", paket: "Scale", nominal: "Rp 5,4 jt", tanggal: "10 Jan" },
];

const subscriptionRows = [
  { usaha: "Gudang Kopi", status: "Aktif", masa: "sisa 21 hari" },
  { usaha: "Mitra Rasa", status: "Perlu perpanjang", masa: "sisa 3 hari" },
  { usaha: "Bengkel Satu", status: "Aktif", masa: "sisa 12 hari" },
];

const highlights = [
  {
    label: "Signups baru",
    value: "28",
    note: "Minggu ini",
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Churn risiko",
    value: "6",
    note: "Perlu follow-up",
    tone: "bg-orange-50 text-orange-600",
  },
  {
    label: "Tiket support",
    value: "14",
    note: "SLA 4 jam",
    tone: "bg-emerald-50 text-emerald-600",
  },
];

const revenueTrend = {
  labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  values: [28, 32, 35, 31, 42, 45, 48],
};

const cardBase =
  "min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md";
const cardSoft =
  "min-w-0 rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:shadow-md";

export default function ProviderDashboard() {
  return (
    <DashboardShell active="Penyedia">
      <div className="space-y-8">
        <header className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
            Penyedia Platform
          </span>
          <h1 className="text-2xl font-semibold text-slate-900">
            Kontrol bisnis langganan dalam satu layar
          </h1>
          <p className="max-w-2xl text-sm text-slate-500">
            Fokus pada pertumbuhan revenue, kesehatan langganan, dan konsistensi
            data owner serta perusahaan yang menggunakan platform.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((item) => (
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
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-emerald-600">
                  {item.meta}
                </span>
                <span>vs bulan lalu</span>
              </div>
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
              <p className="mt-4 text-3xl font-semibold text-slate-900">
                {item.value}
              </p>
              <div className="mt-3 h-1 rounded-full bg-slate-100">
                <div className="h-1 w-[68%] rounded-full bg-orange-400" />
              </div>
            </article>
          ))}
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Pertumbuhan revenue langganan
            </h2>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
              90 Hari
            </span>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr,1fr]">
            <article className={cardBase}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Revenue trend
              </span>
              <div className="mt-4 h-36 sm:h-44">
                <LineChart labels={revenueTrend.labels} values={revenueTrend.values} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-600">
                  +18% QoQ
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-600">
                  ARPU stabil
                </span>
              </div>
            </article>
            <article className={cardSoft}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Pembayaran terbaru
              </span>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr>
                    <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Usaha
                    </th>
                    <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Paket
                    </th>
                    <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Nominal
                    </th>
                    <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Tanggal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {incomeRows.map((row) => (
                    <tr key={row.usaha} className="border-b border-slate-200">
                      <td className="px-2 py-3 text-slate-700">{row.usaha}</td>
                      <td className="px-2 py-3 text-slate-500">{row.paket}</td>
                      <td className="px-2 py-3 text-slate-700">{row.nominal}</td>
                      <td className="px-2 py-3 text-slate-500">{row.tanggal}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Kelola owner dan perusahaan
            </h2>
            <span className="text-xs text-slate-400">
              CRUD data owner serta usaha pelanggan
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className={cardSoft}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Owner perusahaan
              </span>
              <div className="mt-4 flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-50 text-orange-600">
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
                  </span>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900">
                      Tambah owner baru
                    </strong>
                    <span className="text-xs text-slate-500">
                      Validasi email, nomor, dan role Owner
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500 sm:self-center">
                  /api/v1/penyedia/pemilik
                </span>
              </div>
              <div className="mt-3 flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky-50 text-sky-600">
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
                    <strong className="block text-sm font-semibold text-slate-900">
                      Hubungkan owner ke usaha
                    </strong>
                    <span className="text-xs text-slate-500">
                      Daftarkan akses owner ke UMKM
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500 sm:self-center">
                  /daftarkan-pemilik
                </span>
              </div>
            </article>
            <article className={cardSoft}>
              <span className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                Data perusahaan
              </span>
              <div className="mt-4 flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900">
                      Tambahkan usaha baru
                    </strong>
                    <span className="text-xs text-slate-500">
                      Nama usaha, lokasi, radius absensi
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500 sm:self-center">
                  /api/v1/penyedia/umkm
                </span>
              </div>
              <div className="mt-3 flex flex-col items-start gap-3 rounded-lg border border-dashed border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-rose-50 text-rose-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                    >
                      <path d="M12 3v18M6 9h12M6 15h12" />
                    </svg>
                  </span>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900">
                      Update level langganan
                    </strong>
                    <span className="text-xs text-slate-500">
                      Naikkan paket atau ubah status langganan
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-500 sm:self-center">
                  /status-berlangganan
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Status langganan
            </h2>
            <span className="text-xs text-slate-400">
              Pantau masa aktif dan risiko churn
            </span>
          </div>
          <article className={cardBase}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[460px] text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Usaha
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Status
                  </th>
                  <th className="px-2 py-3 text-left text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    Masa aktif
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscriptionRows.map((row) => (
                  <tr key={row.usaha} className="border-b border-slate-200">
                    <td className="px-2 py-3 text-slate-700">{row.usaha}</td>
                    <td>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${
                          row.status === "Aktif"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-slate-500">{row.masa}</td>
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

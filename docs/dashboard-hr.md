# Dashboard HR

Tujuan: mengelola karyawan, shift kerja, absensi harian, cuti, libur, dan approval outstation.

## Endpoint sumber data
- `POST /api/v1/hr/karyawan`
- `GET /api/v1/hr/karyawan`
- `PUT /api/v1/hr/karyawan`
- `DELETE /api/v1/hr/karyawan`
- `GET /api/v1/hr/shifts`
- `POST /api/v1/hr/shift`
- `PUT /api/v1/hr/shifts`
- `DELETE /api/v1/hr/shifts`
- `POST /api/v1/hr/daftarkan-shift`
- `PATCH /api/v1/hr/karyawan/cuti`
- `POST /api/v1/hr/libur`
- `PATCH /api/v1/hr/outstation-approval`
- `GET /api/v1/hr/absen/export`
- `POST /api/v1/(pemilik/hr/karyawan)/absen/masuk`
- `POST /api/v1/(pemilik/hr/karyawan)/absen/pulang`

## Model data UI
```ts
type EmployeeInput = {
  namaPengguna: string;
  emailPengguna: string;
  nomorPengguna: string;
  rolePengguna: "Karyawan";
  vecPengguna: string;
};

type ShiftInput = {
  idPerusahaan: number;
  namaShift: string;
  jamMasuk: string;
  jamPulang: string;
};

type ShiftAssignmentInput = {
  idPerusahaan: number;
  idPengguna: number;
  idShift: number;
};

type LeaveQuotaInput = {
  idPengguna: number;
  kuotaCuti: number;
};

type HolidayInput = {
  idPerusahaan: number;
  namaLibur: string;
  keteranganLibur: string;
  rentangLibur: string;
};

type OutstationApprovalInput = {
  idAbsensi: number;
  statusApprovalOutstation: string;
};

type AttendanceExportRow = {
  idAbsensi: number;
  idPengguna: number;
  tanggalAbsensi: string;
  statusAbsensi: string;
  rentangWaktuAbsensi: string;
};

type HrDashboardSummary = {
  totalKaryawan: number;
  hadir: number;
  terlambat: number;
  tidakHadir: number;
};
```

## Catatan transformasi data
- Ringkasan kehadiran dan bar chart jam kerja dihitung dari data attendance export.
- Status karyawan (aktif, cuti, dinas luar) perlu atribut status di tabel pengguna atau endpoint ringkasan khusus.
- HR dan karyawan berada di tabel yang sama dan dibedakan oleh kolom `rolePengguna`.

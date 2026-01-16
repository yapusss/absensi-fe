# Dashboard Karyawan

Tujuan: melihat ringkasan kehadiran pribadi, jam kerja hari ini, sisa cuti, serta status rekan kerja.

## Endpoint sumber data
- `GET /api/v1/karyawan/performance`
- `GET /api/v1/karyawan/team-status`
- `POST /api/v1/(pemilik/hr/karyawan)/absen/masuk`
- `POST /api/v1/(pemilik/hr/karyawan)/absen/pulang`

## Model data UI
```ts
type AttendancePerformanceRow = {
  idAbsensi: number;
  tanggalAbsensi: string;
  statusAbsensi: string;
  rentangWaktuAbsensi: string;
};

type TeamStatusRow = {
  idPengguna: number;
  namaPengguna: string;
  statusPengguna: string;
};

type EmployeeSummary = {
  totalHadirBulanIni: number;
  totalTerlambatBulanIni: number;
  totalJamKerjaHariIni: number;
  sisaCutiTahunan: number;
};
```

## Catatan transformasi data
- Grafik performa bulanan dihasilkan dari `AttendancePerformanceRow`.
- Ringkasan `EmployeeSummary` dapat dihitung dari performa dan data cuti.

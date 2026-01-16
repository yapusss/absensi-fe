# Dashboard Owner Usaha

Tujuan: memantau kehadiran, jam kerja, status karyawan, serta mengelola HR dan kalender cuti/libur.

## Endpoint sumber data
- `POST /api/v1/pemilik/hr`
- `GET /api/v1/pemilik/hr`
- `PUT /api/v1/pemilik/hr`
- `DELETE /api/v1/pemilik/hr`
- `POST /api/v1/pemilik/daftarkan-hr`
- `GET /api/v1/pemilik/absen/export`
- `POST /api/v1/(pemilik/hr/karyawan)/absen/masuk`
- `POST /api/v1/(pemilik/hr/karyawan)/absen/pulang`

## Model data UI
```ts
type HrInput = {
  namaPengguna: string;
  emailPengguna: string;
  nomorPengguna: string;
  rolePengguna: "HR";
  vecPengguna: string;
};

type HrEnrollmentInput = {
  idPengguna: number;
  idUsaha: number;
};

type AttendanceExportRow = {
  idAbsensi: number;
  idPengguna: number;
  tanggalAbsensi: string;
  statusAbsensi: string;
  rentangWaktuAbsensi: string;
};

type AttendanceSummary = {
  totalKaryawan: number;
  hadir: number;
  terlambat: number;
  tidakHadir: number;
};

type CheckInOutRow = {
  idPengguna: number;
  namaPengguna: string;
  waktuMasuk: string | null;
  waktuPulang: string | null;
  statusAbsensi: string;
};

type WorkHourBar = {
  idPengguna: number;
  namaPengguna: string;
  totalJamKerja: number;
};

type EmployeeStatusRow = {
  idPengguna: number;
  namaPengguna: string;
  statusPengguna: "Aktif" | "Cuti" | "Dinas luar";
};
```

## Catatan transformasi data
- `AttendanceSummary`, `CheckInOutRow`, dan `WorkHourBar` dapat dihitung dari `AttendanceExportRow`.
- Untuk kebutuhan status karyawan dan daftar cuti, backend dapat menambahkan endpoint ringkasan yang menggabungkan `mPengguna` (role HR/Karyawan) dengan status cuti/outstation.
- HR dan karyawan berada di tabel yang sama dan dibedakan oleh kolom `rolePengguna`.

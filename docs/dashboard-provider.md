# Dashboard Penyedia Platform

Tujuan: memantau pertumbuhan revenue, kesehatan langganan, serta CRUD data owner dan perusahaan.

## Endpoint sumber data
- `POST /api/v1/penyedia/umkm`
- `GET /api/v1/penyedia/umkm`
- `PUT /api/v1/penyedia/umkm`
- `DELETE /api/v1/penyedia/umkm`
- `POST /api/v1/penyedia/pemilik`
- `GET /api/v1/penyedia/pemilik`
- `PUT /api/v1/penyedia/pemilik`
- `DELETE /api/v1/penyedia/pemilik`
- `POST /api/v1/penyedia/daftarkan-pemilik`
- `GET /api/v1/penyedia/pemasukan`
- `PATCH /api/v1/penyedia/status-berlangganan`

## Model data UI
```ts
type CompanyInput = {
  namaUsaha: string;
  logoUsaha: string;
  longitudeUsaha: string;
  latitudeUsaha: string;
  radiusUsaha: number;
  emailUsaha: string;
  nomorUsaha: string;
  levelLanggananUsaha: string;
};

type OwnerInput = {
  namaPengguna: string;
  emailPengguna: string;
  nomorPengguna: string;
  rolePengguna: "Owner";
  vecPengguna: string;
};

type OwnerEnrollmentInput = {
  idPengguna: number;
  idUsaha: number;
};

type IncomeRow = {
  idUsaha: number;
  idPaket: number;
  idLangganan: number;
  totalNominal: number;
  tanggalBayar: string;
};

type SubscriptionUpdateInput = {
  idLangganan: number;
  waktuLangganan: string;
  statusLangganan: string;
};

type ProviderDashboardKpi = {
  usahaAktif: number;
  ownerTerdaftar: number;
  langgananAktif: number;
  mrr: number;
};
```

## Catatan transformasi data
- KPI dashboard dihitung dari daftar usaha, owner, dan status langganan.
- Grafik revenue berasal dari array `IncomeRow` dan di-aggregate per minggu/bulan.

import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import { Download, Upload, CheckCircle, XCircle, FileText } from "lucide-react";

export default function RuangLingkup() {
  return (
    <>
      <PageMeta
        title="4.3 Ruang Lingkup SMM | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 4.3 - Menentukan Ruang Lingkup Sistem Manajemen Mutu"
      />
      <PageBreadcrumb pageTitle="4.3 Ruang Lingkup SMM" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
              <Upload className="w-4 h-4" />
              Upload Revisi
            </button>
          </div>
        </div>

        {/* Scope Statement */}
        {/* <ComponentCard title="Pernyataan Ruang Lingkup">
          <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-4">
              RUANG LINGKUP SISTEM MANAJEMEN MUTU
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
              Sistem Manajemen Mutu PT Pelita Hati Group mencakup:
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                "Distribusi produk Fast Moving Consumer Goods (FMCG) dan General
                Trade untuk wilayah Jawa Tengah dan sekitarnya"
              </p>
            </div>
          </div>
        </ComponentCard> */}

        {/* Included Activities */}
        <ComponentCard title="Aktivitas yang Tercakup dalam Ruang Lingkup">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Procurement & Purchasing
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pembelian produk dari principal, negosiasi harga, purchase
                    order, dan supplier management
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Warehouse & Inventory Management
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Penerimaan barang, penyimpanan, stock management, dan stock
                    opname
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Sales & Marketing
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Penjualan produk ke retail, wholesaler, sales order, dan
                    customer relationship management
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Delivery & Distribution
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pengiriman produk ke customer, delivery order, dan logistics
                    management
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Finance & Accounting
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pengelolaan keuangan, pembayaran, invoicing, dan financial
                    reporting
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Human Resources & General Affairs
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pengelolaan SDM, rekrutmen, pelatihan, dan administrasi umum
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Information Technology
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pengelolaan sistem informasi, IT support, dan infrastructure
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Quality Management System
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pengelolaan SMM, audit internal, dan continual improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Exclusions */}
        <ComponentCard title="Pengecualian (Exclusions)">
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Klausul 8.3 - Design & Development
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    PT Pelita Hati Group adalah perusahaan distributor yang
                    tidak melakukan design dan development produk. Semua produk
                    yang didistribusikan adalah produk jadi dari
                    principal/supplier.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      Justifikasi:
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Sesuai ISO 9001:2015 Klausul 4.3, pengecualian ini tidak
                      mempengaruhi kemampuan organisasi untuk memberikan produk
                      dan layanan yang sesuai dengan persyaratan pelanggan dan
                      regulasi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Boundaries */}
        <ComponentCard title="Batasan Penerapan">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Batasan Geografis
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Wilayah operasional: Jawa Tengah (Pekalongan, Semarang,
                    Surakarta, Yogyakarta)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ekspansi potensial: Jawa Timur bagian barat
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Batasan Produk/Layanan
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Produk FMCG: Food, beverage, personal care, household
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    General Trade: Retail modern, traditional, dan wholesaler
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Batasan Organisasi
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Semua departemen di kantor pusat Pekalongan
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Warehouse utama dan cabang
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Batasan Proses
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tidak termasuk: manufacturing, packaging, labeling
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">•</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fokus: distribution, sales, dan logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* References */}
        <ComponentCard title="Referensi Terkait">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    ISO 9001:2015 Klausul 4.1
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Memahami organisasi dan konteksnya
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    ISO 9001:2015 Klausul 4.2
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kebutuhan pihak berkepentingan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Manual Mutu
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dokumen Manual Mutu PT Pelita Hati Group
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Struktur Organisasi
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Bagan organisasi dan job description
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Nomor Dokumen
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                ISO-4.3-001
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Versi
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                v1.0
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Tanggal Terbit
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                01 Jan 2024
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Disetujui Oleh
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Direktur Utama
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}

import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import { Building2, Download, Upload } from "lucide-react";

export default function StrukturOrganisasi() {
  return (
    <>
      <PageMeta
        title="Struktur Organisasi | DCMS Pelita Hati"
        description="Struktur Organisasi Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Struktur Organisasi" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Struktur Organisasi
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Bagan dan struktur organisasi PT Pelita Hati Group
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
              <Upload className="w-4 h-4" />
              Upload Baru
            </button>
          </div>
        </div>

        <ComponentCard title="Bagan Organisasi">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="bg-brand-500 text-white px-6 py-4 rounded-lg mb-6 inline-block">
                  <Building2 className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-bold">Direktur Utama</h3>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Finance & Accounting
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      FAT Manager
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Human Resources
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      HRD Manager
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Operations
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Operations Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        <div className="grid md:grid-cols-2 gap-6">
          <ComponentCard title="Departemen & Fungsi">
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Top Management (TM)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Direktur Utama dan jajaran direksi
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Human Resources & GA (HRD)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pengelolaan SDM dan administrasi umum
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Finance & Accounting (FAT)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Keuangan, akuntansi, dan perpajakan
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Sales (SLS)
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Penjualan dan marketing
                </p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Informasi Dokumen">
            <div className="space-y-3">
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Nomor Dokumen
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  ST-TM-005
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Versi
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  v2.0
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tanggal Update
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  01 Jan 2024
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Disetujui Oleh
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Direktur Utama
                </span>
              </div>
            </div>
          </ComponentCard>
        </div>
      </div>
    </>
  );
}

import { FileText, Building2, Users } from "lucide-react";

export default function DocumentsMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {/* <!-- Metric Item: Dokumen --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <FileText className="text-brand-500 size-6 dark:text-brand-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Dokumen
            </span>
            <h4 className="mt-2 font-semibold text-gray-800 text-title-sm dark:text-white/90">
              176 Dokumen
            </h4>
          </div>
        </div>
      </div>

      {/* <!-- Metric Item: Departemen --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <Building2 className="text-brand-500 size-6 dark:text-brand-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Departemen
            </span>
            <h4 className="mt-2 font-semibold text-gray-800 text-title-sm dark:text-white/90">
              10 Departemen
            </h4>
          </div>
        </div>
      </div>

      {/* <!-- Metric Item: Pengguna --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <Users className="text-brand-500 size-6 dark:text-brand-400" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Pengguna
            </span>
            <h4 className="mt-2 font-semibold text-gray-800 text-title-sm dark:text-white/90">
              122 Pengguna
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import VisiMisi from "./pages/DokumenStrategis/VisiMisi";
import KebijakanMutuOld from "./pages/DokumenStrategis/KebijakanMutu";
import ManualMutu from "./pages/DokumenStrategis/ManualMutu";
import SasaranMutu from "./pages/DokumenStrategis/SasaranMutu";
import StrukturOrganisasi from "./pages/DokumenStrategis/StrukturOrganisasi";
import KonteksOrganisasi from "./pages/ISO9001/KonteksOrganisasi/KonteksOrganisasi";
import KebijakanK3 from "./pages/DokumenStrategis/KebijakanK3";
import KebijakanLingkungan from "./pages/DokumenStrategis/KebijakanLingkungan";
import AuditInternal from "./pages/ProsedurSOP/ISO9001/AuditInternal";
import KontrolDokumen from "./pages/ProsedurSOP/ISO9001/KontrolDokumen";
import KontrolRekaman from "./pages/ProsedurSOP/ISO9001/KontrolRekaman";
import TindakanKorektif from "./pages/ProsedurSOP/ISO9001/TindakanKorektif";
import TinjauanManajemen from "./pages/ProsedurSOP/ISO9001/TinjauanManajemen";
import TopManajemen from "./pages/ProsedurSOP/ProsedurDept/TopManajemen";
import HRGA from "./pages/ProsedurSOP/ProsedurDept/HRGA";
import FinanceAccounting from "./pages/ProsedurSOP/ProsedurDept/FinanceAccounting";
import LandingPage from "./pages/LandingPage/LandingPage";
import AllDocuments from "./pages/Dokumen/AllDocuments";
import MemahamiOrganisasi from "./pages/ISO9001/KonteksOrganisasi/MemahamiOrganisasi";
import PihakBerkepentingan from "./pages/ISO9001/KonteksOrganisasi/PihakBerkepentingan";
import RuangLingkup from "./pages/ISO9001/KonteksOrganisasi/RuangLingkup";
import SistemManajemenMutu from "./pages/ISO9001/KonteksOrganisasi/SistemManajemenMutu";
import KepemimpinanKomitmen from "./pages/ISO9001/Kepemimpinan/KepemimpinanKomitmen";
import KebijakanMutu from "./pages/ISO9001/Kepemimpinan/KebijakanMutu";
import PeranTanggungJawab from "./pages/ISO9001/Kepemimpinan/PeranTanggungJawab";
import TindakanRisikoPeluang from "./pages/ISO9001/Perencanaan/TindakanRisikoPeluang";
import SasaranMutuRencana from "./pages/ISO9001/Perencanaan/SasaranMutuRencana";
import PerencanaanPerubahan from "./pages/ISO9001/Perencanaan/PerencanaanPerubahan";
import SumberDaya from "./pages/ISO9001/Dukungan/SumberDaya";
import Kompetensi from "./pages/ISO9001/Dukungan/Kompetensi";
import Kesadaran from "./pages/ISO9001/Dukungan/Kesadaran";
import InformasiTerdokumentasi from "./pages/ISO9001/Dukungan/InformasiTerdokumentasi";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Landing Page - Public Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes - Public */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Dashboard Layout - Protected Routes */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Home />} />

            {/* Dokumen */}
            <Route path="/dokumen/all" element={<AllDocuments />} />

            {/* ISO 9001:2015 */}
            {/* Konteks Organisasi */}
            <Route
              path="/iso/klausul-4/memahami-organisasi"
              element={<MemahamiOrganisasi />}
            />
            <Route
              path="/iso/klausul-4/pihak-berkepentingan"
              element={<PihakBerkepentingan />}
            />
            <Route
              path="/iso/klausul-4/ruang-lingkup"
              element={<RuangLingkup />}
            />
            <Route
              path="/iso/klausul-4/sistem-manajemen-mutu"
              element={<SistemManajemenMutu />}
            />
            <Route
              path="/iso/klausul-4/konteks-organisasi"
              element={<KonteksOrganisasi />}
            />

            {/* Kepemimpinan */}
            <Route
              path="/iso/klausul-5/kepemimpinan-komitmen"
              element={<KepemimpinanKomitmen />}
            />
            <Route
              path="/iso/klausul-5/kebijakan-mutu"
              element={<KebijakanMutu />}
            />
            <Route
              path="/iso/klausul-5/peran-tanggung-jawab"
              element={<PeranTanggungJawab />}
            />

            {/* Perencanaan */}
            <Route
              path="/iso/klausul-6/risiko-peluang"
              element={<TindakanRisikoPeluang />}
            />
            <Route
              path="/iso/klausul-6/sasaran-mutu"
              element={<SasaranMutuRencana />}
            />
            <Route
              path="/iso/klausul-6/perencanaan-perubahan"
              element={<PerencanaanPerubahan />}
            />

            {/* Dukungan */}
            <Route path="/iso/klausul-7/sumber-daya" element={<SumberDaya />} />
            <Route path="/iso/klausul-7/kompetensi" element={<Kompetensi />} />
            <Route path="/iso/klausul-7/kesadaran" element={<Kesadaran />} />
            <Route
              path="/iso/klausul-7/informasi-terdokumentasi"
              element={<InformasiTerdokumentasi />}
            />

            {/* Operasi */}

            {/* Evaluasi Kerja */}

            {/* Peningkatan */}

            {/* Panduan ISO */}

            {/* Dokumen Strategis */}

            <Route path="/dokumen-strategis/visi-misi" element={<VisiMisi />} />
            <Route
              path="/dokumen-strategis/kebijakan-mutu"
              element={<KebijakanMutuOld />}
            />
            <Route
              path="/dokumen-strategis/manual-mutu"
              element={<ManualMutu />}
            />
            <Route
              path="/dokumen-strategis/sasaran-mutu"
              element={<SasaranMutu />}
            />
            <Route
              path="/dokumen-strategis/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />
            <Route
              path="/dokumen-strategis/konteks-organisasi"
              element={<KonteksOrganisasi />}
            />
            <Route
              path="/dokumen-strategis/kebijakan-k3"
              element={<KebijakanK3 />}
            />
            <Route
              path="/dokumen-strategis/kebijakan-lingkungan"
              element={<KebijakanLingkungan />}
            />

            {/* ProsedurSOP - ISO 9001 */}
            <Route
              path="/prosedur/iso9001/kontrol-dokumen"
              element={<KontrolDokumen />}
            />
            <Route
              path="/prosedur/iso9001/kontrol-rekaman"
              element={<KontrolRekaman />}
            />
            <Route
              path="/prosedur/iso9001/audit-internal"
              element={<AuditInternal />}
            />
            <Route
              path="/prosedur/iso9001/tindakan-korektif"
              element={<TindakanKorektif />}
            />
            <Route
              path="/prosedur/iso9001/tinjauan-manajemen"
              element={<TinjauanManajemen />}
            />

            {/* Prosedur Departemen */}
            <Route
              path="/prosedur/departemen/top-manajemen"
              element={<TopManajemen />}
            />
            <Route path="/prosedur/departemen/hrga" element={<HRGA />} />
            <Route
              path="/prosedur/departemen/finance-accounting"
              element={<FinanceAccounting />}
            />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

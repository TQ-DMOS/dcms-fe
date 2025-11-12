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
import KebijakanMutu from "./pages/DokumenStrategis/KebijakanMutu";
import ManualMutu from "./pages/DokumenStrategis/ManualMutu";
import SasaranMutu from "./pages/DokumenStrategis/SasaranMutu";
import StrukturOrganisasi from "./pages/DokumenStrategis/StrukturOrganisasi";
import KonteksOrganisasi from "./pages/DokumenStrategis/KonteksOrganisasi";
import KebijakanK3 from "./pages/DokumenStrategis/KebijakanK3";
import KebijakanLingkungan from "./pages/DokumenStrategis/KebijakanLingkungan";
import AuditInternal from "./pages/ProsedurSOP/ISO9001/AuditInternal";
import KontrolDokumen from "./pages/ProsedurSOP/ISO9001/KontrolDokumen";
import KontrolRekaman from "./pages/ProsedurSOP/ISO9001/KontrolRekaman";
import TindakanKorektif from "./pages/ProsedurSOP/ISO9001/TindakanKorektif";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Dokumen Strategis */}
            <Route
              index
              path="/dokumen-strategis/visi-misi"
              element={<VisiMisi />}
            />
            <Route
              index
              path="/dokumen-strategis/kebijakan-mutu"
              element={<KebijakanMutu />}
            />
            <Route
              index
              path="/dokumen-strategis/manual-mutu"
              element={<ManualMutu />}
            />
            <Route
              index
              path="/dokumen-strategis/sasaran-mutu"
              element={<SasaranMutu />}
            />
            <Route
              index
              path="/dokumen-strategis/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />
            <Route
              index
              path="/dokumen-strategis/konteks-organisasi"
              element={<KonteksOrganisasi />}
            />
            <Route
              index
              path="/dokumen-strategis/kebijakan-k3"
              element={<KebijakanK3 />}
            />
            <Route
              index
              path="/dokumen-strategis/kebijakan-lingkungan"
              element={<KebijakanLingkungan />}
            />

            {/* ProsedurSOP */}
            {/* ISO 9001 */}
            <Route
              index
              path="/prosedur/iso9001/kontrol-dokumen"
              element={<KontrolDokumen />}
            />
            <Route
              index
              path="/prosedur/iso9001/kontrol-rekaman"
              element={<KontrolRekaman />}
            />
            <Route
              index
              path="/prosedur/iso9001/audit-internal"
              element={<AuditInternal />}
            />
            <Route
              index
              path="/prosedur/iso9001/tindakan-korektif"
              element={<TindakanKorektif />}
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

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

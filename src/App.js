import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Welcome from "./all-components/public-components/Welcome";
import Login from "./all-components/public-components/Login";
import AdminHome from "./all-components/admin-module/home/AdminHome";
import AllEmployees from "./all-components/admin-module/employee/AllEmployees";
import Notice from "./all-components/admin-module/notice/Notice";
import Registration from "./all-components/admin-module/registration/Registration";
import MyCalendar from "./all-components/admin-module/calendar/MyCalendar";
import Leave from "./all-components/admin-module/leaves/Leaves";
import ContactReport from "./all-components/admin-module/reports/ContactReport";
import EmailReport from "./all-components/admin-module/reports/EmailReport";
import LeaveReport from "./all-components/admin-module/reports/LeaveReport";
import PayrollReport from "./all-components/admin-module/reports/PayrollReport";
import MoreDetails from "./all-components/admin-module/employee/MoreDetails";
import SetTarget from "./all-components/admin-module/employee/SetTarget";
import NoticeHome from "./all-components/admin-module/notice/NoticeHome";
import Placements from "./all-components/public-components/Placements";
import { useEffect } from "react";
import Career from "./all-components/public-components/Career";
import Tearms from "./all-components/public-components/Tearms";
import PlacementPolicy from "./all-components/public-components/PlacementPolicy";
import PrivacyPolicy from "./all-components/public-components/PrivacyPolicy";
import RefundPolicy from "./all-components/public-components/RefundPolicy";
import ReferralPolicy from "./all-components/public-components/ReferralPolicy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/oms" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/employees/trainers" element={<AllEmployees />} />
        <Route path="/employees/hr" element={<AllEmployees />} />
        <Route path="/employees/counsellors" element={<AllEmployees />} />
        <Route path="/employees/digital-marketing" element={<AllEmployees />} />
        <Route path="/notice" element={<NoticeHome />} />
        <Route path="/new-notice" element={<Notice />} />
        <Route path="/new-employee" element={<Registration />} />
        <Route path="/calender" element={<MyCalendar />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/report/contact-report" element={<ContactReport />} />
        <Route path="/report/email-report" element={<EmailReport />} />
        <Route path="/report/leave-report" element={<LeaveReport />} />
        <Route path="/report/payroll-report" element={<PayrollReport />} />
        <Route path="/more-details/:emp_id" element={<MoreDetails />} />
        <Route path="/set-target/:emp_id" element={<SetTarget />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/career" element={<Career />} />
        <Route path="/terms" element={<Tearms />} />
        <Route path="/placement-policy" element={<PlacementPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />}/>
        <Route path="/referral-policy" element={<ReferralPolicy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

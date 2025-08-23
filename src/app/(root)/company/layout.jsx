"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import NavbarStudent from "@/components/navbar";
import SidebarStudent from "@/components/sidebar";

export default function CompanyLayout({ children }) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  return (
    <main>
      <div
        className={`container-scroller ${
          sidebarMinimized ? "sidebar-icon-only" : ""
        }`}
      >
        <NavbarStudent
          notificationOpen={notificationOpen}
          setNotificationOpen={setNotificationOpen}
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
          sidebarMinimized={sidebarMinimized}
          setSidebarMinimized={setSidebarMinimized}
          offcanvasOpen={offcanvasOpen}
          setOffcanvasOpen={setOffcanvasOpen}
        />

        <div className="container-fluid page-body-wrapper">
          <SidebarStudent offcanvasOpen={offcanvasOpen} />

          <div className="main-panel">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}

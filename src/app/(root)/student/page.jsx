"use client";

import CompanyList from "@/components/company-card";
import { useState } from "react";

export default function StudentDashboardPage() {

  return (
    <div className="content-wrapper">
      <CompanyList />
    </div>
  );
}

import React, { Suspense } from "react";
import OtpClient from "./OtpClient";

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <OtpClient />
    </Suspense>
  );
}

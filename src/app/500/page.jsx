// src/app/500/page.jsx
import Link from "next/link";
import Script from "next/script";

export default function Error500() {
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center text-center error-page bg-info">
            <div className="row flex-grow">
              <div className="col-lg-7 mx-auto text-white">
                <div className="row align-items-center d-flex flex-row">
                  <div className="col-lg-6 text-lg-right pr-lg-4">
                    <h1 className="display-1 mb-0">500</h1>
                  </div>
                  <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                    <h2>SORRY!</h2>
                    <h3 className="fw-light">Internal server error!</h3>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 text-center mt-xl-2">
                    <Link href="/" className="text-white fw-medium">
                      Back to home
                    </Link>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 mt-xl-2">
                    <p className="text-white fw-medium text-center">
                      Copyright &copy; 2021 All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scripts */}
      <Script
        src="/vendors/js/vendor.bundle.base.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/js/off-canvas.js" strategy="lazyOnload" />
      <Script src="/js/template.js" strategy="lazyOnload" />
      <Script src="/js/settings.js" strategy="lazyOnload" />
      <Script src="/js/hoverable-collapse.js" strategy="lazyOnload" />
      <Script src="/js/todolist.js" strategy="lazyOnload" />
    </>
  );
}

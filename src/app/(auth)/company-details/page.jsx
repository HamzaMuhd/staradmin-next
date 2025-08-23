"use client";

import { useRouter } from "next/navigation";

export default function CompanyDetailsPage() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/company");
  };
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo text-center mb-4">
                    <img src="/images/logo.svg" alt="logo" />
                  </div>
                  <h4>Company Details</h4>
                  <h6 className="fw-light">
                    Fill in your company information to complete registration
                  </h6>
                  <form className="pt-3" onSubmit={handleSubmit}>
                    <div className="form-group ">
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control form-control-lg w-100 shadow-sm"
                        style={{ minHeight: "120px" }}
                        placeholder="Describe Your Company"
                      />
                    </div>

                    <div className="form-group">
                      <select
                        className="form-select form-select-lg"
                        id="exampleFormControlSelect2"
                      >
                        <option>Country</option>
                        <option>Nigeria</option>
                        <option>South Africa</option>
                        <option>USA</option>
                        <option>India</option>
                        <option>China</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleInputUsername1"
                        placeholder="Street"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleInputUsername1"
                        placeholder="City"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleInputUsername1"
                        placeholder="State"
                      />
                    </div>
                    <div className="mb-4"></div>
                    <div className="mt-3 d-grid gap-2">
                      <button
                        className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

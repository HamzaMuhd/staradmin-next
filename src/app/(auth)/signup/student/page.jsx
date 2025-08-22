"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const handleSignup = (e) => {
    e.preventDefault();

  
    router.push(`/otp?from=student`);
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
                  <div className="d-flex justify-content-center mb-4">
                    <div className="btn-group btn-group-lg w-100" role="group">
                      <Link
                        href="/signup/student"
                        className="btn btn-primary fw-medium"
                      >
                        Student
                      </Link>
                      <Link
                        href="/signup/company"
                        className="btn btn-outline-primary fw-medium"
                      >
                        Company
                      </Link>
                    </div>
                  </div>
                  <h4>New here?</h4>
                  <h6 className="fw-light">
                    Signing up is easy. It only takes a few steps
                  </h6>
                  <form className="pt-3" onSubmit={handleSignup}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="exampleInputUsername1"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="form-group">
                      <select
                        className="form-select form-select-lg"
                        id="exampleFormControlSelect2"
                      >
                        <option>Interest</option>
                        <option>Technology & Engineering</option>
                        <option>Business & Management</option>
                        <option>Creative & Design</option>
                        <option>Science & Healthcare</option>
                        <option>Education & Social Sciences</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input m-0"
                          id="agreeToTerms"
                        />
                        <label
                          className="form-check-label text-muted"
                          htmlFor="agreeToTerms"
                        >
                          I agree to all Terms & Conditions{" "}
                        </label>
                      </div>
                    </div>
                    <div className="mt-3 d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn"
                      >
                        SIGN UP
                      </button>
                    </div>
                    <div className="text-center mt-4 fw-light">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary">
                        Login
                      </Link>
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

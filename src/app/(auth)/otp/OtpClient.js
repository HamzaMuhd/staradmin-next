"use client"; // MUST be first line

import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function OtpClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const length = 6;
  const [digits, setDigits] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const focusInput = (idx) => {
    const el = inputsRef.current[idx];
    if (el) el.focus();
  };

  const handleChange = (idx, value) => {
    const v = value.replace(/\D/g, "").slice(0, 1);
    const next = [...digits];
    next[idx] = v;
    setDigits(next);
    if (v && idx < length - 1) focusInput(idx + 1);
  };

  const handleKeyDown = (idx, e) => {
    if (e.key === "Backspace") {
      if (digits[idx]) {
        const next = [...digits];
        next[idx] = "";
        setDigits(next);
      } else if (idx > 0) {
        focusInput(idx - 1);
        const next = [...digits];
        next[idx - 1] = "";
        setDigits(next);
      }
      e.preventDefault();
    }
    if (e.key === "ArrowLeft" && idx > 0) {
      focusInput(idx - 1);
      e.preventDefault();
    }
    if (e.key === "ArrowRight" && idx < length - 1) {
      focusInput(idx + 1);
      e.preventDefault();
    }
  };

  const handlePaste = (e) => {
    const text = (e.clipboardData || window.clipboardData).getData("text");
    const numbers = text.replace(/\D/g, "").slice(0, length).split("");
    if (!numbers.length) return;

    const next = [...digits];
    for (let i = 0; i < length; i++) {
      next[i] = numbers[i] || "";
    }
    setDigits(next);

    const last = Math.min(numbers.length - 1, length - 1);
    focusInput(last >= 0 ? last : 0);
    e.preventDefault();
  };

  const code = digits.join("");
  const canSubmit = code.length === length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    if (from === "student") router.push("/student");
    else if (from === "company") router.push("/company");
    else router.push("/");
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                {/* Logo */}
                <div className="brand-logo text-center mb-4">
                  <Image src="/images/logo.svg" alt="logo" />
                </div>

                <h4 className="mb-1 text-center">Verify your account</h4>
                <h6 className="fw-light text-center mb-4">
                  Please enter the 6-digit code sent to your email
                </h6>

                <form className="pt-2" onSubmit={handleSubmit}>
                  {/* OTP Inputs */}
                  <div
                    className="d-flex justify-content-center gap-2 mb-3"
                    onPaste={handlePaste}
                    style={{ flexWrap: "wrap" }}
                  >
                    {Array.from({ length }).map((_, idx) => (
                      <input
                        key={idx}
                        ref={(el) => (inputsRef.current[idx] = el)}
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        className="form-control text-center"
                        style={{
                          flex: 1,
                          minWidth: 40,
                          maxWidth: 60,
                          fontSize: "1.5rem",
                          padding: "0.5rem",
                        }}
                        value={digits[idx]}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        aria-label={`OTP digit ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Resend OTP */}
                  <div className="d-flex align-items-left mb-3">
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      onClick={() => {}}
                    >
                      Resend OTP
                    </button>
                  </div>

                  {/* Verify button */}
                  <div className="mt-2 d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg fw-medium"
                      disabled={!canSubmit}
                      aria-disabled={!canSubmit}
                    >
                      Verify
                    </button>
                  </div>

                  {/* Back to Signup */}
                  <div className="text-center mt-4 fw-light">
                    Entered the wrong email?{" "}
                    <Link href="/signup" className="text-primary">
                      Back to Signup
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

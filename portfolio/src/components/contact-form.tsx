"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [toastState, setToastState] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });

  const [value, setValue] = useState<FormType>({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue({
      ...value,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    setIsSending(false);
    if (res.status !== 200) {
      handleShowToast(false, "Failed to send message.");
      return;
    }
    handleShowToast(true, "Message Sent Successfully.");
    setValue({
      fullname: "",
      email: "",
      message: "",
    });
  };

  const handleShowToast = (isSuccess: boolean, str: string) => {
    setToastState({
      show: true,
      message: str,
      isSuccess: isSuccess,
    });
    setTimeout(() => {
      setToastState({
        show: false,
        message: "",
        isSuccess: isSuccess,
      });
    }, 7000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full mb-2">
          <div className="label">
            <span className="label-text">Full Name</span>
          </div>
          <input
            onChange={handleChange}
            value={value.fullname}
            id="fullname"
            type="text"
            placeholder="Enter Full Name"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full mb-2">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            onChange={handleChange}
            value={value.email}
            id="email"
            type="email"
            placeholder="Enter Email"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea
            onChange={handleChange}
            value={value.message}
            id="message"
            className="textarea textarea-bordered h-24"
            placeholder="Enter Message"
            required
          ></textarea>
        </label>
        <div className="mt-4">
          <button className="btn btn-wide btn-outline btn-primary border-2">
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      {toastState.show && (
        <div className="toast z-50">
          <div
            className={`alert bg-opacity-75 ${
              toastState.isSuccess ? "alert-success" : "alert-error"
            }`}
          >
            <span>{toastState.message}</span>
          </div>
        </div>
      )}
    </>
  );
}

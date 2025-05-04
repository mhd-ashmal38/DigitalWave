import { Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="py-20">
      <div className="text-center mb-10">
        <h2 className="title-h2">Contact Us</h2>
        <p className="mt-4 text-gray-600 text-sm">
          We'd love to talk about how we can help you.
        </p>
      </div>

      <div
        className="md:flex justify-between md:px-20"
      >
        <form
          onSubmit={handleSubmit}
          className="md:w-3/5 md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0"
        >
          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-500 rounded-lg sm:text-sm"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-500 rounded-lg sm:text-sm"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="py-2.5 sm:py-3 px-4 block w-full border border-gray-500 rounded-lg sm:text-sm"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <div className="mt-4 grid">
            <button
              type="submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-accent disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send inquiry"}
            </button>
          </div>

          {submitted && (
            <p className="mt-4 text-green-600 text-sm">
              ✅ Your message has been sent successfully!
            </p>
          )}
        </form>

        <div className="space-y-9 md:w-1/3">
          <div
            className="flex gap-x-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <MapPin className="text-primary" />
            <div className="grow">
              <h4 className="text-black font-semibold">Our address:</h4>
              <address className="mt-1 text-neutral-400 text-sm not-italic">
                300 XY Street, XYZ Building,
                <br />
                Ernakulam, Kerala, India
              </address>
            </div>
          </div>
          <div
            className="flex gap-x-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Mail className="text-primary" />
            <div className="grow">
              <h4 className="text-black font-semibold">Email us:</h4>
              <a
                className="mt-1 text-neutral-400 text-sm hover:text-neutral-200"
                href="mailto:hello@example.so"
                target="_blank"
              >
                hello@example.so
              </a>
            </div>
          </div>
          <div
            className="flex gap-x-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Phone className="text-primary" />
            <div className="grow">
              <h4 className="text-black font-semibold">Call us</h4>
              <p className="mt-1 text-neutral-400">+91 xxxx xxxxx</p>
              <p className="mt-1 text-neutral-400">+97 xxxx xxxxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

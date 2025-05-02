import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { VerticalSocialLink } from "./VerticalSocitalLink";
import { SectionTop } from "./SectionTop";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tqyxg4q",
        "template_6omou2t",
        e.target,
        "Wu9JlJoccep8sbvBh"
      )
      .then(
        () => {
          toast.success("Form Submit Successfully");

          setTimeout(() => {
            window.location.href = "/thank-you";
          }, 2000);
          e.target.reset();
        },
        () => {
          toast.error("Something went wrong.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="max-w-5xl mx-auto text-white px-4 py-22">
      <SectionTop title="Let’s Connect the Dots" />
      <div className="flex flex-col lg:flex-row justify-evenly gap-10 lg:-mt-55">
        {/* Left Side - Contact Form */}
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-[#1C1C1E] p-8 rounded-2xl shadow-lg lg:w-160 lg:h-150"
          >
            <h2 className="text-3xl text-white font-semibold mb-2">
              Let's work together
            </h2>
            <p className="text-gray-400 mb-6">
              Have an idea in mind? Let’s bring it to life.
            </p>
            <input
              type="text"
              placeholder="Full name"
              className="input w-full"
              name="name"
              required
            />
            <input type="hidden" value={new Date()} name="time" id="" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5 mt-5">
              <input
                type="email"
                placeholder="Email address"
                className="input col-span-1"
                name="email"
                required
              />
              <input
                type="text"
                placeholder="Phone number"
                className="input col-span-1"
                name="phone"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="input col-span-1 w-full"
              name="subject"
            />

            <textarea
              placeholder="Type your message here."
              rows={4}
              className="input w-full mt-4 resize-none"
              name="message"
              required
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-6 px-8 py-3 text-amber-300 border border-amber-300 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-amber-400 hover:text-white focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-t-amber-400 border-gray-200 rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Send message"
                )}
              </button>
            </div>
          </form>
          <VerticalSocialLink />
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col w-90 justify-center space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#1C1C1E] p-3 rounded-xl text-green-400">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              +880 1875-642998
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1C1C1E] p-3 rounded-xl text-green-400">
              <MdMarkEmailUnread />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p>ronidev39@email.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1C1C1E] p-3 rounded-xl text-green-400">
              <FaLocationDot />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Address</p>
              <p>Durgapur, Shayestaganj, Habiganj</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

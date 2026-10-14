import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/images/logo/logo.png"
                alt="FreshBox"
                width={45}
                height={45}
              />

              <h3 className="text-2xl font-bold text-white">
                FreshBox
              </h3>

            </div>

            <p className="mt-5 leading-7">
              Connecting trusted farmers with homes through
              fresh, affordable and convenient delivery.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-bold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-3">

              <p>📧 freshboxhq@gmail.com</p>

              <p>📞 09163783891</p>

              <p>📍 Lagos, Nigeria</p>

            </div>

          </div>

          {/* Social */}

<div>

  <h4 className="text-xl font-bold text-white">
    Follow Us
  </h4>

  <div className="mt-6 flex items-center gap-6">

    <a
      href="https://www.instagram.com/freshboxhq"
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl transition hover:scale-110 hover:text-green-400"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.tiktok.com/@freshboxhq"
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl transition hover:scale-110 hover:text-green-400"
      aria-label="TikTok"
    >
      <FaTiktok />
    </a>

    <a
      href="https://wa.me/2349163783891"
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl transition hover:scale-110 hover:text-green-400"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>

  </div>

</div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">

          <p>© 2026 FreshBox. All rights reserved.</p>

          <div className="mt-4">
            <a
              href="/privacy-policy"
              className="transition hover:text-green-400 hover:underline"
            >
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

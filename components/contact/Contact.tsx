"use client";

import { useState } from "react";
import { personal } from "@/data/personal";
import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all fields before sending.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const emailSocial = socialLinks.find((s) => s.name === "Email");

  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto border-t border-neutral-200/60 dark:border-neutral-800/60">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header matching reference screenshot */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
            Contact
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            If you would like to collaborate or chat, please reach out.
          </p>
        </div>

        {/* Top Info Row: Email & Location matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Email Card */}
          <a
            href={`mailto:${emailSocial?.displayEmail || "hello@optenary.tech"}`}
            className="card-hover-line p-5 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/70 dark:border-neutral-800/70 flex items-center gap-4 transition-all"
          >
            <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs">
              <Mail className="w-5 h-5 text-[#EA4335]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-0.5">
                EMAIL
              </span>
              <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {emailSocial?.displayEmail || "hello@optenary.tech"}
              </p>
            </div>
          </a>

          {/* Location Card */}
          <div className="card-hover-line p-5 rounded-2xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/70 dark:border-neutral-800/70 flex items-center gap-4 transition-all">
            <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs">
              <MapPin className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-0.5">
                LOCATION
              </span>
              <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {personal.location}
              </p>
            </div>
          </div>
        </div>

        {/* Middle Social Pills Row with Crisp Lucide Icons matching reference screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {socialLinks
            .filter((s) => s.name !== "Email")
            .map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover-line py-3 px-4 rounded-full bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/70 dark:border-neutral-800/70 text-xs font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-2 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-all"
              >
                {social.name === "GitHub" && <Github className="w-4 h-4 text-neutral-900 dark:text-white" />}
                {social.name === "LinkedIn" && <Linkedin className="w-4 h-4 text-[#0A66C2]" />}
                {social.name === "Instagram" && <Instagram className="w-4 h-4 text-[#E4405F]" />}
                {social.name === "X (Twitter)" && <Twitter className="w-4 h-4 text-neutral-900 dark:text-white" />}
                <span>{social.name}</span>
              </a>
            ))}
        </div>

        {/* Bottom Large Contact Form Card matching reference screenshot */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#F4F4F1] dark:bg-[#1E1E1D] border border-neutral-200/70 dark:border-neutral-800/70 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Side-by-Side Name & Email Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all shadow-xs"
              />

              <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all shadow-xs"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                required
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all shadow-xs resize-none"
              />
            </div>

            {/* Status Feedback */}
            {status === "error" && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success */}
            {status === "success" && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-600 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! Your message has been sent directly to Telegram.</span>
              </div>
            )}

            {/* Centered Send Message Pill Button matching reference screenshot */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="py-3 px-8 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending to Telegram...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

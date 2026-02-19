"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import { useState } from "react";
import { SectionProps } from "@/types/constants";

export type ContactLocale = "ar" | "en";
export type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
export type SubmitStatus = "idle" | "sending" | "sent" | "error";

const ContactForm = ({ dict }: SectionProps) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const set =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with real API call
    await new Promise((r) => setTimeout(r, 2000));
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  const inputClass =
    "w-full bg-slate-800/60 border border-white/5 focus:border-[#cc0075]/60 focus:outline-none rounded-xl px-4 py-3 text-white placeholder:text-slate-600 text-sm transition-colors duration-200";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.3)]"
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 start-10 end-10 h-px bg-linear-to-r from-transparent via-[#cc0075]/670 to-transparent rounded-full" />

      {/* Form header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#cc0075]/20 to-[#511764]/20 border border-white/5 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-[#cc0075]" />
        </div>
        <div>
          <h3 className="text-white font-bold text-xl pb-1">
            {dict.contact_us.form.title}
          </h3>
          <p className="text-slate-400 text-sm">
            {dict.contact_us.form.subtitle}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              {dict.contact_us.form.name}
            </label>
            <input
              type="text"
              placeholder={dict.contact_us.form.namePh}
              value={form.name}
              onChange={set("name")}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              {dict.contact_us.form.email}
            </label>
            <input
              type="email"
              placeholder={dict.contact_us.form.emailPh}
              value={form.email}
              onChange={set("email")}
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone + Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              {dict.contact_us.form.phone}
            </label>
            <input
              type="tel"
              placeholder={dict.contact_us.form.phonePh}
              value={form.phone}
              onChange={set("phone")}
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              {dict.contact_us.form.subject}
            </label>
            <select
              value={form.subject}
              onChange={set("subject")}
              required
              className={`${inputClass} cursor-pointer`}
            >
              {dict.contact_us.form.subjectOptions.map((opt, i) => (
                <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
            {dict.contact_us.form.message}
          </label>
          <textarea
            placeholder={dict.contact_us.form.messagePh}
            value={form.message}
            onChange={set("message")}
            rows={5}
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={status !== "idle"}
          whileHover={status === "idle" ? { scale: 1.02 } : {}}
          whileTap={status === "idle" ? { scale: 0.98 } : {}}
          className={`
            relative w-full flex items-center justify-center gap-3
            py-4 rounded-2xl font-bold text-sm tracking-wide
            overflow-hidden transition-all duration-300
            disabled:cursor-not-allowed
            ${
              status === "sent"
                ? "bg-green-500/15 border border-green-500/40 text-green-400"
                : status === "error"
                  ? "bg-red-500/15 border border-red-500/40 text-red-400"
                  : "bg-linear-to-r from-[#cc0075] to-[#511764] text-white shadow-[0_0_30px_rgba(204,0,117,0.3)] hover:shadow-[0_0_50px_rgba(204,0,117,0.5)]"
            }
          `}
        >
          {/* Shimmer on sending */}
          {status === "sending" && (
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
          )}

          {status === "idle" && <Send className="w-4 h-4" />}
          {status === "sent" && <CheckCircle className="w-4 h-4" />}
          {status === "error" && <AlertCircle className="w-4 h-4" />}

          <span>
            {status === "idle" && dict.contact_us.form.send}
            {status === "sending" && dict.contact_us.form.sending}
            {status === "sent" && dict.contact_us.form.sent}
            {status === "error" && dict.contact_us.form.error}
          </span>
        </motion.button>
      </form>
    </motion.section>
  );
};

export default ContactForm;

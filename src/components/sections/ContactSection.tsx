"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, CheckCircle2,MessageCircle } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
       // EmailJS integration - replace with your own IDs
        const emailjs = await import("@emailjs/browser");
         await emailjs.default.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

      // Simulate for demo
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
  console.log(error);
  alert(JSON.stringify(error));

  setStatus("error");
  setTimeout(() => setStatus("idle"), 3000);
}
  };

  const contactInfo = [
    { Icon: Mail, label: "Email", value: PORTFOLIO_DATA.email, href: `mailto:${PORTFOLIO_DATA.email}` },
    { Icon: MessageCircle, label: "WhatsApp", value: PORTFOLIO_DATA.WhatsApp, href: `https://wa.me/${PORTFOLIO_DATA.WhatsApp.replace(/\D/g, "")}`},
    { Icon: Phone, label: "Phone", value: PORTFOLIO_DATA.phone, href: `tel:${PORTFOLIO_DATA.phone}` },
    { Icon: MapPin, label: "Location", value: PORTFOLIO_DATA.location, href: "#" },
  ];

  const socials = [
    { Icon: Github, href: PORTFOLIO_DATA.social.github, label: "GitHub" },
    { Icon: Linkedin, href: PORTFOLIO_DATA.social.linkedin, label: "LinkedIn" },
    { Icon: Instagram, href: PORTFOLIO_DATA.social.instagram, label: "Instagram" },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          label="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind? Let's build something amazing together"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-7">
              <h3 className="text-xl font-bold text-white mb-2 font-space">
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Amazing</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Drop me a message!
              </p>

              {/* Contact details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}
                    >
                      <Icon size={16} className="text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 font-space">{label}</p>
                      <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs text-white/30 tracking-widest font-space mb-4">CONNECT WITH ME</p>
                <div className="flex gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-neon-blue transition-all"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8">
              {status === "success" ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={56} className="text-green-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-space">Message Sent!</h3>
                  <p className="text-white/50 text-sm">I&apos;ll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider font-space">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="cyber-input w-full px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider font-space">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="cyber-input w-full px-4 py-3 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider font-space">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Collaboration"
                      className="cyber-input w-full px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-2 tracking-wider font-space">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="cyber-input w-full px-4 py-3 text-sm resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-full font-bold text-dark-900 font-space flex items-center justify-center gap-2 disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                      boxShadow: "0 0 25px rgba(0,212,255,0.3)",
                    }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(0,212,255,0.5)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-dark-900/40 border-t-dark-900 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {status === "error" && (
                    <p className="text-red-400 text-xs text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

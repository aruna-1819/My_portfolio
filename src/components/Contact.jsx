"use client";
import { useState } from "react";
import { SectionWrapper } from "@/bits/SectionWrapper";
import { Card } from "@/bits/Card";
import { Button } from "@/bits/Button";
import { FiMail, FiMapPin, FiPhone, FiUser, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkoynade", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(err => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have a question or want to work together? Leave a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {[
                { icon: <FiUser size={20} />, label: "Name", value: "Aruna Kumari Padala" },
                { icon: <FiMail size={20} />, label: "Email", value: "arunakumaripadala177@gmail.com", href: "mailto:arunakumaripadala177@gmail.com" },
                { icon: <FiLinkedin size={20} />, label: "LinkedIn", value: "Aruna Kumari Padala", href: "https://www.linkedin.com/in/aruna-kumari-padala" },
                { icon: <FiGithub size={20} />, label: "GitHub", value: "aruna-1819", href: "https://github.com/aruna-1819/" },
                { icon: <FiMapPin size={20} />, label: "Location", value: "Hyderabad, India" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-800"
                >
                  <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[var(--elegant-from)] to-[var(--elegant-to)] text-white rounded-2xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <Card className="p-8 border-none bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-indigo-500/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Aruna Kumari Padala" },
                  { id: "email", label: "Email", type: "email", placeholder: "aruna@example.com" }
                ].map((field, idx) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                      {field.label}
                    </label>
                    <input 
                      type={field.type} 
                      id={field.id} 
                      name={field.id}
                      required 
                      suppressHydrationWarning
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-400 shadow-sm"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  suppressHydrationWarning
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none placeholder:text-slate-400 shadow-sm"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <div>
                <Button type="submit" className="w-full py-4 text-base font-bold bg-gradient-to-r from-[var(--elegant-from)] to-[var(--elegant-to)] hover:opacity-90 border-none shadow-lg shadow-indigo-600/20" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </div>
              
              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-emerald-600 dark:text-emerald-400 text-center text-sm font-bold bg-emerald-50 dark:bg-emerald-900/20 py-3 rounded-lg border border-emerald-100 dark:border-emerald-900/50"
                >
                  ✨ Message sent successfully! I'll be in touch soon.
                </motion.p>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-rose-600 dark:text-rose-400 text-center text-sm font-bold bg-rose-50 dark:bg-rose-900/20 py-3 rounded-lg border border-rose-100 dark:border-rose-900/50"
                >
                  ❌ {error}
                </motion.p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

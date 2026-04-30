"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-medium mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <a
            href="https://wa.me/6282138034702" // ganti nomor WA kamu
            target="_blank"
            className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors text-center group"
          >
            <MessageCircle
              size={28}
              className="text-gray-500 mx-auto mb-3 group-hover:text-emerald-400 transition-colors"
            />
            <h3 className="font-medium mb-1">WhatsApp</h3>
            <p className="text-sm text-gray-500">Chat langsung</p>
          </a>

          <a
            href="mailto:timotius@email.com" 
            className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors text-center group"
          >
            <Mail
              size={28}
              className="text-gray-500 mx-auto mb-3 group-hover:text-emerald-400 transition-colors"
            >
              {" "}
            </Mail>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-sm text-gray-500">irgie.noel@email.com</p>
          </a>

          <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/5 text-center">
            <MapPin
              size={28}
              className="text-gray-500 mx-auto mb-3"
            />
            <h3 className="font-medium mb-1">Location</h3>
            <p className="text-sm text-gray-500">Indonesia (Remote)</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://wa.me/6282138034702" 
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 text-black font-medium rounded-full hover:bg-emerald-400 transition-colors"
          >
            <MessageCircle size={18} />
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
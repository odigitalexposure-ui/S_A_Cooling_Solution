import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Cooling Issue Fixing',
    area: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build the formatted WhatsApp booking message
    const messageLines = [
      `*New AC Service Request - S A COOLING SOLUTION*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `❄️ *Service:* ${formData.service}`,
      formData.area ? `📍 *Area/Location:* ${formData.area}` : null,
      formData.message ? `💬 *Problem Details:* ${formData.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via Website Booking Form_`,
    ].filter(Boolean).join('\n');

    const encodedMessage = encodeURIComponent(messageLines);
    const url = `https://wa.me/917439782485?text=${encodedMessage}`;
    setWhatsappLink(url);
    setFormSubmitted(true);

    // Open WhatsApp directly in a new tab/window
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 text-cyan-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            Connect With Kolkata’s AC Experts
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Contact & Service Booking
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Have an AC emergency or wish to schedule maintenance? Visit our workshop, call us directly, or submit a request online.
          </p>
        </div>

        {/* Top Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">

          {/* Card 1: Primary Hotline */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Helpline & Booking</h3>
            <p className="text-xs text-slate-500 mt-1 mb-3">Call for immediate technician dispatch</p>
            <a
              href="tel:+917439782485"
              className="text-base font-extrabold text-cyan-600 hover:text-cyan-700 block"
            >
              +91 7439 782 485
            </a>
            <span className="inline-block mt-2 text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Available 24/7
            </span>
          </div>

          {/* Card 2: Secondary / Alternate Hotline */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Secondary Number</h3>
            <p className="text-xs text-slate-500 mt-1 mb-3">Direct technician backup line</p>
            <a
              href="tel:+917439782485"
              className="text-base font-extrabold text-blue-600 hover:text-blue-700 block"
            >
              +91 7439 782 485
            </a>
            <span className="inline-block mt-2 text-[10px] uppercase font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
              WhatsApp Enabled
            </span>
          </div>

          {/* Card 3: Email Support */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Email Support</h3>
            <p className="text-xs text-slate-500 mt-1 mb-3">For quotation & commercial billing</p>
            <a
              href="mailto:contact@sacoolingsolution.com"
              className="text-sm font-bold text-purple-600 hover:text-purple-700 block break-all"
            >
              contact@sacoolingsolution.com
            </a>
            <span className="inline-block mt-2 text-[10px] uppercase font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
              Quick Response
            </span>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Working Hours</h3>
            <p className="text-xs text-slate-500 mt-1 mb-2">Service & Workshop Timings:</p>
            <div className="space-y-1 text-xs text-slate-700">
              <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                <span className="font-medium text-slate-500">Mon, Tue, Wed, Thu:</span>
                <span className="font-bold text-slate-900">10:00 am – 7:00 pm</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                <span className="font-medium text-slate-500">Friday:</span>
                <span className="font-bold text-slate-900">10:00 am – 12:00 am</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-200/60">
                <span className="font-medium text-slate-500">Saturday:</span>
                <span className="font-bold text-slate-900 text-right">12–7 am, 10 am–7 pm</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="font-medium text-slate-500">Sunday:</span>
                <span className="font-bold text-emerald-600">Open 24 hours</span>
              </div>
            </div>
            <span className="inline-block mt-3 text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              Sunday Open 24 Hours
            </span>
          </div>
        </div>

        {/* Main Grid: Address Card Beside Google Map + Online Service Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Address Card Beside Google Map */}
          <div className="lg:col-span-7 space-y-6">

            {/* Address Card as requested */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-cyan-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-cyan-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-cyan-300 font-bold block mb-1">
                    Registered Workshop & Headquarters
                  </span>
                  <h3 className="text-2xl font-black font-bold text-white">
                    S A COOLING SOLUTION
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    3/2 Nill Ratan Mukherjee Lane , Shibpur, Near Honey Bee School, Howrah, West Bengal,
                    711102
                  </p>
                </div>
              </div>

              {/* Action Buttons inside Address Card */}
              <div className="mt-6 pt-6 border-t border-slate-700/80 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+917439782485"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-600/30 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 7439 782 485</span>
                </a>
                <a
                  href="https://wa.me/917439782485?text=Hello%20S%20A%20Cooling%20Solution,%20I%20need%20AC%20repair%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map using the user's exact provided iframe */}
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative">
              <div className="w-full h-[380px] sm:h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139819.79673104768!2d88.30935284800425!3d22.597524937891304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027779658231e9%3A0x1ab48fd37e909364!2sS%20A%20COOLING%20SOLUTION!5e1!3m2!1sen!2sin!4v1793171334044!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="S A COOLING SOLUTION Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Booking Request Form */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Book AC Service Online
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                Fill the form below and an engineer will contact you within 15 minutes.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-emerald-900 text-lg">
                    Opening WhatsApp...
                  </h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Your AC service booking request for <strong className="text-emerald-900">{formData.name}</strong> is ready. If WhatsApp didn't open automatically, please click below:
                  </p>
                  {whatsappLink && (
                    <div className="pt-1">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Chat & Confirm on WhatsApp</span>
                      </a>
                    </div>
                  )}
                  <div>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', phone: '', service: 'Cooling Issue Fixing', area: '', message: '' });
                      }}
                      className="mt-3 px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-200 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name - Label Removed */}
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name *"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone - Label Removed */}
                  <div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone Number (e.g. +91 98300 00000) *"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Service Selection - Label Removed */}
                  <div>
                    <select
                      aria-label="Service Required"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition-all cursor-pointer font-medium"
                    >
                      <option value="Cooling Issue Fixing">Service: Cooling Issue Fixing</option>
                      <option value="Gas Refilling & Leak Detection">Service: Gas Refilling & Leak Detection</option>
                      <option value="Water Leakage Solution">Service: Water Leakage Solution</option>
                      <option value="Electrical Fault Repair">Service: Electrical Fault Repair</option>
                      <option value="Deep Jet Pump Servicing">Service: Deep Jet Pump Servicing</option>
                      <option value="AC Installation / Uninstallation">Service: AC Installation / Uninstallation</option>
                    </select>
                  </div>

                  {/* Area / Kolkata Location - Label Removed */}
                  <div>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="Your Area in Kolkata / Howrah (e.g. Shibpur, Salt Lake, Behala)"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Problem Description - Label Removed */}
                  <div>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your AC problem or requirements (Optional)..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-900 text-sm outline-none transition-all resize-none placeholder:text-slate-400"
                    />
                  </div>

                  {/* Direct WhatsApp Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 active:scale-98 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Send Booking via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 pt-1 flex items-center justify-center gap-1">
                    <span>⚡ Automatically opens WhatsApp chat with +91 7439 782 485</span>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '@/components/button';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, publicKey);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl font-bold mt-2">Let's Build Something <span className="font-serif italic">Great</span></h2>
        </div>

        <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6 border border-primary/20">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text" id="name" required placeholder="Your Name"
              value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email" id="email" required placeholder="name@domain.com"
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message" rows="5" required placeholder="Describe your project requirements..."
              value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 bg-surface rounded-xl border border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none transition-all"
            />
          </div>

          <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2" disabled={isLoading}>
            {isLoading ? 'Sending...' : <>Send Message <Send size={18} /></>}
          </Button>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-primary text-sm glass px-4 py-3 rounded-xl border border-primary/30">
              <CheckCircle2 size={18} /> Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm glass px-4 py-3 rounded-xl border border-red-500/30">
              <AlertCircle size={18} /> Something went wrong. Please check back later.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
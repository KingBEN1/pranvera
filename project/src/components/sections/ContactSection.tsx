import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Planet } from '../planets/Planet';
import { Mail, Instagram, Facebook } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 opacity-30">
        <Planet type="satellite" size={200} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider text-center"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            {t('contact_title')}
          </h2>

          <p className="text-xl text-purple-400 mb-6 font-semibold text-center">
            {t('contact_subtitle')}
          </p>

          <p className="text-lg text-gray-300 mb-12 text-center">
            {t('contact_intro')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact_send')}
              </h3>

              {isSuccess && (
                <div className="bg-green-600/20 border border-green-400/50 rounded-lg p-4 mb-6">
                  <p className="text-green-400">{t('contact_success')}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact_name')}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact_email')}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact_message')}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-purple-600/80 backdrop-blur-md border border-purple-400/50 text-white rounded-lg hover:bg-purple-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('contact_sending') : t('contact_send')}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('contact_email_label')}
                </h3>
                <a
                  href="mailto:pranvera@ucsc.edu"
                  className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail size={20} />
                  <span>pranvera@ucsc.edu</span>
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t('contact_social')}
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/pranvera_hyseni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Instagram size={20} />
                    <span>@pranvera_hyseni</span>
                  </a>
                  <a
                    href="https://www.facebook.com/astronomyoutreachkosovo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Facebook size={20} />
                    <span>Astronomy Outreach of Kosovo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

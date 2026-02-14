import { motion } from 'framer-motion';
import { Mail, Instagram, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="gradient-text">Hubungi Saya</h2>
                    <p className="subtitle">
                        Tertarik berdiskusi atau bekerja sama? Hubungi saya melalui kontak di bawah.
                    </p>
                    <div className="section-line"></div>
                </motion.div>

                <motion.div
                    className="contact-wrapper glass"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Social Links */}
                    <div className="contact-socials">
                        <a href="mailto:viansorpelem123@gmail.com" className="contact-social-item">
                            <div className="contact-social-icon">
                                <Mail size={26} />
                            </div>
                            <span>Email</span>
                        </a>
                        <a href="https://instagram.com/aditmoonstar" target="_blank" rel="noopener noreferrer" className="contact-social-item">
                            <div className="contact-social-icon">
                                <Instagram size={26} />
                            </div>
                            <span>@aditmoonstar</span>
                        </a>
                        <a href="https://github.com/AdityaOctavian" target="_blank" rel="noopener noreferrer" className="contact-social-item">
                            <div className="contact-social-icon">
                                <Github size={26} />
                            </div>
                            <span>AdityaOctavian</span>
                        </a>
                    </div>

                    {/* Form */}
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Nama Lengkap</label>
                            <input type="text" id="name" placeholder="Masukkan nama anda" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Pesan</label>
                            <textarea id="message" rows="4" placeholder="Tulis pesan anda..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Kirim Pesan <Send size={16} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

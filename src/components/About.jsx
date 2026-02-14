import { motion } from 'framer-motion';
import { User, Rocket, Target, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="gradient-text">Tentang Saya</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="about-grid">
                    {/* Biodata Card */}
                    <motion.div
                        className="about-card glass"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3><User size={22} /> Biodata</h3>
                        <ul className="info-list">
                            <li>
                                <span>Nama</span>
                                <span>Aditya Octavian</span>
                            </li>
                            <li>
                                <span>Kelas</span>
                                <span>X RPL 1</span>
                            </li>
                            <li>
                                <span>Jurusan</span>
                                <span>Rekayasa Perangkat Lunak</span>
                            </li>
                            <li>
                                <span>Kelas Industri</span>
                                <span>Hummatech</span>
                            </li>
                            <li>
                                <span>Domisili</span>
                                <span>Ds. Tanjungharjo, Kec. Kapas, Kab. Bojonegoro</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Right Column - Motivational Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-card glass" style={{ marginBottom: '1.5rem' }}>
                            <h3><Rocket size={22} /> Misi Saya</h3>
                            <p className="about-text">
                                Menjadi developer yang mampu menciptakan solusi digital bermanfaat.
                                Belajar setiap hari, coding setiap hari, dan terus push diri sendiri
                                ke level yang lebih tinggi.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <motion.div
                                className="about-card glass"
                                whileHover={{ scale: 1.03 }}
                                style={{ textAlign: 'center', padding: '1.5rem' }}
                            >
                                <Target size={28} style={{ color: '#6366f1', marginBottom: '0.75rem' }} />
                                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Fokus</div>
                                <div style={{ color: '#a0a0a0', fontSize: '0.85rem' }}>Web Development & Programming</div>
                            </motion.div>

                            <motion.div
                                className="about-card glass"
                                whileHover={{ scale: 1.03 }}
                                style={{ textAlign: 'center', padding: '1.5rem' }}
                            >
                                <Zap size={28} style={{ color: '#ec4899', marginBottom: '0.75rem' }} />
                                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>Semangat</div>
                                <div style={{ color: '#a0a0a0', fontSize: '0.85rem' }}>Always Learning & Growing</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

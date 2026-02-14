import { motion } from 'framer-motion';
import { ArrowRight, Github, Instagram, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="hero-subtitle">Halo 👋, perkenalkan saya</p>

                    <h1 className="hero-title">
                        Aditya<br />
                        <span className="gradient-text">Octavian</span>
                    </h1>

                    <p className="hero-desc">
                        Seorang pelajar SMK yang passionate di bidang <strong>Web Development</strong> dan <strong>Programming</strong>.
                        Siap belajar, berkarya, dan terus berkembang di dunia teknologi.
                    </p>

                    <div className="hero-buttons">
                        <a href="mailto:viansorpelem123@gmail.com" className="btn btn-primary">
                            Hubungi Saya <ArrowRight size={18} />
                        </a>
                        <a href="#about" className="btn btn-outline">
                            Tentang Saya
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/AdityaOctavian" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github size={20} /></a>
                        <a href="https://instagram.com/aditmoonstar" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="mailto:viansorpelem123@gmail.com" aria-label="Email"><Mail size={20} /></a>
                    </div>
                </motion.div>

                {/* Right Visual - Code Card */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="hero-visual-glow"></div>
                    <motion.div
                        className="code-card"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    >
                        <div className="code-card-header">
                            <span className="code-card-dot" style={{ background: '#ff5f57' }}></span>
                            <span className="code-card-dot" style={{ background: '#febc2e' }}></span>
                            <span className="code-card-dot" style={{ background: '#28c840' }}></span>
                        </div>
                        <div className="code-card-body">
                            <div><span className="comment">// about-me.js</span></div>
                            <div>
                                <span className="keyword">const</span>{' '}
                                <span className="variable">aditya</span>{' '}
                                <span className="bracket">= {'{'}</span>
                            </div>
                            <div>
                                {'  '}<span className="func">name</span>:{' '}
                                <span className="string">"Aditya Octavian"</span>,
                            </div>
                            <div>
                                {'  '}<span className="func">class</span>:{' '}
                                <span className="string">"X RPL 1"</span>,
                            </div>
                            <div>
                                {'  '}<span className="func">jurusan</span>:{' '}
                                <span className="string">"Rekayasa Perangkat Lunak"</span>,
                            </div>
                            <div>
                                {'  '}<span className="func">passion</span>:{' '}
                                <span className="string">"Web Development 🚀"</span>,
                            </div>
                            <div>
                                {'  '}<span className="func">status</span>:{' '}
                                <span className="string">"Always Learning 💡"</span>,
                            </div>
                            <div><span className="bracket">{'}'};</span></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

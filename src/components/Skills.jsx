import { motion } from 'framer-motion';

const skills = [
    { name: "HTML", level: 90, color: "#E34F26", bg: "rgba(227,79,38,0.1)", icon: "H5" },
    { name: "CSS", level: 85, color: "#1572B6", bg: "rgba(21,114,182,0.1)", icon: "C3" },
    { name: "JavaScript", level: 75, color: "#F7DF1E", bg: "rgba(247,223,30,0.1)", icon: "JS" },
    { name: "React", level: 60, color: "#61DAFB", bg: "rgba(97,218,251,0.1)", icon: "Re" },
    { name: "C++", level: 65, color: "#00599C", bg: "rgba(0,89,156,0.1)", icon: "C+" },
    { name: "Java", level: 55, color: "#ED8B00", bg: "rgba(237,139,0,0.1)", icon: "Jv" },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="gradient-text">Keahlian Saya</h2>
                    <p className="subtitle">
                        Teknologi dan bahasa pemrograman yang saya kuasai.
                    </p>
                    <div className="section-line"></div>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="skill-icon"
                                style={{
                                    background: skill.bg,
                                    color: skill.color,
                                }}
                            >
                                {skill.icon}
                            </div>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-bar-container">
                                <motion.div
                                    className="skill-bar"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1.2, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                                />
                            </div>
                            <div className="skill-level">{skill.level}%</div>

                            <style>{`
                .skill-card:nth-child(${index + 1})::before {
                  background: linear-gradient(90deg, ${skill.color}, transparent);
                }
              `}</style>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

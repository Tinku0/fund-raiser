import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";

const sections = [
  {
    id: "home",
    title: "Help Stray Dogs Find a Home",
    bg: "https://images.pexels.com/photos/8078361/pexels-photo-8078361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Every dog deserves love and shelter. Join us in making a difference!",
  },
  {
    id: "mission",
    title: "Our Mission",
    bg: "https://images.pexels.com/photos/2571190/pexels-photo-2571190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "We provide food, medical aid, and shelter for abandoned dogs. Together, we can create a better future for them.",
  },
  {
    id: "donate",
    title: "How You Can Help",
    bg: "https://images.pexels.com/photos/2571190/pexels-photo-2571190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Your contribution helps rescue, feed, and rehabilitate stray dogs. Every rupee makes a difference.",
  },
  {
    id: "stories",
    title: "Success Stories",
    bg: "https://images.pexels.com/photos/2571190/pexels-photo-2571190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Meet the dogs who found loving homes thanks to your support!",
  },
  {
    id: "contact",
    title: "Get Involved",
    bg: "https://images.pexels.com/photos/2571190/pexels-photo-2571190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Adopt, foster, or volunteer. There are many ways to help these innocent lives.",
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? "active" : ""}`}
            onClick={() => handleNavClick(section.id)}
          >
            {section.title}
          </button>
        ))}
      </nav>

      {/* Sections */}
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="section"
          style={{ backgroundImage: `url(${section.bg})` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="section-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {section.title}
          </motion.h1>
          <motion.p
            className="section-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {section.content}
          </motion.p>
          
          {/* Donate Section */}
          {index === 2 && (
            <motion.div
              className="donate-buttons"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <button className="donate-btn">Donate ₹500</button>
              <button className="donate-btn">Donate ₹1000</button>
              <button className="donate-btn">Donate More</button>
            </motion.div>
          )}
        </motion.section>
      ))}

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Stray Dog Rescue | All Rights Reserved
      </footer>
    </div>
  );
};

export default App;

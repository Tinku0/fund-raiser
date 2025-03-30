import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import { FaPaw, FaBars, FaTimes } from "react-icons/fa";

const sections = [
  {
    id: "home",
    title: "Help",
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
    bg: "https://images.pexels.com/photos/28102998/pexels-photo-28102998/free-photo-of-dog-on-a-rocky-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Your contribution helps rescue, feed, and rehabilitate stray dogs. Every rupee makes a difference.",
  },
  {
    id: "stories",
    title: "Success Stories",
    bg: "https://images.pexels.com/photos/31250829/pexels-photo-31250829/free-photo-of-lonely-stray-dog-resting-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Meet the dogs who found loving homes thanks to your support!",
  },
  {
    id: "contact",
    title: "Get Involved",
    bg: "https://images.pexels.com/photos/19868624/pexels-photo-19868624/free-photo-of-white-puppy-behind-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Adopt, foster, or volunteer. There are many ways to help these innocent lives.",
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">

      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-3">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold cursor-pointer">
          <FaPaw className="text-yellow-400 mr-2" />
          <span className="italic tracking-wide">Stray Rescue</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-button transition ${
                activeSection === section.id ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => handleNavClick(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`block w-full text-left px-6 py-3 hover:bg-yellow-500/20 transition ${
                activeSection === section.id ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => {
                handleNavClick(section.id);
                setIsOpen(false);
              }}
            >
              {section.title}
            </button>
          ))}
        </div>
      )}
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

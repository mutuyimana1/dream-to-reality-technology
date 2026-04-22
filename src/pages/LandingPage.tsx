import { type JSX } from "react";
import { motion } from "framer-motion";
import { Check, Briefcase, GraduationCap, Phone } from "lucide-react";
import heroImg from "../assets/kid learner.jpg";
import logoImg from "../assets/Logo.png";
import kidCodingImg from "../assets/kid_coding.png";
import webDevImg from "../assets/web_dev.png";
import fullStackImg from "../assets/full_stack.png";
import techSkillsImg from "../assets/tech_skills.png";
import futureReadyImg from "../assets/future_ready.png";

type Course = {
  image: string;
  title: string;
  subtitle: string;
  points: string[];
  cta: string;
};

type Step = [string, string, string];

const courses: Course[] = [
  {
    image: kidCodingImg,
    title: "Kids Coding (7-15)",
    subtitle: "Turn curiosity into real skills",
    points: ["Learn computers, design & coding", "Build their first website"],
    cta: "Enroll Now",
  },
  {
    image: webDevImg,
    title: "Web Development",
    subtitle: "From beginner to website builder",
    points: [
      "HTML, CSS, JavaScript",
      "Real-world projects",
      "Developer tools, Git, VS Code",
    ],
    cta: "Start Learning",
  },
  {
    image: fullStackImg,
    title: "Full Stack",
    subtitle: "Become a complete developer",
    points: [
      "React.js - Node.js",
      "Build full applications",
      "Job-ready skills",
    ],
    cta: "Start Degree",
  },
];

const steps: Step[] = [
  ["1", "Understand", "We listen to your needs and goals"],
  ["2", "Design", "We plan the best digital solution"],
  ["3", "Build", "We develop and test your system"],
  ["4", "Support", "We help you grow and improve"],
];

export default function LandingPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#d4caff] via-[#ebe7ff] to-white pb-24">
        {/* Header */}
        <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="D2RTECH" className="h-10 w-auto" />
          </div>
          <button className="px-8 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium flex items-center gap-2 hover:opacity-90 shadow-sm transition-opacity text-sm">
            Apply &rarr;
          </button>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl"
          >
            <h1 className="text-6xl md:text-[5rem] font-bold leading-[1.1] text-black tracking-tidght">
              Turn <span className="text-white drop-shadow-sm">Your</span> Tech Journey<br />
              Today
            </h1>
            <p className="mt-8 text-[1.1rem] text-[#4b5563] leading-relaxed max-w-[500px]">
              We train kids and adults with real-world tech skills and help
              businesses transform their work into smart digital solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button className="px-6 py-3.5 rounded-full bg-[#561db5] hover:bg-[#41158a] text-white font-medium flex items-center gap-2 shadow-lg shadow-violet-300 transition-colors">
                🎓 <span>Enroll & Start Learning</span>
              </button>
              <button className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-medium flex items-center gap-2 border border-slate-300 shadow-sm transition-colors">
                💼 <span>Build Your Digital Solution</span>
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-[15px] font-medium text-[#111827]">
              {[
                "Beginner-friendly",
                "Real projects",
                "Certificate included",
              ].map((t: string) => (
                <span key={t} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#111827]" strokeWidth={2.5} />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column with Crescent Moon & Image */}
          <div className="relative flex justify-center items-center mt-12 md:mt-0">
            <div className="relative w-[80%] aspect-square max-w-[420px] rounded-full shadow-[-50px_40px_0_0_#4a0bba]">
              <img
                src={heroImg}
                alt="Student Learning"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-white to-slate-50/50">
        <h2 className="text-[2.5rem] font-bold text-center text-slate-900 tracking-tight">
          Start Your <span className="text-[#561db5]">Tech Journey</span> Today
        </h2>
        <p className="text-center text-[#4b5563] mt-4 max-w-2xl mx-auto text-[1.05rem]">
          We don't just build software — we solve real business problems by
          turning your processes into efficient digital systems.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-[1100px] mx-auto">
          {courses.map((c: Course, i: number) => (
            <div key={i} className="rounded-[1.5rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="w-full h-40 flex items-center justify-center mb-6">
                <img src={c.image} alt={c.title} className="w-auto h-full object-contain" />
              </div>
              <h3 className="text-[1.35rem] font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-[0.95rem] text-slate-500">{c.subtitle}</p>
              
              <div className="mt-6 w-full flex justify-center">
                <ul className="space-y-3 text-[0.9rem] text-slate-600 text-left w-full max-w-[220px]">
                  {c.points.map((p: string) => (
                    <li key={p} className="flex gap-2 items-start">
                      <Check className="w-4 h-4 text-emerald-500 mt-[3px] shrink-0" strokeWidth={3} />
                      <span className="leading-tight">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8 w-full">
                <button className="w-full py-3.5 rounded-full bg-[#561db5] hover:bg-[#41158a] text-white font-medium flex items-center justify-center gap-2 shadow-md shadow-violet-200 transition-colors">
                  <Briefcase className="w-5 h-5" />
                  {c.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 flex justify-center gap-x-8 gap-y-4 text-[0.95rem] font-medium text-slate-600 flex-wrap">
          {["No experience needed", "Certificate included", "Hands-on projects"].map(
            (t: string) => (
              <span key={t} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" strokeWidth={2.5} />
                {t}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="bg-gradient-to-r from-violet-50 to-violet-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center">
            Simple Process,{" "}
            <span className="text-violet-700">Powerful Results</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {steps.map(([n, t, d]: Step, i: number) => {
              let radiusClass = "rounded-2xl";
              if (i === 0) radiusClass = "rounded-l-[3rem] rounded-r-2xl";
              if (i === 3) radiusClass = "rounded-r-[3rem] rounded-l-2xl";
              
              return (
                <div
                  key={n}
                  className={`relative bg-white p-8 text-center shadow-sm ${radiusClass}`}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#a78bfa] text-white flex items-center justify-center text-2xl font-semibold shadow-sm">
                    {n}
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-slate-900">{t}</h3>
                  <p className="mt-3 text-[0.95rem] text-slate-500 leading-relaxed max-w-[200px] mx-auto">{d}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-600 flex-wrap">
            {["Free consultation", "Tailored solutions", "Ongoing support"].map(
              (t: string) => (
                <span key={t} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <h2 className="text-[2.5rem] font-bold text-center text-[#2A1B54] mb-4">
          Built for <span className="text-[#561db5]">Impact</span>
        </h2>
        <p className="text-center text-slate-600 text-[1.1rem]">
          Be among the first generation of creators and innovators
        </p>
        
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-3 gap-8 mt-14">
          {/* Card 1 */}
          <div className="rounded-[1.5rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-full h-40 flex items-center justify-center mb-8">
              <img src={techSkillsImg} alt="Tech Skills Programs" className="w-auto h-full object-contain" />
            </div>
            <h3 className="text-[1.25rem] font-bold text-slate-900">
              Tech Skills <span className="text-[#561db5]">Programs</span>
            </h3>
            <p className="mt-4 text-[0.95rem] text-slate-500 leading-relaxed max-w-[200px]">
              Students learn by doing, not just watching
            </p>
            <div className="mt-auto pt-8 w-full">
              <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-700 hover:opacity-90 text-white font-medium flex items-center justify-center gap-2 shadow-md transition-opacity">
                <GraduationCap className="w-5 h-5" />
                Enroll Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[1.5rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-full h-40 flex items-center justify-center mb-8">
              <img src={webDevImg} alt="Digital Solutions Delivered" className="w-auto h-full object-contain" />
            </div>
            <h3 className="text-[1.25rem] font-bold text-slate-900">
              Digital Solutions <span className="text-[#561db5]">Delivered</span>
            </h3>
            <p className="mt-4 text-[0.95rem] text-slate-500 leading-relaxed max-w-[200px]">
              Build projects that solve real problems
            </p>
            <div className="mt-auto pt-8 w-full">
              <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-700 hover:opacity-90 text-white font-medium flex items-center justify-center gap-2 shadow-md transition-opacity">
                <Briefcase className="w-5 h-5" />
                Start Learning
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[1.5rem] bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
            <div className="w-full h-40 flex items-center justify-center mb-8">
              <img src={futureReadyImg} alt="Future-Ready Learners" className="w-auto h-full object-contain" />
            </div>
            <h3 className="text-[1.25rem] font-bold text-slate-900">
              Future-Ready <span className="text-[#561db5]">Learners</span>
            </h3>
            <p className="mt-4 text-[0.95rem] text-slate-500 leading-relaxed max-w-[200px]">
              No experience? No problem. We start from zero
            </p>
            <div className="mt-auto pt-8 w-full">
              <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-700 hover:opacity-90 text-white font-medium flex items-center justify-center gap-2 shadow-md transition-opacity">
                <Briefcase className="w-5 h-5" />
                Start Project
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10 bg-gradient-to-b from-white to-violet-50/30">
        <h2 className="text-[2.2rem] font-bold text-center text-[#2A1B54] mb-12">
          Ready to Start?
        </h2>
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col md:flex-row relative">
            
            {/* Left Column */}
            <div className="flex-1 p-8 md:p-10 relative z-10">
              <div className="flex items-center gap-3 text-[#561db5] font-bold text-xl mb-3">
                <GraduationCap className="w-6 h-6" />
                <h3>Start Learning Today</h3>
              </div>
              <p className="text-slate-600 text-[1.05rem] mb-8">
                Begin your journey in tech
              </p>
              <button className="px-8 py-3.5 rounded-full bg-[#561db5] hover:bg-[#41158a] text-white font-medium flex items-center justify-center gap-2 shadow-md shadow-violet-200 transition-colors w-max">
                <GraduationCap className="w-5 h-5" />
                Enroll Now
              </button>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-slate-100 my-8"></div>

            {/* Right Column */}
            <div className="flex-1 p-8 md:p-10 relative z-10 bg-slate-50/50 rounded-r-[1.8rem]">
              <div className="flex items-center gap-3 text-[#2A1B54] font-bold text-xl mb-3">
                <Briefcase className="w-6 h-6" />
                <h3>Build Your Digital Solution</h3>
              </div>
              <p className="text-slate-600 text-[1.05rem] mb-8">
                Turn your idea into a smart system
              </p>
              <button className="px-8 py-3.5 rounded-full bg-transparent border-2 border-slate-200 text-[#561db5] hover:border-[#a78bfa] hover:bg-violet-50 font-medium flex items-center justify-center gap-2 transition-colors w-max">
                <Briefcase className="w-5 h-5" />
                Start a Project
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A224B] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoImg} alt="D2RTECH" className="h-8 w-auto brightness-0 invert" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3 text-slate-300 text-[0.95rem]">
              <li>Kids Coding</li>
              <li>Web Development</li>
              <li>Full Stack Development</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-300 text-[0.95rem]">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Websites</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Mobile Apps</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Custom Systems</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-300 text-[0.95rem]">
              <li>realitytech@gmail.com</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +356 792-099 213</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +256 785 627 630</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +256 788 009 026</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}


import React from 'react';
import Header from './components/Header';
import BMICalculator from './components/BMICalculator';
import { 
  PROGRAMS, 
  TRAINERS, 
  PRICING_PLANS, 
  TESTIMONIALS 
} from './constants';
import { 
  CheckCircle, 
  ArrowRight, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  ShieldCheck,
  Award,
  Clock,
  Zap
} from 'lucide-react';

const App: React.FC = () => {
  // WhatsApp target (owner contact). Use international format without + or spaces.
  const WHATSAPP_NUMBER = '919877601657';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget as HTMLFormElement);
    const firstName = (form.get('firstName') as string) || '';
    const phone = (form.get('phone') as string) || '';
    const email = (form.get('email') as string) || '';
    const program = (form.get('program') as string) || '';

    if (!phone.trim()) {
      // Basic validation: phone required to open WhatsApp conversation
      alert('Please enter a phone number so we can contact you via WhatsApp.');
      return;
    }

  const message = `New inquiry from ${firstName || '—'}\nPhone: ${phone}\nEmail: ${email || '—'}\nPreferred Program: ${program || '—'}`;
  // Use wa.me with encoded message (encodeURIComponent will percent-encode newlines)
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* BG Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000)' }}
        >
          <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-zinc-950 via-transparent to-black/30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6">
              TRANSFORM <br />
              YOUR <span className="text-neon">BODY</span>.
              <br />
              BUILD <span className="text-neon">DISCIPLINE</span>.
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 mb-8 max-w-xl font-medium">
              Elite personal training, strength conditioning, and result-driven nutrition plans for those who refuse to be average.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-neon text-zinc-950 px-8 py-4 rounded-lg text-lg font-black uppercase tracking-wider hover:bg-lime-300 transition-all flex items-center justify-center gap-2"
              >
                Book Free Trial <ArrowRight size={20} />
              </a>
              <a 
                href="#programs" 
                className="border-2 border-white/20 hover:border-neon px-8 py-4 rounded-lg text-lg font-black uppercase tracking-wider backdrop-blur-sm transition-all text-center"
              >
                View Programs
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-px h-12 bg-neon/50"></div>
        </div>
      </section>

      {/* QUICK TRUST BAR */}
      <section className="bg-zinc-900 py-10 relative z-20 -mt-10 mx-6 rounded-xl border border-zinc-800 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-neon/10 p-3 rounded-lg text-neon">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Elite Coaches</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Certified Pros</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-neon/10 p-3 rounded-lg text-neon">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Pro Gear</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Modern Tech</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-neon/10 p-3 rounded-lg text-neon">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">24/7 Access</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Flexible Time</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-neon/10 p-3 rounded-lg text-neon">
                <Zap size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Fast Results</h4>
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Science Based</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-neon/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" 
                alt="Gym Interior" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl z-20 border-l-4 border-neon">
                <p className="text-4xl font-black mb-1">10+</p>
                <p className="text-sm uppercase tracking-widest font-bold text-zinc-400">Years of Discipline</p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-neon font-black uppercase tracking-widest text-sm">Established Culture</span>
              <h2 className="text-5xl font-black mt-2 mb-6">MORE THAN A GYM. <br />IT’S A <span className="text-stroke">MINDSET</span>.</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                At Nagpal Fitness, we don't believe in short-term fixes. We believe in building a foundation of strength and discipline that carries over into every aspect of your life. Our facility is designed for those who want to push their limits and demand more from themselves every single day.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Individualized metabolic profiling",
                  "Elite strength & conditioning apparatus",
                  "Inclusive but competitive community",
                  "Performance-focused nutrition strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-neon" size={20} />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact">
              <button className="bg-white text-zinc-950 px-8 py-3 rounded-lg font-black uppercase tracking-wider hover:bg-neon hover:text-zinc-950 transition-all">
                Book a free Demo
              </button>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4">ENGINEERED <span className="text-neon">PROGRAMS</span></h2>
            <p className="text-zinc-400">Scientifically structured training protocols designed to deliver measurable, visible results in minimum time.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((program) => (
              <div key={program.id} className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-neon transition-all duration-500">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="bg-neon text-zinc-950 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <a href="#contact" className="text-neon font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Start Training <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / TRANSFORMATION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl font-black">PROVEN <span className="text-neon">RESULTS</span></h2>
              <p className="text-zinc-400 mt-2">Real progress from our dedicated community members.</p>
            </div>
            <a href="#" className="mt-6 lg:mt-0 font-bold border-b-2 border-neon pb-1 hover:text-neon transition-colors">View All Success Stories</a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src="/images/img1.jpeg" 
                alt="Transformation 1" 
                className="w-full h-[500px] object-fit"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10">
                <div className="bg-neon text-zinc-950 px-3 py-1 text-xs font-black uppercase rounded mb-4 inline-block">12 Week Challenge</div>
                <h3 className="text-3xl font-black uppercase">Loss 14kg in 12 weeks</h3>
                <p className="text-zinc-300">"The structure and accountability changed my life."</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img 
                src="/images/img2.jpeg" 
                alt="Transformation 2" 
                className="w-full h-[500px] object-fit"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-10 left-10">
                <div className="bg-neon text-zinc-950 px-3 py-1 text-xs font-black uppercase rounded mb-4 inline-block">Strength Build</div>
                <h3 className="text-3xl font-black uppercase">Loss 18kg in 8 weeks</h3>
                <p className="text-zinc-300">"Finally hitting the numbers I always dreamed of."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINERS SECTION
      <section id="trainers" className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4">THE <span className="text-neon">ELITE</span> SQUAD</h2>
            <p className="text-zinc-400">Our coaches aren't just trainers—they are specialists dedicated to your peak performance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TRAINERS.map((trainer) => (
              <div key={trainer.id} className="group glass-card rounded-3xl overflow-hidden p-4 pb-8 hover:bg-zinc-800/50 transition-all">
                <div className="h-[400px] overflow-hidden rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-4">
                  <h3 className="text-2xl font-bold">{trainer.name}</h3>
                  <p className="text-neon text-sm font-black uppercase tracking-widest mb-4">{trainer.specialization}</p>
                  <p className="text-zinc-500 text-sm mb-6">{trainer.bio}</p>
                  <div className="flex gap-4">
                    <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-neon hover:text-zinc-950 transition-colors"><Instagram size={18} /></a>
                    <a href="#" className="flex-1 bg-zinc-900 py-2 rounded-lg text-center text-xs font-black uppercase tracking-widest hover:bg-zinc-800">View Profile</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* TRAINING PROCESS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black mb-16 text-center">HOW WE <span className="text-neon">DOMINATE</span></h2>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { title: "Assessment", text: "Physical & metabolic checkup" },
                { title: "Goal Setting", text: "Defining clear objectives" },
                { title: "Custom Plan", text: "Tailored training & diet" },
                { title: "Execution", text: "Consistent hard work" },
                { title: "Review", text: "Analyze & optimize" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-zinc-900 border-2 border-zinc-800 text-neon rounded-full flex items-center justify-center font-black text-2xl mb-6 group-hover:border-neon transition-all">
                    {i + 1}
                  </div>
                  <h4 className="text-xl font-bold mb-2 uppercase">{step.title}</h4>
                  <p className="text-zinc-500 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4">CHOOSE YOUR <span className="text-neon">TIER</span></h2>
            <p className="text-zinc-400">Transparent pricing. No hidden fees. Just results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id} 
                className={`p-10 rounded-3xl relative flex flex-col ${
                  plan.isPopular 
                  ? 'bg-neon text-zinc-950 scale-105 shadow-[0_20px_50px_rgba(190,242,100,0.1)]' 
                  : 'bg-zinc-900 border border-zinc-800'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-zinc-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-zinc-950">Best Value</span>
                )}
                <h3 className="text-2xl font-black mb-2 uppercase">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`text-sm font-bold uppercase ${plan.isPopular ? 'text-zinc-800' : 'text-zinc-500'}`}>{plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold">
                      <CheckCircle className={plan.isPopular ? 'text-zinc-950' : 'text-neon'} size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all ${
                  plan.isPopular 
                  ? 'bg-zinc-950 text-white hover:bg-zinc-800' 
                  : 'bg-neon text-zinc-950 hover:bg-lime-300'
                }`}>
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI CALCULATOR SECTION */}
      <section id="bmi" className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-neon font-black uppercase tracking-widest text-sm">Health Metrics</span>
              <h2 className="text-5xl font-black mt-2 mb-6">KNOW YOUR <span className="text-neon">NUMBERS</span></h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                BMI is a simple way to estimate body fat and determine if your weight is in a healthy range for your height. While not a perfect measure of muscle mass, it's a great starting point for your fitness journey.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                  <p className="text-zinc-500 text-xs font-bold uppercase mb-2">Under 18.5</p>
                  <p className="text-lg font-bold">Underweight</p>
                </div>
                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                  <p className="text-neon text-xs font-bold uppercase mb-2">18.5 – 24.9</p>
                  <p className="text-lg font-bold">Normal</p>
                </div>
                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                  <p className="text-yellow-500 text-xs font-bold uppercase mb-2">25.0 – 29.9</p>
                  <p className="text-lg font-bold">Overweight</p>
                </div>
                <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                  <p className="text-red-500 text-xs font-bold uppercase mb-2">30.0+</p>
                  <p className="text-lg font-bold">Obese</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <BMICalculator />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-[3rem] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-20 bg-neon text-zinc-950">
                <h2 className="text-6xl font-black mb-8 leading-tight">START YOUR <br />EVOLUTION.</h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-zinc-950 text-neon p-4 rounded-2xl">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-zinc-800 font-bold uppercase text-xs tracking-widest">Call or WhatsApp</p>
                      <p className="text-xl font-black">+91 9877601657</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-zinc-950 text-neon p-4 rounded-2xl">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-zinc-800 font-bold uppercase text-xs tracking-widest">Email Us</p>
                      <p className="text-xl font-black">hiteshnagpal5717@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-zinc-950 text-neon p-4 rounded-2xl">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-zinc-800 font-bold uppercase text-xs tracking-widest">Location</p>
                      <p className="text-xl font-black">Near S.S Greenfeild School, Mundian kalan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-12 lg:p-20 bg-zinc-900/50">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-zinc-500">First Name</label>
                      <input 
                        name="firstName"
                        type="text" 
                        placeholder="Name" 
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-neon outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-zinc-500">Phone</label>
                      <input 
                        name="phone"
                        type="tel" 
                        placeholder="+91 1234567890" 
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-neon outline-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-zinc-500">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      placeholder="fitness@example.com" 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-neon outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-zinc-500">Preferred Program</label>
                    <select name="program" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-neon outline-none">
                      <option>Muscle Building</option>
                      <option>Fat Loss</option>
                      <option>Functional Training</option>
                      <option>Personal Training</option>
                    </select>
                  </div>
                  <button className="w-full bg-white text-zinc-950 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-neon transition-all mt-4">
                    Send Inquiry
                  </button>
                  <p className="text-center text-zinc-600 text-xs">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <a href="#" className="text-3xl font-black tracking-tighter flex items-center mb-6">
                NAGPAL<span className="text-neon">FITNESS</span>
              </a>
              <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
                The premier destination for high-performance training and athletic development. We don't just build bodies; we build legacies of discipline.
              </p>
              <div className="flex gap-4">
                {[Instagram, Mail, Phone].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-neon hover:text-zinc-950 hover:border-neon transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#about" className="hover:text-neon transition-colors">Our Philosophy</a></li>
                <li><a href="#programs" className="hover:text-neon transition-colors">Programs</a></li>
                <li><a href="#pricing" className="hover:text-neon transition-colors">Memberships</a></li>
                <li><a href="#bmi" className="hover:text-neon transition-colors">BMI Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Gym Hours</h4>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex justify-between"><span>Mon - Sat (Morning)</span> <span className="text-white">05:00 - 9:00</span></li>
                <li className="flex justify-between"><span>Mon - Sat (Evening)</span> <span className="text-white">18:00 - 23:00</span></li>

                <li className="text-neon text-xs font-bold mt-2">24/7 Access via Whatsapp</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-bold uppercase tracking-widest">
            <p>© 2026 Nagpal FITNESS. ALL RIGHTS RESERVED.</p>
            {/* <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

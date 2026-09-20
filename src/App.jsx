import React, { useState } from 'react';

const FALLBACK_IMG = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

const SERVICES = [
  {
    id: 1,
    name: "Master Designer Cut & Style",
    price: "$50+",
    time: "45 mins",
    desc: "Comprehensive hair and face shape consultation, scalp massage shampoo, haircut, and signature blowout finish.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Custom Balayage & Ombré Artistry",
    price: "$175+",
    time: "2.5 hrs",
    desc: "Hand-painted seamless color blending, custom gloss toner glaze, bond strengthener, and luxury blowout.",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Keratin Complex Smoothing Treatment",
    price: "$210+",
    time: "2 hrs",
    desc: "Reduces frizz up to 95%, locks in vibrant color, and restores silky manageable texture for up to 5 months.",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Premium Tape-In & Hand-Tied Extensions",
    price: "Consultation Required",
    time: "2 - 3 hrs",
    desc: "100% Remy human hair extensions adding custom length, volume, and seamless dimensional color.",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Olaplex Intensive Hair Repair & Scalp Therapy",
    price: "$45",
    time: "30 mins",
    desc: "Rebinds broken disulphide hair bonds caused by chemical styling, heat, or environmental damage.",
    img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Full Foil Highlighting & Dimensional Lowlights",
    price: "$140+",
    time: "2 hrs",
    desc: "Precision foil placement from root to tip creating maximum brightness, dimension, and grey coverage.",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  }
];

const LOOKBOOK_ITEMS = [
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80", title: "Modern Salon Environment", sub: "Luxury Harrison St Studio" },
  { url: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80", title: "Sun-Kissed Balayage", sub: "Hand-Painted Highlights" },
  { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80", title: "Precision Cut & Blowout", sub: "Designer Styling" },
  { url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80", title: "Silk Smooth Keratin", sub: "Frizz-Free Shine" },
  { url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80", title: "Volume Hair Extensions", sub: "100% Remy Human Hair" },
  { url: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80", title: "Olaplex Scalp Therapy", sub: "Intensive Hair Repair" },
  { url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80", title: "Styling Station Ambiance", sub: "High-Fashion Haircare" },
  { url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=80", title: "Master Hair Artistry", sub: "Custom Profile Creation" },
  { url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80", title: "Luxury Color Glaze", sub: "Shine & Tone Finish" },
  { url: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=80", title: "Professional Haircare Bar", sub: "Redken & Kérastase" },
  { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80", title: "Salon Director & Master Stylists", sub: "Expert Consultations" },
  { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80", title: "Signature Hair Styling", sub: "Custom Grand Ledge Studio" }
];

const STYLISTS = [
  { name: "Elena Vance", role: "Master Colorist & Salon Director", exp: "16+ Years Experience", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" },
  { name: "Jessica Hayes", role: "Balayage & Extension Specialist", exp: "10 Years Experience", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" },
  { name: "Samantha Ross", role: "Precision Cut & Keratin Specialist", exp: "8 Years Experience", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Master Designer Cut & Style");
  const [toastMessage, setToastMessage] = useState("");
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    stylist: "Elena Vance",
    date: "",
    time: "10:00 AM"
  });

  // Lightbox Carousel State
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % LOOKBOOK_ITEMS.length);
  };

  const prevLightboxImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length);
  };

  const handleOpenBooking = (serviceName = "Master Designer Cut & Style") => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setToastMessage(`Consultation requested for ${bookingData.name}! Service: ${selectedService} with ${bookingData.stylist} on ${bookingData.date || 'selected date'}.`);
    setBookingData({ name: "", phone: "", stylist: "Elena Vance", date: "", time: "10:00 AM" });
    setTimeout(() => setToastMessage(""), 5500);
  };

  return (
    <div className="app">
      {/* Top Banner */}
      <div className="top-bar">
        <div className="container flex-between">
          <div>📍 315 Harrison St, Grand Ledge, MI 48837</div>
          <div>📞 Direct Phone: (517) 627-9800 | Tue - Fri: 9 AM - 7 PM | Sat: 8 AM - 4 PM</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container flex-between">
          <a href="#" className="brand">
            PROFILES HAIR SALON
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#stylists">Our Stylists</a>
            <a href="#lookbook">Lookbook ({LOOKBOOK_ITEMS.length})</a>
            <a href="#hours">Location & Hours</a>
            <button className="btn btn-gold" onClick={() => handleOpenBooking()}>Book Consultation</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>LUXURY HAIR DESIGN & ARTISTRY</h1>
            <p>
              Grand Ledge's destination for master balayage, precision cuts, smooth keratin treatments, and hair extensions crafted for your unique profile.
            </p>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button className="btn btn-gold" onClick={() => handleOpenBooking()}>
                Book Appointment
              </button>
              <a href="tel:5176279800" className="btn btn-outline">
                Call (517) 627-9800
              </a>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
              alt="Profiles Hair Salon Studio"
              onError={(e) => { e.target.src = FALLBACK_IMG; }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2>SALON SERVICES & PRICING</h2>
            <p>Tailored cut, color, and restorative hair treatments</p>
          </div>
          <div className="services-grid">
            {SERVICES.map(s => (
              <div key={s.id} className="service-card">
                <img
                  src={s.img}
                  alt={s.name}
                  onError={(e) => { e.target.src = FALLBACK_IMG; }}
                />
                <div className="service-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <h3 className="service-title">{s.name}</h3>
                    <span className="service-price">{s.price}</span>
                  </div>
                  <p className="service-desc">{s.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <small style={{ color: 'var(--text-muted)' }}>⏱️ {s.time}</small>
                    <button className="btn btn-outline" style={{ padding: '6px 14px', fontSize: '0.75rem' }} onClick={() => handleOpenBooking(s.name)}>
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stylists Team */}
      <section id="stylists" className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <h2>MASTER STYLISTS</h2>
            <p>Passionate hair artists dedicated to your personal profile</p>
          </div>
          <div className="team-grid">
            {STYLISTS.map((st, i) => (
              <div key={i} className="team-card">
                <img
                  src={st.img}
                  alt={st.name}
                  onError={(e) => { e.target.src = FALLBACK_IMG; }}
                />
                <div className="team-body">
                  <h3 className="team-name">{st.name}</h3>
                  <div className="team-role">{st.role}</div>
                  <small style={{ color: 'var(--primary-gold)', display: 'block', marginTop: '6px', fontWeight: 600 }}>{st.exp}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook - Carousel Lightbox Cards */}
      <section id="lookbook" className="section">
        <div className="container">
          <div className="section-header">
            <h2>STYLE & TRANSFORMATION LOOKBOOK</h2>
            <p>Click any photo to open the interactive full-screen carousel ({LOOKBOOK_ITEMS.length} photos)</p>
          </div>
          <div className="lookbook-grid">
            {LOOKBOOK_ITEMS.map((item, idx) => (
              <div key={idx} className="lookbook-card" onClick={() => openLightbox(idx)}>
                <div className="lookbook-img-box">
                  <img
                    src={item.url}
                    alt={item.title}
                    onError={(e) => { e.target.src = FALLBACK_IMG; }}
                  />
                  <span className="expand-badge">🔍 View Carousel</span>
                </div>
                <div className="lookbook-body">
                  <div className="lookbook-card-title">{item.title}</div>
                  <div className="lookbook-card-sub">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section id="hours" className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="section-header">
            <h2>LOCATION & HOURS</h2>
            <p>Visit Profiles Hair Salon on Harrison St in Grand Ledge</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>SALON ADDRESS</h3>
              <p style={{ fontWeight: 600, marginBottom: '8px' }}>Profiles Hair Salon</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>📍 315 Harrison St, Grand Ledge, MI 48837</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>📞 Phone: <a href="tel:5176279800" style={{ color: 'var(--primary-gold)' }}>(517) 627-9800</a></p>
              <button className="btn btn-gold" onClick={() => handleOpenBooking()}>Book Your Session</button>
            </div>

            <div className="info-card">
              <h3>OPERATING HOURS</h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Tuesday - Friday</span> <strong>9:00 AM - 7:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Saturday</span> <strong>8:00 AM - 4:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
                  <span>Sunday & Monday</span> <strong style={{ color: '#E53E3E' }}>Closed</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Profiles Hair Salon. 315 Harrison St, Grand Ledge, MI 48837 | (517) 627-9800</p>
        </div>
      </footer>

      {/* Lightbox Carousel Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            <div className="lightbox-img-box">
              <button className="lightbox-nav lightbox-prev" onClick={prevLightboxImage}>‹</button>
              <img
                src={LOOKBOOK_ITEMS[lightboxIndex].url}
                alt={LOOKBOOK_ITEMS[lightboxIndex].title}
                onError={(e) => { e.target.src = FALLBACK_IMG; }}
              />
              <button className="lightbox-nav lightbox-next" onClick={nextLightboxImage}>›</button>
            </div>
            <div className="lightbox-footer">
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-gold)' }}>{LOOKBOOK_ITEMS[lightboxIndex].title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{LOOKBOOK_ITEMS[lightboxIndex].sub}</p>
              </div>
              <div style={{ fontWeight: 600, color: 'var(--primary-gold)' }}>
                Image {lightboxIndex + 1} of {LOOKBOOK_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-gold)', marginBottom: '16px' }}>
              RESERVE SALON APPOINTMENT
            </h2>
            <form onSubmit={handleSubmitBooking}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Amanda Davis"
                  value={bookingData.name}
                  onChange={e => setBookingData({ ...bookingData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  className="form-control"
                  placeholder="(517) 555-0133"
                  value={bookingData.phone}
                  onChange={e => setBookingData({ ...bookingData, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Selected Service</label>
                <select
                  className="form-control"
                  value={selectedService}
                  onChange={e => setSelectedService(e.target.value)}
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.name}>{s.name} ({s.price})</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Stylist</label>
                <select
                  className="form-control"
                  value={bookingData.stylist}
                  onChange={e => setBookingData({ ...bookingData, stylist: e.target.value })}
                >
                  <option value="Elena Vance">Elena Vance (Master Colorist)</option>
                  <option value="Jessica Hayes">Jessica Hayes (Balayage & Extensions)</option>
                  <option value="Samantha Ross">Samantha Ross (Precision Cut)</option>
                  <option value="First Available">First Available Stylist</option>
                </select>
              </div>
              <div className="form-group" style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <label>Date</label>
                  <input
                    type="date"
                    required
                    className="form-control"
                    value={bookingData.date}
                    onChange={e => setBookingData({ ...bookingData, date: e.target.value })}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Time</label>
                  <select
                    className="form-control"
                    value={bookingData.time}
                    onChange={e => setBookingData({ ...bookingData, time: e.target.value })}
                  >
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: '10px' }}>
                Confirm Appointment Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMessage && <div className="toast">{toastMessage}</div>}
    </div>
  );
}

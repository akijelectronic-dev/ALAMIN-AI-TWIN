
import { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState('Overview');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: 'Hello! I am ALAMIN AI TWIN. How can I help you today?'
    }
  ]);

  const menu = [
    'Overview',
    'AI Twin Chat',
    'Jarvis Assistant',
    'Voice Studio',
    'Memory Center',
    'Settings'
  ];

  function sendMessage(e) {
    e.preventDefault();

    if (!message.trim()) return;

    setMessages([
      ...messages,
      { role: 'user', text: message }
    ]);

    setMessage('');
  }

  return (
    <div className="app">

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-logo">A</div>
          <div>
            <b>ALAMIN</b>
            <small>AI TWIN</small>
          </div>
        </div>

        <p className="menu-heading">MAIN MENU</p>

        {menu.map((item, index) => (
          <button
            key={item}
            className={`menu-item ${active === item ? 'active' : ''}`}
            onClick={() => setActive(item)}
          >
            <span>
              {['◈', '✧', '◉', '♫', '▤', '⚙'][index]}
            </span>
            {item}
          </button>
        ))}

        <div className="sidebar-status">
          <span className="online-dot"></span>
          SYSTEM INITIALIZED
          <small>ALAMIN AI TWIN v0.1</small>
        </div>

      </aside>

      <main className="main-content">

        <header className="topbar">
          <div>
            <small>PERSONAL AI ECOSYSTEM</small>
            <h2>{active}</h2>
          </div>

          <div className="owner-badge">
            A <span>OWNER</span>
          </div>
        </header>

        {active === 'Overview' && (
          <>
            <section className="welcome-card">

              <div className="welcome-text">
                <span className="eyebrow">
                  YOUR DIGITAL IDENTITY
                </span>

                <h1>
                  Welcome to
                  <br />
                  <span>ALAMIN AI TWIN</span>
                </h1>

                <p>
                  Your personal intelligence.
                  Your voice. Your digital world.
                </p>

                <button
                  className="primary-btn"
                  onClick={() => setActive('AI Twin Chat')}
                >
                  Start Conversation ↗
                </button>
              </div>

              <div className="avatar">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="avatar-core">A</div>
                <small>AI CORE</small>
              </div>

            </section>

            <h3 className="section-heading">
              YOUR AI ECOSYSTEM
            </h3>

            <section className="feature-grid">

              {[
                ['✧', 'AI Twin Chat', 'Talk with your digital twin'],
                ['◉', 'Jarvis Assistant', 'Voice command system'],
                ['♫', 'Voice Studio', 'Your personal AI voice'],
                ['▤', 'Memory Center', 'Identity and memories']
              ].map(([icon, title, description]) => (

                <button
                  className="feature-card"
                  key={title}
                  onClick={() => setActive(title)}
                >
                  <span className="feature-icon">{icon}</span>
                  <b>{title}</b>
                  <small>{description}</small>
                  <span className="feature-arrow">↗</span>
                </button>

              ))}

            </section>

            <section className="system-card">
              <h3>
                <span className="online-dot"></span>
                CORE SYSTEM STATUS
              </h3>

              <p>
                Frontend initialized successfully.
                AI engine, voice server and cloud services
                are waiting for integration.
              </p>

              <small>
                BUILDING THE FUTURE · ONE STEP AT A TIME
              </small>
            </section>
          </>
        )}

        {active === 'AI Twin Chat' && (
          <section className="content-card">

            <h2>AI Twin Conversation</h2>

            <p className="muted">
              Chat interface preview. Real AI connection
              will be added in a later stage.
            </p>

            <div className="chat-box">
              {messages.map((item, index) => (
                <div
                  key={index}
                  className={`message ${item.role}`}
                >
                  {item.text}
                </div>
              ))}
            </div>

            <form className="chat-form" onSubmit={sendMessage}>
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message your AI Twin..."
              />

              <button className="primary-btn">
                Send ↗
              </button>
            </form>

          </section>
        )}

        {active !== 'Overview' && active !== 'AI Twin Chat' && (
          <section className="content-card module-card">

            <div className="module-icon">
              {active === 'Jarvis Assistant' ? '◉' :
               active === 'Voice Studio' ? '♫' :
               active === 'Memory Center' ? '▤' : '⚙'}
            </div>

            <h2>{active}</h2>

            <span className="coming-soon">
              COMING SOON
            </span>

            <p>
              This module will be connected to
              the ALAMIN AI TWIN core during development.
            </p>

          </section>
        )}

        <footer>
          ALAMIN AI TWIN © 2026
          <span>PRIVATE DIGITAL ECOSYSTEM</span>
        </footer>

      </main>
    </div>
  );
}

export default App;


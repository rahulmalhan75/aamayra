const leads = [
  { name: "Amit", requirement: "3BHK • Dwarka", budget: "₹1.2Cr", score: 92, status: "Hot" },
  { name: "Neha", requirement: "2BHK • Noida", budget: "₹75L", score: 68, status: "Warm" },
  { name: "Raj", requirement: "2BHK • Gurgaon", budget: "₹65L", score: 42, status: "New" },
];

export default function Home() {
  return (
    <main className="shell">
      <aside>
        <h1>LeadPilot</h1>
        <nav>
          <a>Dashboard</a>
          <a>Leads</a>
          <a>Inbox</a>
          <a>Properties</a>
          <a>Follow-ups</a>
          <a>Settings</a>
        </nav>
      </aside>

      <section className="content">
        <header>
          <div>
            <p className="eyebrow">REAL ESTATE SALES OS</p>
            <h2>Dashboard</h2>
          </div>
          <button>+ New Lead</button>
        </header>

        <div className="stats">
          <div><span>New Leads</span><strong>24</strong></div>
          <div><span>Hot Leads</span><strong>8</strong></div>
          <div><span>Follow-ups</span><strong>11</strong></div>
          <div><span>Pipeline</span><strong>₹1.8Cr</strong></div>
        </div>

        <div className="panel">
          <h3>Hot & active leads</h3>
          {leads.map((lead) => (
            <div className="lead" key={lead.name}>
              <div>
                <strong>{lead.name}</strong>
                <p>{lead.requirement}</p>
              </div>
              <span>{lead.budget}</span>
              <span>{lead.score}/100</span>
              <b>{lead.status}</b>
            </div>
          ))}
        </div>

        <div className="panel">
          <h3>AI Inbox preview</h3>
          <p><strong>Customer:</strong> 2BHK chahiye Dwarka mein under 70 lakh.</p>
          <div className="ai">
            Aapko ready-to-move chahiye ya under-construction? Main ₹70 lakh ke andar available options share kar sakta hoon.
          </div>
          <div className="actions">
            <button>Send</button>
            <button>Edit</button>
            <button>Regenerate</button>
          </div>
        </div>
      </section>
    </main>
  );
}

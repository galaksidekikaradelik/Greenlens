import "../style/components/stats.css";

const STATS = [
  { value: "24", label: "Skan edilən tullantı" },
  { value: "8", label: "Yoxlanılan bitki" },
  { value: "12.4 kq", label: "Qənaət edilən tullantı" },
  { value: "86%", label: "Yaşıl bal" },
];

const RECENT_SCANS = [
  { name: "Plastik bənd", result: "Təkrar emal", status: "success", time: "2s əvvəl" },
  { name: "Pomidor yarpağı", result: "Göbələk şübhəsi", status: "warning", time: "5s əvvəl" },
  { name: "Alüminium qutu", result: "Metal", status: "info", time: "1g əvvəl" },
  { name: "Qızılgül yarpağı", result: "Zərərvericilər", status: "error", time: "2g əvvəl" },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-section__inner">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div className="stats-grid__item" key={stat.label}>
              <b>{stat.value}</b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="recent-scans">
          <h3>Son skanlar</h3>
          <ul>
            {RECENT_SCANS.map((scan) => (
              <li key={scan.name}>
                <span className="recent-scans__name">{scan.name}</span>
                <span className={`recent-scans__badge recent-scans__badge--${scan.status}`}>
                  {scan.result}
                </span>
                <span className="recent-scans__time">{scan.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
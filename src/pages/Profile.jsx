import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  ScanLine,
  Recycle,
  Leaf,
  Trophy,
  LogOut,
  LoaderCircle,
} from "lucide-react";

import "../style/pages/profile.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [recentScans, setRecentScans] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    // Login olmayıbsa profilə girməsin
    if (!token || !storedUser) {
      navigate("/login");
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/login");
      return;
    }

    const loadProfileData = async () => {
      try {
        setLoading(true);
        setError("");

        const [statisticsResponse, recentResponse] =
          await Promise.all([
            fetch(`${API_URL}/api/scans/statistics`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),

            fetch(`${API_URL}/api/scans/recent`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),
          ]);

        if (
          statisticsResponse.status === 401 ||
          recentResponse.status === 401
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }

        const statisticsData = await statisticsResponse
          .json()
          .catch(() => null);

        const recentData = await recentResponse
          .json()
          .catch(() => null);

        if (!statisticsResponse.ok) {
          throw new Error(
            statisticsData?.message ||
              statisticsData?.error ||
              "Statistika yüklənmədi."
          );
        }

        if (!recentResponse.ok) {
          throw new Error(
            recentData?.message ||
              recentData?.error ||
              "Son skanlar yüklənmədi."
          );
        }

        setStatistics(statisticsData);

        setRecentScans(
          Array.isArray(recentData) ? recentData : []
        );
      } catch (err) {
        setError(
          err.message ||
            "Profil məlumatlarını yükləmək mümkün olmadı."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProfileData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <section className="profile">
      <div className="profile__container">

        {/* USER */}
        <div className="profile__header">
          <div className="profile__identity">
            <div className="profile__avatar">
              <User size={30} strokeWidth={1.8} />
            </div>

            <div>
              <span className="profile__eyebrow">
                ECOSCAN PROFİL
              </span>

              <h1>{user.name || "İstifadəçi"}</h1>

              <div className="profile__email">
                <Mail size={15} />
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="profile__logout"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            Çıxış et
          </button>
        </div>

        {loading ? (
          <div className="profile__loading">
            <LoaderCircle
              size={26}
              className="profile__spinner"
            />
            <span>Məlumatlar yüklənir...</span>
          </div>
        ) : error ? (
          <div className="profile__error">
            {error}
          </div>
        ) : (
          <>
            {/* STATISTICS */}
            <div className="profile__stats">
              <div className="profile-stat">
                <div className="profile-stat__icon">
                  <ScanLine size={21} />
                </div>

                <span>Ümumi skan</span>

                <strong>
                  {statistics?.totalScans ?? 0}
                </strong>
              </div>

              <div className="profile-stat">
                <div className="profile-stat__icon">
                  <Recycle size={21} />
                </div>

                <span>Tullantı skanı</span>

                <strong>
                  {statistics?.wasteScans ?? 0}
                </strong>
              </div>

              <div className="profile-stat">
                <div className="profile-stat__icon">
                  <Leaf size={21} />
                </div>

                <span>Bitki skanı</span>

                <strong>
                  {statistics?.plantScans ?? 0}
                </strong>
              </div>

              <div className="profile-stat">
                <div className="profile-stat__icon">
                  <Trophy size={21} />
                </div>

                <span>Toplam xal</span>

                <strong>
                  {statistics?.totalPoints ?? 0}
                </strong>
              </div>
            </div>

            {/* RECENT SCANS */}
            <div className="profile__recent">
              <div className="profile__section-head">
                <div>
                  <h2>Son analizlər</h2>

                  <p>
                    Son etdiyin skanları burada görə bilərsən.
                  </p>
                </div>
              </div>

              {recentScans.length === 0 ? (
                <div className="profile__empty">
                  <ScanLine size={28} />

                  <h3>Hələ analiz yoxdur</h3>

                  <p>
                    İlk şəklini skan etdikdən sonra
                    nəticə burada görünəcək.
                  </p>

                  <button
                    type="button"
                    onClick={() => navigate("/features")}
                  >
                    Skan etməyə başla
                  </button>
                </div>
              ) : (
                <div className="profile__scan-list">
                  {recentScans.map((scan) => (
                    <div
                      className="profile-scan"
                      key={scan.id}
                    >
                      <div className="profile-scan__left">
                        <div className="profile-scan__icon">
                          {scan.type === "PLANT" ? (
                            <Leaf size={19} />
                          ) : (
                            <Recycle size={19} />
                          )}
                        </div>

                        <div>
                          <strong>
                            {scan.name || "Analiz"}
                          </strong>

                          <span>
                            {scan.type === "PLANT"
                              ? "Bitki analizi"
                              : "Tullantı analizi"}
                          </span>
                        </div>
                      </div>

                      <time>
                        {scan.scannedAt
                          ? new Date(
                              scan.scannedAt
                            ).toLocaleString("az-AZ")
                          : ""}
                      </time>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
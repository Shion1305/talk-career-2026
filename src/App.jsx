// メインアプリケーションコンポーネント
// スライドの構造を定義

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "./styles/custom.css";

import { profile } from "./data/profile";
import { content } from "./data/content";
import { certifications } from "./data/certifications";
import { getCompanyLogo } from "./data/companyLogos";
import { InternTimeline } from "./components/InternTimeline";
import { InternshipTable } from "./components/InternshipTable";

function App() {
  const deckRef = useRef(null);

  useEffect(() => {
    if (!deckRef.current) {
      const revealElement = document.querySelector(".reveal");
      if (!revealElement) {
        console.error("Reveal element not found");
        return;
      }

      deckRef.current = new Reveal(revealElement, {
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: "slide",
        slideNumber: "c/t",
        autoSlide: 0,
        keyboard: true,
        touch: true,
        width: 1280,
        height: 720,
        margin: 0.04,
        minScale: 0.5,
        maxScale: 1.5,
        embedded: false,
        respondToHashChanges: true,
      });

      deckRef.current
        .initialize()
        .then(() => {
          console.log("Reveal.js initialized successfully");
        })
        .catch((err) => {
          console.error("Reveal.js initialization error:", err);
        });
    }

    return () => {
      if (deckRef.current) {
        try {
          deckRef.current.destroy();
          deckRef.current = null;
        } catch (e) {
          console.error("Reveal cleanup error:", e);
        }
      }
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        {/* タイトルスライド */}
        <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
          <h2 dangerouslySetInnerHTML={{ __html: content.title.main }} />
          <h3 dangerouslySetInnerHTML={{ __html: content.title.sub }} />
          <p style={{ marginTop: "60px" }}>{profile.name}</p>
          <p>{profile.title}</p>
        </section>

        {/* About Me */}
        <section>
          <h2>About Me 👨‍💻</h2>
          <div
            style={{
              textAlign: "left",
              fontSize: "0.8em",
              margin: "0 auto",
              maxWidth: "800px",
            }}
          >
            <ul>
              {profile.career.map((item, index) => {
                // Goldman Sachsの場合はロゴを表示
                if (item.text.includes("Goldman Sachs")) {
                  return (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                      <img src="/logos/goldman_sachs.png" alt="Goldman Sachs" style={{
                        height: '100px',
                        width: 'auto',
                        objectFit: 'contain'
                      }} />
                      {item.highlight ? <strong>{item.text}</strong> : item.text}
                    </li>
                  );
                }
                return (
                  <li key={index}>
                    {item.icon}{" "}
                    {item.highlight ? <strong>{item.text}</strong> : item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* エンジニア就活とは */}
        <section>
          <section>
            <h2>「エンジニア就活」って??🤔</h2>
            <div style={{ marginTop: "60px" }}>
              <p className="fragment">就活とは...</p>
              <h3
                className="fragment"
                style={{ color: "#17b2c3" }}
                dangerouslySetInnerHTML={{
                  __html: content.whatIsEngineering.definition,
                }}
              />
            </div>
          </section>
          <section>
            <h2>3つの軸で再解釈📊</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                marginTop: "60px",
              }}
            >
              {content.whatIsEngineering.axes.map((axis, index) => (
                <div key={index} className="axis-card">
                  <h3>
                    {axis.icon} {axis.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* インターン */}
        <section>
          <section data-background-gradient="linear-gradient(to bottom, #134e5e, #71b280)">
            <h2>💼 インターン</h2>
          </section>

          <section>
            <h2>なぜインターンが重要か?</h2>
            <ul style={{ fontSize: "0.85em", textAlign: "left" }}>
              {content.internImportance.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          {/* インターンシップ一覧テーブル */}
          <InternshipTable />

          {/* タイムライン - メモリ付き横軸 */}
          <InternTimeline />

          <section>
            <h2>自分の場合のロール遷移</h2>
            <div style={{ fontSize: "1.2em", marginTop: "80px" }}>
              {content.roleTransition.map((role, index) => (
                <p
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: role }}
                />
              ))}
            </div>
          </section>

          <section>
            <h2>インターンでの心構え💡</h2>
            <ul style={{ fontSize: "0.8em", textAlign: "left" }}>
              {content.internMindset.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>
          {/* 選考対策 */}
          <section>
            <h2>インターン選考対策📝</h2>
          </section>

          <section>
            <h3>1. 履歴書を作ろう📄</h3>
            <ul style={{ fontSize: "0.8em", textAlign: "left" }}>
              {content.interviewPrep.resume.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          {/* 履歴書の例 - 変遷と日英版 */}
          <section>
            <h3>履歴書の変遷📝</h3>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <img src="/resumes/before-202305.jpg" alt="初期の履歴書" style={{ maxHeight: '480px', width: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.65em', marginTop: '8px' }}>2023年5月以前</p>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <img src="/resumes/Resume-JP.jpg" alt="履歴書（日本語）" style={{ maxHeight: '480px', width: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.65em', marginTop: '8px' }}>現在（日本語版）</p>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                <img src="/resumes/Resume-EN.jpg" alt="Resume (English)" style={{ maxHeight: '480px', width: 'auto', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.65em', marginTop: '8px' }}>現在（英語版）</p>
              </div>
            </div>
          </section>

          <section>
            <h3>2. 面接用スライドを作ろう📊</h3>
            <ul style={{ fontSize: "0.8em", textAlign: "left" }}>
              {content.interviewPrep.slides.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          <section>
            <h3>3. オンラインプロフィールを作ろう🌐</h3>
            <div
              style={{
                fontSize: "0.9em",
                textAlign: "left",
                margin: "40px auto",
                maxWidth: "700px",
              }}
            >
              <p>
                <strong>LinkedIn / Wantedly</strong>
              </p>
              <ul>
                {content.interviewPrep.onlineProfile.map((item, index) => (
                  <li key={index} className="fragment">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* グローバル機会 */}
          <section data-background-gradient="linear-gradient(to bottom, #1e3c72, #2a5298)">
            <h2>
              🌍 外資やグローバルな機会に
              <br />
              積極的に挑戦しよう
            </h2>
          </section>

          <section>
            <h3>自分の場合</h3>
            <ul style={{ fontSize: "0.85em", textAlign: "left" }}>
              {content.globalOpportunity.before.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          <section>
            <h3>Appleでのインターン体験🍎</h3>
            <ul style={{ fontSize: "0.8em", textAlign: "left" }}>
              {content.globalOpportunity.appleExperience.map((item, index) => (
                <li key={index} className="fragment">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>得られたもの✨</h3>
            <ul style={{ fontSize: "0.85em", textAlign: "left" }}>
              {content.globalOpportunity.benefits.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          <section>
            <h3>なぜ学生の今なのか?⏰</h3>
            <ul style={{ fontSize: "0.85em", textAlign: "left" }}>
              {content.globalOpportunity.whyNow.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>
        </section>

        {/* 外部イベント */}
        <section>
          <section data-background-gradient="linear-gradient(to bottom, #fc4a1a, #f7b733)">
            <h2>
              🎪 外部のイベントや活動に
              <br />
              積極的に参加しよう
            </h2>
          </section>

          <section>
            <h2>自分の対外活動</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
                marginTop: "60px",
              }}
            >
              {content.externalActivities.types.map((activity, index) => (
                <div key={index} className="activity-card">
                  <h3>{activity.icon}</h3>
                  <p dangerouslySetInnerHTML={{ __html: activity.title }} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3>技術イベント・カンファレンス🎤</h3>
            <ul style={{ fontSize: "0.8em", textAlign: "left" }}>
              {content.externalActivities.techEvents.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          <section>
            <h3>おすすめイベント📅</h3>
            <ul style={{ fontSize: "0.85em" }}>
              {content.externalActivities.recommendedEvents.map(
                (event, index) => (
                  <li key={index}>{event}</li>
                ),
              )}
            </ul>
            <div
              className="fragment"
              style={{
                marginTop: "40px",
                padding: "20px",
                background: "rgba(255,255,255,0.1)",
                borderRadius: "10px",
              }}
            >
              <p>
                <strong>Tips:</strong> Connpassで友達の参加イベント通知をON!
              </p>
            </div>
          </section>

          <section>
            <h3>インターン先の人を巻き込もう🤝</h3>
            <ul style={{ fontSize: "0.85em", textAlign: "left" }}>
              <li className="fragment">同僚をイベントに誘う</li>
              <li className="fragment">
                例: LayerXの同僚とHardeningイベント → Top2位
              </li>
              <li className="fragment">例: Appleの同僚をKubeConに誘う</li>
              <li className="fragment">
                外部イベントに興味がないエンジニアは多い
              </li>
              <li className="fragment">一緒に新しい発見や経験を得られる</li>
            </ul>
          </section>

          {/* 技術イベントの写真 - Go Conference */}
          <section>
            <h3>Go Conference📸</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/event-go-conference-logo.png" alt="Go Conference ロゴ" style={{ maxHeight: '300px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>Go Conference ロゴ</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/go-conference-stand.png" alt="Go Conference 企業ブース" style={{ maxHeight: '300px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>企業ブースで交流</p>
              </div>
            </div>
          </section>

          {/* 技術イベントの写真 - Ruby Kaigi */}
          <section>
            <h3>Ruby Kaigi📸</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/event-ruby-kaigi-logo.png" alt="Ruby Kaigi ロゴ" style={{ maxHeight: '250px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>Ruby Kaigi</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', width: '100%' }}>
                <div style={{ textAlign: 'center' }}>
                  <img src="/photos/event-ruby-kaigi-people.png" alt="Ruby Kaigi 参加者" style={{ maxHeight: '250px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                  <p style={{ fontSize: '0.7em', marginTop: '10px' }}>参加者との交流</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src="/photos/event-ruby-kaigi-people1.png" alt="Ruby Kaigi 集合写真" style={{ maxHeight: '250px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                  <p style={{ fontSize: '0.7em', marginTop: '10px' }}>集合写真</p>
                </div>
              </div>
            </div>
          </section>

          {/* 技術イベントの写真 - KubeCon & その他 */}
          <section>
            <h3>KubeCon & セキュリティイベント📸</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/event-kubecon-2025.jpg" alt="KubeCon 2025" style={{ maxHeight: '300px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>KubeCon 2025</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/event-layerx-security-people.jpeg" alt="LayerX セキュリティイベント" style={{ maxHeight: '300px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>LayerX セキュリティイベント</p>
              </div>
            </div>
          </section>

          <section>
            <h3>OSS💻</h3>
            <div
              style={{
                textAlign: "left",
                fontSize: "0.85em",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {content.externalActivities.oss.map((item, index) => (
                <p
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </div>
          </section>

          <section>
            <h3>CTFについて🚩</h3>
            <div
              style={{
                textAlign: "left",
                fontSize: "0.85em",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {content.externalActivities.ctf.map((item, index) => (
                <p
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </div>
          </section>

          {/* CTFの写真 */}
          <section>
            <h3>CTF参加の様子🚩</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
              <img src="/photos/ctf-seccon-beginners.png" alt="SECCON Beginners CTF" style={{ maxHeight: '500px', maxWidth: '90%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
            </div>
            <p style={{ fontSize: '0.7em', marginTop: '15px', textAlign: 'center' }}>SECCON Beginners CTF</p>
          </section>

          <section>
            <h3>ハッカソン💻</h3>
            <div
              style={{
                textAlign: "left",
                fontSize: "0.85em",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              {content.externalActivities.hackathon.map((item, index) => (
                <p
                  key={index}
                  className="fragment"
                  style={{ marginTop: index === 0 ? "0" : "30px" }}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </div>
          </section>

          {/* ハッカソン実績リスト */}
          <section>
            <h3>自分の場合 - ハッカソン実績🏆</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px 30px',
              fontSize: '0.75em',
              textAlign: 'left',
              maxWidth: '900px',
              margin: '30px auto',
              padding: '0 20px'
            }}>
              {content.externalActivities.hackathonAchievements.map((item, index) => (
                <div
                  key={index}
                  className="fragment"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px',
                    background: item.award ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: item.award ? '2px solid rgba(255, 215, 0, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span style={{ fontSize: '1.2em' }}>
                    {item.award ? '🏆' : '📋'}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: item.award ? 'bold' : 'normal' }}>
                      {item.name} {item.count || ''}
                    </div>
                    {item.award && (
                      <div style={{ fontSize: '0.9em', color: '#FFD700', marginTop: '3px' }}>
                        {item.award}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ハッカソンの写真 - プロダクト */}
          <section>
            <h3>ハッカソン作品例🏆</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-jch-product.png" alt="JCHハッカソン プロダクト" style={{ maxHeight: '220px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.6em', marginTop: '10px' }}>医療AIプロダクト</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-jch-arch.png" alt="JCHハッカソン アーキテクチャ" style={{ maxHeight: '220px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.6em', marginTop: '10px' }}>システムアーキテクチャ</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-lgtm-product.png" alt="LGTMハッカソン プロダクト" style={{ maxHeight: '220px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.6em', marginTop: '10px' }}>セキュリティツール</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-devsecops-arch.png" alt="DevSecOps アーキテクチャ" style={{ maxHeight: '220px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.6em', marginTop: '10px' }}>DevSecOps設計</p>
              </div>
            </div>
          </section>

          {/* ハッカソンの写真 - DevSecOps優勝 */}
          <section>
            <h3>DevSecOpsThon 2024 - 最優秀賞🏆</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-devsecops-win.png" alt="DevSecOps 優勝" style={{ maxHeight: '280px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>最優秀賞受賞🏆</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-devsecops-people.png" alt="DevSecOps チーム" style={{ maxHeight: '280px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>チームメンバー</p>
              </div>
            </div>
          </section>

          {/* ハッカソンの写真 - その他の作品 */}
          <section>
            <h3>その他のハッカソン🎉</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-jch.png" alt="Japan Connect Hackathon" style={{ maxHeight: '280px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>Japan Connect Hackathon</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-itadakimasu.png" alt="いただきますハッカソン" style={{ maxHeight: '280px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>いただきますハッカソン</p>
              </div>
            </div>
          </section>

          {/* ハッカソンの写真 - アーキテクチャ詳細 */}
          <section>
            <h3>プロダクトアーキテクチャ設計📐</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-lgtm-product-arch.png" alt="LGTM アーキテクチャ" style={{ maxHeight: '280px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>セキュリティツール設計</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src="/photos/hackathon-aws.jpg" alt="AWSハッカソン" style={{ maxHeight: '280px', width: 'auto', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                <p style={{ fontSize: '0.7em', marginTop: '10px' }}>AWSハッカソン</p>
              </div>
            </div>
          </section>

          <section>
            <h3>サークル・コミュニティ活動👥</h3>
            <div
              className="fragment"
              style={{
                margin: "40px 0",
                padding: "20px",
                background: "rgba(23, 178, 195, 0.2)",
                borderRadius: "10px",
              }}
            >
              <p style={{ fontSize: "1.1em" }}>
                <strong>
                  「誰かを巻き込んで何かをした」
                  <br />
                  という経験は超超重要
                </strong>
              </p>
            </div>
          </section>

          <section>
            <h3>なぜ重要か?</h3>
            <ul style={{ fontSize: "0.85em", textAlign: "left" }}>
              {content.externalActivities.community.why.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          <section>
            <h3>自分の場合</h3>
            <div style={{ fontSize: "0.9em", marginTop: "60px" }}>
              {content.externalActivities.community.examples.map(
                (example, index) => (
                  <div
                    key={index}
                    className="fragment"
                    style={{
                      margin: "20px 0",
                      padding: "20px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "10px",
                    }}
                  >
                    <p dangerouslySetInnerHTML={{ __html: example.title }} />
                  </div>
                ),
              )}
            </div>
            <p
              className="fragment"
              style={{ marginTop: "40px", color: "#ffd700" }}
            >
              💡 「新しく立ち上げた」「新しく企画した」エピソードが強い
            </p>
          </section>
        </section>

        {/* 資格 */}
        <section>
          <section data-background-gradient="linear-gradient(to bottom, #8e2de2, #4a00e0)">
            <h2>📜 資格</h2>
          </section>

          <section>
            <h3>資格について</h3>
            <ul style={{ fontSize: "0.85em", textAlign: "left" }}>
              {content.certifications.points.map((point, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </ul>
          </section>

          <section>
            <h3>自分が取得した資格📜</h3>
            <div style={{ marginTop: "60px" }}>
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item fragment">
                  <p>
                    {cert.icon} <strong>{cert.name}</strong>
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* まとめ */}
        <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
          <h2>まとめ🎯</h2>
          <div
            style={{
              textAlign: "left",
              fontSize: "0.85em",
              maxWidth: "800px",
              margin: "40px auto",
            }}
          >
            <ul>
              {content.summary.map((item, index) => (
                <li
                  key={index}
                  className="fragment"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
            <p
              className="fragment"
              style={{
                marginTop: "60px",
                textAlign: "center",
                fontSize: "1.2em",
                color: "#ffd700",
              }}
            >
              <strong>学生の特権を最大限活用しよう!🚀</strong>
            </p>
          </div>
        </section>

        {/* 質疑応答 */}
        <section data-background-gradient="linear-gradient(to bottom, #134e5e, #71b280)">
          <h2>ご清聴ありがとうございました!</h2>
          <h3 style={{ marginTop: "80px" }}>質疑応答🙋</h3>
        </section>
      </div>
    </div>
  );
}

export default App;

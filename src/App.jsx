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
              {profile.career.map((item, index) => (
                <li key={index}>
                  {item.icon}{" "}
                  {item.highlight ? <strong>{item.text}</strong> : item.text}
                </li>
              ))}
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

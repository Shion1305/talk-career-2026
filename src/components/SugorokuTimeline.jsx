// 双六スタイルのタイムラインコンポーネント
// インターン履歴を双六のように表示

import { internships, timelineLabels } from '../data/internships';

export const SugorokuTimeline = () => {
  // 全インターンを時系列順に並べる
  const allInternships = [];

  timelineLabels.forEach(({ key, label, year }) => {
    internships[key]?.forEach(intern => {
      allInternships.push({
        ...intern,
        period: label,
        year: year
      });
    });
  });

  // 開始時期でソート
  allInternships.sort((a, b) => {
    const aYear = parseInt(a.start.split('/')[0]);
    const bYear = parseInt(b.start.split('/')[0]);
    if (aYear !== bYear) return aYear - bYear;
    return a.startMonth - b.startMonth;
  });

  return (
    <section>
      <h2>自分のインターン歴📅</h2>
      <p style={{ fontSize: '0.7em', marginBottom: '30px' }}>学部2年 → 修士2年まで (双六スタイル)</p>

      <div className="sugoroku-timeline">
        <svg className="sugoroku-path" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet">
          {/* 双六のパス（波線） */}
          <path
            d="M 50,50 Q 250,30 450,50 T 950,50 Q 970,150 950,250 T 950,450 Q 750,470 550,450 T 50,450 Q 30,550 50,650 T 50,750"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="3"
            strokeDasharray="10,5"
          />
        </svg>

        <div className="sugoroku-items">
          {allInternships.map((intern, index) => {
            // 双六のパス上の位置を計算（簡易的な配置）
            const positions = [
              { x: 5, y: 5 },
              { x: 25, y: 7 },
              { x: 45, y: 5 },
              { x: 65, y: 7 },
              { x: 85, y: 10 },
              { x: 88, y: 25 },
              { x: 85, y: 40 },
              { x: 65, y: 45 },
              { x: 45, y: 43 },
              { x: 25, y: 45 },
              { x: 10, y: 48 },
              { x: 7, y: 60 },
              { x: 10, y: 75 },
              { x: 25, y: 80 },
              { x: 45, y: 78 }
            ];

            const pos = positions[index % positions.length];

            return (
              <div
                key={index}
                className="sugoroku-item"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  background: intern.color,
                  border: intern.highlight ? '3px solid #FFD700' : '2px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: intern.highlight ? '0 0 15px rgba(255, 215, 0, 0.4)' : '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="sugoroku-number">{index + 1}</div>
                <div className="sugoroku-icon">{intern.company.charAt(0)}</div>
                <div className="sugoroku-content">
                  <div className="sugoroku-company">{intern.company}</div>
                  <div className="sugoroku-role">{intern.role}</div>
                  <div className="sugoroku-period">{intern.start} {intern.end ? `- ${intern.end}` : '-'}</div>
                </div>
              </div>
            );
          })}

          {/* ゴール */}
          <div
            className="sugoroku-goal"
            style={{
              left: '45%',
              top: '85%'
            }}
          >
            🎯 GOAL
          </div>
        </div>
      </div>
    </section>
  );
};

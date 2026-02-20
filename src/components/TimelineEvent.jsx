// タイムラインイベントコンポーネント
// 個別のインターンを点と線で表示

import { getCompanyLogo } from '../data/companyLogos';

export const TimelineEvent = ({ company, role, start, end, startMonth, duration, color, highlight, gaugeRow = 0, labelLeft = 0, gaugeAreaHeight = 0 }) => {
  const logo = getCompanyLogo(company);

  // 開始点の位置（0-100%）
  const startPos = ((startMonth - 1) / 12) * 100;

  // 終了点の位置（0-100%）
  const endMonth = startMonth + duration - 1;
  const endPos = Math.min((endMonth / 12) * 100, 100); // 12月を超える場合は100%でクリップ

  // ゲージの縦位置（上から順に18pxずつ）
  const gaugeTop = gaugeRow * 18;

  // ラベルの縦位置（全ゲージの下に統一）
  const labelTop = gaugeAreaHeight + 10; // ゲージエリアの下 + 10px余白

  return (
    <div className="timeline-event-wrapper" style={{ top: `${gaugeTop}px` }}>
      {/* 開始点 */}
      <div
        className="timeline-point timeline-point-start"
        style={{
          left: `${startPos}%`,
          background: color,
          boxShadow: highlight ? '0 0 8px rgba(255, 215, 0, 0.6)' : 'none'
        }}
      >
        {/* ロゴ */}
        <div className="point-logo" style={{ background: logo.logo ? '#fff' : color }}>
          {logo.logo ? (
            <img src={logo.logo} alt={company} className="point-logo-img" />
          ) : (
            logo.initial
          )}
        </div>
      </div>

      {/* 期間を示す線 */}
      <div
        className="timeline-line"
        style={{
          left: `${startPos}%`,
          width: `${endPos - startPos}%`,
          background: color,
          opacity: 0.6
        }}
      />

      {/* 終了点 */}
      <div
        className="timeline-point timeline-point-end"
        style={{
          left: `${endPos}%`,
          background: color,
          boxShadow: highlight ? '0 0 8px rgba(255, 215, 0, 0.6)' : 'none'
        }}
      />

      {/* 開始点からラベルへの引き出し線 */}
      {Math.abs(startPos - labelLeft) <= 2 ? (
        // 開始位置とラベルがほぼ同じ場合: 縦線のみ
        <div
          className="timeline-connector-line"
          style={{
            position: 'absolute',
            left: `${startPos}%`,
            top: '12px',
            height: `${labelTop - gaugeTop + 3}px`, // ラベルカードの上端まで
            width: '2px',
            background: color,
            transform: 'translateX(-50%)',
            zIndex: 1,
            opacity: 0.7
          }}
        />
      ) : (
        // 開始位置とラベルが離れている場合: L字型の線
        <>
          {/* 縦線（開始点から横線まで） */}
          <div
            style={{
              position: 'absolute',
              left: `${startPos}%`,
              top: '12px',
              height: `${labelTop - gaugeTop - 12}px`,
              width: '2px',
              background: color,
              transform: 'translateX(-50%)',
              zIndex: 1,
              opacity: 0.7
            }}
          />
          {/* 横線 */}
          <div
            style={{
              position: 'absolute',
              left: `${Math.min(startPos, labelLeft)}%`,
              width: `${Math.abs(labelLeft - startPos)}%`,
              top: `${labelTop - gaugeTop}px`,
              height: '2px',
              background: color,
              zIndex: 1,
              opacity: 0.7
            }}
          />
          {/* 縦線（横線からラベルカードまで） */}
          <div
            style={{
              position: 'absolute',
              left: `${labelLeft}%`,
              top: `${labelTop - gaugeTop}px`,
              height: '15px',
              width: '2px',
              background: color,
              transform: 'translateX(-50%)',
              zIndex: 1,
              opacity: 0.7
            }}
          />
        </>
      )}

      <div
        className="timeline-label-card"
        style={{
          left: `${labelLeft}%`,
          top: `${labelTop - gaugeTop + 15}px`, // ゲージからの相対位置 + 引き出し線の長さ
          borderColor: color,
          background: highlight ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.7)'
        }}
      >
        <div className="label-content">
          <strong style={{ color }}>{company}</strong>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};

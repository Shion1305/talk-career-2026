// インターンタイムラインコンポーネント
// 全学年のインターン履歴を表示

import { TimelineRow } from './TimelineRow';
import { internships, timelineLabels } from '../data/internships';

export const InternTimeline = () => {
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  return (
    <section>
      <div className="horizontal-timeline fullscreen" style={{ marginTop: '40px' }}>
        {/* 月のメモリ */}
        <div className="timeline-months">
          {months.map((month, index) => (
            <div key={index} className="timeline-month">{month}</div>
          ))}
        </div>

        {/* タイムライン各行 */}
        {timelineLabels.map(({ key, label, year }) => (
          <TimelineRow
            key={key}
            label={label}
            year={year}
            internships={internships[key]}
          />
        ))}
      </div>
    </section>
  );
};

// タイムライン行コンポーネント
// 1つの学年のタイムラインを表示

import { TimelineEvent } from './TimelineEvent';
import { useMemo } from 'react';

export const TimelineRow = ({ label, year, internships }) => {
  // 期間ゲージを上下に配置し、ラベルを下部に横並びにする
  const eventsWithPositions = useMemo(() => {
    if (!internships || internships.length === 0) return [];

    // startMonthでソート
    const sorted = [...internships].sort((a, b) => a.startMonth - b.startMonth);

    // 期間ゲージの行配置（重なりを避ける）
    const rows = [];

    sorted.forEach(event => {
      let rowIndex = 0;
      let placed = false;

      while (!placed) {
        if (!rows[rowIndex]) {
          rows[rowIndex] = [];
        }

        // この行の既存イベントと重なるかチェック
        const overlaps = rows[rowIndex].some(existingEvent => {
          const eventStart = event.startMonth;
          const eventEnd = event.startMonth + event.duration;
          const existingStart = existingEvent.startMonth;
          const existingEnd = existingEvent.startMonth + existingEvent.duration;

          // 重なる条件
          return eventEnd > existingStart && eventStart < existingEnd;
        });

        if (!overlaps) {
          rows[rowIndex].push(event);
          placed = true;
        } else {
          rowIndex++;
        }

        if (rowIndex > 10) {
          rows[rowIndex] = [event];
          placed = true;
        }
      }
    });

    // 各イベントにrow番号を付与し、ラベルの横位置を計算
    const eventsWithRows = sorted.map(event => {
      let rowIndex = 0;
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].includes(event)) {
          rowIndex = i;
          break;
        }
      }
      return {
        ...event,
        gaugeRow: rowIndex // ゲージの縦位置
      };
    });

    // ラベルの横位置を計算（重なりを避ける）- 改善版
    const labelsPositioned = [];
    const labelWidth = 11; // ラベルの幅（%）約120px / 1100px

    eventsWithRows.forEach((event, index) => {
      const startPos = ((event.startMonth - 1) / 12) * 100;

      // 候補位置をリストアップ（開始位置を中心に左右に探索）
      const candidates = [];
      const maxDistance = 25; // 最大25%までしか移動させない

      // 開始位置から右に探索（優先）
      for (let offset = 0; offset <= maxDistance; offset += 1) {
        const pos = startPos + offset;
        if (pos >= labelWidth / 2 && pos <= 100 - labelWidth / 2) {
          candidates.push({ pos, distance: offset, direction: 'right' });
        }
      }

      // 開始位置から左に探索
      for (let offset = 1; offset <= maxDistance; offset += 1) {
        const pos = startPos - offset;
        if (pos >= labelWidth / 2 && pos <= 100 - labelWidth / 2) {
          candidates.push({ pos, distance: offset, direction: 'left' });
        }
      }

      // 距離が近い順にソート（距離が同じ場合は右を優先）
      candidates.sort((a, b) => {
        if (a.distance !== b.distance) return a.distance - b.distance;
        return a.direction === 'right' ? -1 : 1;
      });

      // 重ならない位置を探す
      let finalLabelLeft = startPos;
      let found = false;

      for (const candidate of candidates) {
        const labelLeftEdge = candidate.pos - labelWidth / 2;
        const labelRightEdge = candidate.pos + labelWidth / 2;

        const overlaps = labelsPositioned.some(existing => {
          const existingLeftEdge = existing.labelLeft - labelWidth / 2;
          const existingRightEdge = existing.labelLeft + labelWidth / 2;

          // 少し余裕を持たせて重なり判定（0.5%のマージン）
          return !(labelRightEdge + 0.5 <= existingLeftEdge || labelLeftEdge >= existingRightEdge + 0.5);
        });

        if (!overlaps) {
          finalLabelLeft = candidate.pos;
          found = true;
          break;
        }
      }

      // どうしても見つからない場合は、強制的に右端に配置
      if (!found) {
        finalLabelLeft = Math.min(startPos + maxDistance, 100 - labelWidth / 2);
      }

      labelsPositioned.push({
        ...event,
        labelLeft: finalLabelLeft
      });
    });

    return labelsPositioned;
  }, [internships]);

  // 必要な高さを計算（ゲージの行数 + ラベルスペース）
  const maxGaugeRow = eventsWithPositions.length > 0
    ? Math.max(...eventsWithPositions.map(e => e.gaugeRow))
    : 0;
  const gaugeAreaHeight = (maxGaugeRow + 1) * 18 + 5; // ゲージエリアの高さ
  const trackHeight = gaugeAreaHeight + 70; // ゲージ + ラベル用70px（固定）

  return (
    <div className="timeline-row">
      <div className="timeline-label">
        {label}<br/>({year})
      </div>
      <div className="timeline-track" style={{ minHeight: `${trackHeight}px` }}>
        {eventsWithPositions.map((internship, index) => (
          <TimelineEvent key={index} {...internship} gaugeAreaHeight={gaugeAreaHeight} />
        ))}
      </div>
    </div>
  );
};

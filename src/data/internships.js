// インターン履歴データ
// このファイルを編集してインターン情報を変更できます
//
// startMonth: 月の位置 (1-12の数値、0.3刻みで微調整可能)
// duration: 期間の長さ (月単位、0.3で短期間を表現)
// color: 表示色 (16進数カラーコード)
// highlight: true を設定すると特別な枠線が表示されます

export const internships = {
  // 学部2年 (2022)
  undergraduate2: [
    {
      company: "Poetics Inc.",
      role: "SWEインターン",
      start: "22/09",
      end: "24/03",
      startMonth: 9,
      duration: 18,
      color: "#5B9AA9",
    },
  ],

  // 学部3年 (2023)
  undergraduate3: [
    {
      company: "Tokyo University",
      role: "SWE Intern (Contract)",
      start: "23/06",
      end: null,
      startMonth: 6,
      duration: 1,
      color: "#4A7A8C",
    },
    {
      company: "Cookpad",
      role: "Tech Workshop",
      start: "23/07",
      end: "23/07",
      startMonth: 7,
      duration: 0.3,
      color: "#B8956A",
    },
    {
      company: "FAST RETAILING",
      role: "Global Business Internship",
      start: "23/08",
      end: "23/08",
      startMonth: 8,
      duration: 0.3,
      color: "#C17A6F",
    },
    {
      company: "Flatt Security",
      role: "Security(サマー1W)",
      start: "23/08",
      end: "23/09",
      startMonth: 8.3,
      duration: 1,
      color: "#8B7FA8",
    },
    {
      company: "Chura DATA",
      role: "Data(サマー2W)",
      start: "23/09",
      end: "23/09",
      startMonth: 9,
      duration: 0.3,
      color: "#6B7A9D",
    },
    {
      company: "Mercari (Merpay)",
      role: "Backend",
      start: "23/10",
      end: "24/01",
      startMonth: 10,
      duration: 3,
      color: "#5B7A9D",
    },
  ],

  // 修士1年 (2024)
  master1: [
    {
      company: "Drecom",
      role: "生成AIエンジニア",
      start: "24/01",
      end: "24/08",
      startMonth: 1,
      duration: 8,
      color: "#5B8390",
    },
    {
      company: "GMO Flatt Security",
      role: "セキュリティ診断",
      start: "24/04",
      end: "24/11",
      startMonth: 4,
      duration: 8,
      color: "#5B6A8E",
    },
    {
      company: "SMS",
      role: "Backend",
      start: "24/08",
      end: "24/08",
      startMonth: 8,
      duration: 0.3,
      color: "#5B9AA9",
    },
    {
      company: "Reazon Holdings",
      role: "Data(ハッカソン)",
      start: "24/08",
      end: "24/08",
      startMonth: 8.3,
      duration: 0.3,
      color: "#7A9D7F",
    },
    {
      company: "freee",
      role: "SRE(サマー2w)",
      start: "24/09",
      end: "24/09",
      startMonth: 9,
      duration: 0.3,
      color: "#B8956A",
    },
    {
      company: "LayerX",
      role: "DevOps",
      start: "24/11",
      end: "24/12",
      startMonth: 11,
      duration: 2,
      color: "#C17A6F",
    },
  ],

  // 修士2年 (2025-2026)
  master2: [
    {
      company: "Apple",
      role: "AI/ML SWE Intern",
      start: "25/01",
      end: "25/09",
      startMonth: 1,
      duration: 9,
      color: "#ffd700",
      highlight: true,
    },
    {
      company: "Sony Interactive Entertainment",
      role: "Platform SWE",
      start: "25/10",
      end: "25/12",
      startMonth: 10,
      duration: 3,
      color: "#8B7FA8",
    },
  ],
};

// タイムラインの年度ラベル
export const timelineLabels = [
  { key: "undergraduate2", label: "学部2年", year: "2022" },
  { key: "undergraduate3", label: "学部3年", year: "2023" },
  { key: "master1", label: "修士1年", year: "2024" },
  { key: "master2", label: "修士2年", year: "2025" },
];

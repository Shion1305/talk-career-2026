// 会社ロゴのマッピング
// 実際のロゴファイルがない場合は、会社名の頭文字とブランドカラーで表示
// ロゴ画像を追加する場合: logo: "/logos/company-name.png" のように指定

export const companyLogos = {
  "Poetics Inc.": {
    initial: "P",
    color: "#5B9AA9",
    // logo: "/logos/poetics.png" // ロゴ画像のパスをここに追加
  },
  "東京大学": {
    initial: "東",
    color: "#7A9D7F",
    // logo: "/logos/todai.png"
  },
  "Cookpad": {
    initial: "C",
    color: "#B8956A",
    // logo: "/logos/cookpad.png"
  },
  "FAST RETAILING": {
    initial: "FR",
    color: "#C17A6F",
    // logo: "/logos/uniqlo.png"
  },
  "Flatt Security": {
    initial: "FS",
    color: "#8B7FA8",
    // logo: "/logos/flatt-security.png"
  },
  "Chura DATA": {
    initial: "CD",
    color: "#6B7A9D",
    // logo: "/logos/chura-data.png"
  },
  "Mercari (Merpay)": {
    initial: "M",
    color: "#5B7A9D",
    // logo: "/logos/mercari.png"
  },
  "Drecom": {
    initial: "D",
    color: "#5B8390",
    // logo: "/logos/drecom.png"
  },
  "GMO Flatt Security": {
    initial: "GF",
    color: "#5B6A8E",
    // logo: "/logos/gmo-flatt-security.png"
  },
  "SMS": {
    initial: "S",
    color: "#5B9AA9",
    // logo: "/logos/sms.png"
  },
  "Reazon Holdings": {
    initial: "R",
    color: "#7A9D7F",
    // logo: "/logos/reazon.png"
  },
  "freee": {
    initial: "f",
    color: "#B8956A",
    // logo: "/logos/freee.png"
  },
  "LayerX": {
    initial: "L",
    color: "#C17A6F",
    // logo: "/logos/layerx.png"
  },
  "🍎 Apple Japan": {
    initial: "🍎",
    color: "#FFD700",
    // logo: "/logos/apple.png"
  },
  "Sony Interactive Entertainment": {
    initial: "PS",
    color: "#8B7FA8",
    // logo: "/logos/playstation.png"
  }
};

// 会社ロゴを取得するヘルパー関数
export const getCompanyLogo = (companyName) => {
  return companyLogos[companyName] || {
    initial: companyName.charAt(0),
    color: "#5B9AA9"
  };
};

// 会社ロゴのマッピング
// 実際のロゴファイルがない場合は、会社名の頭文字とブランドカラーで表示
// ロゴ画像を追加する場合: logo: "/logos/company-name.png" のように指定

export const companyLogos = {
  "Poetics Inc.": {
    color: "#5B9AA9",
    logo: "/logos/poetics.png",
  },
  Cookpad: {
    color: "#B8956A",
    logo: "/logos/cookpad.png",
  },
  "FAST RETAILING": {
    color: "#C17A6F",
    logo: "/logos/uniqlo.png",
  },
  "Flatt Security": {
    initial: "FS",
    color: "#8B7FA8",
    logo: "/logos/flatt.png",
  },
  "Chura DATA": {
    color: "#6B7A9D",
    logo: "/logos/chura.png",
  },
  "Mercari (Merpay)": {
    color: "#5B7A9D",
    logo: "/logos/mercari.png",
  },
  Drecom: {
    color: "#5B8390",
    logo: "/logos/drecom.png",
  },
  "GMO Flatt Security": {
    color: "#5B6A8E",
    logo: "/logos/flatt.png",
  },
  SMS: {
    color: "#5B9AA9",
    logo: "/logos/sms.jpg",
  },
  "Reazon Holdings": {
    initial: "R",
    color: "#7A9D7F",
    logo: "/logos/reazon.png",
  },
  freee: {
    initial: "f",
    color: "#B8956A",
    logo: "/logos/freee.png",
  },
  LayerX: {
    color: "#C17A6F",
    logo: "/logos/layerx.png",
  },
  Apple: {
    color: "#FFD700",
    logo: "/logos/apple.png",
  },
  "Sony Interactive Entertainment": {
    color: "#8B7FA8",
    logo: "/logos/playstation.png",
  },
  "Tokyo University": {
    initial: "東大",
    color: "#4A7A8C",
  },
  "Goldman Sachs": {
    initial: "GS",
    color: "#4A90E2",
    logo: "/logos/goldman_sachs.png",
  },
};

// 会社ロゴを取得するヘルパー関数
export const getCompanyLogo = (companyName) => {
  return (
    companyLogos[companyName] || {
      initial: companyName.charAt(0),
      color: "#5B9AA9",
    }
  );
};

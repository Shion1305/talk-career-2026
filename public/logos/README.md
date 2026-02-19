# 会社ロゴ画像フォルダ

このフォルダに会社のロゴ画像（PNG形式推奨）を配置してください。

## ロゴ画像の追加方法

### 1. ロゴ画像をこのフォルダに配置

例:
```
public/logos/
├── apple.png
├── mercari.png
├── cookpad.png
└── ...
```

### 2. `src/data/companyLogos.js` を編集

該当する会社のコメントを外して、ロゴパスを指定します：

```javascript
"Cookpad": {
  initial: "C",
  color: "#B8956A",
  logo: "/logos/cookpad.png"  // コメントを外してパスを指定
},
```

## ロゴ画像の推奨仕様

- **形式**: PNG（透過背景推奨）
- **サイズ**: 正方形、最小64x64px、推奨128x128px以上
- **背景**: 透明推奨（白背景でも可）
- **ファイル名**: 英数字とハイフンのみ（例: `apple.png`, `flatt-security.png`）

## 利用可能なロゴファイル名一覧

以下のファイル名でロゴを配置できます：

- `poetics.png` - Poetics Inc.
- `todai.png` - 東京大学
- `cookpad.png` - Cookpad
- `uniqlo.png` - FAST RETAILING
- `flatt-security.png` - Flatt Security
- `chura-data.png` - Chura DATA
- `mercari.png` - Mercari (Merpay)
- `drecom.png` - Drecom
- `gmo-flatt-security.png` - GMO Flatt Security
- `sms.png` - SMS
- `reazon.png` - Reazon Holdings
- `freee.png` - freee
- `layerx.png` - LayerX
- `apple.png` - Apple Japan
- `playstation.png` - Sony Interactive Entertainment

## 注意事項

- ロゴ画像は著作権に注意してください
- 公式サイトから取得するか、適切な権利を持つ画像を使用してください
- ファイルサイズは1MB以下を推奨

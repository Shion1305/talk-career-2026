# エンジニア就活プレゼンテーション

「"自分の魅せ方"をHack🤩：チャンスと技術力を最大化するための学生SWEの歩み方🚀」

## 📖 概要

10分間のエンジニア就活イベント用プレゼンテーションスライド

Reactベースで構築されており、データとUIが分離されているため、簡単に編集できます。

## 🚀 セットアップ

### 必要な環境
- Node.js (推奨: v18以上)
- pnpm

### インストール

```bash
pnpm install
```

## 💻 開発

開発サーバーを起動:

```bash
pnpm dev
```

ブラウザで `http://localhost:3000` が自動的に開きます。

## 🏗️ ビルド

本番用にビルド:

```bash
pnpm build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

プレビュー:

```bash
pnpm preview
```

## 📁 プロジェクト構成

```
talk-career-2026/
├── src/
│   ├── components/          # Reactコンポーネント
│   │   ├── TimelineEvent.jsx    # 個別のインターン表示
│   │   ├── TimelineRow.jsx      # 1学年のタイムライン
│   │   └── InternTimeline.jsx   # 全体のタイムライン
│   ├── data/                # 編集可能なデータファイル ⭐
│   │   ├── profile.js           # プロフィール情報
│   │   ├── internships.js       # インターン履歴
│   │   ├── certifications.js    # 資格情報
│   │   └── content.js           # スライドのテキストコンテンツ
│   ├── styles/              # スタイルファイル
│   │   └── custom.css           # カスタムスタイル
│   ├── App.jsx              # メインアプリケーション
│   └── main.jsx             # エントリーポイント
├── index.html               # HTMLテンプレート
├── vite.config.js           # Vite設定
├── package.json             # 依存パッケージ
└── README.md                # このファイル
```

## ✏️ スライドの編集方法

### 1. プロフィールを編集

`src/data/profile.js` を編集:

```javascript
export const profile = {
  name: "あなたの名前",
  title: "所属",
  career: [
    {
      icon: "📚",
      text: "経歴1"
    },
    // ... 経歴を追加・編集
  ]
};
```

### 2. インターン履歴を編集

`src/data/internships.js` を編集:

```javascript
export const internships = {
  undergraduate2: [
    {
      company: "会社名",
      role: "役割",
      start: "22/09",      // 開始月
      end: "24/03",        // 終了月 (継続中なら null)
      startMonth: 9,       // タイムライン上の開始位置 (1-12)
      duration: 18,        // 期間の長さ (月単位)
      color: "#17b2c3",    // 表示色
      highlight: false     // 特別な枠線を表示するか
    },
    // ... インターンを追加
  ],
  // undergraduate3, master1, master2 も同様に編集
};
```

**タイムライン設定のヒント:**
- `startMonth`: 1-12の数値、0.3刻みで微調整可能 (例: 8.3は8月後半)
- `duration`: 月単位の期間、0.3で短期間を表現
- `color`: 16進数カラーコード
- `highlight: true` で金色の枠線が表示されます

### 3. 資格を編集

`src/data/certifications.js` を編集:

```javascript
export const certifications = [
  {
    icon: "☁️",
    name: "資格名"
  },
  // ... 資格を追加
];
```

### 4. スライドのテキストを編集

`src/data/content.js` を編集:

```javascript
export const content = {
  title: {
    main: "メインタイトル",
    sub: "サブタイトル"
  },
  // ... 各セクションのテキストを編集
};
```

### 5. スタイルをカスタマイズ

`src/styles/custom.css` を編集して、色やフォント、レイアウトを変更できます。

```css
:root {
    --primary-color: #17b2c3;    /* メインカラー */
    --secondary-color: #283b95;  /* サブカラー */
    --accent-color: #ffd700;     /* アクセントカラー */
}
```

## 🎮 プレゼンテーションの操作方法

- **次のスライド**: 右矢印キー、スペースキー、またはクリック
- **前のスライド**: 左矢印キー
- **上下のスライド**: 上下矢印キー (縦方向に複数スライドがある場合)
- **概要表示**: Escキー
- **フルスクリーン**: Fキー
- **スライド番号ジャンプ**: 数字キー + Enter

## 🛠️ 技術スタック

- **React** - UIライブラリ
- **Reveal.js** - プレゼンテーションフレームワーク
- **Vite** - ビルドツール
- **JavaScript (JSX)** - プログラミング言語

## 📝 カスタマイズのヒント

### 新しいスライドセクションを追加

`src/App.jsx` の `<div className="slides">` 内に新しい `<section>` を追加:

```jsx
<section>
  <h2>新しいセクション</h2>
  <p>内容...</p>
</section>
```

### 背景グラデーションを変更

`data-background-gradient` 属性を使用:

```jsx
<section data-background-gradient="linear-gradient(to bottom, #色1, #色2)">
  <h2>タイトル</h2>
</section>
```

### アニメーション効果を追加

要素に `className="fragment"` を追加すると、クリックで順次表示されます:

```jsx
<li className="fragment">項目1</li>
<li className="fragment">項目2</li>
```

## 🐛 トラブルシューティング

### 開発サーバーが起動しない

```bash
# node_modulesを削除して再インストール
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### スタイルが反映されない

ブラウザのキャッシュをクリアするか、シークレットモードで開いてください。

### タイムラインが正しく表示されない

`src/data/internships.js` の `startMonth` と `duration` の値を確認してください。
タイムラインは12ヶ月分の幅で設計されています。

## 📄 ライセンス

このプロジェクトは個人利用・教育目的で自由に使用できます。

## 🙋 質問・フィードバック

プレゼンテーションに関する質問やフィードバックがあれば、お気軽にどうぞ！

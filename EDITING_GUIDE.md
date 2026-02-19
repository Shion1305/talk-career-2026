# 📝 スライド編集ガイド

このガイドでは、プログラミング初心者でもスライドを簡単に編集できるように説明します。

## 🎯 編集できる主なファイル

### 1️⃣ プロフィール情報 (`src/data/profile.js`)

**何が編集できる？**
- 名前
- 所属
- 経歴リスト

**編集例:**

```javascript
export const profile = {
  name: "山田 太郎",  // ← あなたの名前に変更
  title: "〇〇大学 〇〇学部 3年",  // ← 所属に変更
  career: [
    {
      icon: "📚",  // 絵文字は自由に変更可能
      text: "〇〇大学〇〇学部 3年"  // 経歴の説明
    },
    {
      icon: "💻",
      text: "2020年にプログラミングを始める"
    },
    // 新しい経歴を追加したい場合は、カンマで区切って追加
    {
      icon: "🏆",
      text: "〇〇コンテストで優勝",
      highlight: true  // 目立たせたい項目はこれを追加
    }
  ]
};
```

---

### 2️⃣ インターン履歴 (`src/data/internships.js`)

**何が編集できる？**
- インターン先の会社名
- 役割
- 期間
- タイムライン上の表示位置と色

**編集例:**

```javascript
export const internships = {
  undergraduate2: [  // 学部2年のインターン
    {
      company: "株式会社ABC",     // 会社名
      role: "バックエンドエンジニア",  // 役割
      start: "22/09",              // 開始時期
      end: "23/03",                // 終了時期 (継続中なら null)
      startMonth: 9,               // 9月開始
      duration: 6,                 // 6ヶ月間
      color: "#17b2c3"            // 青系の色
    }
  ],

  undergraduate3: [  // 学部3年のインターン
    {
      company: "株式会社XYZ",
      role: "フロントエンドエンジニア",
      start: "23/06",
      end: "23/08",
      startMonth: 6,    // 6月開始
      duration: 2,      // 2ヶ月間
      color: "#f7b733"  // 黄色系の色
    }
  ],

  // master1 (修士1年), master2 (修士2年) も同様
};
```

**🎨 色の選び方:**
- 青系: `#17b2c3`, `#2a5298`, `#134e5e`
- 緑系: `#71b280`
- 黄色系: `#f7b733`, `#ffd700`
- 赤系: `#fc4a1a`
- 紫系: `#8e2de2`, `#4a00e0`, `#283b95`

**⏱️ タイムライン設定のコツ:**
- `startMonth`: 1月なら1、12月なら12
- 月の途中から始まる場合は小数点を使用 (例: 8.3 = 8月後半)
- `duration`: インターン期間の長さ (月単位)
  - 1週間程度: 0.3
  - 1ヶ月: 1
  - 3ヶ月: 3
  - 1年: 12

---

### 3️⃣ 資格情報 (`src/data/certifications.js`)

**何が編集できる？**
- 取得した資格のリスト

**編集例:**

```javascript
export const certifications = [
  {
    icon: "☁️",  // 資格のアイコン
    name: "AWS Certified Solutions Architect"  // 資格名
  },
  {
    icon: "🐍",
    name: "Python 3 エンジニア認定データ分析試験"
  },
  // 新しい資格を追加
  {
    icon: "📊",
    name: "統計検定2級"
  }
];
```

---

### 4️⃣ スライドのテキスト (`src/data/content.js`)

**何が編集できる？**
- タイトル
- 各スライドの箇条書き
- 説明文

**編集例:**

```javascript
export const content = {
  title: {
    main: "タイトルをここに",
    sub: "サブタイトルをここに"
  },

  // インターンの重要性セクション
  internImportance: [
    "🚀 ポイント1",
    "🎯 ポイント2",
    "💪 ポイント3"
  ],

  // 他のセクションも同様に編集可能
};
```

**💡 HTMLタグも使えます:**
- `<strong>強調したいテキスト</strong>` → **太字**
- `<br>` → 改行

---

### 5️⃣ スタイル・色 (`src/styles/custom.css`)

**何が編集できる？**
- テーマカラー
- フォントサイズ
- 余白

**編集例:**

```css
/* カラーテーマの変更 */
:root {
    --primary-color: #17b2c3;    /* メインの色 (青) */
    --secondary-color: #283b95;  /* サブの色 (紺) */
    --accent-color: #ffd700;     /* アクセント色 (金) */
}

/* フォントサイズの調整 */
.reveal h2 {
    font-size: 2.5em;  /* 大見出しのサイズ */
}

.reveal h3 {
    font-size: 1.8em;  /* 中見出しのサイズ */
}
```

---

## 🔄 変更を確認する方法

1. ファイルを編集して保存
2. ブラウザが自動的にリロードされます
3. 変更が反映されていることを確認

**うまく表示されない場合:**
- ブラウザをリフレッシュ (F5キー)
- 開発サーバーを再起動

```bash
# Ctrl+C で停止
pnpm dev  # 再起動
```

---

## ⚠️ よくあるミス

### 1. カンマの付け忘れ

❌ **間違い:**
```javascript
{
  icon: "📚"
  text: "説明"  // カンマがない！
}
```

✅ **正しい:**
```javascript
{
  icon: "📚",  // カンマを追加
  text: "説明"
}
```

### 2. 引用符の閉じ忘れ

❌ **間違い:**
```javascript
name: "山田 太郎  // 引用符が閉じていない
```

✅ **正しい:**
```javascript
name: "山田 太郎"  // 引用符を閉じる
```

### 3. 配列の最後の要素の後にカンマ

これは大丈夫です（JavaScriptでは許容されています）:
```javascript
career: [
  { icon: "📚", text: "説明1" },
  { icon: "💻", text: "説明2" },  // 最後のカンマはあってもOK
]
```

---

## 🎨 デザインのカスタマイズ例

### 背景グラデーションを変更

`src/App.jsx` で、`data-background-gradient` を変更:

```jsx
<section data-background-gradient="linear-gradient(to bottom, #FF6B6B, #4ECDC4)">
  <h2>タイトル</h2>
</section>
```

グラデーションジェネレーターを使うと便利:
- https://cssgradient.io/

### フォントを変更

`src/styles/custom.css` で:

```css
.reveal {
    font-family: 'ヒラギノ角ゴ Pro', 'Hiragino Kaku Gothic Pro', sans-serif;
}
```

---

## 💾 バックアップの取り方

編集前に、必ずバックアップを取りましょう:

```bash
# プロジェクトフォルダ全体をコピー
cp -r talk-career-2026 talk-career-2026-backup
```

---

## 🆘 困ったときは

1. **エラーメッセージを確認**
   - ブラウザの開発者ツール (F12) を開く
   - Console タブでエラーを確認

2. **変更を元に戻す**
   - Git を使っている場合: `git checkout src/data/profile.js`
   - バックアップから復元

3. **クリーンインストール**
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   pnpm dev
   ```

---

## 📚 参考リンク

- [Reveal.js公式ドキュメント](https://revealjs.com/)
- [React公式ドキュメント](https://react.dev/)
- [CSS色見本](https://www.colordic.org/)

Happy Editing! 🎉

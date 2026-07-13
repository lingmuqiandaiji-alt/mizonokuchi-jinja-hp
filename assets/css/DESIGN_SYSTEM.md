# DESIGN_SYSTEM.md — デザインシステム定義（JDS：Juyo Design Standard）

中心思想：地域の日常に寄り添いながら、境内に足を踏み入れたときの静けさと光を伝える。
すべての値は `assets/css/variables.css` で一元管理しています。

## JDSの位置づけ（AMAGI-PC-FIRST-001 第十二章）

JDSは溝口神社を新しくブランド化するための規則ではない。役割は、既存の神社らしさを
壊さないこと、ページごとの見た目を統一すること、次世代へ設計理由を残すこと、
誰が更新しても品質を保つこと。現在の神社を勝手に再定義する表現は使用しない。

**決定状態：本書のすべての項目は現時点で「仮採用」**（実写真・実文章と合わせて
千代吉本陣が裁可した時点で「正式決定」へ更新する）。例外として、以下は「検討中」：
ヒーロー写真（御神木と本殿の朝の写真へ差し替え予定）、キャッチコピー（橘隊の正式文章待ち）、
アイコン（社紋・正式ロゴ待ち）。

主要な寸法（2026-07-12改定）：最大コンテンツ幅 75rem（約1200px）、
ヘッダーは1080px以上で一段構成・841〜1079pxで2段構成。

## 1. 色

| 変数 | 値 | 用途 |
|---|---|---|
| --color-background | #f8f7f3 | ページ背景（生成り） |
| --color-surface | #ffffff | カード・面 |
| --color-surface-soft | #f2f1ea | 交互セクション背景 |
| --color-text | #252922 | 本文 |
| --color-text-subtle | #656b62 | 補足文（背景#f8f7f3上でコントラスト比約4.9:1） |
| --color-primary | #334a3b | 主要色（深い常磐色）。ボタン・リンク |
| --color-primary-deep | #213529 | 濃色。フッター・見出し |
| --color-on-primary | #f6f5ef | 主要色上の文字 |
| --color-accent | #8b2f2f | 差し色（落ち着いた朱）。電話ボタン・重要ラベルのみ |
| --color-gold-subtle | #a28a5b | 金茶。見出し下の罫線等の装飾のみ（文字には使わない） |
| --color-border | #deddd6 | 罫線 |
| --color-focus | #1c5d99 | フォーカスリング専用 |

原則：
- 色数を増やさない。新しい色が必要なときは variables.css に追加して命名する
- 赤(--color-accent)は「電話」「重要」に限定。面で使わない
- 金色は罫線・飾りのみ。面や本文に使わない
- 写真素材が揃った段階で、社殿・社紋との相性を見て微調整してよい（値は絶対指定ではない）

## 2. 文字

| 項目 | 値 |
|---|---|
| 本文フォント | 端末標準ゴシック（Hiragino Kaku Gothic ProN → BIZ UDPGothic → Yu Gothic → Meiryo → system-ui） |
| 見出しフォント | 端末標準明朝（h2・神社名・儀礼カード名など限定使用） |
| 本文サイズ | 17px相当（--font-size-body: 1.0625rem） |
| 最小サイズ | 15px（補足のみ。本文には使わない）。13px はコピーライト等の法定的表記のみ |
| 行間 | 1.75 |
| 長文の一行幅 | --width-prose: 42rem（約35〜45文字） |
| ボタン文字 | 16px以上・太字 |
| 数字 | font-variant-numeric: tabular-nums（時刻・日付・電話番号） |

外部Webフォントは使用しない（表示速度・長期運用のため）。

## 3. 余白

| 変数 | 値 |
|---|---|
| --space-xs 〜 --space-xl | 0.5rem / 0.75rem / 1.25rem / 2rem / 3.5rem |
| --space-section | clamp(3rem, 8vw, 5.5rem)（セクション上下） |

## 4. 角丸・影

| 変数 | 値 | 用途 |
|---|---|---|
| --radius-sm | 6px | ボタン・ラベル |
| --radius-md | 10px | カード・アコーディオン |
| --shadow-card | 0 1px 3px rgba(37,41,34,.08) | カード通常時 |
| --shadow-raised | 0 4px 16px rgba(37,41,34,.10) | ホバー・浮遊要素 |

## 5. ボタン

- `.button--primary`（常磐色・白文字）：主要導線
- `.button--secondary`（白地・緑枠）：詳細ページへの誘導
- `.button--tel`（朱色）：電話発信専用
- 最小高さ44px（--tap-target）。角丸6px。ホバーは背景色の変化のみ

## 6. カード

- `.card`：白地・1px罫線・角丸10px・薄い影
- `.rite-card`：儀礼カード（中央揃え・明朝の見出し）
- リンクカードはホバーで影+2px浮上（reduced-motion時は無効）

## 7. 見出し

- h1：ページに1つ（トップでは神社名）
- h2：セクション見出し。明朝・金茶の短い下線（.section__title）
- h3：カード見出し等。ゴシック
- 階層飛びをしない

## 8. リンク

- 本文中リンクは下線あり（text-underline-offset: 0.2em）
- ナビゲーション・カードは下線なしでも領域と形状で判別可能にする
- 外部リンクは target="_blank" + rel="noopener noreferrer" + 「（外部サイト）」表記

## 9. 写真比率

| 用途 | 比率 | 推奨サイズ |
|---|---|---|
| ファーストビュー | 16:9 | 1600×900px以上 |
| カード・境内・本殿 | 4:3 | 800×600px以上 |
| OGP | 1.91:1 | 1200×630px |

- すべての img に width/height を指定（レイアウトシフト防止）
- ファーストビューは遅延読み込み禁止、それ以外は loading="lazy"
- 正式写真は WebP を基本とし、必要に応じ元画像(JPEG)も保持

## 10. レスポンシブ基準

| ブレークポイント | 内容 |
|---|---|
| 〜480px | ヒーローのボタンを縦積み。祈祷ポイントを縦積み |
| 〜840px | ハンバーガーメニュー。ナビはドロワー表示 |
| 841px〜 | PCナビ。2カラムレイアウト有効 |
| 最大幅 | --width-content: 68rem |

- 375px幅で横スクロールが発生しないことを必須とする
- 100vh は使わない（メニューのみ 100dvh を使用）

## 10-2. 季節テーマ（AMAGI-SEASON-001対応）

- テーマ指定は `<html data-theme="...">` の**1ヶ所のみ**。定義は `assets/css/themes.css`
- 全12テーマ：default / spring / summer / autumn / winter / new-year / setsubun / nagoshi / annual-festival / shichigosan / tori-no-ichi / emergency
- テーマが上書きしてよい変数：--color-background, --color-surface-soft, --color-primary, --color-primary-deep, --color-gold-subtle, --color-notice-bg, --color-notice-border, --hero-shade-*（＋new-yearのみ--color-accent）
- テーマが**変更してはいけない**変数：--color-text, --color-text-subtle, --color-border, --color-focus, --color-surface（可読性・操作性の保護）
- すべてのテーマの --color-primary は白面・生成り面に対しコントラスト比4.5:1以上を維持すること（機械検証済み）
- 行事テーマは一時使用とし、終了後は季節テーマまたはdefaultへ戻す
- ヒーロー写真の調整値（object-position・暗幕強度）は variables.css の変数で写真ごとに調整。写真の記録は assets/data/hero-registry.json に残す

## 11. アニメーション基準

- 使用可：0.2〜0.25秒程度のフェード・色変化、2px程度の浮上、メニュー開閉
- 禁止：ローディング演出、スクロール連動の大きな動き、点滅、神紋・鳥居の装飾的アニメーション
- `prefers-reduced-motion: reduce` 時はすべて実質無効化（reset.css で一括処理）

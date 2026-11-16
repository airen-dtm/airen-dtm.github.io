/* ============================================================
   藍蓮 ポートフォリオ 作品データ
   ------------------------------------------------------------
   作品を追加するときは、下の { ... }, をひとつコピーして
   いちばん上に貼り付け、中身を書き換えるだけでOKです。
   （並び順は自動で「新しい順」になります）

   id        : YouTube動画のID（https://youtu.be/XXXX の XXXX 部分）
   published : 公開フラグ。許諾をもらえたら true にする（false の曲はページに出ません）
   title     : 曲名
   original  : 原曲アーティスト（空欄 "" なら表示されません）
   singer    : 歌い手さん（概要欄のVocal表記）
   role      : 担当範囲 "Inst" / "Inst+MIX" / "アレンジ+MIX"
   date      : 動画の投稿日 "YYYY-MM-DD"
   start     : 再生を始める秒数（サビから聴かせたいとき。0なら頭から）
   point     : こだわりポイント（空欄 "" なら表示されません）
   client    : 依頼者のまとめ用ID（同じ人は同じ文字に。ページには表示されません）
   instShort : inst音源だけを聴けるショート動画のID（あれば。https://youtube.com/shorts/XXXX の XXXX）
   ============================================================ */

window.WORKS = [
  {
    id: "ON9TcGaKfb4",
    published: true,
    title: "staple stable",
    original: "戦場ヶ原ひたぎ（CV：斎藤千和）",
    singer: "りーす",
    role: "Inst+MIX",
    date: "2026-08-21",
    start: 0,
    point: "",
    client: "ries",
  },
  {
    id: "tBI4uNUFiqc",
    published: true,
    title: "Signs and Wonders",
    original: "ネオン(CV:藤川茜)、芽兎めう(CV:五十嵐裕美)",
    singer: "りーす",
    role: "アレンジ+MIX",
    date: "2026-06-18",
    start: 0,
    point: "",
    client: "ries",
  },
  {
    id: "huvPlUgMHN8",
    published: true,
    title: "Breeze",
    original: "林原めぐみ",
    singer: "りーす",
    role: "Inst",
    date: "2026-08-22",
    start: 0,
    point: "",
    client: "ries",
  },
  {
    id: "yrlzHoHpknU",
    published: true,
    title: "振り向けば…",
    original: "Janne Da Arc",
    singer: "りーす",
    role: "Inst",
    date: "2026-03-14",
    start: 0,
    point: "",
    client: "ries",
  },
  {
    id: "XHVN6_5Hfto",
    published: true,
    instShort: "EBM7o9wMerQ",
    title: "ウィーアー！",
    original: "きただにひろし",
    singer: "りーす",
    role: "Inst",
    date: "2025-07-03",
    start: 0,
    point: "",
    client: "ries",
  },
];

/* ページ全体の設定（リンク先など） */
window.SITE = {
  name: "藍蓮",
  kana: "あいれん",
  tagline: "歌ってみた用 inst制作実績",
  lead: [
    "アニソン・ゲーム音楽・ボカロ曲を中心に、歌ってみた用のinstを制作しています。",
    "ここに並んでいるのは、実際にご依頼頂いた方の完成動画です。",
    "歌声が乗ったときの仕上がりを、ぜひ聴いてみてください！",
  ],
  coconala: "https://coconala.com/users/2303514", // 空欄 "" にするとボタンが消えます
  x: "https://x.com/airen_dtm", // 空欄 "" にするとXの表記とボタンが消えます
};

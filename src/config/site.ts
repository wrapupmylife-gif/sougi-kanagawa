// =============================================================
// サイト全体の設定。運営者情報・連絡先・エリアをここで一元管理。
// 特商法・運営者情報の表示に使うので、本番では正確な値に。
// =============================================================
export const site = {
  name: "かながわ葬儀ガイド",
  tagline: "神奈川県の葬儀社・家族葬を、あわてず、納得して選ぶために。",
  // トップページ等のメタディスクリプション（検索結果に出る説明文）
  description:
    "神奈川県（横浜・川崎／三浦半島／湘南／県央／西湘）の葬儀社を、直葬・一日葬・家族葬の料金目安と対応内容で比較できる中立の情報サイト。もしもの時の流れ、費用の相場、事前相談の記事も掲載。",
  // OGP画像（SNSシェア時のサムネ・1200x630）。public/ogp.png を指定。
  // ※葬儀ガイド用の画像を作成したら "/ogp.png" に戻すこと。
  ogImage: "",
  // OGP/HTMLのロケール
  locale: "ja_JP",
  // Google Search Console の所有権確認コード（HTMLタグ方式）。
  // Search Console の「HTMLタグ」に表示される content="..." の値だけをここに貼る。
  googleSiteVerification: "qOZ5d2KDBpaAS8WKRkuqIQJ7nqp2HieWdO0oFkxQaBs",
  // Google アナリティクス(GA4) の測定ID。
  // プロパティ「かながわ葬儀ガイド」（アカウント: 九星気学 方位占い）のウェブストリーム。
  gaId: "G-EBRBR62SLC",
  // 公開URL（astro.config.mjs の site と揃える）
  url: "https://sougi-kanagawa.wrapupmylife.workers.dev",
  // 対応エリア（記事・比較表の絞り込みやSEOの軸に使う）
  area: "神奈川県",
  // 対応エリアは下記の区分に分けて扱う（比較表・導線の軸）。
  // id は providers.ts の regions（区分の割り当て）と対応させること。
  regions: [
    {
      id: "yokohama-kawasaki",
      name: "横浜・川崎",
      summary: "横浜市・川崎市の市街地エリア。",
      cities: ["横浜市", "川崎市"],
    },
    {
      id: "yokosuka-miura",
      name: "横須賀・三浦",
      summary: "横須賀・三浦・逗子・葉山の三浦半島エリア。",
      cities: ["横須賀市", "三浦市", "逗子市", "葉山町"],
    },
    {
      id: "shonan",
      name: "湘南（鎌倉〜平塚）",
      summary: "鎌倉から平塚までの湘南沿岸エリア。",
      cities: ["鎌倉市", "藤沢市", "茅ヶ崎市", "寒川町", "平塚市"],
    },
    {
      id: "kenou",
      name: "県央（厚木・海老名・伊勢原）",
      summary: "厚木・海老名・伊勢原の内陸エリア。",
      cities: ["厚木市", "海老名市", "伊勢原市", "秦野市", "座間市", "大和市"],
    },
    {
      id: "seisho",
      name: "西湘（大磯以西）",
      summary: "大磯より西の県西エリア。",
      cities: ["大磯町", "二宮町", "小田原市", "南足柄市", "箱根町", "湯河原町", "真鶴町"],
    },
  ],
  // お問い合わせ・広告掲載の依頼フォーム（Googleフォーム等）。
  // メールアドレスは公開せず、このフォームに誘導する。
  contactForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScUd4Eu6tJMKmI-OXGM__ffSfDj3rnD_l1--Vn0tAKtG36-ag/viewform",
  // 運営者情報（運営者ページ・フッターに表示）
  operator: {
    name: "かながわ終活ナビ",
    contact: "contact@example.com",
  },
} as const;

// ナビゲーション
export const nav = [
  { label: "トップ", href: "/" },
  { label: "葬儀社を比較", href: "/#compare" },
  { label: "記事一覧", href: "/articles/" },
  { label: "掲載をご希望の葬儀社へ", href: "/advertise/" },
  { label: "運営者情報", href: "/about/" },
] as const;

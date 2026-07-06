// =============================================================
// 比較表に並べる葬儀社データ（= 編集部がまとめた中立情報）。
//
// 【重要・景表法/ステマ規制】
// ここは「お金をもらって順位を上げる枠」ではありません。
// 有料掲載は src/data/ads.ts 側（AdSlot）で必ず PR 表記して扱います。
// 比較表の並び順は「ランキング」ではなく、order の昇順で固定し、
// その基準（五十音順）を表のキャプションに明示します。
// 順位づけを行う場合は、必ず客観的根拠（料金・対応エリア等）を
// 表に併記し、根拠のない「No.1」「おすすめ」表現は使わないこと。
//
// 【出典について】
// 各社公式サイトの公開情報（2026年7月時点）をもとに編集部が整理したものです。
// 葬儀の「プラン料金」は各社で含まれる内容（棺・搬送・安置・人件費等）が
// 異なり、火葬料金・式場使用料・宗教者への謝礼などが別途かかる場合があります。
// 割引（早割・WEB割・事前相談割引等）適用時の価格を掲載している場合は
// note にその旨を明記しています。料金・対応エリアは変更される場合があるため、
// 必ず公式サイト（url）と見積書で最新情報をご確認ください。
// =============================================================

export type Provider = {
  id: string;
  name: string;
  // 並び順の基準（ランキングではない）。小さいほど上に表示。五十音順で付番。
  order: number;
  // 対応エリア区分（site.ts の regions[].id と対応）。複数可。
  regions: string[];
  areas: string[];          // 主な対応エリア（区分内の具体的な市区町村）
  // 形式別のプラン料金目安（税込・「〜」付き。含まれる内容は各社で異なる）
  priceKaso: string;        // 直葬・火葬式
  priceIchinichi: string;   // 一日葬
  priceKazoku: string;      // 家族葬
  ippan: boolean;           // 一般葬への対応
  hall: string;             // 式場（例: "自社3式場" / "公営斎場を利用"）
  prePlan: string;          // 事前相談・生前見積（例: "無料・早割あり"）
  url?: string;             // 公式サイト（出典・確認先）
  note?: string;            // 補足（中立的な事実のみ）
  // 有料掲載かどうか。true の場合は表内に [PR] を必ず表示する。
  sponsored?: boolean;
};

export const providers: Provider[] = [
  // ---------------------------------------------------------------
  // 掲載順は葬儀社名の五十音順。優劣・ランキングではありません。
  // 各社公式サイトの公開情報（2026年7月時点）をもとに整理。
  // ---------------------------------------------------------------
  {
    id: "ikkyuhall",
    name: "一休ホール横須賀（ケイヒンセキザイ工業株式会社）",
    order: 1,
    regions: ["yokosuka-miura"],
    areas: ["横須賀市", "逗子市", "三浦市", "鎌倉市", "横浜市南部"],
    priceKaso: "176,000円〜",
    priceIchinichi: "385,000円〜",
    priceKazoku: "517,000円〜",
    ippan: true,
    hall: "自社式場（1日1組貸切対応）",
    prePlan: "無料（電話・メール・対面）",
    url: "https://www.ikkyuhall.co.jp/",
    note: "横須賀市を中心に三浦半島エリアに対応。",
  },
  {
    id: "issinsou",
    name: "一心葬（株式会社一心葬）",
    order: 2,
    regions: ["kenou", "seisho"],
    areas: ["厚木市", "愛川町", "海老名市", "座間市", "大和市", "綾瀬市", "小田原市"],
    priceKaso: "154,000円〜",
    priceIchinichi: "319,000円〜",
    priceKazoku: "374,000円〜",
    ippan: true,
    hall: "自社式場なし（厚木市斎場・大和斎場など公営斎場を利用）",
    prePlan: "無料・24時間365日（事前相談で1万円引き）",
    url: "https://issinsou.com/",
    note: "料金は事前相談割引の適用時。",
  },
  {
    id: "iyoda",
    name: "イヨダ（株式会社イヨダ）",
    order: 3,
    regions: ["seisho"],
    areas: ["小田原市", "箱根町", "南足柄市", "湯河原町", "真鶴町", "大磯町", "二宮町", "足柄上郡"],
    priceKaso: "198,000円〜",
    priceIchinichi: "363,000円〜",
    priceKazoku: "385,000円〜",
    ippan: true,
    hall: "自社4会館（小田原市内：国府津・中里・風祭・飯田岡）",
    prePlan: "無料・24時間365日",
    url: "https://www.iyoda-funeral.com/",
    note: "西湘・足柄エリアの広域に対応。",
  },
  {
    id: "odawara-shimin",
    name: "小田原市民葬祭（有限会社小田原市民葬祭）",
    order: 4,
    regions: ["seisho"],
    areas: ["小田原市", "周辺地域"],
    priceKaso: "150,000円〜",
    priceIchinichi: "280,000円〜",
    priceKazoku: "要確認（複数プラン）",
    ippan: true,
    hall: "自社式場（小田葬会館・巡礼会館ほか）",
    prePlan: "無料",
    url: "https://shiminsousai.com/",
    note: "全日本葬祭業協同組合連合会（全葬連）加盟。",
  },
  {
    id: "kawasaki-sougisha",
    name: "川崎葬儀社（株式会社川崎葬儀社）",
    order: 5,
    regions: ["yokohama-kawasaki"],
    areas: ["川崎市全7区"],
    priceKaso: "194,850円〜",
    priceIchinichi: "要確認",
    priceKazoku: "482,480円〜",
    ippan: true,
    hall: "自社霊安室あり（式場は市営斎場等を利用）",
    prePlan: "無料（総額を事前提示）",
    url: "https://0120-12-4940.jp/",
    note: "承諾のない追加請求はしない旨を明示。",
  },
  {
    id: "kurashinotomo",
    name: "くらしの友（株式会社くらしの友）",
    order: 6,
    regions: ["yokohama-kawasaki", "shonan", "kenou"],
    areas: ["横浜市全区", "川崎市全区", "藤沢市", "平塚市", "厚木市", "大和市", "海老名市ほか"],
    priceKaso: "266,000円〜",
    priceIchinichi: "要確認",
    priceKazoku: "476,000円〜",
    ippan: true,
    hall: "自社斎場 県内14か所（新横浜・鶴見・津田山・湘南藤沢ほか）",
    prePlan: "無料（来館・訪問・オンライン）・互助会あり",
    url: "https://www.kurashinotomo.jp/sougi/",
    note: "東京・神奈川の冠婚葬祭大手。",
  },
  {
    id: "sunlife",
    name: "サン・ライフ（株式会社サン・ライフ）",
    order: 7,
    regions: ["yokohama-kawasaki", "yokosuka-miura", "shonan", "kenou", "seisho"],
    areas: ["平塚市", "藤沢市", "茅ヶ崎市", "厚木市", "小田原市", "横浜市", "川崎市", "逗子市ほか県内広域"],
    priceKaso: "194,700円〜",
    priceIchinichi: "396,000円〜",
    priceKazoku: "412,500円〜",
    ippan: true,
    hall: "自社斎場 東京・神奈川53か所",
    prePlan: "無料・WEB割/会員制度（互助会）あり",
    url: "https://www.moshimo.net/",
    note: "料金はWEB割適用時。平塚本社の県内大手。",
  },
  {
    id: "shishikura",
    name: "ししくらセレモニー（株式会社ししくらセレモニー）",
    order: 8,
    regions: ["kenou"],
    areas: ["大和市", "座間市", "綾瀬市", "海老名市", "厚木市", "愛川町"],
    priceKaso: "174,900円〜",
    priceIchinichi: "328,900円〜",
    priceKazoku: "438,900円〜",
    ippan: false,
    hall: "自社ホールあり（大和市）",
    prePlan: "無料",
    url: "https://shishikura-yamato.com/",
    note: "一日葬は家族葬1日プラン、家族葬は2日プランの料金。一般葬は要確認。",
  },
  {
    id: "syouwa",
    name: "湘和葬祭（平安レイサービス株式会社）",
    order: 9,
    regions: ["shonan", "kenou", "seisho"],
    areas: ["平塚市", "茅ヶ崎市", "鎌倉市", "秦野市", "小田原市", "足柄上・下郡ほか"],
    priceKaso: "187,550円〜",
    priceIchinichi: "430,540円〜",
    priceKazoku: "要確認（プラン多数）",
    ippan: true,
    hall: "自社式場 県内多数（平塚・茅ヶ崎・秦野・足柄ほか）",
    prePlan: "無料・互助会あり",
    url: "https://syouwa-kaidou.co.jp/",
    note: "一日葬は「1日で送る家族葬」プランの料金。平塚本社の県内大手。",
  },
  {
    id: "morinoie",
    name: "小さな森の家（株式会社金宝堂）",
    order: 10,
    regions: ["yokohama-kawasaki", "kenou"],
    areas: ["横浜市", "川崎市", "厚木市ほか関東広域"],
    priceKaso: "83,600円〜",
    priceIchinichi: "308,000円〜",
    priceKazoku: "418,000円〜",
    ippan: true,
    hall: "1日1組貸切の自社式場（横浜エリア6式場ほか関東115ホール）",
    prePlan: "無料・24時間365日（資料請求で割引あり）",
    url: "https://ososhiki.kinpoudou.co.jp/",
    note: "直葬83,600円〜は割引適用条件あり。",
  },
  {
    id: "houtokusya",
    name: "報徳社（株式会社報徳社）",
    order: 11,
    regions: ["yokosuka-miura"],
    areas: ["横須賀市", "周辺地域"],
    priceKaso: "181,500円〜",
    priceIchinichi: "要確認",
    priceKazoku: "363,000円〜",
    ippan: true,
    hall: "自社安置所あり（無料）",
    prePlan: "無料・24時間・年中無休",
    url: "https://www.houtokusya-yokosuka.com/",
    note: "家族葬は基本セット＋祭壇（段飾り）の合計目安。",
  },
  {
    id: "yokohama-shimin",
    name: "横浜市民葬祭（アシストライフ）",
    order: 12,
    regions: ["yokohama-kawasaki", "kenou"],
    areas: ["横浜市全18区", "海老名市", "座間市", "大和市", "綾瀬市"],
    priceKaso: "105,600円〜",
    priceIchinichi: "217,800円〜",
    priceKazoku: "258,500円〜",
    ippan: true,
    hall: "市営斎場（北部・南部・戸塚・久保山）等を利用",
    prePlan: "無料・生前見積対応・24時間365日",
    url: "https://assistlife.net/k1/",
    note: "横浜市営斎場の利用を前提とした市民葬プラン。",
  },
  {
    id: "yokohama-sougi",
    name: "横浜葬儀（株式会社メモリアルライフ）",
    order: 13,
    regions: ["yokohama-kawasaki"],
    areas: ["横浜市全18区"],
    priceKaso: "105,000円〜",
    priceIchinichi: "280,000円〜",
    priceKazoku: "320,000円〜",
    ippan: true,
    hall: "自社式場なし（公営斎場を専門に利用）",
    prePlan: "無料・事前見積で早割",
    url: "https://www.memorial-center.com/",
    note: "料金は事前見積早割の適用時（通常価格から割引）。",
  },
  {
    id: "wada",
    name: "和田葬儀社（株式会社和田）",
    order: 14,
    regions: ["shonan"],
    areas: ["藤沢市", "茅ヶ崎市"],
    priceKaso: "170,500円〜",
    priceIchinichi: "要確認",
    priceKazoku: "396,000円〜",
    ippan: true,
    hall: "自社2式場（辻堂駅前：和田湘南斎場・セレモニーホール湘南）",
    prePlan: "無料",
    url: "https://www.heartclub.jp/",
    note: "藤沢・茅ヶ崎の地域密着。",
  },
];

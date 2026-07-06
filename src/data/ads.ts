// =============================================================
// 広告枠（= 有料掲載）のデータ。
// ここに入るものは「企業からお金をもらって載せる枠」です。
// 表示する AdSlot コンポーネントが、必ず「広告 / PR」バッジと
// 「有料掲載」の旨を出すようにしてあります（ステマ規制対応）。
//
// 編集記事（中立）と広告枠（有料）を構造的に分けるための入口。
// 営業して獲得した案件は、原則ここに追加 → ページに <AdSlot> を置く。
// 有効な広告が無いスロットは「広告募集」枠が自動表示される（AdSlot 参照）。
// =============================================================

export type Ad = {
  id: string;
  // 掲載スロットの位置キー（ページ側で slot を指定して呼び出す）
  // "area" は各エリアの比較表直下の広告枠（region でエリアを指定）。
  slot: "top" | "area" | "article-inline" | "article-bottom" | "sidebar";
  // slot="area" のときの対象エリア区分（site.ts の regions[].id）。
  // 省略すると全エリア共通の広告として扱う。
  region?: string;
  advertiser: string;       // 広告主名（PR表記とセットで明示）
  headline: string;
  body: string;
  ctaLabel: string;
  href: string;             // 遷移先（計測パラメータを付ける場合もここで）
  active: boolean;          // 掲載期間外は false にして非表示
};

// ダミー。契約した案件をここに追加していく。
export const ads: Ad[] = [
  {
    id: "ad-top-001",
    slot: "top",
    advertiser: "広告主サンプル株式会社",
    headline: "神奈川県全域・24時間365日お迎え対応",
    body: "直葬から家族葬・一般葬まで。事前相談・お見積もりは無料です。",
    ctaLabel: "無料で事前相談する",
    href: "https://example.com/lp?utm_source=sougi-guide&utm_medium=ad&utm_campaign=top",
    active: false,
  },
  {
    id: "ad-article-001",
    slot: "article-bottom",
    advertiser: "広告主サンプル株式会社",
    headline: "費用が不安な方へ：見積書の内訳を明示します",
    body: "プランに含まれるもの・別途かかるものを事前にご説明。ご納得いただいてからのご契約です。",
    ctaLabel: "料金の相談をする",
    href: "https://example.com/lp?utm_source=sougi-guide&utm_medium=ad&utm_campaign=article",
    active: false,
  },

  // --- 各エリア比較表の直下に出る広告枠（サンプル） ---
  // region を比較表の区分IDに合わせると、そのエリアにだけ表示されます。
  // 契約前のサンプルです。掲載しない場合は active:false にしてください。
  {
    id: "ad-area-yokohama-kawasaki",
    slot: "area",
    region: "yokohama-kawasaki",
    advertiser: "広告主サンプル株式会社",
    headline: "横浜・川崎エリア対応｜家族葬の無料事前相談",
    body: "横浜市・川崎市の自社式場で家族葬から一般葬まで。深夜・早朝のお迎えにも対応します。",
    ctaLabel: "このエリアで事前相談する",
    href: "https://example.com/lp?utm_source=sougi-guide&utm_medium=ad&utm_campaign=area-yokohama",
    active: false,
  },
  {
    id: "ad-area-yokosuka-miura",
    slot: "area",
    region: "yokosuka-miura",
    advertiser: "広告主サンプル株式会社",
    headline: "横須賀・三浦エリア対応｜無料の事前相談",
    body: "三浦半島（横須賀・三浦・逗子・葉山）の葬儀に対応。まずは無料相談から。",
    ctaLabel: "このエリアで事前相談する",
    href: "https://example.com/lp?utm_source=sougi-guide&utm_medium=ad&utm_campaign=area-yokosuka",
    active: false,
  },
  {
    id: "ad-area-shonan",
    slot: "area",
    region: "shonan",
    advertiser: "広告主サンプル株式会社",
    headline: "湘南エリア対応｜鎌倉〜平塚の葬儀はお任せ",
    body: "藤沢・茅ヶ崎・平塚など湘南エリアに対応。寺院・式場のご相談も承ります。",
    ctaLabel: "このエリアで事前相談する",
    href: "https://example.com/lp?utm_source=sougi-guide&utm_medium=ad&utm_campaign=area-shonan",
    active: false,
  },
  {
    id: "ad-area-kenou",
    slot: "area",
    region: "kenou",
    advertiser: "広告主サンプル株式会社",
    headline: "県央エリア対応｜厚木・海老名・伊勢原",
    body: "県央エリアの直葬・家族葬に対応。お見積もりは無料です。",
    ctaLabel: "このエリアで事前相談する",
    href: "https://example.com/lp?utm_source=sougi-guide&utm_medium=ad&utm_campaign=area-kenou",
    active: false,
  },
  {
    id: "ad-area-seisho",
    slot: "area",
    region: "seisho",
    advertiser: "広告主サンプル株式会社",
    headline: "西湘エリア対応｜大磯以西・足柄も",
    body: "小田原・南足柄・箱根など西湘エリアの葬儀に対応。山間部からの搬送もご相談ください。",
    ctaLabel: "このエリアで事前相談する",
    href: "https://example.com/lp?utm_source=sougi-guide&utm_medium=ad&utm_campaign=area-seisho",
    active: false,
  },
];

export function adsForSlot(slot: Ad["slot"]): Ad[] {
  return ads.filter((a) => a.active && a.slot === slot);
}

// エリア区分向けの広告を取得（region 指定なしの全エリア共通広告も含む）。
export function adsForArea(region: string): Ad[] {
  return ads.filter(
    (a) => a.active && a.slot === "area" && (!a.region || a.region === region),
  );
}

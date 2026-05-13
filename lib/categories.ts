export const CATEGORIES = {
  altpick: {
    key: "altpick",
    prefix: "[알트픽]",
    label: "알트픽",
    desc: "이번 주 거래량·온체인·뉴스 활성도 기준 주목 코인 정리",
    className: "cat-altpick",
  },
  onchain: {
    key: "onchain",
    prefix: "[온체인]",
    label: "온체인",
    desc: "고래 입출금·청산·DEX 거래량·TVL 데이터 추적",
    className: "cat-onchain",
  },
  deepdive: {
    key: "deepdive",
    prefix: "[프로젝트딥다이브]",
    label: "딥다이브",
    desc: "토크노믹스·로드맵·팀·파트너십까지 한 프로젝트 끝까지",
    className: "cat-deepdive",
  },
  kimp: {
    key: "kimp",
    prefix: "[김프트래커]",
    label: "김프트래커",
    desc: "업비트·빗썸·바이낸스 가격차 자동 추적. 한국 독자 전용",
    className: "cat-kimp",
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const CATEGORY_LIST = Object.values(CATEGORIES);

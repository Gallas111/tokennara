# 코인 거래 시간 — 24시간 시장의 하루는 언제 시작하나

## 확인된 사실
- 업비트는 UTC(협정세계시)를 기준으로 일별 데이터를 계산하며, UTC는 한국시간(KST)보다 9시간이 느리다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 업비트 전일대비 등락률은 "UTC 기준 0시(=한국시간 오전 9시) 종가 대비 당일 종가(혹은 현재가) 등락률"이다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 업비트 거래대금은 "최근 24시간 동안의 누적 거래대금"이다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 업비트 캔들차트 일봉은 "UTC 기준 0시부터 24시간(혹은 현재시점) 동안의 시가/고가/저가/종가"이다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 신규 거래지원 자산은 거래 지원 당일 업비트 내 전일 종가가 존재하지 않기 때문에 업비트 최초 체결가를 기준으로 등락률이 산정된다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 업비트 서비스 점검 시 점검 시작 시간 직전의 마지막 체결가보다 높은 가격의 매수 주문과 낮은 가격의 매도 주문이 취소된다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 업비트 KRW 마켓 최소 주문 금액은 5,000 KRW이다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 업비트 안내에 따르면 은행 점검 시간(매일 23:56 ~ 00:06)에는 원화 입출금 서비스 이용이 원활하지 않을 수 있다 — 출처: https://support.upbit.com/hc/ko/articles/900005806146
- 위 은행 점검 시간과는 별개로 입출금 시스템 점검 시 제한될 수 있으며, 사전에 공지사항으로 안내된다 — 출처: https://support.upbit.com/hc/ko/articles/900005806146
- 업비트 '24시간 디지털 자산 출금 지연제'는 최초 원화 입금 시 입금 시점부터 72시간, 이후 원화 입금은 매 입금 건마다 24시간 디지털 자산 출금을 제한한다 — 출처: https://support.upbit.com/hc/ko/articles/900005955686
- 위 출금 지연제는 업비트 이상거래탐지시스템에 따른 금융 사고 위험도에 따라 적용이 제외될 수 있으며, 회원 거래 이력 등에 따라 가변적으로 적용된다 — 출처: https://support.upbit.com/hc/ko/articles/900005955686
- (2026-08-01 보강) 업비트 공지 「첫 디지털 자산 입금 시 72시간 원화 출금 지연 제도 도입 안내」(게시 2021-04-15) 본문: "첫 디지털 자산 입금 시, 해당 시점으로부터 72시간 동안 원화의 출금이 제한되며, 72시간 후 자동 해제됩니다." / "72시간 내에도 디지털 자산으로 출금 시 정상적으로 출금 가능합니다." — 출처: https://upbit.com/service_center/notice?id=1912
- 2026-07-29 조회 시 업비트 일 캔들 API 응답은 candle_date_time_utc "2026-07-29T00:00:00"과 candle_date_time_kst "2026-07-29T09:00:00"이 짝을 이루어, 일봉의 하루 경계가 한국시간 오전 9시임을 보여준다 — 출처: https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=3
- 2026-07-29 조회 시 빗썸 일 캔들 API 응답은 candle_date_time_utc "2026-07-28T15:00:00"과 candle_date_time_kst "2026-07-29T00:00:00"이 짝을 이루어, 일 캔들의 하루 경계가 한국시간 자정임을 보여준다 — 출처: https://api.bithumb.com/v1/candles/days?market=KRW-BTC&count=3
- 빗썸 레거시 24h 캔들스틱 API의 타임스탬프 1785078000000과 1785164400000은 각각 UTC 2026-07-26 15:00, UTC 2026-07-27 15:00으로 한국시간 자정에 해당한다 — 출처: https://api.bithumb.com/public/candlestick/BTC_KRW/24h
- 2026-07-29 조회 시 코인원 일봉 API의 최신 타임스탬프 1785283200000은 UTC 2026-07-29 00:00, 한국시간 2026-07-29 09:00에 해당한다 — 출처: https://api.coinone.co.kr/public/v2/chart/KRW/BTC?interval=1d&size=3
- 바이낸스 BTCUSDT 1d 캔들의 openTime 1785110400000은 UTC 2026-07-27 00:00, 한국시간 2026-07-27 09:00에 해당한다 — 출처: https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=3
- 업비트 KRW-BTC 일봉 거래량은 2026-07-25(토) 330.7 BTC, 07-26(일) 402.3 BTC, 07-27(월) 733.9 BTC, 07-28(화) 969.6 BTC로, 해당 주 토·일 캔들이 모두 존재하며 거래량이 0이 아니다 — 출처: https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=8
- 업비트 KRW 마켓 지정가 주문은 사용자가 제출한 가격에 도달하더라도 체결방식(가격 우선 > 시간 우선)에 의해 체결되지 않을 수 있다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809
- 업비트 시장가 매수 주문은 주문총액이 매도 1~30호가의 매도대기 주문 총액보다 클 경우 주문 접수가 거부된다 — 출처: https://support.upbit.com/hc/ko/articles/4403838454809

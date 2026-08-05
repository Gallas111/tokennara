# 리서치 캐시 — 미신고 가상자산사업자 확인하는 법

- slug: `unregistered-vasp-check-kimp-2026-08-05`
- 조회일: 2026-08-05
- primary: 미신고 가상자산사업자

## 열어 본 문서 목록 (같은 사이트 재검색 포함)

1. KoFIU 공지사항 게시판 목록 API (seCd=0007) — https://www.kofiu.go.kr/cmn/board/selectBoardListFile.do?seCd=0007&size=100&page=1
2. KoFIU 첫 화면 (퀵메뉴) — https://www.kofiu.go.kr/
3. KoFIU 게시판 라우팅 스크립트 — https://www.kofiu.go.kr/js/kor/board.js?version=20241121
4. 특정 금융거래정보의 보고 및 이용 등에 관한 법률 (MST=252787) — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=252787&type=XML
5. 특정금융정보법 시행령 (MST=281385) — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
6. 가상자산 이용자 보호 등에 관한 법률 (MST=261099) — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=261099&type=XML
7. 가상자산 이용자 보호 등에 관한 법률 시행령 (MST=270729) — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=270729&type=XML
8. 금융위원회 보도참고 2025-03-26 — https://www.fsc.go.kr/no010101/84237
9. 금융위원회 보도참고 2025-04-14 — https://www.fsc.go.kr/no010101/84367
10. 금융위원회·FIU 보도자료 2026-06-24 — https://fsc.go.kr/po010101/87177
11. 금융위원회 보도자료 2021-03-16 — https://www.fsc.go.kr/no010101/75560
12. 금융위원회 카드뉴스 2022-08-18 — https://www.fsc.go.kr/no040101?cnId=1297

## 확인된 사실

- FIU 공지사항 게시판(seCd=0007)의 게시글 194번 제목은 `가상자산사업자 신고 현황(2026.7.31. 기준)`이고, 목록 API가 돌려주는 `ntcnYardChangeDt` 값은 `2026-07-31 15:55:09`다. — https://www.kofiu.go.kr/cmn/board/selectBoardListFile.do?seCd=0007&size=100&page=1
- 같은 게시글의 첨부파일은 1개이고 원본 파일명은 `가상자산사업자 신고에 관한 정보공개현황(2026.7.31. 기준).xlsx`, 크기는 19219바이트다. — https://www.kofiu.go.kr/cmn/board/selectBoardListFile.do?seCd=0007&size=100&page=1
- 첨부 엑셀 본문은 이번 조회에서 내려받지 못했다. `downloadBoard.do` 요청이 세션·리퍼러를 붙여도 `Page Not Found` HTML(2072바이트)을 돌려줬다. 따라서 이 글은 명단의 내용(사업자 이름·행 수)을 옮겨 적지 않는다. — https://www.kofiu.go.kr/cmn/file/downloadBoard.do?seCd=0007&ordrNo=194
- FIU 홈페이지 첫 화면에는 `가상자산사업자 신고현황`이라는 라벨이 붙은 바로가기 링크가 있고, 그 링크는 `linkBoard({secd: '0007',orderNo:'194',type:'view'})`를 호출한다. — https://www.kofiu.go.kr/
- 그 `linkBoard` 함수는 secd `0007`, type `view`인 경우 `/kor/notification/notice_view.do`로 `ntcnYardOrdrNo` 값을 POST 한다. 즉 홈페이지 바로가기와 알림마당 공지사항의 그 게시글은 같은 문서다. — https://www.kofiu.go.kr/js/kor/board.js?version=20241121
- 같은 게시판을 `size=100`으로 다시 조회하니 가상자산사업자 관련 공지가 194번 외에도 더 있었다. 209번 `가상자산사업자 신고 방법 및 절차 안내('24.7월 기준)`(첨부 `가상자산사업자 신고 매뉴얼.pdf`), 196번 `가상자산사업자의 ISMS 인증범위 확인 관련 신고 절차 안내`. — https://www.kofiu.go.kr/cmn/board/selectBoardListFile.do?seCd=0007&size=100&page=1
- 특금법 제7조제1항 축자: `가상자산사업자(이를 운영하려는 자를 포함한다. 이하 이 조에서 같다)는 대통령령으로 정하는 바에 따라 다음 각 호의 사항을 금융정보분석원장에게 신고하여야 한다.` 제1호 `상호 및 대표자의 성명`, 제2호 `사업장의 소재지, 연락처 등 대통령령으로 정하는 사항`. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=252787&type=XML
- 특금법 제7조제3항 축자(신고를 수리하지 아니할 수 있는 사유): 제1호 `정보보호 관리체계 인증을 획득하지 못한 자`, 제2호 `실명확인이 가능한 입출금 계정(...)을 통하여 금융거래등을 하지 아니하는 자. 다만, 가상자산거래의 특성을 고려하여 금융정보분석원장이 정하는 자에 대해서는 예외로 한다.`, 제3호 금융관련 법률에 따라 `벌금 이상의 형을 선고받고` 집행 종료·면제일부터 `5년이 지나지 아니한 자`, 제4호 `제4항에 따라 신고 또는 변경신고가 말소되고 5년이 지나지 아니한 자`. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=252787&type=XML
- 특금법 제7조제6항 축자: `제1항에 따른 신고의 유효기간은 신고를 수리한 날부터 5년 이하의 범위에서 대통령령으로 정하는 기간으로 한다. 신고 유효기간이 지난 후 계속하여 같은 행위를 영업으로 하려는 자는 대통령령으로 정하는 바에 따라 신고를 갱신하여야 한다.` — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=252787&type=XML
- 특금법 제7조제7항 축자: `금융정보분석원장은 제1항부터 제6항까지에 따른 가상자산사업자의 신고에 관한 정보 및 금융정보분석원장의 조치를 대통령령으로 정하는 바에 따라 공개할 수 있다.` — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=252787&type=XML
- 특금법 제7조제5항: 금융정보분석원장은 일정 사유에 해당하면 `6개월의 범위에서 영업의 전부 또는 일부의 정지를 명할 수 있다`. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=252787&type=XML
- 시행령 제10조의16(신고에 관한 정보 등의 공개) 축자 전문: `금융정보분석원장은 법 제7조제7항에 따라 신고에 관한 정보 및 금융정보분석원장의 조치를 공개하는 때에는 금융정보분석원의 인터넷 홈페이지에 게시하는 방법으로 한다.` — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의11제2항(법 제7조제1항제2호의 `대통령령으로 정하는 사항`) 축자: 제1호 `사업장의 소재지 및 연락처`, 제2호 `국적 및 성명(법인의 경우에는 대표자 및 임원의 국적 및 성명을 말한다)`, 제3호 `전자우편주소 및 인터넷도메인 이름`, 제4호 `호스트서버의 소재지`. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의11제1항: 신고서에 첨부할 서류에 `정관 또는 이에 준하는 업무운영규정`, `사업추진계획서`, 정보보호 관리체계 인증 자료, 실명확인입출금계정 자료가 포함된다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의11제3항: 변경신고는 `신고한 사항이 변경된 날을 기준으로 30일의 범위에서 변경사항의 경중 등을 고려하여 금융정보분석원장이 정하여 고시하는 기한까지` 제출해야 한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의15제1항 축자 앞부분: `법 제7조제6항에 따라 가상자산사업자 신고의 유효기간은 신고를 수리한 날부터 3년으로 한다.` 법은 5년 이하 범위를 열어 뒀고 시행령이 3년으로 정했다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의15제2항: 갱신하려는 자는 정보보호관리체계인증 자료와 실명확인입출금계정 자료를 붙여 `유효기간이 만료되기 45일 전까지` 갱신신고서를 제출해야 한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의12제2항: 실명확인입출금계정을 낼 수 있는 금융회사는 `「은행법」에 따른 은행`, `중소기업은행`, `농협은행`, `수협은행` 중 하나여야 하고, 자금세탁방지 업무 담당 조직·인력·전산설비 등 물적 시설 요건도 갖춰야 한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의18제1항(실명확인입출금계정의 개시 기준): 제1호 예치금을 고유재산과 구분 관리, 제2호 `정보보호관리체계인증을 획득하였을 것`, 제3호 `가상자산사업자의 고객별로 거래내역을 분리하여 관리하고 있을 것`. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의18제4항 축자 전문: `실명확인입출금계정은 법 제7조제6항에 따른 신고 또는 갱신신고 유효기간의 만료일까지 사용할 수 있다.` — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의20(가상자산사업자의 조치) 제4호 축자: `법 제7조제1항 및 제2항에 따른 신고ㆍ변경신고 의무를 이행하지 않은 가상자산사업자와는 영업을 목적으로 거래하지 않을 것`. 같은 조 제3호는 `확인 조치가 모두 끝나지 않은 고객에 대해서는 거래를 제한할 것`이다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의13(신고 등의 직권말소) 제1항: 직권말소하는 경우 `서면(전자문서를 포함한다)으로 그 사실 및 사유를 신고인에게 알려야 한다`. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 시행령 제10조의17제1항: 신고·변경신고 심사, 불수리 사유 심사, 직권말소 사유 심사, 신고 갱신 심사는 금융정보분석원장이 금융감독원장에게 위탁한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=281385&type=XML
- 금융위원회 보도참고 `[보도참고] 국외 미신고 가상자산사업자의 구글플레이 앱에 대한 국내 접속차단 시행`(2025-03-26) 축자: `구글LLC는 3.25.부터 구글플레이( 앱 마켓)에 등록된 내국인을 대상으로 미신고 영업을 하는 외국 가상자산사업자(17개사)의 앱에 대한 국내접속을 차단하였음`. — https://www.fsc.go.kr/no010101/84237
- 같은 2025-03-26 보도참고 축자: FIU는 `신고사업자가 미신고사업자와 거래하지 않도록 지도(령 제10조의20)하고 있다.` 그리고 `FIU는 이용자가 거래하는 가상자산사업자가 신고된 사업자인지 여부를 쉽게 확인할 수 있도록...FIU 홈페이지에 안내하고 있다.` — https://www.fsc.go.kr/no010101/84237
- 금융위원회 보도참고 `[보도참고] 구글에 이어 애플 앱에 대해서도 국외 미신고 가상자산사업자의 국내 접속이 차단됩니다.`(2025-04-14): 애플 앱스토어에서 4.11.부터 14개 앱이 차단됐고, 대상으로 `KuCoin, MEXC 등 국외 미신고 가상자산사업자의 애플 앱`이 언급된다. — https://www.fsc.go.kr/no010101/84367
- 같은 2025-04-14 보도참고의 이용자 안내 축자: `이용자는 위 사이트를 통해 자신이 거래하는 가상자산사업자가 신고된 사업자인지 여부를 확인하고, 미신고사업자인 경우 본인 소유의 가상자산 등을 인출하는 등의 조치해 주시기 바랍니다.` — https://www.fsc.go.kr/no010101/84367
- 금융위원회·FIU 보도자료 `불법 가상자산 취급업자(특금법상 미신고 가상자산사업자) 이용 및 거래에 각별히 주의하시기 바랍니다.`(2026-06-24) 축자: `현재 FIU에 적법하게 신고된 가상자산사업자는 총 28개로, 이 외에 국내에서 가상자산 거래를 영업으로 하는 업체는 모두 불법입니다.` — https://fsc.go.kr/po010101/87177
- 같은 2026-06-24 보도자료 축자: `이용자는 자신이 이용하는 가상자산사업자가 특금법에 따라 적법하게 신고된 사업자인지 여부를 반드시 확인해야 합니다... 신고 가상자산사업자 명단은 FIU 홈페이지(www.kofiu.go.kr)를 통해서도 확인 가능`. 그리고 `불법 가상자산 취급업자와의 거래로 발생한 피해는 구제되기 어렵습니다.` — https://fsc.go.kr/po010101/87177
- 위 28개는 2026-06-24 자 보도자료 기준값이고, FIU 게시글의 명단 기준일은 그보다 뒤인 2026.7.31.이다. 두 시점이 다르므로 이 글은 28개를 오늘의 값으로 쓰지 않고 그 보도자료의 기준일과 함께 인용한다. — https://fsc.go.kr/po010101/87177 · https://www.kofiu.go.kr/cmn/board/selectBoardListFile.do?seCd=0007&size=100&page=1
- 금융위원회 2021-03-16 보도자료 `가상자산 거래를 하는 고객은 가상자산사업자의 신고 상황에 유의하시기 바랍니다.` 축자: `가상자산사업자의 신고접수 및 신고수리 현황은 금융정보분석원(FIU) 홈페이지(www.kofiu.go.kr)에서 확인 가능`. — https://www.fsc.go.kr/no010101/75560
- 금융위원회 카드뉴스 `미신고 가상자산사업자 이용 및 거래에 주의하세요!`(2022-08-18) 축자: `미신고 가상자산사업자는 개인정보 유출, 해킹 등 위험에 노출될 수 있으며, 자금세탁 경로로 악용될 우려도 있습니다.` 같은 자료는 `신고된 사업자 명단 확인 www.kofiu.go.kr(8.18. 현재 신고된 사업자는 총 35개)`라고 적어, 명단 수가 기준일마다 달라진다는 점을 보여 준다. — https://www.fsc.go.kr/no040101?cnId=1297
- 가상자산 이용자 보호 등에 관한 법률(시행 2024-07-19) 제6조제1항: 사업자는 이용자 예치금을 `고유재산과 분리하여 「은행법」에 따른 은행 등 대통령령으로 정하는 공신력 있는 기관`에 예치 또는 신탁해 관리해야 한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=261099&type=XML
- 같은 법 제6조제4항: 관리기관은 사업자가 `사업자 신고가 말소된 경우`, `해산ㆍ합병의 결의를 한 경우`, `파산선고를 받은 경우`에 해당하면 이용자 청구에 따라 예치금을 그 이용자에게 우선하여 지급해야 한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=261099&type=XML
- 같은 법 제7조제2항·제3항: 사업자는 자기 가상자산과 이용자 가상자산을 분리 보관하고 같은 종류·수량을 실질적으로 보유해야 하며, 대통령령으로 정하는 비율 이상을 인터넷과 분리해 보관해야 한다. 제8조는 해킹·전산장애 사고 책임 이행을 위해 보험·공제 가입 또는 준비금 적립을 요구한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=261099&type=XML
- 가상자산 이용자 보호법 시행령 제8조제3항: 관리기관에 예치·신탁해야 하는 예치금은 `이용자별 예치금 ... 총액의 100분의 100 이상으로 한다`. 같은 조 제1항의 관리기관은 은행, 농협은행, 수협은행, 중소기업은행이다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=270729&type=XML
- 가상자산 이용자 보호법 시행령 제11조제1항: 사업자는 이용자 가상자산 중 `100분의 70 이상의 범위에서 금융위원회가 정하여 고시하는 비율 이상`을 인터넷과 분리해 보관해야 한다. — https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=270729&type=XML

## 이 글에서 다루지 않기로 한 것

- 첨부 엑셀의 사업자 명단과 행 수. 내려받지 못했고, 기준일이 바뀌면 값도 바뀐다.
- 어느 해외 거래소가 차단됐는지의 현황 나열. 2025-03-26·2025-04-14 보도참고에 적힌 건수와 시행일만 인용한다.
- 트래블룰의 작동 방식. 같은 사이트의 전용 글로 링크만 건다.
- 이용자 개인에게 향하는 위법·처벌 서술. 확인되는 범위는 신고 제도와 그에 따른 서비스 제약까지다.

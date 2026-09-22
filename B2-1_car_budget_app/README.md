# B2-1 차량 유지비 가계부

## 1. 프로젝트 소개

Codyssey B2-1의 **용돈 기입장 프로그램 만들기** 미션을 차량 관리에 맞게 확장하여 만든 프로젝트입니다.

일반적인 용돈 기입장 대신 실제로 활용할 수 있도록  
**주유비, 주차비, 통행료, 보험료, 정비비 등 차량 유지비를 기록하고 관리하는 가계부** 형태로 구현했습니다.

미션에서 요구하는 `income / expense` 구조는 그대로 유지했습니다.

- `expense` : 차량 유지에 사용한 비용
- `income` : 보험 환급금, 유류비 지원금 등 차량과 관련된 수입

처음에는 콘솔 프로그램으로 구현한 후, 실제 휴대폰에서도 사용할 수 있도록 웹 기능을 추가했습니다.

---

# 2. 개발 목표

이번 프로젝트에서는 단순히 데이터를 저장하는 것보다 다음 내용을 직접 구현하는 것을 목표로 했습니다.

- 파일 기반 데이터 영구 저장
- 거래 CRUD
- 조건 검색
- 월별 통계
- 예산 관리
- 카테고리 관리
- CSV Import / Export
- Generator 기반 파일 스트리밍
- Decorator를 이용한 공통 기능 분리
- Type Hint 적용
- 클래스 및 모듈 분리
- 웹 UI를 통한 실제 사용

---

# 3. 주요 기능

## 거래 추가

차량 관련 지출 또는 수입을 등록할 수 있습니다.

저장되는 거래 데이터는 다음 필드를 가집니다.

```text
id
type
date
amount
category
memo
tags
```

예:

```text
TX-000001
2026-09-23
expense
fuel
65000
주유
출퇴근,주유
```

---

## 거래 조회

저장된 거래를 최신순으로 확인할 수 있습니다.

```bash
python3 -m budget_app list --limit 5
```

---

## 거래 검색

다음 조건을 이용하여 거래를 검색할 수 있습니다.

- 기간
- 카테고리
- 수입 / 지출
- 메모
- 태그

예:

```bash
python3 -m budget_app search --category fuel
```

```bash
python3 -m budget_app search --type expense
```

```bash
python3 -m budget_app search --from 2026-09-01 --to 2026-09-30
```

---

## 거래 수정

거래 ID를 이용하여 기존 거래를 수정할 수 있습니다.

```bash
python3 -m budget_app update --id TX-000001 --amount 70000
```

이번 프로젝트에서는 `update`를 **옵션 기반 방식**으로 구현했습니다.

---

## 거래 삭제

```bash
python3 -m budget_app delete --id TX-000001
```

존재하지 않는 ID를 입력하면 오류 메시지와 해결 힌트를 출력합니다.

---

# 4. 차량 카테고리

기본 카테고리는 차량 유지비에 맞게 구성했습니다.

| 화면 표시 | 저장 값 |
| --- | --- |
| 주유비 | fuel |
| 주차비 | parking |
| 통행료 | toll |
| 보험료 | insurance |
| 정비비 | maintenance |
| 수리비 | repair |
| 세차비 | car_wash |
| 자동차세 | tax |
| 할부금 | installment |
| 차량용품 | accessory |
| 환급금 | refund |
| 지원금 | support |

웹 화면에서는 다음과 같이 표시됩니다.

```text
주유비 (fuel)
주차비 (parking)
정비비 (maintenance)
```

프로그램 내부에는 영어 값을 저장하여 검색과 데이터 처리가 일관되도록 했습니다.

---

# 5. 월별 요약

월별 차량 유지비를 요약해서 확인할 수 있습니다.

```bash
python3 -m budget_app summary --month 2026-09 --top 3
```

출력 항목:

- 총 수입
- 총 지출
- 잔액
- 월 예산
- 예산 사용률
- 예산 초과 여부
- 카테고리별 지출 TOP N

예:

```text
총 수입: 0원
총 지출: 65,000원
잔액: -65,000원
예산: 500,000원 (사용률 13.0%)

지출 TOP 3
1) fuel 65,000원
```

---

# 6. 월 예산

월별 차량 유지비 예산을 설정할 수 있습니다.

```bash
python3 -m budget_app budget set --month 2026-09 --amount 500000
```

설정한 예산은 월별 요약에서 사용률로 확인할 수 있습니다.

예산을 초과하면 경고 메시지를 출력합니다.

---

# 7. 카테고리 관리

카테고리를 직접 추가하거나 삭제할 수 있습니다.

목록:

```bash
python3 -m budget_app category list
```

추가:

```bash
python3 -m budget_app category add
```

삭제:

```bash
python3 -m budget_app category remove --name accessory
```

현재 거래에서 사용 중인 카테고리는 데이터 안전을 위해 바로 삭제할 수 없도록 구현했습니다.

---

# 8. CSV Import / Export

## Export

특정 월의 거래를 CSV 파일로 내보낼 수 있습니다.

```bash
python3 -m budget_app export --out export.csv --month 2026-09
```

기간을 이용한 내보내기도 가능합니다.

```bash
python3 -m budget_app export \
--out export.csv \
--from 2026-09-01 \
--to 2026-09-30
```

---

## Import

```bash
python3 -m budget_app import --from import.csv
```

CSV 파일의 거래를 한 번에 등록할 수 있습니다.

---

## CSV 스키마

CSV 파일은 UTF-8, 헤더 포함 형식을 사용합니다.

| column | required | 설명 |
| --- | --- | --- |
| date | Y | YYYY-MM-DD |
| type | Y | income / expense |
| category | Y | 등록된 카테고리 |
| amount | Y | 양수 정수 |
| memo | N | 문자열 |
| tags | N | 쉼표 구분 문자열 |

예:

```csv
date,type,category,amount,memo,tags
2026-09-10,expense,fuel,60000,주유,"출퇴근,주유"
2026-09-15,expense,parking,12000,주차,"업무,주차"
2026-09-20,income,refund,30000,보험 환급,환급
```

---

# 9. 데이터 저장

외부 DB를 사용하지 않고 JSONL 파일을 이용하여 데이터를 영구 저장합니다.

```text
budget_app/data/
├── transactions.jsonl
├── categories.jsonl
└── budgets.jsonl
```

각 파일의 역할은 다음과 같습니다.

### transactions.jsonl

거래 내역 저장

### categories.jsonl

카테고리 저장

### budgets.jsonl

월별 예산 저장

프로그램을 종료해도 데이터가 유지됩니다.

---

# 10. Generator를 이용한 스트리밍 처리

거래 파일 전체를 한 번에 메모리로 읽지 않고 `yield`를 이용하여 한 줄씩 처리하도록 구현했습니다.

```python
def stream_all(self):
    with self.path.open("r", encoding="utf-8") as file:
        for line in file:
            ...
            yield Transaction.from_dict(data)
```

이를 통해 데이터가 많아져도 전체 파일을 한 번에 메모리에 올리지 않고 처리할 수 있습니다.

---

# 11. Decorator

공통 기능을 비즈니스 로직과 분리하기 위해 데코레이터를 사용했습니다.

거래 추가 기능에 실행 시간 측정 데코레이터를 적용했습니다.

```python
@log_execution
def add_transaction(...):
    ...
```

실행 시 다음과 같이 함수 실행 시간을 확인할 수 있습니다.

```text
[실행 로그] add_transaction 완료 (3.27 ms)
```

---

# 12. Type Hint

함수의 입력값과 반환값을 명확하게 하기 위해 타입 힌트를 적용했습니다.

예:

```python
def validate_amount(value: int) -> bool:
    return value > 0
```

```python
def find_by_id(
    self,
    transaction_id: str,
) -> Transaction | None:
```

이를 통해 함수가 어떤 값을 받고 어떤 값을 반환하는지 쉽게 확인할 수 있도록 했습니다.

---

# 13. 데이터 모델

거래 데이터는 `dataclass`를 이용하여 정의했습니다.

```python
@dataclass
class Transaction:
    id: str
    type: str
    date: str
    amount: int
    category: str
    memo: str = ""
    tags: list[str] | None = None
```

---

# 14. 안전한 수정 / 삭제

파일 기반 프로그램에서는 거래를 수정하거나 삭제할 때 기존 파일을 직접 변경하면 데이터가 손상될 가능성이 있습니다.

이를 방지하기 위해 다음 방식으로 구현했습니다.

```text
기존 JSONL
    ↓
임시 파일 생성
    ↓
수정된 데이터 기록
    ↓
os.replace()
    ↓
원본 파일 교체
```

따라서 수정 또는 삭제 중 문제가 발생하더라도 기존 데이터가 손상될 가능성을 줄였습니다.

---

# 15. 프로그램 구조

기능을 한 파일에 작성하지 않고 역할에 따라 모듈을 분리했습니다.

```text
codyssey_B2-1_car_budget_app/
│
├── README.md
├── .gitignore
│
└── budget_app/
    ├── __init__.py
    ├── __main__.py
    ├── cli.py
    ├── decorators.py
    ├── models.py
    ├── repository.py
    ├── service.py
    ├── stores.py
    ├── web_server.py
    │
    ├── static/
    │   └── index.html
    │
    └── data/
        ├── transactions.jsonl
        ├── categories.jsonl
        └── budgets.jsonl
```

---

# 16. 모듈별 역할

## models.py

- Transaction 데이터 모델
- 날짜 검증
- 월 검증
- type 검증
- 금액 검증

## repository.py

- 거래 저장
- 거래 조회
- 거래 수정
- 거래 삭제
- Generator 기반 스트리밍

## stores.py

- 카테고리 저장
- 월별 예산 저장

## service.py

- 거래 CRUD
- 검색
- 월별 요약
- 예산 관리
- CSV Import / Export

## cli.py

- 콘솔 명령어
- 사용자 입력 / 출력

## decorators.py

- 실행 로그
- 실행 시간 측정

## web_server.py

- 웹 서버
- 웹 API
- 거래 CRUD API
- 예산 API
- 카테고리 API
- CSV Import / Export

## static/index.html

- 웹 UI
- 모바일 반응형 화면
- JavaScript API 연결

---

# 17. 웹 기능 추가

기본 미션은 콘솔 프로그램이지만 실제 사용할 수 있도록 웹 화면을 추가했습니다.

웹 서버 실행:

```bash
python3 -m budget_app.web_server
```

PC 접속:

```text
http://127.0.0.1:8000
```

같은 Wi-Fi에 연결된 휴대폰에서는 PC의 IPv4 주소를 이용하여 접속할 수 있습니다.

```text
http://<PC IPv4>:8000
```

웹에서는 다음 기능을 사용할 수 있습니다.

- 거래 추가
- 거래 조회
- 거래 수정
- 거래 삭제
- 거래 검색
- 월별 통계
- 예산 설정
- 카테고리 관리
- CSV Import
- CSV Export

웹과 콘솔 프로그램은 동일한 JSONL 파일을 사용합니다.

따라서 휴대폰에서 입력한 거래를 콘솔에서도 바로 확인할 수 있습니다.

---

# 18. 실행 방법

Python 3.10 이상이 필요합니다.

외부 라이브러리는 사용하지 않았으며 Python 표준 라이브러리만 사용했습니다.

전체 명령어 확인:

```bash
python3 -m budget_app --help
```

웹 실행:

```bash
python3 -m budget_app.web_server
```

---

# 19. 사용한 Python 표준 라이브러리

외부 라이브러리를 설치하지 않고 다음 표준 라이브러리를 사용했습니다.

```text
argparse
csv
dataclasses
datetime
functools
http.server
json
os
pathlib
tempfile
time
typing
urllib
```

---

# 20. 구현 결과

이번 프로젝트를 통해 콘솔 기반 가계부의 기본 기능뿐만 아니라 파일 기반 프로그램의 구조를 직접 구현했습니다.

특히 다음 내용을 적용했습니다.

```text
파일 영구 저장
        ↓
Generator 스트리밍
        ↓
Repository 분리
        ↓
Service 분리
        ↓
CLI 구현
        ↓
Decorator 적용
        ↓
Type Hint 적용
        ↓
웹 API 추가
        ↓
모바일 웹 UI
```

최종적으로 **콘솔과 PC, 휴대폰에서 동일한 데이터를 관리할 수 있는 차량 유지비 가계부**로 구현했습니다.
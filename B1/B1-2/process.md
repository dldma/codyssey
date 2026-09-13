# B1-2 개발 과정 기록

## 프로젝트 개요

B1-2 과제를 단순 제출용 프로젝트로 끝내지 않고, 별도의 포트폴리오 프로젝트로 발전시키기로 했다.

프로젝트 주제는 **학원 학생 관리 시스템**으로 정했다.

Codyssey의 `B1-2` 폴더에는 과제 원문인 `mission.md`를 그대로 유지하고, 실제 개발은 별도의 독립 프로젝트인 `academy-student-manager`에서 진행한다.

최종적으로 독립 프로젝트가 완성되면, Codyssey B1-2의 `README.md`에는 과제 요구사항에 맞춰 구현 결과를 정리할 예정이다.

---

## 1. 서비스 주제 선정

학원에서 학생을 관리할 때 필요한 기능들을 하나의 웹 서비스로 구현하는 방향으로 정했다.

주요 기능은 다음과 같다.

- 이메일/비밀번호 로그인
- 원장 / 선생님 권한 구분
- 전체 학생 목록 조회
- 담당 학생 출석 관리
- 학생별 상세 정보 조회
- 학생별 수업 요일 및 시간 관리
- 학생별 담당 선생님 관리
- 학생 연락처 및 학부모 연락처 관리
- 재원 / 퇴원 / 재등록 이력 관리
- 숙제 / 지각 / 수업 기록 관리
- 현재 / 예정 / 과거 교재 관리
- 학생 개인 메모 / 공용 메모
- 날짜별 메모
- 일반 일정
- 학교별 시험 일정
- 캘린더

---

## 2. 주요 서비스 정책 결정

### 학생 목록

- 모든 선생님이 전체 학생 목록을 볼 수 있다.
- 학생 이름을 클릭하면 학생 상세 페이지로 이동한다.
- 학생 추가는 일반 선생님이 할 수 없고 원장만 가능하다.

### 담당 선생님

- 한 학생을 여러 선생님이 담당할 수 있다.
- 수업 요일과 시간별로 담당 선생님을 따로 지정한다.

예시:

```text
화요일 19:00 - 22:00 → 김선생님
목요일 16:30 - 19:30 → 이선생님
금요일 20:00 - 22:00 → 김선생님
```

### 출석 관리

출석 화면에는 로그인한 선생님이 오늘 담당하는 학생만 표시한다.

상태별 색상은 다음과 같이 정했다.

```text
회색  = 아직 등원 전
초록  = 등원 / 유예등교
파랑  = 하원 완료
빨강  = 결석
```

학생을 클릭하면 등원 전에는 다음 버튼이 표시된다.

```text
[등교] [유예등교] [결석]
```

등교 처리 후 다시 학생을 클릭하면:

```text
[하원]
```

버튼이 표시된다.

`유예등교`는 담당 학생이 다른 반에서 수업하는 경우 등하원 시간을 직접 기록하기 어려울 때 사용하며, 정상 출석으로 처리한다.

### 학생 퇴원 처리

학생을 삭제하지 않고 `재원 / 퇴원` 상태로 관리한다.

퇴원 학생의 기존 기록은 모두 보존한다.

- 출석 기록
- 수업 기록
- 교재 기록
- 학생 메모
- 담당 선생님 이력
- 수업시간 이력

학생이 다시 학원에 등록하는 경우 기존 학생 정보를 이어서 사용한다.

재등록 시에는 과거 담당 선생님과 수업시간을 자동 복원하지 않고, 원장이 새롭게 지정한다.

---

## 3. 독립 프로젝트 생성

프로젝트 이름:

```text
academy-student-manager
```

React 프로젝트는 Vite를 이용해 생성했다.

사용한 기본 환경:

- React
- Vite
- JavaScript
- ESLint

Node.js와 npm이 설치되어 있지 않아 `nvm`을 먼저 설치한 뒤 Node.js LTS 환경을 구성했다.

확인한 버전:

```text
Node.js v24.21.0
npm 11.19.0
```

React 프로젝트 생성 후 Vite 개발 서버를 실행하여 `localhost:5173`에서 정상 동작하는 것을 확인했다.

---

## 4. GitHub 독립 Repository 구성

기존 Codyssey 저장소와 분리하여 새로운 GitHub Repository를 생성했다.

Repository:

```text
academy-student-manager
```

로컬 프로젝트에서 Git 저장소를 초기화하고 첫 커밋을 생성했다.

```bash
git init
git add .
git commit -m "React 프로젝트 초기 설정"
```

이후 GitHub 원격 저장소를 연결했다.

```bash
git remote add origin https://github.com/dldma/academy-student-manager.git
git push -u origin main
```

기존 Personal Access Token에 새 Repository 권한을 추가한 뒤 정상적으로 push가 완료되었다.

---

## 5. Supabase 프로젝트 생성

백엔드는 Firebase 대신 **Supabase**를 사용하기로 결정했다.

Supabase Organization:

```text
dldma-projects
```

Supabase Project:

```text
academy-student-manager
```

Region:

```text
Northeast Asia (Seoul)
```

Supabase 프로젝트 생성 후 상태가 `Healthy`인 것을 확인했다.

---

## 6. React와 Supabase 연결

Supabase JavaScript 라이브러리를 설치했다.

```bash
npm install @supabase/supabase-js
```

환경변수 파일을 생성했다.

```text
.env.local
```

환경변수는 다음 형식으로 구성했다.

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
```

`.gitignore`에서 `*.local`이 제외되어 있는 것을 확인하여 `.env.local`이 GitHub에 업로드되지 않도록 했다.

Supabase 클라이언트 파일:

```text
src/lib/supabase.js
```

을 생성하고 React와 Supabase 연결 테스트를 진행했다.

화면에:

```text
Supabase 연결 성공
```

이 출력되는 것을 확인했다.

---

## 7. 로그인 기능 구현

Supabase Authentication을 이용해 이메일 + 비밀번호 로그인 방식을 적용했다.

Supabase에서 테스트용 원장 계정을 직접 생성했다.

React Router 설치:

```bash
npm install react-router-dom
```

생성한 주요 파일:

```text
src/pages/LoginPage.jsx
src/pages/DashboardPage.jsx
```

로그인 성공 시:

```text
/login
→ /dashboard
```

로 이동하도록 구현했다.

실제 Supabase 계정으로 로그인에 성공하는 것을 확인했다.

---

## 8. Protected Route 구현

로그인하지 않은 사용자가 `/dashboard` 주소를 직접 입력하더라도 접근할 수 없도록 보호 라우트를 구현했다.

생성한 파일:

```text
src/contexts/AuthContext.jsx
src/components/ProtectedRoute.jsx
```

동작:

```text
로그인 안 함
→ /dashboard 접근
→ /login 자동 이동
```

시크릿 창에서 직접 `/dashboard`에 접근해 `/login`으로 이동하는 것을 확인했다.

---

## 9. 원장 / 선생님 권한 구분

`profiles` 테이블을 생성해 로그인 사용자의 역할을 관리하도록 했다.

역할:

```text
admin   = 원장
teacher = 선생님
```

테스트 계정을 `admin`으로 등록했다.

React의 `AuthContext`에서 로그인 사용자의 `profiles` 정보를 불러와 대시보드에 다음 정보가 정상적으로 출력되는 것을 확인했다.

```text
이름: 원장
권한: 원장
이메일: 로그인 이메일
```

원장 계정일 경우 `원장 관리` 영역이 표시되도록 구성했다.

---

# 10. Supabase 데이터베이스 구조

SQL Editor의 쿼리는 이름을 붙여 관리하기로 했다.

현재까지 만든 쿼리는 다음과 같다.

## 01_create_profiles

사용자 프로필 및 권한 정보를 저장한다.

주요 컬럼:

```text
id
full_name
role
created_at
```

---

## 02_insert_admin_profile

테스트용 로그인 계정을 원장(`admin`) 프로필로 등록하기 위한 쿼리이다.

실제 사용자 UID가 사용되므로 GitHub에 SQL 파일을 정리할 때는 실제 UID를 제거하거나 예시 값으로 변경할 예정이다.

---

## 03_create_students

학생 기본 정보를 관리한다.

주요 컬럼:

```text
id
name
school
grade
status
created_at
```

학생은 삭제하지 않고 상태로 관리한다.

```text
active   = 재원
inactive = 퇴원
```

---

## 04_create_class_schedules

학생별 수업 요일과 시간을 관리한다.

한 학생이 요일마다 서로 다른 수업시간을 가질 수 있도록 별도 테이블로 구성했다.

예시:

```text
화 19:00 - 22:00
목 16:30 - 19:30
금 20:00 - 22:00
```

수업시간 변경 시 과거 기록을 유지하기 위해 다음 컬럼을 사용한다.

```text
valid_from
valid_to
```

---

## 05_create_teacher_students

학생과 선생님의 담당 관계를 관리한다.

한 학생을 여러 선생님이 담당할 수 있도록 다대다 관계로 구성했다.

과거 담당 이력도 유지하기 위해 다음 컬럼을 사용한다.

```text
valid_from
valid_to
```

---

## 06_create_student_contacts

학생 전화번호와 학부모 연락처를 별도 테이블로 분리했다.

접근 권한:

```text
원장
→ 모든 학생 연락처 확인 가능

현재 담당 선생님
→ 담당 학생 연락처 확인 가능

담당이 아닌 선생님
→ 연락처 확인 불가
```

RLS 정책을 이용해 접근을 제한한다.

---

## 07_create_student_enrollments

학생의 재원 / 퇴원 / 재등록 이력을 관리한다.

예시:

```text
1차 재원
2026-03-02 ~ 2026-08-31

2차 재원
2026-11-10 ~ 현재
```

퇴원한 학생을 다시 등록할 경우 새로운 재원 기록을 생성한다.

---

## 08_add_teacher_to_class_schedules

수업 요일/시간별 담당 선생님을 지정할 수 있도록 `class_schedules` 테이블에 `teacher_id`를 추가했다.

이를 통해 다음 구조가 가능하다.

```text
학생1

화 19:00 - 22:00 → 김선생님
목 16:30 - 19:30 → 이선생님
금 20:00 - 22:00 → 김선생님
```

---

## 09_create_attendance

학생 출석 기록을 관리한다.

상태:

```text
present   = 등교
deferred  = 유예등교
absent    = 결석
completed = 하원 완료
```

시간 기록:

```text
check_in_at
check_out_at
```

오늘 담당 선생님 또는 원장만 출석 정보를 등록/수정할 수 있도록 RLS 정책을 구성했다.

---

## 10_create_student_daily_records

학생의 날짜별 수업 기록을 관리한다.

관리 정보:

```text
숙제 상태
지각 여부
수업 메모
숙제 메모
```

숙제 상태:

```text
none      = 숙제 없음
done      = 완료
partial   = 일부 완료
not_done  = 미완료
```

---

## 11_create_student_books

학생별 교재 이력을 관리한다.

상태:

```text
planned = 앞으로 사용할 책
current = 현재 사용 중인 책
past    = 과거에 사용한 책
```

교재를 삭제하지 않고 상태를 변경해 과거 교재 기록을 보존한다.

---

## 12_create_student_memos

학생별 메모를 관리한다.

메모 종류:

```text
personal = 개인 메모
shared   = 공용 메모
```

개인 메모:

- 작성자와 원장만 확인 가능

공용 메모:

- 로그인한 선생님들이 함께 확인 가능

---

## 13_create_calendar_memos

캘린더의 날짜별 메모를 관리한다.

예시:

```text
9월 15일
학생2 수행 준비
```

특정 학생과 연결할 수도 있고, 학생 없이 학원 전체 메모로 등록할 수도 있다.

해당 날짜가 되면 대시보드의 메모 영역에도 표시할 예정이다.

---

## 14_create_events

일반 일정을 관리한다.

지원 예정 형태:

```text
하루 일정
기간 일정
시간이 있는 일정
특정 학생 일정
학원 전체 일정
```

예시:

```text
9/20 18:00 - 19:00
학부모 상담
```

---

## 15_create_exam_schedules

학교별 시험 일정을 관리하기 위해 설계한 쿼리이다.

관리 예정 정보:

```text
학교
학년
시험명
시험기간
시험 날짜
과목
메모
```

예시:

```text
관양중학교
3학년
2학기 중간고사

시험기간
9/21 ~ 9/23

9/21 수학
9/22 영어
9/23 과학
```

※ 현재 진행 기록 작성 시점 기준으로 `15_create_exam_schedules`는 SQL을 준비한 단계이며, 실제 Supabase 실행 여부는 다음 작업 시작 시 확인한다.

---

# 11. 현재 프로젝트 진행 상태

현재까지 완료된 주요 작업:

```text
React 프로젝트 생성
↓
GitHub 독립 Repository 구성
↓
Supabase 프로젝트 생성
↓
React ↔ Supabase 연결
↓
Supabase Auth 로그인
↓
Protected Route
↓
AuthContext
↓
원장 / 선생님 권한 구분
↓
학생 관리 DB 구조
↓
담당 선생님 DB 구조
↓
요일별 수업시간 DB 구조
↓
연락처 권한 DB 구조
↓
재원 / 퇴원 이력
↓
출석 기록
↓
수업 기록
↓
교재 기록
↓
학생 메모
↓
날짜별 메모
↓
일반 일정
↓
시험 일정 구조 설계
```

현재 전체 프로젝트 진행률은 약 **30~35%** 정도로 보고 있다.

DB와 인증 구조는 상당 부분 완성되었지만, 실제 사용자 화면과 CRUD UI 구현이 아직 많이 남아 있다.

---

# 12. 다음 작업 예정

다음 작업은 SQL 중심의 데이터베이스 설계 단계에서 벗어나 실제 화면 구현으로 넘어갈 예정이다.

우선순위:

```text
1. 15_create_exam_schedules 실행 여부 확인
2. 원장 관리 화면 구현
3. 학생 등록 기능 구현
4. 학생 정보 수정
5. 요일별 수업시간 입력
6. 담당 선생님 배정
7. 퇴원 처리 / 퇴원 학생 목록
8. 재등록
9. 메인 대시보드
10. 오늘 담당 학생 출석 체크
11. 학생 상세 페이지
12. 교재 / 수업기록 / 메모 UI
13. 캘린더 / 일정 / 시험 일정 UI
14. 로그인 전 랜딩 페이지
15. 공통 컴포넌트 및 Loading / Error / Empty State
16. 배포
17. 독립 프로젝트 README 작성
18. Codyssey B1-2 제출용 README 작성
```

---

# 13. 최종 프로젝트 방향

이번 프로젝트는 단순한 Codyssey 과제 제출용 결과물이 아니라, 이후에도 확장할 수 있는 **학원 학생 관리 웹서비스 포트폴리오**로 완성하는 것을 목표로 한다.

Codyssey 과제 폴더와 실제 개발 프로젝트는 분리하여 관리한다.

```text
codyssey/
└── B1/
    └── B1-2/
        ├── mission.md
        ├── process.md
        └── README.md

academy-student-manager/
├── src/
├── public/
├── package.json
├── README.md
└── ...
```

`mission.md`는 과제 원문을 유지하고, `process.md`에는 실제 개발 과정을 기록한다.

최종 구현 완료 후 `README.md`에는 B1-2 평가 요구사항과 실제 구현 결과를 연결하여 정리할 예정이다.


# Academy Student Manager 개발 진행 기록

> 프로젝트명: 학원 학생 관리 시스템 (academy-student-manager)  
> 저장소: https://github.com/dldma/academy-student-manager  
> 작성 기준일: 2026-09-13

## 1. 프로젝트 목적

학원에서 학생 정보, 수업 일정, 출결, 수업 기록, 교재, 메모, 학원 일정, 시험 일정을 한 화면에서 관리할 수 있는 웹 기반 학생 관리 시스템을 구현한다.

단순 학생 목록이 아니라 실제 학원 운영에서 바로 사용할 수 있도록 다음 흐름을 중심으로 구성했다.

- 로그인 및 권한 구분
- 학생 등록/수정/퇴원/재등록
- 학생별 수업시간 및 담당 교사 관리
- 오늘 출석 처리
- 학생별 수업 기록 관리
- 교재 및 메모 관리
- 월간 캘린더 기반 메모/일정 관리
- 학교별 시험 일정 등록 및 달력 표시
- 원장 전용 관리 화면

## 2. 사용 기술

### Frontend
- React
- Vite
- React Router
- JavaScript
- CSS

### Backend / Database
- Supabase
- Supabase Authentication
- PostgreSQL
- Row Level Security 기반 접근 제어
- PostgreSQL RPC 함수

### 협업 / 배포
- Git
- GitHub
- Vercel 배포 준비

## 3. 프로젝트 구조

```text
academy-student-manager/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ AdminRoute.jsx
│  │  ├─ AppHeader.jsx
│  │  ├─ CalendarPanel.jsx
│  │  ├─ EmptyState.jsx
│  │  ├─ ErrorState.jsx
│  │  ├─ ExamSchedulePanel.jsx
│  │  ├─ LoadingState.jsx
│  │  ├─ ProtectedRoute.jsx
│  │  ├─ StudentBookManager.jsx
│  │  ├─ StudentMemoManager.jsx
│  │  ├─ StudentRecordCalendar.jsx
│  │  └─ TodayMemoPanel.jsx
│  ├─ contexts/
│  │  └─ AuthContext.jsx
│  ├─ hooks/
│  │  ├─ useStudents.js
│  │  └─ useTodayAttendance.js
│  ├─ lib/
│  │  └─ supabase.js
│  ├─ pages/
│  │  ├─ LoginPage.jsx
│  │  ├─ DashboardPage.jsx
│  │  ├─ StudentDetailPage.jsx
│  │  ├─ AdminPage.jsx
│  │  ├─ AdminStudentsPage.jsx
│  │  ├─ AdminStudentNewPage.jsx
│  │  ├─ AdminStudentDetailPage.jsx
│  │  └─ NotFoundPage.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ process.md
```

## 4. Supabase 데이터 구조

주요 테이블은 다음과 같이 구성했다.

- `profiles`: 사용자 프로필 및 admin/teacher 권한
- `students`: 학생 기본 정보
- `student_contacts`: 학생/학부모 연락처
- `teacher_students`: 학생과 담당 교사 연결
- `class_schedules`: 학생 수업시간
- `student_enrollments`: 재원 이력
- `attendance`: 출결 기록
- `student_daily_records`: 날짜별 수업 기록
- `student_books`: 학생 교재 관리
- `student_memos`: 개인/공용 메모
- `calendar_memos`: 캘린더 메모
- `events`: 일반 일정
- `exam_schedules`: 학교/학년별 시험 일정

시험 일정은 학교, 학년, 시험명, 전체 시험기간, 학년별 시험일, 시험일 확정/보류 상태, 메모를 저장하도록 구성했다.

## 5. 주요 구현 기능

### 5-1. 로그인 / 권한

Supabase Authentication을 사용해 이메일/비밀번호 로그인을 구현했다.

로그인 후 사용자 프로필의 역할에 따라 일반 교사와 원장(admin)의 접근 범위를 구분한다.

- `ProtectedRoute`: 로그인 사용자만 접근
- `AdminRoute`: admin 사용자만 원장 관리 페이지 접근

### 5-2. 학생 관리

원장 관리 화면에서 다음 기능을 구현했다.

- 학생 등록
- 학생 기본 정보 수정
- 학생/학부모 전화번호 관리
- 담당 교사 확인
- 수업시간 추가
- 퇴원 처리
- 재등록 처리

학생 등록/수정/퇴원/재등록은 여러 테이블의 데이터가 함께 변경되므로 Supabase RPC를 사용해 데이터 정합성을 유지하도록 구성했다.

### 5-3. 대시보드

로그인 후 가장 먼저 사용하는 화면으로 다음 기능을 배치했다.

- 담당 학생 목록
- 학생 상세 페이지 이동
- 오늘 수업 및 출석 상태 확인
- 출석 / 유예등교 / 결석 / 하원 처리
- 오늘 메모
- 월간 캘린더
- 시험 일정 관리

대시보드 기본 동작은 2026-09-13 기준 실제 브라우저에서 점검했다.

### 5-4. 학생 상세 페이지

학생 이름을 선택하면 학생별 상세 페이지로 이동한다.

- 학생 프로필
- 현재 수업 일정
- 월간 수업 기록 달력
- 출석 상태
- 숙제 상태
- 지각 여부
- 수업 내용
- 숙제 내용
- 교재 관리
- 개인/공용 메모

개발 중 `StudentDetailPage.jsx`가 대시보드 코드로 잘못 교체되어 학생 상세 페이지가 열리지 않는 문제가 발생했으나 파일을 복구해 해결했다.

### 5-5. 월간 캘린더

휴대폰 캘린더처럼 월 전체를 한눈에 볼 수 있도록 월간 캘린더 UI를 구현했다.

캘린더에는 다음 데이터가 함께 표시된다.

- 메모
- 일반 일정
- 시험 일정

여러 날짜에 걸친 일정은 한 날짜에만 표시하지 않고 갤럭시 캘린더와 비슷하게 일정 막대가 다음 날짜까지 이어져 보이도록 수정했다.

### 5-6. 시험 일정

학교 시험 일정 관리 기능을 구현했다.

- 학교 입력
- 시험명 선택
- 전체 시험기간 입력
- 시험 대상 학년 선택
- 학년별 시험일 지정
- 시험일 미확정 시 `보류` 지정
- 시험 일정 수정
- 시험 일정 삭제
- 월간 달력에 시험기간 표시

시험 일정 등록/보류/수정/삭제 기능과 달력 표시까지 실제 화면에서 테스트했다.

## 6. 개발 중 주요 문제와 해결

### 학생 상세 페이지가 대시보드처럼 보이는 문제

URL은 `/students/:id`로 정상 변경됐지만 화면은 대시보드가 그대로 표시됐다.

확인 결과 `StudentDetailPage.jsx` 내용이 실수로 `DashboardPage` 코드로 덮어써진 상태였다. 학생 상세 페이지 코드를 복구해 해결했다.

### 시험 일정의 보류 학년이 저장되지 않는 것처럼 보인 문제

Frontend payload, Supabase RPC, DB constraint, trigger, 함수 overload를 순서대로 점검했다.

최종적으로 실제 화면에서 `보류` 학년이 정상 저장 및 표시되는 것을 확인했다.

### 시험기간이 첫 날짜에만 표시되는 문제

처음에는 시험 일정이 실제 시험일 한 칸에만 표시되어 전체 시험기간을 직관적으로 확인하기 어려웠다.

`CalendarPanel`을 수정해 시작일부터 종료일까지 이어지는 일정 막대로 표시하도록 변경했다.

### Windows → WSL 파일 복사 시 Zone.Identifier 생성

Windows에서 프로젝트 파일을 WSL로 덮어쓰는 과정에서 `*:Zone.Identifier` 파일이 Git에 함께 추가됐다.

불필요한 파일을 삭제한 뒤 `.gitignore`에 해당 패턴을 추가하고 Git 저장소를 정리했다.

## 7. Git 진행 상태

주요 기능 구현 후 GitHub `main` 브랜치로 push를 진행했다.

시험 일정 달력 연속 표시 기능 구현 커밋 후 불필요한 `Zone.Identifier` 파일도 제거했다.

향후에도 기능 단위로 커밋한 뒤 GitHub에 push하는 방식으로 관리한다.

## 8. 현재 확인된 상태

2026-09-13 기준:

- 로그인: 구현
- 권한 분리: 구현
- 대시보드: 브라우저 기본 점검 완료
- 학생 상세 이동: 정상
- 출석 관리: 구현
- 학생 수업 기록: 구현
- 교재 관리: 구현
- 학생 메모: 구현
- 월간 메모/일정: 구현
- 시험 일정 등록: 정상
- 시험 일정 보류: 정상
- 시험 일정 수정: 정상
- 시험 일정 삭제: 정상
- 시험기간 연속 달력 표시: 정상
- 원장 관리: 구현
- GitHub 연결 및 push: 완료
- 외부 접속용 배포: Vercel 연결 진행 예정

## 9. 배포 구성

Frontend는 Vite 기반 SPA이므로 Vercel 배포 시 React Router의 직접 URL 접근을 위해 `vercel.json`의 rewrite 설정을 사용한다.

배포 환경에는 로컬 `.env.local`에 있는 다음 환경 변수 이름을 동일하게 등록해야 한다.

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

환경 변수의 실제 값은 GitHub에 커밋하지 않는다.

GitHub 저장소와 Vercel을 연결하면 이후 `main` 브랜치에 push할 때마다 새로운 배포가 자동으로 생성되도록 구성할 수 있다.

## 10. 남은 최종 작업

- Vercel에서 GitHub 저장소 연결
- Vercel 환경 변수 등록
- Production 배포
- 외부 URL에서 로그인 및 주요 기능 확인
- 전체 기능 최종 회귀 테스트
- README를 프로젝트 내용에 맞게 최종 작성
- 필요 시 404 페이지 라우팅 연결


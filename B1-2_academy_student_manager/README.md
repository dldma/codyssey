# 학원 학생 관리 시스템

React 기반 SPA와 Supabase를 이용해 학원 원장과 선생님이 학생 정보, 출석, 수업 기록, 교재, 메모, 일정, 시험 일정을 관리할 수 있도록 만든 웹 서비스입니다.

Codyssey B1-2 미션의 핵심 요구사항인 **라우팅, 컴포넌트 분리, 상태 관리, 비동기 데이터 처리, CRUD, 폼 UX, 배포**를 실제 학원 운영 흐름에 맞춰 구현했습니다.

---

## 1. 배포 주소

### 서비스

```text
https://academy-student-manager.vercel.app
```

### GitHub Repository

```text
https://github.com/dldma/academy-student-manager
```

---

## 2. 프로젝트 주제

학원에서 학생을 관리할 때 필요한 기능을 하나의 웹 서비스로 통합했습니다.

주요 관리 대상은 다음과 같습니다.

```text
학생
출석
수업 기록
교재
메모
일반 일정
시험 일정
주간 예외 수업 일정
```

단순한 학생 명단 관리가 아니라 실제 학원 운영 과정에서 발생하는 다음 상황도 반영했습니다.

```text
퇴원 / 재등록
학생별 담당 선생님
요일별 서로 다른 수업시간
시험일 미확정 상태
여러 날짜에 걸친 시험기간
추석 / 학원 방학 등 특정 주의 수업 일정 변경
```

---

## 3. 사용 기술

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
- Row Level Security
- PostgreSQL RPC

### Deployment / Version Control

- Vercel
- Git
- GitHub

### Development

- VS Code
- WSL Ubuntu

---

## 4. 프로젝트 실행 방법

### Repository Clone

```bash
git clone https://github.com/dldma/academy-student-manager.git
cd academy-student-manager
```

### 패키지 설치

```bash
npm install
```

### 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성합니다.

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

실제 키 값은 GitHub에 업로드하지 않습니다.

### 개발 서버 실행

```bash
npm run dev
```

기본 개발 주소:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

---

## 5. 프로젝트 구조

```text
src/
├── components/
│   ├── AdminRoute.jsx
│   ├── AppHeader.jsx
│   ├── CalendarPanel.jsx
│   ├── EmptyState.jsx
│   ├── ErrorState.jsx
│   ├── ExamSchedulePanel.jsx
│   ├── LoadingState.jsx
│   ├── ProtectedRoute.jsx
│   ├── StudentBookManager.jsx
│   ├── StudentMemoManager.jsx
│   ├── StudentRecordCalendar.jsx
│   ├── TodayMemoPanel.jsx
│   └── WeekScheduleEditor.jsx
├── contexts/
│   └── AuthContext.jsx
├── hooks/
│   ├── useStudents.js
│   └── useTodayAttendance.js
├── lib/
│   └── supabase.js
├── pages/
│   ├── AdminPage.jsx
│   ├── AdminStudentDetailPage.jsx
│   ├── AdminStudentNewPage.jsx
│   ├── AdminStudentsPage.jsx
│   ├── DashboardPage.jsx
│   ├── LoginPage.jsx
│   ├── NotFoundPage.jsx
│   └── StudentDetailPage.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

페이지 단위 화면은 `pages`, 재사용 UI는 `components`, 데이터 조회 로직은 `hooks`, 외부 서비스 연결은 `lib`로 분리했습니다.

---

## 6. 주요 라우트

| Route | 설명 |
|---|---|
| `/` | 로그인 페이지로 이동 |
| `/login` | 로그인 |
| `/dashboard` | 메인 대시보드 |
| `/students/:id` | 학생 상세 |
| `/admin` | 원장 관리 |
| `/admin/students` | 학생 관리 목록 |
| `/admin/students/new` | 학생 등록 |
| `/admin/students/:id` | 학생 정보 및 수업 관리 |
| `*` | Not Found |

5개 이상의 SPA Route를 구성하고, 목록/상세/등록/관리 페이지를 분리했습니다.

---

## 7. 인증 및 권한 관리

Supabase Authentication을 이용해 이메일/비밀번호 로그인을 구현했습니다.

사용자 역할은 다음과 같습니다.

### admin

원장 계정입니다.

- 전체 학생 관리
- 학생 등록 및 수정
- 담당 선생님 배정
- 수업 일정 관리
- 퇴원 / 재등록
- 일반 선생님 기능 사용

### teacher

선생님 계정입니다.

- 학생 목록 조회
- 담당 학생 출석 관리
- 담당 학생 수업 기록 관리

### 보호 라우트

```text
ProtectedRoute
AdminRoute
```

를 이용하여 로그인 여부와 역할에 따라 접근 가능한 페이지를 제한합니다.

---

## 8. 학생 관리

원장 관리 화면에서 학생 데이터를 관리합니다.

지원 기능:

- 학생 등록
- 학생 목록 조회
- 학생 상세 조회
- 학생 기본정보 수정
- 학생 전화번호 관리
- 학부모 전화번호 관리
- 담당 선생님 배정
- 수업시간 등록
- 퇴원 처리
- 재등록

학생 데이터는 실제 삭제 대신 `active / inactive` 상태로 관리합니다.

```text
active   = 재원
inactive = 퇴원
```

과거 출석, 수업 기록, 교재, 메모 등의 이력을 보존하기 위해 학생 삭제 대신 **Soft Delete 방식**을 사용했습니다.

---

## 9. 출석 관리

로그인한 선생님이 오늘 담당하는 학생을 확인할 수 있습니다.

출석 상태:

```text
present   = 등교
deferred  = 유예등교
absent    = 결석
completed = 하원 완료
```

화면 표시:

```text
회색 = 출석 처리 전
초록 = 등교 / 유예등교
파랑 = 하원 완료
빨강 = 결석
```

사용자 이벤트에 따라 상태가 변경되고 즉시 UI가 다시 렌더링됩니다.

예:

```text
학생 선택
→ 등교 버튼 클릭
→ 출석 상태 변경
→ 학생 카드 색상 변경
→ 다시 선택
→ 하원 버튼 표시
```

---

## 10. 학생 상세 페이지

학생 목록에서 학생을 선택하면 다음 Route로 이동합니다.

```text
/students/:id
```

라우트 파라미터의 학생 ID를 이용해 Supabase에서 해당 학생 데이터를 조회합니다.

학생 상세에서는 다음 정보를 관리합니다.

- 학생 프로필
- 현재 수업 일정
- 월간 수업 기록
- 숙제 상태
- 지각 여부
- 수업 내용
- 숙제 내용
- 교재
- 개인 메모
- 공용 메모

---

## 11. 수업 기록

학생별 월간 달력에서 날짜를 선택하고 수업 내용을 기록할 수 있습니다.

기록 항목:

```text
출석 상태
숙제 상태
지각 여부
수업 내용
숙제 내용
```

숙제 상태:

```text
none
done
partial
not_done
```

날짜를 선택하면 해당 날짜의 데이터가 로딩되고, 수정 후 저장하면 화면이 갱신됩니다.

---

## 12. 교재 관리

학생별로 교재 상태를 관리합니다.

```text
planned = 앞으로 사용할 교재
current = 현재 사용 중인 교재
past    = 사용 완료 교재
```

교재 등록 및 상태 변경에 따라 각 목록의 렌더링 결과가 달라집니다.

---

## 13. 메모 관리

학생 메모는 다음 두 종류로 구분했습니다.

```text
personal = 개인 메모
shared   = 공용 메모
```

또한 `calendar_memos`를 이용해 특정 날짜 또는 학원 전체 메모를 기록할 수 있습니다.

---

## 14. 월간 캘린더

대시보드에 월간 캘린더를 구현했습니다.

표시 데이터:

- 날짜별 메모
- 일반 일정
- 시험 일정

지원 기능:

- 이전 달
- 다음 달
- 오늘
- 날짜 선택
- 메모 추가
- 일정 추가
- 기간 일정 표시

여러 날짜에 걸친 일정은 시작 날짜에만 표시하지 않고 달력에서 이어지는 막대 형태로 렌더링됩니다.

---

## 15. 시험 일정 CRUD

학교 시험 일정은 Supabase 원격 데이터로 관리합니다.

관리 정보:

```text
학교
시험명
전체 시험기간
대상 학년
학년별 시험일
시험일 상태
메모
```

시험일 상태:

```text
confirmed = 확정
pending   = 보류
```

지원 기능:

- 시험 일정 등록
- 시험 일정 조회
- 시험 일정 수정
- 시험 일정 삭제
- 시험일 보류
- 보류 해제 후 날짜 확정
- 시험기간 달력 표시

시험 일정은 실제 DELETE 흐름까지 구현되어 있으며 삭제 이후 목록을 다시 조회해 UI를 갱신합니다.

---

## 16. 특정 한 주 수업 일정 수정

추석, 공휴일, 학원 방학, 보강 등의 이유로 특정 주만 수업 일정이 달라질 수 있어 별도의 예외 일정 기능을 구현했습니다.

```text
[한 주 수정]
```

버튼을 누르면 해당 주의 수업이 요일별로 표시됩니다.

가능한 작업:

- 특정 요일 전체 수업 제거
- 개별 학생 제거
- 기존 학생 수업시간 변경
- 다른 요일에 학생 추가
- 추가 학생의 수업시간 지정
- 변경사항 저장

정규 수업시간 자체를 수정하지 않고 해당 날짜에만 변경사항을 적용합니다.

따라서 이번 주 수업을 변경해도 다음 주에는 원래 정규 시간표가 다시 적용됩니다.

---

## 17. React 상태 관리

React `state`를 이용해 다음 상태를 관리합니다.

### 폼 입력 상태

```text
학생 이름
학교
학년
연락처
수업 요일
시작시간
종료시간
시험 일정
메모
```

입력값은 Controlled Input 방식으로 관리합니다.

### 데이터 상태

```text
학생 목록
학생 상세
출석
교재
메모
일정
시험 일정
주간 수업 일정
```

### UI 상태

```text
loading
error
empty
submitting
modal open / close
selected item
```

---

## 18. 커스텀 훅

데이터 조회 로직 중 일부를 Custom Hook으로 분리했습니다.

### useStudents

학생 목록 조회를 담당합니다.

```text
Supabase 요청
→ Loading
→ Success / Error
→ 학생 목록 렌더링
```

### useTodayAttendance

오늘 수업 대상과 출석 상태 조회를 담당합니다.

주간 예외 일정까지 반영하여 최종적으로 오늘 표시할 학생 목록을 계산합니다.

---

## 19. 로딩 / 에러 / 빈 상태

페이지마다 별도로 같은 UI를 작성하지 않고 재사용 컴포넌트로 분리했습니다.

```text
LoadingState
ErrorState
EmptyState
```

비동기 요청 상태에 따라 다음과 같이 렌더링합니다.

```text
요청 시작
→ LoadingState

성공
→ 실제 데이터 UI

실패
→ ErrorState

데이터 없음
→ EmptyState
```

---

## 20. React 이벤트와 렌더링 변화

프로젝트에서 사용자 이벤트와 렌더링 변화가 연결되는 대표적인 예시는 다음과 같습니다.

### 출석

```text
등교 클릭
→ attendance 상태 변경
→ 카드 색상 및 버튼 변경
```

### 시험 일정

```text
보류 체크
→ 시험일 상태 변경
→ 날짜 입력 상태와 표시 내용 변경
```

### 한 주 수정

```text
요일 전체 삭제
→ 해당 요일 학생 목록 상태 변경
→ 화면에서 학생 카드 즉시 제거
```

### 교재

```text
교재 상태 변경
→ 교재 데이터 갱신
→ planned / current / past 목록 재렌더링
```

---

## 21. 폼 UX

등록 및 수정 화면에서 입력값을 React state로 관리합니다.

폼 처리 과정:

```text
입력
→ 필수값 확인
→ 제출
→ 제출 중 상태 표시
→ Supabase 요청
→ 성공 또는 실패 UI 반영
```

요청 중에는 중복 제출을 방지하기 위해 버튼을 비활성화하거나 `처리 중...`, `등록 중...` 등의 상태를 표시합니다.

요청 실패 시에는 오류 내용을 화면에 표시합니다.

---

## 22. 재사용 컴포넌트

프로젝트에서 사용한 주요 재사용 컴포넌트는 다음과 같습니다.

```text
AppHeader
ProtectedRoute
AdminRoute
LoadingState
ErrorState
EmptyState
TodayMemoPanel
CalendarPanel
ExamSchedulePanel
StudentRecordCalendar
StudentBookManager
StudentMemoManager
WeekScheduleEditor
```

페이지 전체를 하나의 컴포넌트에 작성하지 않고 기능별 UI와 데이터 흐름을 나눴습니다.

---

## 23. Context 전역 상태

Bonus 요구사항 중 전역 상태 관리를 적용했습니다.

`AuthContext`에서 다음 상태를 관리합니다.

```text
session
user
profile
isLoading
```

로그인 사용자 정보를 여러 페이지에서 공통으로 사용할 수 있도록 Context를 사용했습니다.

---

## 24. Not Found

존재하지 않는 주소 접근 시 `NotFoundPage`를 표시합니다.

```jsx
<Route
  path="*"
  element={<NotFoundPage />}
/>
```

예:

```text
/abc
```

처럼 존재하지 않는 Route로 이동해도 빈 화면 대신 404 페이지가 표시됩니다.

---

## 25. 배포

GitHub Repository와 Vercel을 연결해 Production 배포했습니다.

```text
https://academy-student-manager.vercel.app
```

Vercel 환경 변수:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
```

React Router SPA에서 직접 URL 접근이 가능하도록 Vercel rewrite 설정을 사용했습니다.

GitHub `main` 브랜치에 push하면 Vercel이 자동으로 새로운 버전을 배포합니다.

---

## 26. B1-2 미션 요구사항 대응

| 미션 요구사항 | 구현 내용 |
|---|---|
| React 기반 프로젝트 | Vite + React |
| 최소 5개 Route | 8개 이상의 주요 Route |
| 목록 / 상세 Route | 학생 목록 + `/students/:id` |
| Not Found | `NotFoundPage` |
| 공통 Header / Navigation | `AppHeader` |
| 8개 이상 재사용 컴포넌트 | 13개 이상의 주요 컴포넌트 |
| pages / components / hooks 또는 lib 분리 | 적용 |
| Controlled Input | 학생 / 일정 / 시험 / 메모 등의 입력 폼 |
| 목록 / 상세 데이터 상태 | React state + Supabase |
| Loading / Error / Empty | 공통 컴포넌트 적용 |
| Custom Hook | `useStudents`, `useTodayAttendance` |
| Supabase 원격 데이터 | 적용 |
| 등록 | 학생 / 일정 / 시험 / 메모 등 |
| 조회 | 학생 목록 / 상세 / 일정 등 |
| 수정 | 학생 / 수업 / 시험 일정 등 |
| 삭제 | 시험 일정 삭제 + 학생은 Soft Delete |
| 제출 중 상태 | 버튼 disabled / 처리 중 UI |
| React 이벤트 → 렌더링 변화 | 출석, 시험, 교재, 주간 일정 등 |
| 외부 배포 | Vercel |
| GitHub 소스 공유 | 완료 |
| README 실행 방법 | 작성 |
| 전역 상태 Bonus | `AuthContext` |
| 인증 Bonus | Supabase Auth + Protected Route |

---

## 27. 주요 데이터베이스 테이블

```text
profiles
students
student_contacts
teacher_students
student_enrollments
class_schedules
attendance
student_daily_records
student_books
student_memos
calendar_memos
events
exam_schedules
```

여러 테이블을 함께 변경해야 하는 작업은 PostgreSQL RPC를 이용했습니다.

예:

```text
register_student
add_student_schedule
update_student_info
withdraw_student
reenroll_student
set_attendance_status
save_exam_schedule_group
delete_exam_schedule_group
```

---

## 28. 보안

환경 변수와 비밀 키는 GitHub에 업로드하지 않습니다.

```text
.env.local
Supabase Secret Key
service_role Key
```

Frontend에는 Supabase Publishable Key만 환경변수로 사용하고, 관리자용 Secret Key 또는 `service_role` Key는 브라우저 코드에 포함하지 않습니다.

---

## 29. 구현 상태

현재 확인된 주요 기능:

- [x] 로그인 / 로그아웃
- [x] Supabase Authentication
- [x] Protected Route
- [x] admin / teacher 역할 구분
- [x] 학생 목록
- [x] 학생 상세
- [x] 학생 등록
- [x] 학생 정보 수정
- [x] 퇴원 / 재등록
- [x] 담당 선생님
- [x] 정규 수업 일정
- [x] 오늘 출석
- [x] 등교 / 유예등교 / 결석 / 하원
- [x] 학생별 수업 기록
- [x] 숙제 / 지각 기록
- [x] 교재 관리
- [x] 개인 / 공용 메모
- [x] 날짜별 메모
- [x] 일반 일정
- [x] 월간 캘린더
- [x] 기간 일정 연속 표시
- [x] 시험 일정 등록
- [x] 시험 일정 보류
- [x] 시험 일정 수정
- [x] 시험 일정 삭제
- [x] 시험기간 연속 표시
- [x] 특정 한 주 수업 일정 변경
- [x] 404 페이지
- [x] GitHub 연결
- [x] Vercel Production 배포

---

## 30. 프로젝트 결과

처음에는 React SPA 구조와 상태 관리 학습을 위한 Codyssey B1-2 미션으로 시작했습니다.

개발 과정에서 실제 학원 운영에 필요한 기능을 추가하면서 다음과 같은 서비스로 발전시켰습니다.

```text
로그인
→ 학생 관리
→ 담당 선생님 / 수업 일정
→ 출석 관리
→ 수업 기록
→ 교재 / 메모
→ 캘린더
→ 시험 일정
→ 특정 주 예외 수업 일정
```

이 프로젝트를 통해 React의 다음 흐름을 직접 구현했습니다.

```text
사용자 이벤트
→ state 변경
→ 비동기 데이터 요청
→ 성공 / 실패 상태 처리
→ 컴포넌트 리렌더링
```

또한 React Router를 이용한 SPA 라우팅, 재사용 컴포넌트 분리, Custom Hook, Context, Supabase Authentication 및 Database 연동, Git/GitHub 버전 관리, Vercel Production 배포까지 하나의 프로젝트에서 경험했습니다.

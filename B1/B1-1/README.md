# B1-1 Responsive Portfolio

HTML, CSS, JavaScript를 사용하여 제작한 반응형 개인 Portfolio 웹사이트입니다.

정보전기전자공학 전공자로서 학습하고 있는 기술과 GitHub Repository를 소개하며,
다크 모드, 반응형 Navigation, Form Validation, GitHub API 연동 등
JavaScript를 활용한 다양한 사용자 인터랙션을 구현했습니다.


## 프로젝트 목표

이번 프로젝트에서는 별도의 JavaScript Framework를 사용하지 않고
순수 HTML, CSS, JavaScript만을 사용하여 반응형 웹페이지를 구현하는 것을 목표로 했습니다.

특히 다음 내용을 직접 구현하며 학습했습니다.

- Semantic HTML 구조 작성
- Flexbox와 Grid를 활용한 Layout 구성
- Mobile First Responsive Design
- JavaScript DOM 조작
- Event 처리
- LocalStorage 활용
- IntersectionObserver 활용
- Form Validation
- Fetch API와 async/await
- GitHub REST API 연동


## 사용 기술

### Frontend

- HTML5
- CSS3
- JavaScript ES6+

### API

- GitHub REST API

### Development Tools

- Visual Studio Code
- Live Server
- Git
- GitHub


## 주요 기능

### 1. Responsive Navigation

화면 크기에 따라 Navigation 형태가 변경되도록 구현했습니다.

- Mobile 환경에서는 Hamburger Menu 표시
- 768px 이상에서는 일반 Navigation Menu 표시
- 1024px 이상에서는 Desktop Layout에 맞게 간격 조정


### 2. Smooth Scroll

Navigation Menu와 Hero Button을 클릭하면
해당 Section으로 부드럽게 이동하도록 구현했습니다.


### 3. Dark Mode

Dark Mode Button을 통해 Light / Dark Theme를 변경할 수 있습니다.

선택한 Theme 정보는 `localStorage`에 저장하여
페이지를 새로고침해도 이전 Theme가 유지되도록 구현했습니다.


### 4. Scroll To Top

사용자가 일정 거리 이상 Scroll하면
화면 오른쪽 아래에 Scroll To Top Button이 나타납니다.

Button을 클릭하면 페이지 최상단으로 부드럽게 이동합니다.


### 5. Scroll Animation

`IntersectionObserver`를 사용하여
각 Section이 화면에 일정 부분 들어오면 나타나는 Animation을 구현했습니다.

Observer의 threshold는 다음과 같이 설정했습니다.

```javascript
threshold: 0.2
```


### 6. Contact Form Validation

Contact Form에는 다음 입력 항목이 있습니다.

- 이름
- 이메일
- 메시지

JavaScript를 이용하여 다음 내용을 검증합니다.

- 빈 입력값 확인
- 이메일 형식 확인
- 입력 오류 메시지 표시
- 정상 입력 시 성공 메시지 표시


### 7. GitHub API 연동

GitHub REST API를 사용하여
GitHub에 공개되어 있는 Repository 목록을 자동으로 불러옵니다.

사용한 API Endpoint는 다음과 같습니다.

```text
https://api.github.com/users/dldma/repos
```

Repository 데이터에서 다음 정보를 가져와 Project Card로 출력합니다.

- Repository 이름
- Repository 설명
- 사용 언어
- Star 개수
- Repository URL


### 8. API 상태 처리

API 요청 상태에 따라 서로 다른 화면을 표시하도록 구현했습니다.

- Loading
- Success
- Error
- Empty

API 요청에 실패한 경우
사용자가 다시 요청할 수 있도록 `다시 시도` Button을 제공합니다.


### 9. Bonus Features

기본 미션 구현 후 추가 기능을 구현했습니다.

#### 시스템 Dark Mode 자동 감지

사용자가 Theme을 직접 선택한 기록이 없는 경우
운영체제의 `prefers-color-scheme` 설정을 확인하여
초기 Light / Dark Theme을 자동으로 결정합니다.

사용자가 직접 선택한 Theme은 `localStorage`에 저장되며
시스템 설정보다 우선 적용됩니다.


#### Hero Typing Effect

첫 화면의 인사말에 Typing Effect를 적용하여
문장이 한 글자씩 출력되도록 구현했습니다.

CSS Animation을 이용하여 Typing Cursor도 함께 표시됩니다.


#### GitHub Repository Language Filter

GitHub API로 가져온 Repository를
사용 언어에 따라 필터링할 수 있습니다.

Repository 데이터를 분석하여 실제 사용되고 있는 Language의
Filter Button을 자동으로 생성합니다.

예:

```text
All
Jupyter Notebook
Python
```

`All`을 선택하면 전체 Repository가 표시되고,
특정 Language를 선택하면 해당 Repository만 표시됩니다.

![GitHub Repository Filter](images/project-filter.png)


#### Contact Form 실제 전송

기존 JavaScript Form Validation에
Formspree를 추가로 연동했습니다.

사용자가 Portfolio에서 작성한

- 이름
- 이메일
- 메시지

정보를 실제로 전송할 수 있습니다.

JavaScript의 `FormData`, `fetch()`, `async/await`를 사용하여
페이지 이동 없이 Formspree API로 데이터를 전송합니다.

전송에 성공하면 다음 메시지가 표시됩니다.

```text
문의가 정상적으로 전송되었습니다.
```

전송에 실패하면 사용자에게 다시 시도할 수 있도록
오류 메시지를 표시합니다.


### Formspree Integration

Portfolio Contact Form 전송을 위해 Formspree Form Endpoint를 생성했습니다.

![Formspree 설정 화면](images/formspree-setting.png)

HTML Form의 `action`에 Formspree Endpoint를 연결하고
`POST` Method를 사용했습니다.

```html
<form
    id="contact-form"
    action="https://formspree.io/f/xeaqrjlp"
    method="POST">
```

JavaScript에서는 `FormData`를 생성한 후
`fetch()`를 사용하여 데이터를 전송합니다.

```javascript
const formData = new FormData(contactForm);

const response = await fetch(
    contactForm.action,
    {
        method: contactForm.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }
);
```

실제 전송 테스트 후 Portfolio 화면에서 성공 메시지를 확인하고,
Formspree Dashboard에서도 제출된 문의가 정상적으로 기록되는 것을 확인했습니다.

![Contact Form 전송 성공](images/contact-success.png)


## 프로젝트 구조

```text
B1-1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── profile.jpg
├── mission.md
├── process.md
└── README.md
```


## 구현 과정

프로젝트의 단계별 구현 과정은 `process.md`에 정리했습니다.

HTML 구조 작성부터 CSS Styling,
JavaScript Interaction 및 GitHub API 연동까지
개발 과정을 순서대로 기록했습니다.


## 실행 방법

Repository를 Clone합니다.

```bash
git clone https://github.com/dldma/codyssey.git
```

B1-1 Directory로 이동합니다.

```bash
cd codyssey/B1/B1-1
```

VS Code에서 `index.html` 파일을 연 후
Live Server를 실행하면 Portfolio를 확인할 수 있습니다.


## 배포

GitHub Pages를 이용하여 배포했습니다.

배포 URL:

https://dldma.github.io/codyssey/B1/B1-1/


## Screenshots

### Desktop

![Desktop](images/desktop.png)


### Mobile

![Mobile](images/mobile.png)


### Dark Mode

![Dark Mode](images/dark-mode.png)


### GitHub Repository Filter

![GitHub Repository Filter](images/project-filter.png)


### Contact Form & Formspree

#### Formspree 설정

![Formspree 설정 화면](images/formspree-setting.png)


#### 문의 전송 성공

![Contact Form 전송 성공](images/contact-success.png)


## 개발 과정에서 학습한 내용

이번 프로젝트를 통해 HTML, CSS, JavaScript가 서로 어떤 방식으로 연결되는지 확인할 수 있었습니다.

특히 JavaScript를 사용하여 DOM 요소를 선택하고,
Event에 따라 Class나 화면 내용을 변경하는 과정을 직접 구현했습니다.

또한 GitHub API를 사용하면서
`fetch`, `async/await`, `try/catch`를 이용한 비동기 데이터 처리 방법과
외부 데이터를 웹페이지에 표시하는 과정을 학습했습니다.


## Author

이은지

GitHub: [dldma](https://github.com/dldma)
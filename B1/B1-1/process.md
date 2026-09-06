# B1-1 개발 과정

## 1. 프로젝트 준비

Codyssey GitHub 저장소를 로컬 환경에 가져온 뒤 `B1-1` 프로젝트를 시작했다.

프로젝트 위치는 다음과 같이 구성했다.

```text
codyssey/
└── B1/
    └── B1-1/
```

B1-1 폴더 안에서 HTML, CSS, JavaScript 파일의 역할을 분리하기 위해 다음과 같은 기본 구조를 만들었다.

```text
B1-1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

사용한 명령어는 다음과 같다.

```bash
mkdir css js images
touch index.html css/style.css js/script.js
```

각 파일과 폴더의 역할은 다음과 같다.

- `index.html` : 웹페이지의 구조와 내용
- `css/style.css` : 웹페이지의 디자인과 레이아웃
- `js/script.js` : 사용자 이벤트와 동적인 기능
- `images/` : 프로필 이미지 등 이미지 파일 저장

---

## 2. HTML 기본 구조 작성

먼저 `index.html`에 HTML 문서의 기본 구조를 작성했다.

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <!-- 한글 문자 인코딩 설정 -->
    <meta charset="UTF-8">

    <!-- 모바일 화면 크기에 맞춰 반응형으로 표시 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- 브라우저 탭에 표시되는 제목 -->
    <title>B1-1 Portfolio</title>

    <!-- 외부 CSS 파일 연결 -->
    <link rel="stylesheet" href="css/style.css">

    <!-- 외부 JavaScript 파일 연결 -->
    <script src="js/script.js" defer></script>
</head>

<body>

</body>

</html>
```

### `<!DOCTYPE html>`

현재 문서가 HTML5 문서임을 브라우저에게 알려준다.

### `<html lang="ko">`

웹페이지의 기본 언어가 한국어임을 나타낸다.

### `<meta charset="UTF-8">`

한글 등 다양한 문자가 정상적으로 표시될 수 있도록 문자 인코딩을 UTF-8로 설정한다.

### Viewport 설정

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

모바일과 태블릿에서도 화면 크기에 맞게 웹페이지가 표시되도록 설정한다.

- `width=device-width`
  - 웹페이지의 너비를 실제 기기의 화면 너비에 맞춘다.
- `initial-scale=1.0`
  - 페이지를 처음 열었을 때 확대 비율을 100%로 설정한다.

반응형 웹페이지를 구현하기 위해 필요한 기본 설정이다.

### CSS 연결

```html
<link rel="stylesheet" href="css/style.css">
```

HTML과 외부 CSS 파일을 연결한다.

### JavaScript 연결

```html
<script src="js/script.js" defer></script>
```

HTML과 외부 JavaScript 파일을 연결한다.

`defer`를 사용하여 HTML 문서를 먼저 읽은 뒤 JavaScript가 실행되도록 설정했다.

---

## 3. 시맨틱 HTML 구조 작성

페이지 전체를 `div`만으로 구성하지 않고 의미가 있는 시맨틱 태그를 사용했다.

```html
<body>

    <!-- 페이지 상단 영역 -->
    <header>
        <nav>
        </nav>
    </header>

    <!-- 페이지 주요 내용 -->
    <main>

        <section id="hero">
        </section>

        <section id="about">
        </section>

        <section id="skills">
        </section>

        <section id="projects">
        </section>

        <section id="contact">
        </section>

    </main>

    <!-- 페이지 하단 영역 -->
    <footer>
    </footer>

</body>
```

사용한 주요 시맨틱 태그는 다음과 같다.

- `<header>` : 페이지 상단 영역
- `<nav>` : 페이지 이동 메뉴
- `<main>` : 페이지의 주요 콘텐츠
- `<section>` : 주제별 콘텐츠 영역
- `<article>` : 하나의 독립적인 콘텐츠
- `<footer>` : 페이지 하단 영역

시맨틱 태그를 사용하면 코드만 보아도 각 영역의 역할을 쉽게 파악할 수 있다.

---

## 4. Header 및 Navigation 작성

페이지 상단에 포트폴리오 이름과 각 섹션으로 이동할 수 있는 메뉴를 작성했다.

```html
<header>
    <nav>

        <!-- 사이트 로고 -->
        <a href="#hero">My Portfolio</a>

        <!-- 네비게이션 메뉴 -->
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </nav>
</header>
```

`<a>` 태그의 `href`와 각 `section`의 `id`를 연결했다.

예를 들어 다음 메뉴를 클릭하면

```html
<a href="#about">About</a>
```

다음 영역으로 이동한다.

```html
<section id="about">
```

메뉴 항목들은 순서가 없는 목록이기 때문에 `<ul>`과 `<li>`를 사용했다.

---

## 5. Hero Section 작성

웹사이트에 처음 들어왔을 때 가장 먼저 보이는 Hero 영역을 작성했다.

```html
<section id="hero">

    <!-- 메인 인사말 -->
    <h1>안녕하세요, 이은지입니다.</h1>

    <!-- 간단한 자기소개 -->
    <p>
        정보전기전자공학을 전공하고 있으며,
        임베디드 개발자를 목표로 공부하고 있습니다.
    </p>

    <!-- 주요 이동 버튼 -->
    <a href="#projects">프로젝트 보기</a>
    <a href="#contact">문의하기</a>

</section>
```

사용한 주요 요소는 다음과 같다.

- `<h1>` : 페이지의 대표 제목
- `<p>` : 간단한 자기소개
- `<a>` : Projects와 Contact 영역으로 이동하는 링크

`프로젝트 보기`, `문의하기`처럼 사용자에게 특정 행동을 유도하는 요소를 **CTA(Call To Action)**라고 한다.

---

## 6. About Section 작성

자기소개와 프로필 이미지를 보여주는 About 영역을 작성했다.

```html
<section id="about">

    <!-- 섹션 제목 -->
    <h2>About Me</h2>

    <!-- 프로필 이미지 -->
    <img src="images/profile.jpg" alt="이은지 프로필 사진">

    <!-- 자기소개 -->
    <p>
        안녕하세요. 정보전기전자공학을 전공하고 있는 이은지입니다.
        임베디드 시스템과 전자회로에 관심이 있으며,
        다양한 프로젝트를 통해 개발 경험을 쌓고 있습니다.
    </p>

</section>
```

프로필 이미지는 `images` 폴더에 저장했다.

```text
images/
└── profile.jpg
```

이미지에는 해당 이미지의 의미를 설명할 수 있도록 `alt` 속성을 작성했다.

```html
alt="이은지 프로필 사진"
```

---

## 7. Skills Section 작성

Skills 영역은 크게 **Software**와 **Hardware & Electronics**로 나누어 작성했다.

### Software

```html
<h3>Software</h3>

<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>C</li>
    <li>Python</li>
    <li>Git</li>
</ul>
```

### Hardware & Electronics

하드웨어 관련 기술은 비슷한 기술끼리 묶고 간단한 설명을 함께 작성했다.

```html
<h3>Hardware & Electronics</h3>

<ul>

    <li>
        <strong>Embedded & Microcontroller</strong><br>
        ATmega128A를 활용한 GPIO, ADC, UART, 인터럽트 제어 및
        임베디드 시스템 구현 경험
    </li>

    <li>
        <strong>Circuit & PCB Design</strong><br>
        전자회로 구성 및 동작 분석, EasyEDA를 활용한
        회로도 작성과 PCB 설계
    </li>

    <li>
        <strong>Sensor & Prototyping</strong><br>
        로드셀, 적외선, 수위 센서 등 다양한 센서 연동과
        납땜을 통한 시제품 제작
    </li>

    <li>
        <strong>3D CAD</strong><br>
        Rhino를 활용한 제품 외형 및
        하드웨어 구조 설계
    </li>

</ul>
```

단순히 기술의 이름만 나열하는 것보다 해당 기술로 어떤 작업을 할 수 있는지 확인할 수 있도록 설명을 추가했다.

---

## 8. Projects Section 작성

GitHub API를 연결하기 전에 프로젝트가 표시될 기본 HTML 영역을 먼저 작성했다.

```html
<section id="projects">

    <!-- 섹션 제목 -->
    <h2>Projects</h2>

    <!-- 프로젝트 목록 -->
    <div id="project-list">

        <!-- 프로젝트 카드 예시 -->
        <article class="project-card">

            <h3>Project Title</h3>

            <p>
                프로젝트 설명이 들어가는 영역입니다.
            </p>

            <a href="#">GitHub 보기</a>

        </article>

    </div>

</section>
```

### `<article>`

하나의 프로젝트는 제목, 설명, GitHub 주소 등을 가지고 있는 독립적인 콘텐츠이므로 `<article>` 태그를 사용했다.

### `id="project-list"`

추후 JavaScript에서 GitHub API 데이터를 가져와 프로젝트 카드를 동적으로 생성할 영역이다.

예상되는 흐름은 다음과 같다.

```text
GitHub API 호출
        ↓
Repository 데이터 가져오기
        ↓
JavaScript에서 데이터 처리
        ↓
Project Card 생성
        ↓
project-list에 출력
```

### `id`와 `class`의 차이

`id`는 하나의 고유한 요소를 지정할 때 사용한다.

```html
<div id="project-list">
```

`class`는 같은 특징을 가진 여러 요소에 사용할 수 있다.

```html
<article class="project-card">
```

추후 여러 개의 프로젝트 카드가 생성되더라도 모두 `project-card` 클래스를 사용할 수 있다.

---

## 9. Contact Form 작성

사용자가 이름, 이메일, 메시지를 입력할 수 있는 문의 폼을 작성했다.

```html
<section id="contact">

    <!-- 섹션 제목 -->
    <h2>Contact</h2>

    <!-- 문의 폼 -->
    <form id="contact-form">

        <div>
            <label for="name">이름</label>
            <input type="text" id="name" name="name">
            <p class="error-message" id="name-error"></p>
        </div>

        <div>
            <label for="email">이메일</label>
            <input type="email" id="email" name="email">
            <p class="error-message" id="email-error"></p>
        </div>

        <div>
            <label for="message">메시지</label>
            <textarea id="message" name="message"></textarea>
            <p class="error-message" id="message-error"></p>
        </div>

        <button type="submit">보내기</button>

        <p id="form-success"></p>

    </form>

</section>
```

`label`의 `for` 값과 입력 요소의 `id` 값을 동일하게 작성하여 서로 연결했다.

```html
<label for="email">이메일</label>
<input type="email" id="email" name="email">
```

각 입력 필드 아래에는 추후 JavaScript 유효성 검사에서 사용할 에러 메시지 영역을 작성했다.

```html
<p class="error-message" id="email-error"></p>
```

폼 제출에 성공했을 때 사용할 성공 메시지 영역도 작성했다.

```html
<p id="form-success"></p>
```

---

## 10. Footer 작성

페이지 하단에 저작권 정보와 GitHub 링크를 작성했다.

```html
<footer>

    <!-- 저작권 -->
    <p>&copy; 2026 이은지. All rights reserved.</p>

    <!-- 소셜 링크 -->
    <nav>
        <a href="https://github.com/dldma"
           target="_blank"
           rel="noopener noreferrer">
            GitHub
        </a>
    </nav>

</footer>
```

### `target="_blank"`

GitHub 링크를 클릭했을 때 현재 포트폴리오 페이지를 유지하고 새 탭에서 GitHub가 열리도록 설정했다.

### `rel="noopener noreferrer"`

`target="_blank"`를 사용하여 외부 사이트를 열 때 보안을 위해 함께 사용했다.

---

## 11. 현재까지 완성한 HTML 구조

현재까지 작성한 포트폴리오의 HTML 구조는 다음과 같다.

```text
body
│
├── header
│   └── nav
│       ├── Portfolio
│       └── Navigation Menu
│
├── main
│   │
│   ├── Hero
│   │
│   ├── About
│   │   └── Profile Image
│   │
│   ├── Skills
│   │   ├── Software
│   │   └── Hardware & Electronics
│   │
│   ├── Projects
│   │   └── Project Card
│   │
│   └── Contact
│       └── Contact Form
│
└── Footer
```

현재까지 HTML을 이용하여 포트폴리오 웹페이지의 기본 구조를 작성했다.

다음 단계에서는 `css/style.css`를 이용하여 색상, 크기, 정렬, 레이아웃 등을 적용하고 반응형 디자인을 구현한다.
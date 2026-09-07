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


---

# CSS 스타일링 과정

## 12. CSS 기본 설정

HTML 구조를 완성한 후 `css/style.css`에서 웹페이지 전체에 공통으로 적용할 기본 스타일을 작성했다.

먼저 브라우저가 기본적으로 적용하는 여백을 초기화하고 모든 요소의 크기 계산 방식을 통일했다.

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

### `box-sizing: border-box`

요소에 `padding`과 `border`가 추가되더라도 설정한 `width`와 `height` 안에서 크기가 계산되도록 설정했다.

이를 통해 레이아웃의 크기를 계산하기 쉽게 만들었다.

---

## 13. CSS 변수 설정

페이지 전체에서 반복적으로 사용하는 색상, 폰트, 간격을 CSS 변수로 정의했다.

```css
:root {
    --background-color: #ffffff;
    --text-color: #222222;
    --primary-color: #2563eb;
    --secondary-color: #f3f4f6;

    --font-family: Arial, sans-serif;

    --section-padding: 80px 20px;
}
```

CSS 변수는 다음과 같이 사용할 수 있다.

```css
body {
    background-color: var(--background-color);
    color: var(--text-color);
}
```

색상을 여러 곳에 직접 작성하지 않고 변수로 관리하여 추후 디자인을 변경하기 쉽게 구성했다.

---

## 14. 다크 모드용 CSS 변수 작성

추후 JavaScript로 다크 모드를 구현하기 위해 다크 모드 전용 변수도 미리 작성했다.

```css
[data-theme="dark"] {
    --background-color: #121212;
    --text-color: #f5f5f5;
    --primary-color: #60a5fa;
    --secondary-color: #1f1f1f;
}
```

기본 모드에서는 `:root`의 변수를 사용하고, `data-theme="dark"`가 적용되면 다크 모드의 변수로 변경되도록 구성했다.

예상되는 동작은 다음과 같다.

```text
Light Mode
    ↓
기본 CSS 변수 사용

Dark Mode
    ↓
data-theme="dark"
    ↓
다크 모드 CSS 변수 사용
```

실제 테마 변경 기능은 추후 JavaScript에서 구현한다.

---

## 15. Body 기본 스타일 작성

페이지 전체에 공통으로 적용될 글꼴과 색상 등을 설정했다.

```css
body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: var(--font-family);
    line-height: 1.6;
}
```

`line-height`를 설정하여 여러 줄로 작성된 문장의 가독성을 높였다.

---

# Navigation 스타일링

## 16. Header 및 Navigation 디자인

Navigation은 과제 요구사항에 맞게 **Flexbox**를 사용하여 구현했다.

먼저 HTML에 CSS에서 사용할 class와 모바일 메뉴, 다크 모드 버튼을 추가했다.

```html
<header>
    <nav class="navbar">

        <a href="#hero" class="logo">My Portfolio</a>

        <ul class="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div class="nav-buttons">

            <button
                type="button"
                id="theme-toggle"
                aria-label="다크 모드 전환">
                🌙
            </button>

            <button
                type="button"
                id="menu-toggle"
                aria-label="메뉴 열기">
                ☰
            </button>

        </div>

    </nav>
</header>
```

Navigation의 기본 CSS는 다음과 같이 작성했다.

```css
header {
    width: 100%;
    background-color: var(--background-color);
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 20px;
}
```

### Flexbox 사용

```css
display: flex;
```

Navigation 내부의 로고, 메뉴, 버튼을 가로 방향으로 배치했다.

```css
justify-content: space-between;
```

로고는 왼쪽, 버튼 영역은 오른쪽에 배치되도록 구성했다.

---

## 17. Mobile First Navigation

과제 요구사항에 따라 **Mobile First 방식**으로 반응형 디자인을 작성했다.

모바일에서는 일반 Navigation 메뉴를 숨기고 햄버거 버튼을 표시하도록 설정했다.

```css
.nav-menu {
    display: none;
    list-style: none;
}
```

Navigation 버튼은 Flexbox로 배치했다.

```css
.nav-buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}
```

모바일 화면에서는 다음과 같은 구조가 된다.

```text
My Portfolio                         🌙 ☰
```

---

## 18. 태블릿 반응형 Navigation

첫 번째 Breakpoint는 과제 조건에 맞춰 `768px`로 설정했다.

```css
@media (min-width: 768px) {

    .nav-menu {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    #menu-toggle {
        display: none;
    }
}
```

화면 너비가 `768px` 이상이 되면 숨겨진 Navigation 메뉴를 다시 표시하고 햄버거 버튼을 숨긴다.

```text
Mobile

My Portfolio                         🌙 ☰


Tablet 이상

My Portfolio    About Skills Projects Contact    🌙
```

---

## 19. 데스크톱 반응형 Navigation

두 번째 Breakpoint는 `1024px`로 설정했다.

```css
@media (min-width: 1024px) {

    .navbar {
        padding: 20px 40px;
    }

    .nav-menu {
        gap: 32px;
    }

    .logo {
        font-size: 1.4rem;
    }
}
```

데스크톱에서는 화면 크기에 맞게 Navigation의 여백과 메뉴 간격을 조금 더 넓혔다.

현재 사용한 Breakpoint는 다음과 같다.

```text
0px ~ 767px
→ Mobile

768px ~ 1023px
→ Tablet

1024px 이상
→ Desktop
```

---

## 20. Navigation Hover 효과

Navigation 링크에 마우스를 올렸을 때 강조색으로 변경되도록 Hover 효과를 적용했다.

```css
.nav-menu a {
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: var(--primary-color);
}
```

로고에도 동일한 효과를 적용했다.

```css
.logo {
    transition: color 0.3s ease;
}

.logo:hover {
    color: var(--primary-color);
}
```

`transition`을 사용하여 색상이 갑자기 변경되지 않고 부드럽게 변경되도록 했다.

---

# Hero Section 스타일링

## 21. Hero 영역 구성

Hero의 CTA 링크를 하나의 영역으로 묶고 각각 class를 추가했다.

```html
<div class="hero-buttons">
    <a href="#projects" class="primary-button">
        프로젝트 보기
    </a>

    <a href="#contact" class="secondary-button">
        문의하기
    </a>
</div>
```

Hero 영역의 CSS는 다음과 같이 작성했다.

```css
#hero {
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: var(--section-padding);
}
```

`90vh`를 사용하여 Hero 영역이 브라우저 화면 높이의 약 90%를 차지하도록 설정했다.

Flexbox를 이용하여 Hero 내용을 화면 중앙에 배치했다.

---

## 22. Hero 제목과 소개글

```css
#hero h1 {
    font-size: 2.2rem;
    margin-bottom: 16px;
}

#hero p {
    max-width: 600px;
    margin-bottom: 28px;
}
```

소개 문장이 너무 길게 늘어나는 것을 방지하기 위해 최대 너비를 `600px`로 제한했다.

태블릿 이상에서는 제목 크기를 더 크게 설정했다.

```css
@media (min-width: 768px) {

    #hero h1 {
        font-size: 3rem;
    }
}
```

---

## 23. Hero CTA 버튼

두 개의 CTA 버튼에 공통 스타일을 적용했다.

```css
.hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.hero-buttons a {
    display: inline-block;

    padding: 12px 24px;
    border-radius: 8px;

    text-decoration: none;
    font-weight: bold;

    transition:
        transform 0.3s ease,
        background-color 0.3s ease,
        color 0.3s ease;
}
```

Primary 버튼은 강조색을 사용했다.

```css
.primary-button {
    background-color: var(--primary-color);
    color: #ffffff;
}
```

Secondary 버튼은 테두리 형태로 만들었다.

```css
.secondary-button {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}
```

Hover 시 버튼이 약간 위로 이동하도록 설정했다.

```css
.hero-buttons a:hover {
    transform: translateY(-3px);
}
```

모바일에서는 버튼이 세로로 표시되고 태블릿 이상에서는 가로로 표시되도록 했다.

```css
@media (min-width: 768px) {

    .hero-buttons {
        flex-direction: row;
    }
}
```

---

# About Section 스타일링

## 24. About 영역 구조 변경

프로필 이미지와 자기소개 글을 하나의 영역으로 묶었다.

```html
<div class="about-content">

    <img
        src="images/profile.jpg"
        alt="이은지 프로필 사진">

    <p>
        자기소개 내용
    </p>

</div>
```

---

## 25. About 디자인

```css
#about {
    padding: var(--section-padding);
    background-color: var(--secondary-color);
}

#about h2 {
    text-align: center;
    margin-bottom: 40px;
}
```

프로필 사진과 소개글은 Flexbox를 이용하여 배치했다.

```css
.about-content {
    max-width: 900px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;
}
```

모바일에서는 이미지와 글이 세로로 배치된다.

태블릿 이상에서는 가로로 변경했다.

```css
@media (min-width: 768px) {

    .about-content {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
```

---

## 26. 프로필 이미지 스타일

```css
.about-content img {
    width: 200px;
    height: 200px;

    object-fit: cover;
    border-radius: 50%;
}
```

`object-fit: cover`를 사용하여 이미지의 비율이 크게 왜곡되지 않도록 했다.

`border-radius: 50%`를 사용하여 프로필 사진을 원형으로 표시했다.

태블릿 이상에서는 이미지 크기를 조금 더 크게 설정했다.

```css
@media (min-width: 768px) {

    .about-content img {
        width: 240px;
        height: 240px;
    }
}
```

---

# Skills Section 스타일링

## 27. Skills 구조 변경

Software와 Hardware 영역을 각각 하나의 카드로 구성했다.

```html
<div class="skills-container">

    <article class="skill-card">
        <h3>Software</h3>
        ...
    </article>

    <article class="skill-card">
        <h3>Hardware & Electronics</h3>
        ...
    </article>

</div>
```

---

## 28. Skills Grid 구성

```css
.skills-container {
    max-width: 1000px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
}
```

모바일에서는 카드가 한 열로 표시된다.

```text
[ Software ]

[ Hardware & Electronics ]
```

태블릿 이상에서는 두 열로 변경했다.

```css
@media (min-width: 768px) {

    .skills-container {
        grid-template-columns: 1fr 1fr;
    }
}
```

```text
[ Software ]    [ Hardware & Electronics ]
```

---

## 29. Skills 카드 디자인

```css
.skill-card {
    background-color: var(--secondary-color);

    padding: 28px;
    border-radius: 12px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}
```

Hover 시 카드가 살짝 위로 이동하도록 했다.

```css
.skill-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
```

---

## 30. Software Skills 디자인

Software 기술은 작은 태그 형태로 표시했다.

```css
.software-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.software-list li {
    padding: 8px 14px;

    background-color: var(--background-color);

    border-radius: 20px;

    font-size: 0.9rem;
}
```

`flex-wrap: wrap`을 사용하여 화면에 기술 목록이 모두 들어가지 않을 경우 자동으로 다음 줄로 내려가도록 했다.

```text
[HTML] [CSS] [JavaScript]

[C] [Python] [Git]
```

---

## 31. Hardware Skills 디자인

Hardware는 설명이 포함되어 있기 때문에 세로 목록 형태로 표시했다.

```css
.hardware-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.hardware-list li {
    line-height: 1.6;
}

.hardware-list strong {
    color: var(--primary-color);
}
```

---

# Projects Section 스타일링

## 32. Projects Grid 구현

Projects 영역은 과제 요구사항에 맞게 CSS Grid를 사용했다.

```css
#project-list {
    max-width: 1100px;
    margin: 0 auto;

    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(250px, 1fr));

    gap: 24px;
}
```

### `auto-fit`

현재 화면에 들어갈 수 있는 만큼 프로젝트 카드를 자동으로 배치한다.

### `minmax()`

```css
minmax(250px, 1fr)
```

카드 하나의 최소 너비를 `250px`로 설정하고 화면 공간이 남으면 자동으로 확장되도록 했다.

따라서 화면 크기에 따라 자동으로 다음과 같이 변경된다.

```text
Mobile

[ Project 1 ]

[ Project 2 ]

[ Project 3 ]


Tablet

[ Project 1 ] [ Project 2 ]

[ Project 3 ]


Desktop

[ Project 1 ] [ Project 2 ] [ Project 3 ]
```

별도의 Breakpoint 없이도 Grid가 화면 크기에 맞게 자동으로 변경된다.

---

## 33. Project Card 디자인

```css
.project-card {
    background-color: var(--background-color);

    padding: 24px;
    border-radius: 12px;

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}
```

Hover 시 카드를 조금 위로 이동시키고 그림자를 강조했다.

```css
.project-card:hover {
    transform: translateY(-5px);

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
```

---

# Contact Section 스타일링

## 34. Contact Form 디자인

문의 폼의 최대 너비를 제한하고 화면 가운데에 배치했다.

```css
#contact-form {
    max-width: 700px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
}
```

각 입력 영역은 세로 방향으로 정렬했다.

```css
#contact-form div {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
```

---

## 35. Input 및 Textarea 디자인

```css
#contact-form input,
#contact-form textarea {
    width: 100%;

    padding: 12px 14px;

    border: 1px solid #cccccc;
    border-radius: 8px;

    background-color: var(--background-color);
    color: var(--text-color);

    font: inherit;

    transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}
```

Textarea는 여러 줄의 메시지를 입력할 수 있도록 높이를 설정했다.

```css
#contact-form textarea {
    min-height: 150px;
    resize: vertical;
}
```

사용자가 입력창을 선택했을 때 강조 효과가 표시되도록 했다.

```css
#contact-form input:focus,
#contact-form textarea:focus {
    outline: none;

    border-color: var(--primary-color);

    box-shadow:
        0 0 0 3px rgba(37, 99, 235, 0.15);
}
```

---

## 36. Form Error 및 Success 영역

JavaScript에서 폼 유효성 검사를 구현하기 전에 에러 메시지가 표시될 공간을 CSS로 준비했다.

```css
.error-message {
    min-height: 20px;
    color: #dc2626;
    font-size: 0.85rem;
}
```

에러 메시지가 나타났다 사라질 때 페이지 레이아웃이 크게 움직이지 않도록 `min-height`를 사용했다.

폼 제출 성공 메시지 영역도 작성했다.

```css
#form-success {
    min-height: 24px;

    color: var(--primary-color);
    font-weight: bold;
}
```

---

## 37. Contact 전송 버튼

```css
#contact-form button {
    align-self: flex-start;

    padding: 12px 24px;

    border: none;
    border-radius: 8px;

    background-color: var(--primary-color);
    color: #ffffff;

    font-weight: bold;

    cursor: pointer;

    transition:
        transform 0.3s ease,
        opacity 0.3s ease;
}
```

Hover 효과도 적용했다.

```css
#contact-form button:hover {
    transform: translateY(-3px);
    opacity: 0.9;
}
```

---

# Footer 스타일링

## 38. Footer 디자인

페이지 마지막 영역인 Footer의 디자인을 작성했다.

```css
footer {
    padding: 24px 20px;

    background-color: var(--secondary-color);

    text-align: center;
}
```

GitHub 등의 링크 영역에는 Flexbox를 사용했다.

```css
footer nav {
    display: flex;
    justify-content: center;
    gap: 16px;
}
```

Footer 링크에도 Hover와 Transition을 적용했다.

```css
footer a {
    color: var(--primary-color);

    text-decoration: none;
    font-weight: bold;

    transition: opacity 0.3s ease;
}

footer a:hover {
    opacity: 0.7;
}
```

---

# 39. Live Server를 이용한 페이지 확인

작성한 HTML과 CSS 결과를 실시간으로 확인하기 위해 VS Code에서 **Live Server** 확장 프로그램을 사용했다.

실행 후 브라우저 또는 VS Code 내부 Preview에서 페이지를 확인했다.

코드를 저장하면 변경된 HTML과 CSS 결과를 바로 확인할 수 있기 때문에 반응형 레이아웃과 Hover 효과를 테스트하는 데 사용했다.

특히 브라우저의 너비를 변경하며 다음 반응형 동작을 확인했다.

```text
Mobile
↓
Navigation 메뉴 숨김
햄버거 버튼 표시
세로 중심 Layout

Tablet
↓
Navigation 메뉴 표시
햄버거 버튼 숨김
일부 콘텐츠 가로 배치

Desktop
↓
여백과 콘텐츠 간격 확대
```

---

# 40. HTML + CSS 완료 시점 점검

현재까지 **HTML 구조 작성과 기본 CSS 스타일링을 완료했다.**

## HTML

- [x] Header
- [x] Navigation
- [x] Hero
- [x] About
- [x] Skills
- [x] Projects
- [x] Contact
- [x] Footer
- [x] 시맨틱 태그 사용
- [x] Navigation Anchor
- [x] 이미지 `alt`
- [x] Form `label`과 `id` 연결

## CSS

- [x] 외부 CSS 파일 사용
- [x] CSS 변수
- [x] 다크 모드 CSS 변수
- [x] Mobile First
- [x] 768px Breakpoint
- [x] 1024px Breakpoint
- [x] Navigation Flexbox
- [x] Skills Grid
- [x] Projects Grid
- [x] `auto-fit`
- [x] `minmax()`
- [x] Hover
- [x] Transition
- [x] Box Shadow
- [x] Hero 디자인
- [x] About 디자인
- [x] Skills 디자인
- [x] Projects 디자인
- [x] Contact Form 디자인
- [x] Footer 디자인

---

# 41. 현재 진행 상황

HTML과 CSS를 이용하여 정적인 포트폴리오 화면과 반응형 레이아웃까지 구현했다.

현재 웹사이트는 화면 크기에 따라 레이아웃이 변경되지만, 햄버거 버튼이나 다크 모드 버튼과 같은 기능은 아직 실제로 동작하지 않는다.

이후에는 JavaScript를 사용하여 사용자의 이벤트에 따라 화면이 변경되는 기능을 구현한다.

```text
현재

HTML
████████████████████ 100%

CSS
████████████████████ 100%

JavaScript
░░░░░░░░░░░░░░░░░░░░ 0%

API / 배포
░░░░░░░░░░░░░░░░░░░░
```

전체 B1-1 과제를 기준으로 약 **60~65% 정도 진행**했다.

---

# 42. 다음 작업 계획

다음 단계부터 JavaScript 기능을 구현한다.

1. 햄버거 메뉴 토글
2. 다크 모드
3. LocalStorage를 이용한 다크 모드 상태 유지
4. 부드러운 스크롤
5. Scroll To Top 버튼
6. 스크롤에 따른 Navigation 스타일 변경
7. Intersection Observer 스크롤 애니메이션
8. Contact Form 유효성 검사
9. GitHub API 호출
10. Loading 상태
11. Success 상태
12. Error 상태 및 다시 시도
13. Empty 상태
14. 최종 반응형 테스트
15. README 정리
16. GitHub Pages 배포


---

# JavaScript 기능 구현 과정

## 43. JavaScript 기능 구현 시작

HTML과 CSS를 이용하여 정적인 화면과 반응형 레이아웃을 완성한 후 `js/script.js`를 이용하여 사용자의 행동에 따라 화면이 변경되는 기능을 구현했다.

JavaScript에서는 HTML에 직접 `onclick`을 작성하지 않고 과제 요구사항에 따라 `addEventListener()`를 이용하여 이벤트를 연결했다.

이번 단계에서 구현한 주요 기능은 다음과 같다.

- 모바일 햄버거 메뉴
- 메뉴 선택 시 자동 닫기
- 다크 모드
- LocalStorage를 이용한 테마 상태 유지
- 부드러운 스크롤
- Scroll To Top 버튼
- 스크롤에 따른 Header 스타일 변경
- Intersection Observer 스크롤 애니메이션
- Contact Form 유효성 검사
- Input 이벤트를 이용한 에러 메시지 처리

---

# Hamburger Menu

## 44. 햄버거 메뉴 토글 구현

모바일 화면에서는 Navigation 메뉴를 숨기고 햄버거 버튼을 눌렀을 때 메뉴가 나타나도록 구현했다.

먼저 JavaScript에서 햄버거 버튼과 Navigation 메뉴를 선택했다.

```javascript
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('.nav-menu');
```

`querySelector()`를 이용하여 HTML 요소 하나를 선택하고 변수에 저장했다.

```text
menuToggle
→ #menu-toggle 버튼

navMenu
→ .nav-menu 영역
```

햄버거 버튼에 `click` 이벤트를 연결했다.

```javascript
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
```

`classList.toggle()`을 사용하여 `active` 클래스가 없으면 추가하고, 이미 존재하면 제거하도록 했다.

동작 과정은 다음과 같다.

```text
햄버거 버튼 클릭
        ↓
click 이벤트
        ↓
active 클래스 Toggle
        ↓
Navigation 상태 변경
        ↓
메뉴 표시 / 숨김
```

CSS에서는 다음과 같이 상태를 구분했다.

```css
.nav-menu {
    display: none;
}

.nav-menu.active {
    display: flex;
    flex-direction: column;
}
```

따라서 JavaScript는 `active`라는 상태만 변경하고 실제 화면 표현은 CSS가 담당하도록 구성했다.

---

## 45. Navigation 메뉴 선택 시 자동 닫기

모바일 메뉴에서 About, Skills, Projects, Contact 중 하나를 선택하면 메뉴가 자동으로 닫히도록 추가했다.

먼저 Navigation 내부의 모든 링크를 선택했다.

```javascript
const navLinks = document.querySelectorAll('.nav-menu a');
```

`querySelectorAll()`은 조건에 해당하는 요소 여러 개를 모두 선택한다.

선택된 링크 각각에 `click` 이벤트를 연결하기 위해 `forEach()`를 사용했다.

```javascript
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
```

동작은 다음과 같다.

```text
햄버거 메뉴 열기
        ↓
About / Skills / Projects / Contact 클릭
        ↓
active 클래스 제거
        ↓
모바일 메뉴 닫힘
```

이 과정에서 `querySelectorAll()`과 `forEach()`를 이용하여 여러 HTML 요소에 동일한 이벤트를 연결하는 방법을 확인했다.

---

# Dark Mode

## 46. 다크 모드 구현

HTML에 미리 작성한 다크 모드 버튼을 JavaScript에서 선택했다.

```javascript
const themeToggle = document.querySelector('#theme-toggle');
```

사용자가 테마 버튼을 누르면 현재 페이지가 다크 모드인지 확인하도록 구현했다.

```javascript
const isDark =
    document.documentElement.getAttribute('data-theme') === 'dark';
```

`document.documentElement`는 HTML 문서의 최상위 `<html>` 요소를 의미한다.

다크 모드를 활성화할 때는 다음과 같이 `data-theme` 속성을 추가했다.

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

실제 HTML 상태는 다음과 같이 변경된다.

```html
<html lang="ko" data-theme="dark">
```

그러면 CSS에서 미리 작성한 다음 선택자가 적용된다.

```css
[data-theme="dark"] {
    --background-color: #121212;
    --text-color: #f5f5f5;
    --primary-color: #60a5fa;
    --secondary-color: #1f1f1f;
}
```

다시 Light Mode로 변경할 때는 속성을 제거했다.

```javascript
document.documentElement.removeAttribute('data-theme');
```

동작 과정은 다음과 같다.

```text
테마 버튼 클릭
      ↓
현재 Theme 확인
      ↓
data-theme 추가 / 제거
      ↓
CSS 변수 변경
      ↓
전체 화면 Theme 변경
```

---

## 47. 다크 모드 버튼 아이콘 변경

현재 Theme을 쉽게 확인할 수 있도록 다크 모드와 라이트 모드에 따라 버튼 아이콘도 변경했다.

다크 모드일 때:

```javascript
themeToggle.textContent = '☀️';
```

라이트 모드일 때:

```javascript
themeToggle.textContent = '🌙';
```

따라서 사용자는 현재 Theme과 변경할 Theme을 아이콘으로 확인할 수 있다.

---

# LocalStorage

## 48. 다크 모드 상태 저장

다크 모드는 페이지를 새로고침한 후에도 설정이 유지되어야 하기 때문에 `localStorage`를 사용했다.

다크 모드 선택 시:

```javascript
localStorage.setItem('theme', 'dark');
```

라이트 모드 선택 시:

```javascript
localStorage.setItem('theme', 'light');
```

형태로 현재 상태를 브라우저에 저장했다.

---

## 49. 저장된 Theme 불러오기

페이지가 실행될 때 저장된 Theme 값을 가져왔다.

```javascript
const savedTheme = localStorage.getItem('theme');
```

저장된 값이 `dark`인 경우:

```javascript
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}
```

를 실행하도록 했다.

따라서 다음과 같은 상태 유지가 가능해졌다.

```text
Dark Mode 선택
      ↓
localStorage에 dark 저장
      ↓
페이지 새로고침
      ↓
저장된 값 확인
      ↓
Dark Mode 다시 적용
```

이를 통해 과제에서 요구한 **새로고침 후 다크 모드 상태 유지** 기능을 구현했다.

---

# Smooth Scroll

## 50. 부드러운 페이지 이동 구현

Navigation과 Hero 버튼을 눌렀을 때 각 Section으로 즉시 이동하지 않고 부드럽게 이동하도록 구현했다.

먼저 내부 이동에 사용하는 링크들을 선택했다.

```javascript
const smoothScrollLinks = document.querySelectorAll(
    '.logo, .nav-menu a, .hero-buttons a'
);
```

각 링크에 `click` 이벤트를 추가했다.

```javascript
smoothScrollLinks.forEach((link) => {

    link.addEventListener('click', (event) => {

        event.preventDefault();

        const targetId = link.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

---

## 51. `preventDefault()` 사용

`<a>` 태그는 기본적으로 `href` 위치로 즉시 이동한다.

이를 JavaScript에서 직접 제어하기 위해 다음 코드를 사용했다.

```javascript
event.preventDefault();
```

기본 이동을 막은 뒤:

```javascript
const targetId = link.getAttribute('href');
```

를 이용하여 클릭한 링크의 `href` 값을 가져왔다.

예:

```html
<a href="#about">About</a>
```

```text
targetId
→ #about
```

이후:

```javascript
const targetSection = document.querySelector(targetId);
```

로 이동할 Section을 찾고:

```javascript
targetSection.scrollIntoView({
    behavior: 'smooth'
});
```

를 이용하여 부드럽게 이동하도록 했다.

---

# Scroll To Top

## 52. Scroll To Top 버튼 추가

페이지를 일정 거리 이상 내려갔을 때 화면 오른쪽 아래에 맨 위로 이동하는 버튼이 나타나도록 구현했다.

HTML에 다음 버튼을 추가했다.

```html
<button
    type="button"
    id="scroll-top"
    aria-label="페이지 맨 위로 이동">
    ↑
</button>
```

기본 상태에서는 버튼을 숨겼다.

```css
#scroll-top {
    display: none;
}
```

`show` 클래스가 추가되면 버튼이 나타나도록 했다.

```css
#scroll-top.show {
    display: block;
}
```

---

## 53. 스크롤 위치 확인

JavaScript에서 Scroll To Top 버튼을 선택했다.

```javascript
const scrollTopButton = document.querySelector('#scroll-top');
```

`window`에 `scroll` 이벤트를 연결하여 현재 스크롤 위치를 확인했다.

```javascript
window.addEventListener('scroll', () => {

    if (window.scrollY >= 300) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});
```

`window.scrollY`는 현재 페이지가 세로 방향으로 얼마나 이동했는지 나타낸다.

```text
페이지 맨 위
→ scrollY = 0

300px 이상 이동
→ scrollY >= 300
```

이번 프로젝트에서는 **300px**을 기준으로 설정했다.

---

## 54. 페이지 맨 위로 이동

Scroll To Top 버튼을 클릭하면 다음 코드를 실행하도록 했다.

```javascript
scrollTopButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

`top: 0`은 페이지의 가장 위쪽을 의미한다.

`behavior: 'smooth'`를 사용하여 맨 위로 부드럽게 이동하도록 구현했다.

---

# Navigation Scroll Style

## 55. 스크롤에 따른 Header 상태 변경

사용자가 페이지를 일정 거리 이상 내리면 Header에 그림자가 나타나도록 구현했다.

먼저 Header를 선택했다.

```javascript
const header = document.querySelector('header');
```

스크롤 위치가 `60px` 이상일 경우 `scrolled` 클래스를 추가했다.

```javascript
window.addEventListener('scroll', () => {

    if (window.scrollY >= 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
```

CSS에서는 다음과 같이 화면 변화를 정의했다.

```css
header.scrolled {
    background-color: var(--background-color);

    box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.12);
}
```

동작 과정은 다음과 같다.

```text
스크롤
   ↓
scrollY 확인
   ↓
60px 이상
   ↓
scrolled 클래스 추가
   ↓
Header 그림자 표시
```

다시 페이지 위쪽으로 이동하면 `scrolled` 클래스를 제거하여 원래 상태로 되돌린다.

---

# Scroll Animation

## 56. 스크롤 등장 애니메이션 준비

About, Skills, Projects, Contact Section에 `reveal` 클래스를 추가했다.

```html
<section id="about" class="reveal">
```

```html
<section id="skills" class="reveal">
```

```html
<section id="projects" class="reveal">
```

```html
<section id="contact" class="reveal">
```

CSS에서는 처음에 투명하고 아래쪽에 위치하도록 설정했다.

```css
.reveal {
    opacity: 0;
    transform: translateY(40px);

    transition:
        opacity 0.6s ease,
        transform 0.6s ease;
}
```

`visible` 클래스가 추가되면 원래 위치에서 보이도록 설정했다.

```css
.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}
```

---

## 57. Intersection Observer 구현

애니메이션을 적용할 모든 요소를 선택했다.

```javascript
const revealElements = document.querySelectorAll('.reveal');
```

`IntersectionObserver`를 이용하여 각 요소가 화면에 들어오는 시점을 감지했다.

```javascript
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);
```

각 요소에 Observer를 연결했다.

```javascript
revealElements.forEach((element) => {
    observer.observe(element);
});
```

---

## 58. Intersection Observer Threshold

이번 프로젝트에서는 다음 값을 사용했다.

```javascript
threshold: 0.2
```

이는 요소의 약 20%가 화면에 들어왔을 때 애니메이션이 실행된다는 의미이다.

동작 과정은 다음과 같다.

```text
Section 화면 밖
      ↓
스크롤
      ↓
Section의 20%가 화면에 진입
      ↓
Intersection Observer 감지
      ↓
visible 클래스 추가
      ↓
Section 등장 애니메이션
```

한 번 애니메이션이 실행된 요소는:

```javascript
observer.unobserve(entry.target);
```

를 사용하여 더 이상 관찰하지 않도록 했다.

---

# Contact Form Validation

## 59. Contact Form 요소 선택

Contact Form에서 입력값 검사를 하기 위해 Form과 각 입력 요소를 선택했다.

```javascript
const contactForm = document.querySelector('#contact-form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
```

에러 메시지를 표시할 요소도 각각 선택했다.

```javascript
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

const formSuccess = document.querySelector('#form-success');
```

---

## 60. 이메일 형식 검사 함수 작성

이메일 형식을 검사하기 위해 화살표 함수를 작성했다.

```javascript
const isValidEmail = (email) => {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
};
```

정규표현식을 이용하여 기본적인 이메일 형식을 확인했다.

예:

```text
abc@example.com
→ 정상

abc
→ 오류
```

---

## 61. Form Submit 이벤트 처리

폼의 `submit` 이벤트를 JavaScript에서 처리했다.

```javascript
contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    ...
});
```

기본 제출 동작을 막고 JavaScript에서 직접 입력값을 검사하도록 했다.

검사 전 이전에 출력된 메시지들을 초기화했다.

```javascript
nameError.textContent = '';
emailError.textContent = '';
messageError.textContent = '';
formSuccess.textContent = '';
```

폼 전체의 정상 여부를 관리하기 위해 다음 변수를 사용했다.

```javascript
let isValid = true;
```

---

## 62. 이름 필수값 검사

입력값에서 앞뒤 공백을 제거한 뒤 값이 비어 있는지 확인했다.

```javascript
if (nameInput.value.trim() === '') {

    nameError.textContent =
        '이름을 입력해주세요.';

    isValid = false;
}
```

`.trim()`을 사용하여 공백만 입력한 경우에도 빈 값으로 처리했다.

---

## 63. 이메일 유효성 검사

이메일은 빈 값과 형식을 각각 검사했다.

```javascript
if (emailInput.value.trim() === '') {

    emailError.textContent =
        '이메일을 입력해주세요.';

    isValid = false;

} else if (!isValidEmail(emailInput.value.trim())) {

    emailError.textContent =
        '올바른 이메일 형식을 입력해주세요.';

    isValid = false;
}
```

따라서 다음 상태를 구분할 수 있다.

```text
빈 값
→ 이메일을 입력해주세요.

잘못된 형식
→ 올바른 이메일 형식을 입력해주세요.

정상 이메일
→ 통과
```

---

## 64. 메시지 필수값 검사

메시지 입력값도 동일하게 검사했다.

```javascript
if (messageInput.value.trim() === '') {

    messageError.textContent =
        '메시지를 입력해주세요.';

    isValid = false;
}
```

---

## 65. Form 성공 처리

모든 입력값이 정상일 경우 성공 메시지를 표시했다.

```javascript
if (isValid) {

    formSuccess.textContent =
        '문의가 정상적으로 작성되었습니다.';

    contactForm.reset();
}
```

`reset()`을 이용하여 정상 처리 후 입력 필드를 초기화했다.

현재 단계에서는 실제 메시지를 외부로 전송하지 않고 **폼 유효성 검사와 화면 상태 처리까지만 구현했다.**

---

# Input Event

## 66. 입력 시 에러 메시지 제거

사용자가 잘못된 값으로 제출한 뒤 다시 입력을 시작하면 기존 에러 메시지가 사라지도록 `input` 이벤트를 추가했다.

이름:

```javascript
nameInput.addEventListener('input', () => {

    nameError.textContent = '';
    formSuccess.textContent = '';
});
```

이메일:

```javascript
emailInput.addEventListener('input', () => {

    emailError.textContent = '';
    formSuccess.textContent = '';
});
```

메시지:

```javascript
messageInput.addEventListener('input', () => {

    messageError.textContent = '';
    formSuccess.textContent = '';
});
```

`input` 이벤트는 사용자가 입력값을 작성하거나 수정할 때마다 발생한다.

이를 이용하여 사용자가 문제를 수정하기 시작하면 해당 에러 메시지를 바로 제거하도록 했다.

---

# 67. JavaScript 작성 단계 중간 점검

현재까지 작성한 JavaScript 기능은 다음과 같다.

- [x] `querySelector()`
- [x] `querySelectorAll()`
- [x] `addEventListener()`
- [x] `click` 이벤트
- [x] `submit` 이벤트
- [x] `scroll` 이벤트
- [x] `input` 이벤트
- [x] `event.preventDefault()`
- [x] `classList.add()`
- [x] `classList.remove()`
- [x] `classList.toggle()`
- [x] `textContent`
- [x] 화살표 함수
- [x] `forEach()`
- [x] 햄버거 메뉴
- [x] 모바일 메뉴 자동 닫기
- [x] 다크 모드
- [x] LocalStorage
- [x] 부드러운 스크롤
- [x] Scroll To Top
- [x] Navigation Scroll Style
- [x] Intersection Observer
- [x] Contact Form 유효성 검사

현재까지의 주요 처리 흐름은 다음과 같다.

```text
사용자 이벤트
      ↓
JavaScript 이벤트 처리
      ↓
상태 확인 및 변경
      ↓
DOM 클래스 / 내용 변경
      ↓
화면 업데이트
```

이는 이번 과제의 핵심 목표인 **이벤트 → 상태 변경 → 화면 업데이트** 흐름을 직접 구현한 과정이다.

---

# 68. 현재 진행 상태

현재까지 HTML, CSS 및 기본 JavaScript 인터랙션 작성을 완료했다.

```text
HTML
████████████████████ 100%

CSS
████████████████████ 100%

JavaScript 기본 기능
████████████████████ 100%
```

다음 단계에서는 지금까지 작성한 정적인 Project 영역에 실제 데이터를 연결하는 작업을 별도로 진행한다.


# 외부 API 연동 과정

# 69. GitHub API 연동 시작

Portfolio의 Projects 영역에 직접 작성한 프로젝트 정보를 표시하는 대신,
GitHub API를 사용하여 실제 GitHub Repository 목록을 불러오도록 구성했다.

GitHub 사용자 이름은 JavaScript 변수로 관리했다.

```javascript
const githubUsername = 'dldma';
```

GitHub Repository 정보를 가져오기 위해 다음 API 주소를 사용했다.

```text
https://api.github.com/users/dldma/repos
```

이를 통해 공개 상태인 GitHub Repository 정보를 JSON 형식으로 받아올 수 있다.


# 70. Project 출력 영역 구성

GitHub API에서 받아온 Repository를 JavaScript로 출력하기 위해
HTML의 Projects 영역에 별도의 출력 공간을 만들었다.

```html
<div id="project-list">
</div>
```

JavaScript에서는 `querySelector()`를 사용하여 해당 요소를 선택했다.

```javascript
const projectList = document.querySelector('#project-list');
```

이 영역의 `innerHTML`을 변경하여 Loading, Success, Error, Empty 상태를 화면에 표시하도록 구성했다.


# 71. Loading 상태 구현

API 요청은 서버로부터 데이터를 받아오는 데 시간이 필요하기 때문에
데이터를 기다리는 동안 사용자에게 현재 상태를 알려주는 Loading 화면을 구현했다.

```javascript
const renderLoading = () => {
    projectList.innerHTML = `
        <p class="project-status">
            프로젝트를 불러오는 중...
        </p>
    `;
};
```

API 호출을 시작하기 전에 `renderLoading()`을 실행하여
Repository 데이터를 기다리는 동안 Loading 메시지가 표시되도록 했다.


# 72. fetch와 async/await를 이용한 API 요청

GitHub API 호출에는 `fetch()`를 사용했다.

비동기 작업을 처리하기 위해 함수에 `async`를 사용하고,
API 응답을 기다리기 위해 `await`를 사용했다.

```javascript
const fetchProjects = async () => {
    renderLoading();

    const response = await fetch(
        `https://api.github.com/users/${githubUsername}/repos`
    );
};
```

템플릿 리터럴을 사용하여 GitHub 사용자 이름을 API 주소에 동적으로 삽입했다.


# 73. API 요청 오류 확인

GitHub 서버에서 정상적인 응답을 받았는지 확인하기 위해
`response.ok` 값을 사용했다.

```javascript
if (!response.ok) {
    throw new Error(
        `GitHub API 요청 실패: ${response.status}`
    );
}
```

정상적인 응답이 아닐 경우 `throw`를 사용하여 오류를 발생시키고,
해당 오류가 `catch` 영역에서 처리되도록 구성했다.


# 74. JSON 데이터 변환 및 Repository 카드 생성

GitHub API에서 받은 응답 데이터를 JavaScript에서 사용할 수 있도록
JSON 데이터를 배열 형태로 변환했다.

```javascript
const repos = await response.json();
```

각 Repository 데이터를 Project Card로 변환하기 위해 `map()`을 사용했다.

Repository 객체에서 필요한 데이터는 구조분해 할당을 통해 가져왔다.

```javascript
const {
    name,
    description,
    html_url,
    language,
    stargazers_count
} = repo;
```

각 Repository마다 다음 정보를 Project Card에 표시했다.

- Repository 이름
- Repository 설명
- 사용 언어
- Star 개수
- GitHub Repository 링크

`map()`으로 생성된 HTML 문자열 배열은 `join('')`을 사용하여 하나의 문자열로 합친 뒤
`projectList.innerHTML`에 출력했다.


# 75. Empty 상태 처리

GitHub Repository가 하나도 존재하지 않는 경우를 처리하기 위해
Repository 배열의 길이를 확인했다.

```javascript
if (repos.length === 0) {
    projectList.innerHTML = `
        <p class="project-status">
            표시할 프로젝트가 없습니다.
        </p>
    `;

    return;
}
```

이를 통해 API 요청에는 성공했지만 표시할 Repository가 없는 상황도
사용자에게 명확하게 안내하도록 구성했다.


# 76. Error 상태와 다시 시도 기능 구현

API 요청에 실패하는 상황을 처리하기 위해 `try / catch`를 사용했다.

오류가 발생하면 다음 메시지와 다시 시도 버튼이 표시되도록 했다.

```text
프로젝트를 불러올 수 없습니다.

[ 다시 시도 ]
```

다시 시도 버튼을 클릭하면 `fetchProjects()`를 다시 실행하여
GitHub API에 새로운 요청을 보내도록 구현했다.

이를 통해 일시적인 네트워크 오류나 API 요청 실패 상황에서도
사용자가 직접 다시 데이터를 불러올 수 있도록 했다.


# 77. API 상태별 화면 구성

GitHub API 연동 과정에서 다음 네 가지 상태를 구현했다.

```text
Loading
→ 프로젝트를 불러오는 중...

Success
→ GitHub Repository를 Project Card 형태로 출력

Error
→ 프로젝트를 불러올 수 없습니다.
   다시 시도 버튼 제공

Empty
→ 표시할 프로젝트가 없습니다.
```

각 상태에 따라 `project-list` 영역의 화면이 변경되도록 구성했다.


# 78. GitHub Repository 공개 범위 정리

Portfolio에는 GitHub API를 통해 공개 Repository만 표시된다.

공개할 필요가 없는 `evaluation_criteria` Repository는
GitHub에서 Private Repository로 변경했다.

따라서 Portfolio의 Projects 영역에는 공개 상태인 Repository만 표시되도록 정리했다.


# 79. 외부 API 연동 최종 확인

GitHub API 연동 후 다음 기능을 최종 확인했다.

- API 요청 중 Loading 메시지 표시
- GitHub Repository 데이터 정상 호출
- Repository별 Project Card 생성
- Repository 링크 정상 이동
- Repository가 없는 경우 Empty 상태 표시
- API 요청 실패 시 Error 상태 표시
- 다시 시도 버튼 동작 확인
- Private Repository가 Portfolio에 표시되지 않는 것 확인

GitHub API를 이용한 외부 데이터 연동 작업을 완료했다.
// =========================
// Hamburger Menu
// =========================

// 햄버거 버튼 선택
const menuToggle = document.querySelector('#menu-toggle');

// 네비게이션 메뉴 선택
const navMenu = document.querySelector('.nav-menu');

// 햄버거 버튼 클릭 시 메뉴 열기 / 닫기
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 전체 선택
const navLinks = document.querySelectorAll('.nav-menu a');

// 메뉴 링크 클릭 시 모바일 메뉴 닫기
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// =========================
// Dark Mode
// =========================

// 다크 모드 버튼 선택
// HTML에서 만든 것 가져옴
const themeToggle = document.querySelector('#theme-toggle');

// 기존에 저장된 테마 가져오기
// localStorage은 부라우저에서 작은 값을 저장 할 수 있는 공간
const savedTheme = localStorage.getItem('theme');

// 저장된 테마가 dark라면 다크 모드 적용
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

// 다크 모드 버튼 클릭 이벤트
themeToggle.addEventListener('click', () => {

    // 현재 다크 모드인지 확인
    const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark';

    if (isDark) {

        // 라이트 모드로 변경
        document.documentElement.removeAttribute('data-theme');

        // 설정 저장
        //theme이라는 이름으로 light라는 값을 저장
        localStorage.setItem('theme', 'light');

        // 버튼 아이콘 변경
        themeToggle.textContent = '🌙';

    } else {

        // 다크 모드로 변경
        document.documentElement.setAttribute('data-theme', 'dark');

        // 설정 저장
        localStorage.setItem('theme', 'dark');

        // 버튼 아이콘 변경
        themeToggle.textContent = '☀️';
    }
});

// =========================
// Smooth Scroll
// =========================

// 페이지 내부 이동 링크 선택
const smoothScrollLinks = document.querySelectorAll(
    //페이지 안에서 이동한은 모든 링크 선택
    '.logo, .nav-menu a, .hero-buttons a'
);

// 각 링크에 클릭 이벤트 연결
smoothScrollLinks.forEach((link) => {

    link.addEventListener('click', (event) => {

        // 링크의 기본 이동 동작 방지
        event.preventDefault();

        // 클릭한 링크의 href 값 가져오기
        const targetId = link.getAttribute('href');

        // href와 같은 id를 가진 요소 찾기
        const targetSection = document.querySelector(targetId);

        // 해당 섹션으로 부드럽게 이동
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// =========================
// Scroll To Top
// =========================

// 맨 위로 이동 버튼 선택
const scrollTopButton = document.querySelector('#scroll-top');

// 스크롤 이벤트
window.addEventListener('scroll', () => {

    // 300px 이상 스크롤하면 버튼 표시
    if (window.scrollY >= 300) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});

// 버튼 클릭 시 페이지 맨 위로 이동
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// =========================
// Navigation Scroll Style
// =========================

// Header 선택
const header = document.querySelector('header');

// 스크롤 위치에 따라 Header 스타일 변경
window.addEventListener('scroll', () => {

    if (window.scrollY >= 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// =========================
// Scroll Animation
// =========================

// 애니메이션을 적용할 요소 전체 선택
const revealElements = document.querySelectorAll('.reveal');

// Intersection Observer 생성
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // 요소가 화면에 들어오면 visible 클래스 추가
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // 한 번 나타난 요소는 더 이상 관찰하지 않음
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.2
    }
);

// 각 요소 관찰 시작
revealElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// Contact Form Validation
// =========================

// Form 요소 선택
const contactForm = document.querySelector('#contact-form');

// 입력 요소 선택
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// 에러 메시지 영역 선택
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');

// 성공 메시지 영역 선택
const formSuccess = document.querySelector('#form-success');


// 이메일 형식 검사 함수
const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
};


// 폼 제출 이벤트
contactForm.addEventListener('submit', (event) => {

    // 기본 제출 동작 방지
    event.preventDefault();

    // 기존 메시지 초기화
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.textContent = '';

    let isValid = true;


    // 이름 검사
    if (nameInput.value.trim() === '') {
        nameError.textContent = '이름을 입력해주세요.';
        isValid = false;
    }


    // 이메일 검사
    if (emailInput.value.trim() === '') {

        emailError.textContent = '이메일을 입력해주세요.';
        isValid = false;

    } else if (!isValidEmail(emailInput.value.trim())) {

        emailError.textContent = '올바른 이메일 형식을 입력해주세요.';
        isValid = false;
    }


    // 메시지 검사
    if (messageInput.value.trim() === '') {
        messageError.textContent = '메시지를 입력해주세요.';
        isValid = false;
    }


    // 모든 값이 정상일 경우
    if (isValid) {
        formSuccess.textContent = '문의가 정상적으로 작성되었습니다.';

        contactForm.reset();
    }
});


// =========================
// Contact Form Input Event
// =========================

// 이름을 다시 입력하면 이름 에러 메시지 제거
nameInput.addEventListener('input', () => {
    nameError.textContent = '';
    formSuccess.textContent = '';
});

// 이메일을 다시 입력하면 이메일 에러 메시지 제거
emailInput.addEventListener('input', () => {
    emailError.textContent = '';
    formSuccess.textContent = '';
});

// 메시지를 다시 입력하면 메시지 에러 메시지 제거
messageInput.addEventListener('input', () => {
    messageError.textContent = '';
    formSuccess.textContent = '';
});


// =========================
// GitHub API
// =========================

// GitHub 사용자 이름
const githubUsername = 'dldma';

// 프로젝트가 표시될 영역 선택
const projectList = document.querySelector('#project-list');

// Loading 상태 표시
const renderLoading = () => {
    projectList.innerHTML = `
        <p class="project-status">
            프로젝트를 불러오는 중...
        </p>
    `;
};

// Error 상태 표시
const renderError = () => {
    projectList.innerHTML = `
        <div class="project-status">
            <p>프로젝트를 불러올 수 없습니다.</p>

            <button
                type="button"
                id="retry-projects">
                다시 시도
            </button>
        </div>
    `;

    // 다시 시도 버튼 선택
    const retryButton =
        document.querySelector('#retry-projects');

    // 다시 시도 버튼 클릭 시 API 다시 호출
    retryButton.addEventListener('click', () => {
        fetchProjects();
    });
};

// GitHub Repository 데이터 가져오기
const fetchProjects = async () => {

    // API 요청 시작 전 Loading 상태 표시
    renderLoading();

    try {

        // GitHub API 호출
        const response = await fetch(
            `https://api.github.com/users/${githubUsername}/repos`
        );

        // 요청 실패 여부 확인
        if (!response.ok) {
            throw new Error(`GitHub API 요청 실패: ${response.status}`);
        }

        // JSON 데이터로 변환
        const repos = await response.json();

        // Repository가 하나도 없는 경우
        if (repos.length === 0) {
            projectList.innerHTML = `
                <p class="project-status">
                    표시할 프로젝트가 없습니다.
                </p>
            `;

            return;
        }

        // Repository 데이터를 Project Card HTML로 변환
        const projectCards = repos.map((repo) => {

            const {
                name,
                description,
                html_url,
                language,
                stargazers_count
            } = repo;

            return `
                <article class="project-card">

                    <h3>${name}</h3>

                    <p>
                        ${description || '프로젝트 설명이 없습니다.'}
                    </p>

                    <p>
                        Language:
                        ${language || '정보 없음'}
                    </p>

                    <p>
                        Stars:
                        ${stargazers_count}
                    </p>

                    <a
                        href="${html_url}"
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub 보기
                    </a>

                </article>
            `;
        });

        // Project Card 화면 출력
        projectList.innerHTML = projectCards.join('');

    } catch (error) {

        // 에러 확인
        console.error(error);

        renderError();
    }
};


// GitHub Repository 가져오기 실행
fetchProjects();




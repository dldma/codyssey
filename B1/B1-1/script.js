// =========================
// Hamburger Menu
// =========================

const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});


// =========================
// Dark Mode
// =========================

const themeToggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('theme');

const prefersDark =
    window.matchMedia('(prefers-color-scheme: dark)').matches;


if (savedTheme === 'dark') {

    document.documentElement.setAttribute(
        'data-theme',
        'dark'
    );

    themeToggle.textContent = '☀️';

} else if (savedTheme === null && prefersDark) {

    document.documentElement.setAttribute(
        'data-theme',
        'dark'
    );

    themeToggle.textContent = '☀️';
}


themeToggle.addEventListener('click', () => {

    const isDark =
        document.documentElement.getAttribute('data-theme') === 'dark';


    if (isDark) {

        document.documentElement.removeAttribute(
            'data-theme'
        );

        localStorage.setItem(
            'theme',
            'light'
        );

        themeToggle.textContent = '🌙';

    } else {

        document.documentElement.setAttribute(
            'data-theme',
            'dark'
        );

        localStorage.setItem(
            'theme',
            'dark'
        );

        themeToggle.textContent = '☀️';
    }
});


// =========================
// ATmega128A Image Fallback
// =========================

const heroChipImage =
    document.querySelector('.hero-chip-image');

const chipFallback =
    document.querySelector('.chip-fallback');


heroChipImage.addEventListener('error', () => {

    heroChipImage.style.display = 'none';

    chipFallback.classList.add('show');
});


// =========================
// Smooth Scroll
// =========================

const smoothScrollLinks =
    document.querySelectorAll(
        '.logo, .nav-menu a, .hero-buttons a'
    );


smoothScrollLinks.forEach((link) => {

    link.addEventListener('click', (event) => {

        event.preventDefault();

        const targetId =
            link.getAttribute('href');

        const targetSection =
            document.querySelector(targetId);


        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// =========================
// Scroll To Top
// =========================

const scrollTopButton =
    document.querySelector('#scroll-top');


window.addEventListener('scroll', () => {

    if (window.scrollY >= 300) {

        scrollTopButton.classList.add('show');

    } else {

        scrollTopButton.classList.remove('show');
    }
});


scrollTopButton.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// =========================
// Navigation Scroll Style
// =========================

const header =
    document.querySelector('header');


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

const revealElements =
    document.querySelectorAll('.reveal');


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    'visible'
                );

                observer.unobserve(
                    entry.target
                );
            }
        });
    },

    {
        threshold: 0.2
    }
);


revealElements.forEach((element) => {

    observer.observe(element);
});


// =========================
// Contact Form Validation
// =========================

const contactForm =
    document.querySelector('#contact-form');

const nameInput =
    document.querySelector('#name');

const emailInput =
    document.querySelector('#email');

const messageInput =
    document.querySelector('#message');


const nameError =
    document.querySelector('#name-error');

const emailError =
    document.querySelector('#email-error');

const messageError =
    document.querySelector('#message-error');

const formSuccess =
    document.querySelector('#form-success');


// 이메일 형식 검사
const isValidEmail = (email) => {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
};


// Form 제출
contactForm.addEventListener(
    'submit',

    async (event) => {

        event.preventDefault();


        // 기존 메시지 초기화
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formSuccess.textContent = '';


        let isValid = true;


        // 이름 검사
        if (nameInput.value.trim() === '') {

            nameError.textContent =
                '이름을 입력해주세요.';

            isValid = false;
        }


        // 이메일 검사
        if (emailInput.value.trim() === '') {

            emailError.textContent =
                '이메일을 입력해주세요.';

            isValid = false;

        } else if (
            !isValidEmail(
                emailInput.value.trim()
            )
        ) {

            emailError.textContent =
                '올바른 이메일 형식을 입력해주세요.';

            isValid = false;
        }


        // 메시지 검사
        if (messageInput.value.trim() === '') {

            messageError.textContent =
                '메시지를 입력해주세요.';

            isValid = false;
        }


        // 모든 값이 정상일 경우
        if (isValid) {

            const formData =
                new FormData(contactForm);


            try {

                const response =
                    await fetch(

                        contactForm.action,

                        {
                            method:
                                contactForm.method,

                            body:
                                formData,

                            headers: {
                                'Accept':
                                    'application/json'
                            }
                        }
                    );


                if (!response.ok) {

                    const errorData =
                        await response.json();


                    console.error(
                        'Formspree 상태 코드:',
                        response.status
                    );


                    console.error(
                        'Formspree 오류 내용:',
                        errorData
                    );


                    throw new Error(
                        '문의 전송 실패'
                    );
                }


                formSuccess.textContent =
                    '문의가 정상적으로 전송되었습니다.';


                contactForm.reset();


            } catch (error) {

                console.error(error);


                formSuccess.textContent =
                    '문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
            }
        }
    }
);


// =========================
// Contact Form Input Event
// =========================

nameInput.addEventListener(
    'input',

    () => {

        nameError.textContent = '';

        formSuccess.textContent = '';
    }
);


emailInput.addEventListener(
    'input',

    () => {

        emailError.textContent = '';

        formSuccess.textContent = '';
    }
);


messageInput.addEventListener(
    'input',

    () => {

        messageError.textContent = '';

        formSuccess.textContent = '';
    }
);


// =========================
// Hero Typing Effect
// =========================

const typingText =
    document.querySelector('#typing-text');


const introText =
    '안녕하세요, 이은지입니다.';


let typingIndex = 0;


const typeText = () => {

    if (typingIndex < introText.length) {

        typingText.textContent +=
            introText[typingIndex];


        typingIndex += 1;


        setTimeout(
            typeText,
            100
        );
    }
};


typeText();


// =========================
// GitHub API
// =========================

const githubUsername =
    'dldma';


const projectList =
    document.querySelector(
        '#project-list'
    );


const projectFilters =
    document.querySelector(
        '#project-filters'
    );


let allRepos = [];


// =========================
// Loading 상태
// =========================

const renderLoading = () => {

    projectList.innerHTML = `

        <p class="project-status">

            &gt; 프로젝트를 불러오는 중...

        </p>

    `;
};


// =========================
// Error 상태
// =========================

const renderError = () => {

    projectList.innerHTML = `

        <div class="project-status">

            <p>
                프로젝트를 불러올 수 없습니다.
            </p>

            <button
                type="button"
                id="retry-projects">

                다시 시도

            </button>

        </div>

    `;


    const retryButton =
        document.querySelector(
            '#retry-projects'
        );


    retryButton.addEventListener(
        'click',

        () => {

            fetchProjects();
        }
    );
};


// =========================
// Project Render
// =========================

const renderProjects = (repos) => {


    // Repository가 없는 경우
    if (repos.length === 0) {

        projectList.innerHTML = `

            <p class="project-status">

                표시할 프로젝트가 없습니다.

            </p>

        `;


        return;
    }


    const projectCards =
        repos.map((repo) => {


            const {

                name,

                description,

                html_url,

                language,

                stargazers_count

            } = repo;


            return `

                <article class="project-card">


                    <div class="project-preview">

                        <strong>

                            $ repo: ${name}

                        </strong>


                        <div>

                            &gt; language:
                            ${language || '정보 없음'}

                            <br>

                            &gt; stars:
                            ${stargazers_count}

                            <br>

                            &gt; status:
                            [PUBLIC]

                        </div>

                    </div>


                    <div class="project-card-body">


                        <h3>

                            ${name}

                        </h3>


                        <p>

                            ${
                                description ||
                                '프로젝트 설명이 없습니다.'
                            }

                        </p>


                        <div class="project-meta">


                            <span>

                                ${
                                    language ||
                                    '정보 없음'
                                }

                            </span>


                            <span>

                                ★ ${stargazers_count}

                            </span>


                        </div>


                        <a

                            href="${html_url}"

                            target="_blank"

                            rel="noopener noreferrer">

                            GitHub 보기 →

                        </a>


                    </div>


                </article>

            `;
        });


    projectList.innerHTML =
        projectCards.join('');
};


// =========================
// Repository Filter 생성
// =========================

const renderFilters = (repos) => {


    const languages =
        repos

            .map(
                (repo) =>
                    repo.language
            )

            .filter(
                (language) =>
                    language
            );


    const uniqueLanguages =
        [...new Set(languages)];


    const filterButtons = [

        'All',

        ...uniqueLanguages

    ];


    projectFilters.innerHTML =

        filterButtons

            .map((language) => {


                const activeClass =

                    language === 'All'

                        ? 'active'

                        : '';


                return `

                    <button

                        type="button"

                        class="filter-button ${activeClass}"

                        data-language="${language}">

                        ${language}

                    </button>

                `;

            })

            .join('');
};


// =========================
// Filter Click Event
// =========================

projectFilters.addEventListener(

    'click',

    (event) => {


        if (
            !event.target.classList
                .contains(
                    'filter-button'
                )
        ) {

            return;
        }


        const buttons =

            projectFilters
                .querySelectorAll(
                    '.filter-button'
                );


        buttons.forEach((button) => {

            button.classList.remove(
                'active'
            );
        });


        event.target.classList.add(
            'active'
        );


        const selectedLanguage =

            event.target
                .dataset
                .language;


        // All 버튼
        if (
            selectedLanguage ===
            'All'
        ) {

            renderProjects(
                allRepos
            );

            return;
        }


        // 언어별 Repository 필터
        const filteredRepos =

            allRepos.filter(
                (repo) => {

                    return (
                        repo.language ===
                        selectedLanguage
                    );
                }
            );


        renderProjects(
            filteredRepos
        );
    }
);


// =========================
// GitHub Repository Fetch
// =========================

const fetchProjects =
    async () => {


        renderLoading();


        try {


            const response =
                await fetch(

                    `https://api.github.com/users/${githubUsername}/repos`

                );


            if (!response.ok) {

                throw new Error(

                    `GitHub API 요청 실패: ${response.status}`

                );
            }


            const repos =
                await response.json();


            allRepos =
                repos;


            renderFilters(
                allRepos
            );


            renderProjects(
                allRepos
            );


        } catch (error) {


            console.error(error);


            renderError();
        }
    };


// GitHub Repository 불러오기
fetchProjects();
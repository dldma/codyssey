# 터미널 실행 환경 확인 로그

## 1. Linux 커널 및 시스템 정보 확인

현재 실행 중인 Linux 커널, 호스트 이름, 시스템 구조를 확인하기 위해 `uname -a` 명령어를 실행하였다.

### 입력

```bash
uname -a
```

### 출력

```text
Linux BOOK-5240G27HO6 6.18.33.2-microsoft-standard-WSL2 #1 SMP PREEMPT_DYNAMIC Thu Jun 18 21:54:43 UTC 2026 x86_64 GNU/Linux
```

### 확인 결과

- Linux가 WSL2 환경에서 실행되고 있다.
- 시스템 구조는 `x86_64`이다.
- 사용 중인 커널은 Microsoft의 WSL2용 Linux 커널이다.

---

## 2. Ubuntu 배포판 정보 확인

현재 사용 중인 Linux 배포판의 이름과 버전을 확인하기 위해 `/etc/os-release` 파일의 내용을 출력하였다.

### 입력

```bash
cat /etc/os-release
```

### 출력

```text
PRETTY_NAME="Ubuntu 26.04 LTS"
NAME="Ubuntu"
VERSION_ID="26.04"
VERSION="26.04 (Resolute Raccoon)"
VERSION_CODENAME=resolute
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=resolute
LOGO=ubuntu-logo
```

### 확인 결과

- Linux 배포판은 Ubuntu이다.
- 설치된 버전은 Ubuntu 26.04 LTS이다.
- 배포판 코드명은 `Resolute Raccoon`이다.

---

## 3. 기본 Shell 확인

현재 사용자 계정에 설정된 기본 Shell을 확인하기 위해 `SHELL` 환경 변수의 값을 출력하였다.

### 입력

```bash
echo $SHELL
```

### 출력

```text
/bin/bash
```

### 확인 결과

현재 기본 Shell은 Bash이며 실행 경로는 `/bin/bash`이다.

---

## 4. Git 버전 확인

현재 설치된 Git의 버전을 확인하여 Git 명령어를 사용할 수 있는 상태인지 점검하였다.

### 입력

```bash
git --version
```

### 출력

```text
git version 2.53.0
```

### 확인 결과

Git 2.53.0이 정상적으로 설치되어 있다.
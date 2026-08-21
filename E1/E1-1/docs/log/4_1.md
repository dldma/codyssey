# 터미널 조작 로그

Linux CLI를 사용하여 현재 위치 확인, 파일 및 디렉토리 목록 확인, 디렉토리 이동, 파일과 디렉토리 생성, 파일 복사, 이름 변경, 이동, 내용 확인 및 삭제를 수행하였다.

명령어를 잘못 입력하거나 삭제 조건을 만족하지 못했을 때 발생한 오류도 함께 기록하고 원인을 분석하였다.

---

## 1. 현재 위치 확인

현재 터미널에서 작업 중인 디렉토리의 절대 경로를 확인하기 위해 `pwd` 명령어를 실행하였다.

### 입력

```bash
pwd
```

### 출력

```text
/home/dldmswl/codyssey/E-1-Project
```

### 확인 결과

현재 작업 위치가 `E-1-Project` 저장소의 최상위 디렉토리임을 확인하였다.

---

## 2. 파일 및 디렉토리 목록 확인

현재 디렉토리에 있는 일반 파일과 디렉토리의 목록을 확인하기 위해 `ls` 명령어를 실행하였다.

### 입력

```bash
ls
```

### 출력

```text
README.md  app  data  docs  practice
```

### 확인 결과

프로젝트 최상위 디렉토리에 다음 항목이 존재하였다.

- `README.md`
- `app`
- `data`
- `docs`
- `practice`

---

## 3. 숨김 파일을 포함한 상세 목록 확인

숨김 파일, 권한, 소유자, 파일 크기 및 수정 시간을 확인하기 위해 `ls -la` 명령어를 실행하였다.

### 입력

```bash
ls -la
```

### 출력

```text
total 40
drwxr-xr-x 7 dldmswl dldmswl  4096 Aug  3 19:26 .
drwxr-xr-x 5 dldmswl dldmswl  4096 Aug  3 19:15 ..
drwxr-xr-x 7 dldmswl dldmswl  4096 Aug  3 21:37 .git
-rw-r--r-- 1 dldmswl dldmswl 10855 Aug  3 21:46 README.md
drwxr-xr-x 2 dldmswl dldmswl  4096 Aug  3 19:27 app
drwxr-xr-x 2 dldmswl dldmswl  4096 Aug  3 19:27 data
drwxr-xr-x 3 dldmswl dldmswl  4096 Aug  3 21:41 docs
drwxr-xr-x 2 dldmswl dldmswl  4096 Aug  3 19:27 practice
```

### 확인 결과

- `.git`은 이름이 `.`으로 시작하는 숨김 디렉토리이다.
- `README.md`는 일반 파일이며 권한은 `-rw-r--r--`이다.
- `app`, `data`, `docs`, `practice`는 디렉토리이며 권한은 `drwxr-xr-x`이다.
- `ls -la`를 사용하면 일반적인 `ls`에서 보이지 않는 숨김 파일과 디렉토리도 확인할 수 있다.

---

## 4. 하위 디렉토리로 이동

`practice` 디렉토리로 이동하기 위해 `cd` 명령어를 실행하였다.

### 입력

```bash
cd practice
```

### 출력

```text
출력 없음
```

### 변경된 위치

```text
/home/dldmswl/codyssey/E-1-Project/practice
```

### 확인 결과

`cd practice` 명령어를 사용하여 현재 디렉토리 아래의 `practice` 디렉토리로 이동하였다.

---

## 5. 상위 디렉토리로 이동

현재 위치에서 한 단계 위의 디렉토리로 이동하기 위해 `cd ..` 명령어를 실행하였다.

### 입력

```bash
cd ..
```

### 출력

```text
출력 없음
```

### 변경된 위치

```text
/home/dldmswl/codyssey/E-1-Project
```

### 확인 결과

`..`은 현재 디렉토리의 상위 디렉토리를 의미한다.

---

## 6. 잘못 입력한 디렉토리 이동 명령어

홈 디렉토리로 이동하려고 `cd~`를 입력했으나 명령어가 정상적으로 실행되지 않았다.

### 잘못된 입력

```bash
cd~
```

### 출력

```text
Command 'cd~' not found, did you mean:
  command 'cdi' from deb cdo (2.5.4-1)
  command 'cdp' from deb irpas (0.10-10build1)
  command 'cdo' from deb cdo (2.5.4-1)
  command 'cdb' from deb tinycdb (0.81-2build1)
  command 'cd5' from deb cd5 (0.1-4build1)
  command 'cdw' from deb cdw (0.8.1-3build4)
  command 'cde' from deb cde (0.1+git9-g551e54d-3)
  command 'cdv' from deb erlang-observer (1:27.3.4.6+dfsg-1)
Try: sudo apt install <deb name>
```

### 원인

`cd` 명령어와 이동 경로인 `~` 사이에 공백을 입력하지 않았다.

Bash는 `cd~` 전체를 하나의 명령어 이름으로 해석했지만, 해당 명령어가 존재하지 않아 오류가 발생하였다.

### 올바른 형식

```bash
cd ~
```

또는 프로젝트 디렉토리로 바로 이동하려면 다음 명령어를 사용한다.

```bash
cd ~/codyssey/E-1-Project
```

### 수정된 입력

```bash
cd ~/codyssey/E-1-Project
```

### 출력

```text
출력 없음
```

### 확인 결과

명령어와 경로 사이에는 공백이 필요하다는 것을 확인하였다.

---

## 7. 일반 디렉토리 생성

새로운 디렉토리를 생성하기 위해 `mkdir` 명령어를 사용하였다.

### 입력

```bash
mkdir cli-practice
```

### 출력

```text
출력 없음
```

### 확인 결과

현재 디렉토리에 `cli-practice` 디렉토리를 생성하였다.

---

## 8. 여러 단계의 디렉토리 생성

상위 디렉토리와 하위 디렉토리를 한 번에 생성하기 위해 `mkdir -p` 명령어를 사용하였다.

### 입력

```bash
mkdir -p parent/child
```

### 출력

```text
출력 없음
```

### 확인 결과

다음과 같은 디렉토리 구조가 생성되었다.

```text
parent/
└── child/
```

`-p` 옵션을 사용하면 필요한 상위 디렉토리까지 함께 생성할 수 있다.

---

## 9. 빈 파일 생성

내용이 없는 빈 파일을 생성하기 위해 `touch` 명령어를 사용하였다.

### 입력

```bash
touch original.txt
```

### 출력

```text
출력 없음
```

### 확인 결과

현재 디렉토리에 빈 파일인 `original.txt`를 생성하였다.

---

## 10. 파일에 내용 작성

`echo` 명령어와 출력 리디렉션 기호 `>`를 사용하여 파일에 문자열을 저장하였다.

### 입력

```bash
echo "Linux CLI practice" > original.txt
```

### 출력

```text
출력 없음
```

### 확인 결과

`original.txt` 파일에 다음 문자열이 저장되었다.

```text
Linux CLI practice
```

`>` 기호는 명령어의 출력 내용을 지정한 파일에 저장하며, 기존 내용이 있다면 덮어쓴다.

---

## 11. 파일 복사

`original.txt` 파일을 `copy.txt`라는 이름으로 복사하기 위해 `cp` 명령어를 사용하였다.

### 입력

```bash
cp original.txt copy.txt
```

### 출력

```text
출력 없음
```

### 확인 결과

`original.txt`와 같은 내용을 가진 `copy.txt` 파일이 생성되었다.

---

## 12. 복사 대상 디렉토리 생성

파일을 다른 디렉토리로 복사하기 위해 `result` 디렉토리를 생성하였다.

### 입력

```bash
mkdir result
```

### 출력

```text
출력 없음
```

생성된 `result`가 파일인지 디렉토리인지 확인하기 위해 `ls -ld` 명령어를 실행하였다.

### 입력

```bash
ls -ld result
```

### 출력

```text
drwxr-xr-x 2 dldmswl dldmswl 4096 Aug  3 22:14 result
```

### 확인 결과

출력의 첫 번째 문자가 `d`이므로 `result`가 디렉토리임을 확인하였다.

```text
drwxr-xr-x
^
디렉토리를 의미
```

---

## 13. 파일을 디렉토리 안으로 복사

`original.txt` 파일을 `result` 디렉토리 내부로 복사하였다.

### 입력

```bash
cp original.txt result/
```

### 출력

```text
출력 없음
```

복사 결과를 확인하기 위해 `result` 디렉토리의 상세 목록을 출력하였다.

### 입력

```bash
ls -la result
```

### 출력

```text
total 12
drwxr-xr-x  2 dldmswl dldmswl 4096 Aug  3 22:15 .
drwxr-xr-x 10 dldmswl dldmswl 4096 Aug  3 22:14 ..
-rw-r--r--  1 dldmswl dldmswl   19 Aug  3 22:15 original.txt
```

### 확인 결과

`result` 디렉토리 안에 `original.txt` 파일이 정상적으로 복사되었다.

---

## 14. 복사된 파일 내용 확인

복사된 파일의 내용이 원본과 동일한지 확인하기 위해 `cat` 명령어를 실행하였다.

### 입력

```bash
cat result/original.txt
```

### 출력

```text
Linux CLI practice
```

### 확인 결과

`result/original.txt` 파일에 원본 파일과 동일한 문자열이 저장되어 있었다.

---

## 15. 파일 이름 변경

`copy.txt` 파일의 이름을 `renamed.txt`로 변경하기 위해 `mv` 명령어를 사용하였다.

### 입력

```bash
mv copy.txt renamed.txt
```

### 출력

```text
출력 없음
```

### 확인 결과

`copy.txt` 파일의 이름이 `renamed.txt`로 변경되었다.

`mv` 명령어는 파일을 이동할 때뿐 아니라 같은 위치에서 파일 이름을 변경할 때도 사용할 수 있다.

---

## 16. 파일을 다른 디렉토리로 이동

이름을 변경한 `renamed.txt` 파일을 `result` 디렉토리 안으로 이동하였다.

### 입력

```bash
mv renamed.txt result/
```

### 출력

```text
출력 없음
```

### 확인 결과

`renamed.txt` 파일이 프로젝트 최상위 디렉토리에서 `result` 디렉토리 내부로 이동하였다.

현재 `result` 디렉토리에는 다음 파일들이 존재한다.

```text
result/
├── original.txt
└── renamed.txt
```

---

## 17. 원본 파일 내용 확인

프로젝트 최상위 디렉토리에 있던 `original.txt`의 내용을 확인하였다.

### 입력

```bash
cat original.txt
```

### 출력

```text
Linux CLI practice
```

### 확인 결과

`original.txt` 파일에 작성한 문자열이 정상적으로 저장되어 있었다.

---

## 18. 일반 파일 삭제

프로젝트 최상위 디렉토리의 `original.txt` 파일을 삭제하기 위해 `rm` 명령어를 사용하였다.

### 입력

```bash
rm original.txt
```

### 출력

```text
출력 없음
```

### 확인 결과

프로젝트 최상위 디렉토리에 있던 `original.txt`가 삭제되었다.

단, 앞서 `result` 디렉토리에 복사한 `result/original.txt`는 별개의 파일이므로 그대로 남아 있다.

---

## 19. 내용이 있는 디렉토리 삭제 시도

`result` 디렉토리를 삭제하기 위해 `rmdir` 명령어를 실행하였다.

### 입력

```bash
rmdir result
```

### 출력

```text
rmdir: failed to remove 'result': Directory not empty
```

### 원인

`rmdir` 명령어는 내용이 없는 빈 디렉토리만 삭제할 수 있다.

현재 `result` 디렉토리에는 다음 파일이 남아 있어 삭제되지 않았다.

```text
result/
├── original.txt
└── renamed.txt
```

### 확인 결과

디렉토리 안에 파일이 있으면 내부 파일을 먼저 삭제한 뒤 `rmdir`을 사용해야 한다.

---

## 20. `rm`을 사용한 디렉토리 삭제 시도

일반 파일 삭제 명령어인 `rm`을 사용하여 `result` 디렉토리를 삭제하려고 시도하였다.

### 입력

```bash
rm result
```

### 출력

```text
rm: cannot remove 'result': Is a directory
```

### 원인

옵션 없이 사용하는 `rm`은 일반 파일을 삭제하는 명령어이므로 디렉토리를 직접 삭제할 수 없다.

### 확인 결과

- 일반 파일 삭제: `rm 파일명`
- 빈 디렉토리 삭제: `rmdir 디렉토리명`
- 내용이 있는 디렉토리 삭제: 내부 파일을 먼저 삭제하거나 `rm -r 디렉토리명` 사용

이번 실습에서는 `rm`과 `rmdir`을 각각 사용하기 위해 내부 파일을 먼저 삭제한 뒤 빈 디렉토리를 삭제한다.

---

## 21. 잘못된 디렉토리 이름 입력

`result` 디렉토리의 내용을 확인하려고 했으나 이름을 `rssult`로 잘못 입력하였다.

### 잘못된 입력

```bash
ls -la rssult
```

### 출력

```text
ls: cannot access 'rssult': No such file or directory
```

### 원인

실제 디렉토리 이름은 `result`이지만 `rssult`로 오타를 입력하였다.

### 올바른 입력

```bash
ls -la result
```

### 확인 결과

Linux 명령어에서는 파일과 디렉토리 이름을 정확하게 입력해야 하며, 이름이 일치하지 않으면 해당 경로가 없다는 오류가 발생한다.

---

## 22. 남은 파일 및 디렉토리 삭제

`result` 디렉토리 내부의 파일을 먼저 확인한 뒤 각각 삭제한다.

### 입력 예정

```bash
ls -la result
```

### 출력

```text
실행 결과 작성 예정
```

`result` 안의 두 파일을 삭제한다.

### 입력 예정

```bash
rm result/original.txt
rm result/renamed.txt
```

### 출력

```text
실행 결과 작성 예정
```

파일 삭제 후 비어 있는 `result` 디렉토리를 삭제한다.

### 입력 예정

```bash
rmdir result
```

### 출력

```text
실행 결과 작성 예정
```

### 최종 확인 예정

```bash
ls -ld result
```

### 예상 출력

```text
ls: cannot access 'result': No such file or directory
```

위 결과가 나오면 `result` 디렉토리가 정상적으로 삭제된 것이다.

---

## 23. 수행 결과

현재까지 다음 터미널 조작을 수행하였다.

- [x] 현재 위치 확인
- [x] 일반 파일 및 디렉토리 목록 확인
- [x] 숨김 파일을 포함한 상세 목록 확인
- [x] 하위 디렉토리 이동
- [x] 상위 디렉토리 이동
- [x] 절대 경로와 홈 디렉토리 경로를 이용한 이동
- [x] 일반 디렉토리 생성
- [x] 여러 단계의 디렉토리 생성
- [x] 빈 파일 생성
- [x] 파일에 내용 작성
- [x] 파일 복사
- [x] 파일 이름 변경
- [x] 파일 이동
- [x] 파일 내용 확인
- [x] 일반 파일 삭제
- [x] 내용이 있는 디렉토리 삭제 오류 확인
- [x] 파일과 디렉토리 삭제 명령어 차이 확인
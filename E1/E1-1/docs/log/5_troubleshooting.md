# 5. 트러블슈팅 기록

## 1. Git 저장소가 아닌 위치에서 Git 명령어 실행

### 문제 상황

프로젝트 파일을 Git에 추가하기 위해 `git add .`을 실행했지만 다음 오류가 발생하였다.

### 실행 코드

```bash
git add .
```

### 오류 결과

```text
fatal: not a git repository (or any of the parent directories): .git
```

### 원인

명령어를 실행한 위치는 다음과 같았다.

```text
/home/dldmswl/codyssey
```

해당 디렉토리에는 `.git` 디렉토리가 없으므로 Git 저장소로 인식되지 않았다.

실제 Git 저장소는 다음 경로에 있었다.

```text
/home/dldmswl/codyssey/E-1-Project
```

### 해결 과정

프로젝트 저장소 디렉토리로 이동한 뒤 Git 상태를 다시 확인하였다.

```bash
cd ~/codyssey/E-1-Project
git status
```

프로젝트 디렉토리에서 다시 파일을 추가하였다.

```bash
git add .
```

### 해결 결과

Git 저장소 내부에서 명령어를 실행하자 오류 없이 파일이 스테이징되었다.

### 확인한 내용

- Git 명령어는 `.git` 디렉토리가 존재하는 저장소 내부에서 실행해야 한다.
- `pwd` 명령어를 통해 현재 경로를 먼저 확인할 수 있다.
- `git status`를 실행하면 현재 위치가 Git 저장소인지 확인할 수 있다.

---

## 2. 중지된 컨테이너에서 docker exec 실행

### 문제 상황

`ubuntu-shell` 컨테이너 내부에 진입하기 위해 `docker exec` 명령어를 실행했지만 오류가 발생하였다.

### 실행 코드

```bash
docker exec -it ubuntu-shell bash
```

### 오류 결과

```text
Error response from daemon: container 9391942d87da40bfee8c05e183542c59b553ac6cda393a8d5ae030bfb447d678 is not running
```

### 원인

`docker exec`는 현재 실행 중인 컨테이너에 새로운 명령어나 셸을 실행하는 명령어이다.

당시 `ubuntu-shell` 컨테이너가 `Exited` 상태였기 때문에 `docker exec`를 사용할 수 없었다.

### 해결 과정

먼저 중지된 컨테이너를 다시 시작하였다.

```bash
docker start ubuntu-shell
```

컨테이너가 실행 중인지 확인하였다.

```bash
docker ps
```

확인 결과 `ubuntu-shell`이 `Up` 상태로 표시되었다.

그다음 `docker exec`를 다시 실행하였다.

```bash
docker exec -it ubuntu-shell bash
```

### 해결 결과

컨테이너 내부의 Bash 터미널에 정상적으로 진입하였다.

```text
root@9391942d87da:/#
```

컨테이너 내부에서 다음 명령어도 정상적으로 실행되었다.

```bash
echo "Entered with docker exec"
pwd
```

```text
Entered with docker exec
/
```

### 확인한 내용

- `docker exec`는 실행 중인 컨테이너에서만 사용할 수 있다.
- 컨테이너가 중지된 경우 `docker start`로 먼저 실행해야 한다.
- `docker ps`는 실행 중인 컨테이너를 확인한다.
- `docker ps -a`는 중지된 컨테이너를 포함한 전체 목록을 확인한다.

---

## 3. 추가로 확인한 입력 오류

### Docker 명령어 오타

다음과 같이 `docker`를 `doker`로 잘못 입력하였다.

```bash
doker ps
```

오류 결과:

```text
Command 'doker' not found
```

올바른 명령어로 수정하여 해결하였다.

```bash
docker ps
```

### Git 명령어 누락

다음과 같이 `git`을 제외하고 `add .`만 입력하였다.

```bash
add .
```

오류 결과:

```text
Command 'add' not found
```

올바른 명령어로 수정하였다.

```bash
git add .
```

명령어를 입력할 때 명령어 이름과 띄어쓰기를 정확히 확인해야 한다는 것을 알 수 있었다.

---

## 4. 트러블슈팅 결과

- [x] Git 저장소가 아닌 위치에서 발생한 오류 원인 확인
- [x] Git 저장소 경로로 이동하여 오류 해결
- [x] 중지된 컨테이너에서 `docker exec`를 사용할 수 없는 원인 확인
- [x] 컨테이너를 다시 시작하여 `docker exec` 오류 해결
- [x] Docker 명령어 오타 확인
- [x] Git 명령어 누락 확인
- [x] 오류 메시지와 해결 과정을 문서로 기록

오류가 발생했을 때 바로 명령어를 반복하기보다 현재 경로, 컨테이너 상태 및 명령어 철자를 먼저 확인하는 것이 중요하다는 것을 확인하였다.
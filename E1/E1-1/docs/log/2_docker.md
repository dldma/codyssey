# Docker 운영 및 검증 로그

## 1. Docker 버전 확인

WSL2 Ubuntu 터미널에서 Docker 명령어가 정상적으로 인식되는지 확인하고, 설치된 Docker의 버전을 점검하였다.

### 입력

```bash
docker --version
```

### 출력

```text
Docker version 29.6.2, build dfc4efb
```

### 확인 결과

- Docker 명령어가 WSL2 Ubuntu 터미널에서 정상적으로 인식되었다.
- 설치된 Docker 버전은 `29.6.2`이다.
- Docker 클라이언트 설치 및 WSL 연동이 일부 정상적으로 적용된 것을 확인하였다.

---

## 2. Docker 엔진 동작 상태 확인

Docker 클라이언트가 Docker 엔진과 정상적으로 연결되는지 확인하기 위해 `docker info` 명령어를 실행하였다.

`docker info`는 Docker 클라이언트 및 서버 버전, 이미지와 컨테이너 수, 스토리지 드라이버, 운영체제 등의 정보를 확인하는 명령어이다.

### 입력

```bash
docker info
```

### 출력

```text
Client:
 Version:    29.6.2
 Context:    default
 Debug Mode: false
 Plugins:
  agent: Docker AI Agent Runner (Docker Inc.)
    Version:  v1.111.0
    Path:     /usr/local/lib/docker/cli-plugins/docker-agent
  ai: Docker AI Agent - Ask Gordon (Docker Inc.)
    Version:  v1.27.0
    Path:     /usr/local/lib/docker/cli-plugins/docker-ai
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.35.0-desktop.2
    Path:     /usr/local/lib/docker/cli-plugins/docker-buildx
  compose: Docker Compose (Docker Inc.)
    Version:  v5.3.1
    Path:     /usr/local/lib/docker/cli-plugins/docker-compose
  debug: Get a shell into any image or container (Docker Inc.)
    Version:  0.0.47
    Path:     /usr/local/lib/docker/cli-plugins/docker-debug
  desktop: Docker Desktop commands (Docker Inc.)
    Version:  v0.4.3
    Path:     /usr/local/lib/docker/cli-plugins/docker-desktop
  dhi: CLI for managing Docker Hardened Images (Docker Inc.)
    Version:  v0.0.7
    Path:     /usr/local/lib/docker/cli-plugins/docker-dhi
  extension: Manages Docker extensions (Docker Inc.)
    Version:  v0.2.31
    Path:     /usr/local/lib/docker/cli-plugins/docker-extension
  init: Creates Docker-related starter files for your project (Docker Inc.)
    Version:  v1.4.0
    Path:     /usr/local/lib/docker/cli-plugins/docker-init
  mcp: Docker MCP Plugin (Docker Inc.)
    Version:  v0.43.3
    Path:     /usr/local/lib/docker/cli-plugins/docker-mcp
  model: Docker Model Runner (Docker Inc.)
    Version:  v1.2.6
    Path:     /usr/local/lib/docker/cli-plugins/docker-model
  offload: Docker Offload (Docker Inc.)
    Version:  v0.6.9
    Path:     /usr/local/lib/docker/cli-plugins/docker-offload
  pass: Docker Pass Secrets Manager Plugin (beta) (Docker Inc.)
    Version:  v0.2.0
    Path:     /usr/local/lib/docker/cli-plugins/docker-pass
  sandbox: "docker sandbox" is deprecated, use Docker Sandboxes instead (Docker Inc.)
    Version:  v0.13.0
    Path:     /usr/local/lib/docker/cli-plugins/docker-sandbox
  scout: Docker Scout (Docker Inc.)
    Version:  v1.24.0
    Path:     /home/dldmswl/.docker/cli-plugins/docker-scout

Server:
permission denied while trying to connect to the docker API at unix:///var/run/docker.sock
```

### 확인 결과

- Docker Client 버전은 `29.6.2`로 정상적으로 확인되었다.
- Docker CLI 플러그인도 정상적으로 인식되었다.
- Docker Server 정보를 불러오는 과정에서는 다음 권한 오류가 발생하였다.

```text
permission denied while trying to connect to the docker API at unix:///var/run/docker.sock
```

- 현재 Docker 클라이언트는 설치되어 있지만, 사용자 계정이 Docker 소켓인 `/var/run/docker.sock`에 접근하지 못해 Docker 엔진과의 연결 점검에는 실패하였다.
- 따라서 현재 단계에서는 Docker 엔진이 정상적으로 작동한다고 판단할 수 없다.
- 소켓 권한과 Docker Desktop의 WSL Integration 설정을 확인한 후 다시 `docker info`를 실행해야 한다.

---

## 3. 현재 점검 상태

- [x] Docker Desktop 설치
- [x] WSL2 Ubuntu에서 Docker 명령어 인식
- [x] Docker 버전 확인
- [ ] Docker 엔진 정상 연결
- [ ] Docker Server 정보 확인
- [ ] 이미지 및 컨테이너 실행 테스트

Docker 엔진 연결 문제를 해결한 뒤 `docker info`를 다시 실행하고, 정상 출력 결과를 이 문서에 추가할 예정이다.
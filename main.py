class Quiz:
    """퀴즈 한 문제의 정보를 저장하고 관리하는 클래스"""

    def __init__(self, question, choices, answer):
        self.question = question
        self.choices = choices
        self.answer = answer

    def display(self):
        """문제와 선택지를 출력한다."""
        print(self.question)

        for number, choice in enumerate(self.choices, start=1):
            print(f"{number}. {choice}")

    def check_answer(self, user_answer):
        """입력한 번호가 정답인지 확인한다."""
        return user_answer == self.answer


def create_default_quizzes():
    """이은지 퀴즈 기본 문제 5개를 생성한다."""
    return [
        Quiz(
            question="1. 이은지의 이름은?",
            choices=["이연지", "이라임", "이지은", "이은지"],
            answer=4
        ),
        Quiz(
            question="2. 이은지가 취미로 하는 운동은?",
            choices=["복싱", "클라이밍", "자전거", "골프"],
            answer=2
        ),
        Quiz(
            question="3. 이은지의 주량은?",
            choices=["한 잔", "반 병", "한 병", "두 병"],
            answer=1
        ),
        Quiz(
            question="4. 이은지가 키우는 반려동물은?",
            choices=["강아지", "고양이", "기니피그", "사람"],
            answer=1
        ),
        Quiz(
            question="5. 이은지가 코디세이를 알게 된 경로는?",
            choices=["SNS", "친구", "이은지의 Feel", "지나가다 갑자기"],
            answer=2
        )
    ]


def show_menu():
    """퀴즈 게임의 메인 메뉴를 출력한다."""
    print()
    print("=" * 40)
    print("           이은지 퀴즈")
    print("=" * 40)
    print("1. 퀴즈 풀기")
    print("2. 퀴즈 추가")
    print("3. 퀴즈 목록")
    print("4. 점수 확인")
    print("5. 종료")
    print("=" * 40)


def get_menu_choice():
    """1~5 사이의 메뉴 번호를 입력받는다."""
    while True:
        try:
            user_input = input("선택: ").strip()

            if user_input == "":
                print("빈 값은 입력할 수 없습니다.")
                continue

            if not user_input.isdigit():
                print("숫자를 입력해 주세요.")
                continue

            choice = int(user_input)

            if choice < 1 or choice > 5:
                print("1~5 사이의 숫자를 입력해 주세요.")
                continue

            return choice

        except (KeyboardInterrupt, EOFError):
            print("\n입력이 중단되었습니다.")
            return 5


def main():
    """퀴즈 게임의 전체 실행 흐름을 관리한다."""
    quizzes = create_default_quizzes()

    while True:
        show_menu()
        choice = get_menu_choice()

        if choice == 1:
            print("\n퀴즈 풀기 기능은 준비 중입니다.")

        elif choice == 2:
            print("\n퀴즈 추가 기능은 준비 중입니다.")

        elif choice == 3:
            print(f"\n현재 등록된 퀴즈는 {len(quizzes)}개입니다.")

        elif choice == 4:
            print("\n점수 확인 기능은 준비 중입니다.")

        elif choice == 5:
            print("\n퀴즈 게임을 종료합니다.")
            break


if __name__ == "__main__":
    main()
def show_menu():
    """퀴즈 게임의 메인 메뉴를 출력한다."""
    print()
    print("=" * 40)
    print("        나만의 퀴즈 게임")
    print("=" * 40)
    print("1. 퀴즈 풀기")
    print("2. 퀴즈 추가")
    print("3. 퀴즈 목록")
    print("4. 점수 확인")
    print("5. 종료")
    print("=" * 40)


def get_menu_choice():
    """사용자에게 1~5 사이의 메뉴 번호를 입력받는다."""
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
    while True:
        show_menu()
        choice = get_menu_choice()

        if choice == 1:
            print("\n퀴즈 풀기 기능은 준비 중입니다.")

        elif choice == 2:
            print("\n퀴즈 추가 기능은 준비 중입니다.")

        elif choice == 3:
            print("\n퀴즈 목록 기능은 준비 중입니다.")

        elif choice == 4:
            print("\n점수 확인 기능은 준비 중입니다.")

        elif choice == 5:
            print("\n퀴즈 게임을 종료합니다.")
            break


if __name__ == "__main__":
    main()
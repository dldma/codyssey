import json
from pathlib import Path

class Quiz:
    """퀴즈 한 문제를 표현하는 클래스"""

    def __init__(self, question, choices, answer):
        self.question = question
        self.choices = choices
        self.answer = answer

    def display(self, question_number):
        """문제와 선택지를 출력한다."""
        print("-" * 40)
        print(f"[문제 {question_number}]")
        print(self.question)
        print()

        for number, choice in enumerate(self.choices, start=1):
            print(f"{number}. {choice}")

    def check_answer(self, user_answer):
        """입력한 번호가 정답인지 확인한다."""
        return user_answer == self.answer

    def to_dict(self):
        """Quiz 객체를 JSON에 저장할 딕셔너리로 변환한다."""
        return {
            "question": self.question,
            "choices": self.choices,
            "answer": self.answer,
        }

    @classmethod
    def from_dict(cls, data):
        """딕셔너리 데이터를 Quiz 객체로 변환한다."""
        question = data["question"]
        choices = data["choices"]
        answer = data["answer"]

        if not isinstance(question, str) or not question.strip():
            raise ValueError("문제 형식이 올바르지 않습니다.")

        if not isinstance(choices, list) or len(choices) != 4:
            raise ValueError("선택지는 4개여야 합니다.")

        if not isinstance(answer, int) or not 1 <= answer <= 4:
            raise ValueError("정답은 1~4 사이여야 합니다.")

        return cls(
            question=question.strip(),
            choices=[str(choice).strip() for choice in choices],
            answer=answer,
        )

def create_default_quizzes():
    """이은지 퀴즈 기본 문제 5개를 생성한다."""
    return [
        Quiz(
            question="이름은?",
            choices=["이연지", "이라임", "이지은", "이은지"],
            answer=4,
        ),
        Quiz(
            question="취미로 하는 운동은?",
            choices=["복싱", "클라이밍", "자전거", "골프"],
            answer=2,
        ),
        Quiz(
            question="주량은?",
            choices=["한 잔", "반 병", "한 병", "두 병"],
            answer=1,
        ),
        Quiz(
            question="키우는 반려동물은?",
            choices=["강아지", "고양이", "기니피그", "사람"],
            answer=1,
        ),
        Quiz(
            question="코디세이를 알게 된 경로는?",
            choices=["SNS", "친구", "이은지의 Feel", "지나가다 갑자기"],
            answer=2,
        ),
    ]


class QuizGame:
    """퀴즈 게임 전체를 관리하는 클래스"""

    def __init__(self):
        self.state_file = Path(__file__).resolve().parent / "state.json"
        self.quizzes = []
        self.best_score = None
        self.load_state()

    def use_default_state(self):
        """기본 퀴즈와 초기 점수를 설정한다."""
        self.quizzes = create_default_quizzes()
        self.best_score = None

    def load_state(self):
        """state.json에서 퀴즈와 최고 점수를 불러온다."""
        try:
            with self.state_file.open("r", encoding="utf-8") as file:
                data = json.load(file)

            quiz_data = data["quizzes"]

            if not isinstance(quiz_data, list):
                raise ValueError("퀴즈 목록 형식이 올바르지 않습니다.")

            self.quizzes = [
                Quiz.from_dict(item)
                for item in quiz_data
            ]

            best_score = data.get("best_score")

            if best_score is not None:
                if (
                    not isinstance(best_score, int)
                    or best_score < 0
                    or best_score > 100
                ):
                    raise ValueError("최고 점수 형식이 올바르지 않습니다.")

            self.best_score = best_score

            score_text = (
                "없음"
                if self.best_score is None
                else f"{self.best_score}점"
            )

            print(
                f"저장된 데이터를 불러왔습니다. "
                f"(퀴즈 {len(self.quizzes)}개, "
                f"최고 점수 {score_text})"
            )

        except FileNotFoundError:
            print("state.json이 없어 기본 퀴즈를 사용합니다.")
            self.use_default_state()
            self.save_state()

        except (
            json.JSONDecodeError,
            KeyError,
            TypeError,
            ValueError,
            OSError,
        ):
            print(
                "state.json이 손상되어 "
                "기본 퀴즈 데이터로 복구합니다."
            )
            self.use_default_state()
            self.save_state()

    def save_state(self):
        """퀴즈와 최고 점수를 state.json에 저장한다."""
        data = {
            "quizzes": [
                quiz.to_dict()
                for quiz in self.quizzes
            ],
            "best_score": self.best_score,
        }

        try:
            with self.state_file.open("w", encoding="utf-8") as file:
                json.dump(
                    data,
                    file,
                    ensure_ascii=False,
                    indent=4,
                )

            return True

        except OSError as error:
            print(f"데이터를 저장하지 못했습니다: {error}")
            return False

    def show_menu(self):
        """메인 메뉴를 출력한다."""
        print()
        print("=" * 40)
        print("             이은지 퀴즈")
        print("=" * 40)
        print("1. 퀴즈 풀기")
        print("2. 퀴즈 추가")
        print("3. 퀴즈 목록")
        print("4. 점수 확인")
        print("5. 종료")
        print("=" * 40)

    def get_number(self, message, minimum, maximum):
        """지정한 범위의 숫자를 입력받는다."""
        while True:
            try:
                user_input = input(message).strip()

                if user_input == "":
                    print("빈 값은 입력할 수 없습니다.")
                    continue

                number = int(user_input)

                if number < minimum or number > maximum:
                    print(f"{minimum}~{maximum} 사이의 숫자를 입력해 주세요.")
                    continue

                return number

            except ValueError:
                print("숫자를 입력해 주세요.")

            except (KeyboardInterrupt, EOFError):
                print("\n입력이 중단되었습니다.")
                return None

    def get_text(self, message):
        """빈 값이 아닌 문자열을 입력받는다."""
        while True:
            try:
                text = input(message).strip()

                if text == "":
                    print("빈 값은 입력할 수 없습니다.")
                    continue

                return text

            except (KeyboardInterrupt, EOFError):
                print("\n입력이 중단되었습니다.")
                return None

    def play_quiz(self):
        """저장된 퀴즈를 순서대로 출제한다."""
        if not self.quizzes:
            print("\n등록된 퀴즈가 없습니다.")
            return

        correct_count = 0
        total_count = len(self.quizzes)

        print()
        print(f"이은지 퀴즈를 시작합니다! 총 {total_count}문제입니다.")

        for question_number, quiz in enumerate(self.quizzes, start=1):
            print()
            quiz.display(question_number)

            user_answer = self.get_number(
                message="정답 번호를 입력하세요: ",
                minimum=1,
                maximum=4,
            )

            if user_answer is None:
                print("퀴즈 풀이를 중단하고 메뉴로 돌아갑니다.")
                return

            if quiz.check_answer(user_answer):
                print("정답입니다!")
                correct_count += 1
            else:
                correct_choice = quiz.choices[quiz.answer - 1]
                print(
                    f"오답입니다. 정답은 "
                    f"{quiz.answer}번 {correct_choice}입니다."
                )

        score = int(correct_count / total_count * 100)

        print()
        print("=" * 40)
        print(
            f"결과: {total_count}문제 중 "
            f"{correct_count}문제 정답"
        )
        print(f"점수: {score}점")

        if self.best_score is None or score > self.best_score:
            self.best_score = score
            print("새로운 최고 점수입니다!")

        self.save_state()
        print("=" * 40)

    def add_quiz(self):
        """새로운 퀴즈를 입력받아 저장한다."""
        print()
        print("=" * 40)
        print("새로운 퀴즈를 추가합니다.")
        print("=" * 40)

        question = self.get_text("문제를 입력하세요: ")

        if question is None:
            print("퀴즈 추가를 취소합니다.")
            return

        choices = []

        for number in range(1, 5):
            choice = self.get_text(f"선택지 {number}: ")

            if choice is None:
                print("퀴즈 추가를 취소합니다.")
                return

            choices.append(choice)

        answer = self.get_number(
            message="정답 번호를 입력하세요 (1~4): ",
            minimum=1,
            maximum=4,
        )

        if answer is None:
            print("퀴즈 추가를 취소합니다.")
            return

        new_quiz = Quiz(
            question=question,
            choices=choices,
            answer=answer,
        )

        self.quizzes.append(new_quiz)

        if self.save_state():
            print()
            print("퀴즈가 추가되고 저장되었습니다.")
            print(f"현재 등록된 퀴즈: {len(self.quizzes)}개")

    def run(self):
        """퀴즈 게임을 실행한다."""
        while True:
            self.show_menu()

            choice = self.get_number(
                message="선택: ",
                minimum=1,
                maximum=5,
            )

            if choice is None:
                self.save_state()
                print("퀴즈 게임을 안전하게 종료합니다.")
                break

            if choice == 1:
                self.play_quiz()

            elif choice == 2:
                self.add_quiz()

            elif choice == 3:
                print(
                    f"\n현재 등록된 퀴즈는 "
                    f"{len(self.quizzes)}개입니다."
                )

            elif choice == 4:
                print("\n점수 확인 기능은 준비 중입니다.")

            elif choice == 5:
                self.save_state()
                print("\n퀴즈 게임을 종료합니다.")
                break


def main():
    game = QuizGame()
    game.run()


if __name__ == "__main__":
    main()
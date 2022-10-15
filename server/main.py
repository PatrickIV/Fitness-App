COEFS_BP = {1: 1, 2: 1.25, 3: 1.4, 4: 1.55, 5: 1.70, 6: 1.85, 7: 1.92, 8: 2, 9: 2.1, 10: 2.25}
COEFS_DL = {1: 1.5, 2: 1.75, 3: 2, 4: 2.25, 5: 2.5, 6: 2.75, 7: 3, 8: 3.10, 9: 25, 10: 3.55}
COEFS_SQ = {1: 1.25, 2: 1.5, 3: 1.75, 4: 2, 5: 2.25, 6:2.5, 7: 2.75, 8: 2.85, 9: 2.95, 10: 3.05}
TITLES_STRENGTH = {1: "Strength A", 2: "Strength B", 3: "Strength C"}
TITLES_ENDURANCE = {1: "Endurance A", 2: "Endurance B", 3: "Endurance C"}
TITLES_AGILITY = {1: "Agility A", 2: "Agility B", 3: "Agility C"}

import excel_creation
import math


class User:
    def __init__(self, name, weight):
        self.weight = weight
        self.level = 1
        self.titles_unlocked = []
        self.name = name
        self.exp = 0
        self.points = 0


class Strength:
    def __init__(self, user: User, bench_press, deadlift, squat):
        self.user = user
        self.bench_press = bench_press
        self.deadlift = deadlift
        self.squat = squat

    def levelStrength(self):
        if self.user.level
        goal_weight_bp = self.user.weight * COEFS_BP[self.level]
        goal_weight_dl = self.user.weight * COEFS_DL[self.level]
        goal_weight_sq = self.user.weight * COEFS_SQ[self.level]
        avg_goal_weight = (goal_weight_sq + goal_weight_bp + goal_weight_dl) / 3
        avg_weight_lifted = (self.bench_press + self.deadlift + self.squat)
        self.user.exp += avg_weight_lifted / avg_goal_weight
        self.user.points += math.floor((self.user.exp))
        if self.user.exp >= 1:
            self.user.level += 1
            self.user.exp = 0


if __name__ == '__main__':
    user_name = str(input("Enter user's name: "))
    user_weight = float(input("Enter user's weight: "))
    user_obj = User(user_name, user_weight)
    user_weight_lifted = float(input("Enter weight lifted: "))
    s = Strength(user_obj, user_weight_lifted)
    s.levelStrength()
    print(user_obj.level)
    print(user_obj.titles_unlocked)

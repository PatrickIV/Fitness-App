import math

COEFS_BP = {1: 1, 2: 1.25, 3: 1.4, 4: 1.55, 5: 1.70,
            6: 1.85, 7: 1.92, 8: 2, 9: 2.1, 10: 2.25}
COEFS_DL = {1: 1.5, 2: 1.75, 3: 2, 4: 2.25, 5: 2.5,
            6: 2.75, 7: 3, 8: 3.10, 9: 25, 10: 3.55}
COEFS_SQ = {1: 1.25, 2: 1.5, 3: 1.75, 4: 2, 5: 2.25,
            6: 2.5, 7: 2.75, 8: 2.85, 9: 2.95, 10: 3.05}


class User:
    def __init__(self, name, weight):
        self.weight = weight
        self.level = 1
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
        if self.user.level >= 10:  # If the level surpasses 10, no coefficient is used
            goal_weight_bp = self.bench_press + 3  # Instead, + 3 for each
            goal_weight_dl = self.deadlift + 3
            goal_weight_sq = self.squat + 3
        else:
            goal_weight_bp = self.user.weight * COEFS_BP[self.user.level]
            goal_weight_dl = self.user.weight * COEFS_DL[self.user.level]
            goal_weight_sq = self.user.weight * COEFS_SQ[self.user.level]
        avg_goal_weight = (
            goal_weight_sq + goal_weight_bp + goal_weight_dl) / 3
        avg_weight_lifted = (self.bench_press + self.deadlift + self.squat)
        ratio = avg_weight_lifted / avg_goal_weight
        self.user.exp += ratio
        if ratio < 1 or self.user.level >= 10:
            pass
        else:  # If ratio is greater than 1 and level < 10, then we increase the level by the number of 100% completed
            self.user.level += math.floor(ratio)
            self.user.exp += ratio - math.floor(ratio)
        self.user.points = math.floor(self.user.exp * 10)


if __name__ == '__main__':
    my_user = User("Le", 49)
    my_bench_press = float(input('Enter your bench press weight: '))
    my_deadlift = float(input('Enter your deadlift weight: '))
    my_squat = float(input('Enter your squat press weight: '))
    my_strength = Strength(my_user, my_bench_press, my_deadlift, my_squat)
    my_strength.levelStrength()
    print(my_user.points)
    print(my_user.exp)

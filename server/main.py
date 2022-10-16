import math
import excel_data
from datetime import datetime
COEFS_BP = {1: 0.5, 2: 0.75, 3: 1.2, 4: 1.35, 5: 1.55, 6: 1.70, 7: 1.80, 8: 1.90, 9: 2, 10: 2.25}
COEFS_DL = {1: 0.5, 2: 0.75, 3: 1.3, 4: 1.5, 5: 1.7, 6: 1.9, 7: 2.1, 8: 2.35, 9: 2.5, 10: 2.7}
COEFS_SQ = {1: 0.5, 2: 0.75, 3: 1.2, 4: 1.40, 5: 1.60, 6: 1.80, 7: 1.95, 8: 2.15, 9: 2.30, 10: 2.5}


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
        time = excel_data.fitQuest(self.user.name, 'Time')
        time.add_entry(datetime.today().strftime('%Y-%m-%d'))
        self.bench_press = bench_press
        self.bench = excel_data.fitQuest(self.user.name, 'Bench Press')
        self.bench.add_entry(bench_press)
        self.deadlift = deadlift
        self.dead = excel_data.fitQuest(self.user.name, 'Dead Lift')
        self.dead.add_entry(deadlift)
        self.squat = squat
        self.sq = excel_data.fitQuest(self.user.name, 'Squat')
        self.sq.add_entry(squat)

    def levelStrength(self):
        if self.user.level >= 10: # If the level surpasses 10, no coefficient is used
            goal_weight_bp = self.bench.prev_goal() + 3 # Instead, + 3 for each
            goal_weight_dl = self.dead.prev_goal() + 3
            goal_weight_sq = self.sq.prev_goal() + 3
        else:
            goal_weight_bp = self.user.weight * COEFS_BP[self.user.level]
            goal_weight_dl = self.user.weight * COEFS_DL[self.user.level]
            goal_weight_sq = self.user.weight * COEFS_SQ[self.user.level]
        avg_goal_weight = (goal_weight_sq + goal_weight_bp + goal_weight_dl) / 3
        avg_weight_lifted = (self.bench_press + self.deadlift + self.squat)
        ratio = avg_weight_lifted / avg_goal_weight
        self.user.exp += ratio
        if ratio < 1 or self.user.level >= 10:
            pass
        else:  # If ratio is greater than 1 and level < 10, then we increase the level by the number of 100% completed
            self.user.level += math.floor(ratio)
            self.user.exp += ratio - math.floor(ratio)
        self.user.points = math.floor(self.user.exp * 10)
        level = excel_data.fitQuest(self.user.name, 'Lv')
        level.add_entry(self.user.level)
        points = excel_data.fitQuest(self.user.name, 'Strength')
        points.add_entry(self.user.points)

if __name__ == '__main__':
    my_user = User("Le", 145)
    my_bench_press = float(input('Enter your bench press weight: '))
    my_deadlift = float(input('Enter your deadlift weight: '))
    my_squat = float(input('Enter your squat press weight: '))
    my_strength = Strength(my_user, my_bench_press, my_deadlift, my_squat)
    my_strength.levelStrength()
    print(my_user.points)
    print(my_user.exp)

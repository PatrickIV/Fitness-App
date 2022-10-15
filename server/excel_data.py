from openpyxl import Workbook, load_workbook
from openpyxl.utils import get_column_letter as char
from datetime import datetime
import os

headings = ['Lv', 'Strength', 'Endurance', 'Agility', 'Bench Press', 'Dead Lift', 'Squat', 'Time']
directory = {'Time': [], 'Lv': [], 'Strength': [], 'Endurance': [], 'Agility': [], 'Bench Press': [], 'Dead Lift': [], 'Squat': []}
wb = Workbook()
ws = wb.active
class fitQuest:
    def __init__(self, name):
        self.name = name
        if os.path.isfile(f'Data/{name}.xlsx') == True:
            self.load = load_workbook(f'Data/{name}.xlsx')
            self.quest = self.load.active
            self.check_cells()
        else:
            wb.title = name
            ws.append(headings)
            wb.save(f'Data/{name}.xlsx')
    def check_cells(self):
        for row in range(1000):
            for sections in range(len(headings)):
                if self.quest[char(sections+1) + str(row+2)] == None:
                    break
                directory[headings[sections]] = self.quest[char(sections + 1) + str(row + 2)].value
        print(directory)

    def add_entry(self, name, lv, stre, endr, agil, bp, dl, sq):
        entries = [lv, stre, endr, agil, bp, dl, sq]
        if directory['Time'] == None:
           n = 0
        else:
           n = len(directory['Time'])
        for i in range(len(entries)):
            directory[headings[i]].append(entries[i])
        for row in range(n):
            for col in (range(len(entries))):
                self.quest.append(list(directory[headings[col]][row].values()))
            self.quest['H' + str(row+2)] = directory['time'][row]
        print(directory)
        self.load.save(f'{self.name}.xlsx')


p = fitQuest('Andre')
p.add_entry(9, 12,15,66,53,234,125,57)
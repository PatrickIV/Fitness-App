import pandas as pd

def SQLsend(name):
    data = pd.read_excel(f'Data/{name}.xlsx')
    data.to_csv(f'Data/{name}.csv', index = None, header=True)
    pd.DataFrame(pd.read_csv(f'Data/{name}.csv'))


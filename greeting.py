# Codigo que te sauda dependendo da hora do dia, da maneira correta.

import datetime

date = datetime.datetime.now()
Hour = int(date.strftime("%H"))

if Hour > 6 and Hour < 12:
    print('Bom dia')
elif Hour >= 12 and Hour < 18: 
    print('Boa tarde')
else:
    print('Boa noite')
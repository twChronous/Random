import re
from collections import Counter

def truncate(num):
    return re.sub(r'^(\d+\.\d{,2})\d*$',r'\1',str(num))

graphicName = input('Digite o titulo do grafico: \n')
graphicValues = input('Digite os valores para a criação do grafico: \n')

valuesList = graphicValues.split(" ")
countedValues = Counter(valuesList)

grapihic = open(graphicName + ".csv", "a")

grapihic.write(graphicName + ', frequência absoluta (FA), frequência relativa (FR) %\n')
graphicLine = "{}, {}, {}% \n"

for key in countedValues.keys():
    grapihic.write(
        graphicLine.format(
            key, countedValues[key], truncate((countedValues[key] / len(valuesList)) * 100)
        )
    )
    
graphicFooter = 'Total, {}, 100%'
grapihic.write(graphicFooter.format(len(valuesList)))
grapihic.close()

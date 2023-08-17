import pandas as pd


regioes = pd.DataFrame({
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62]
})

# Dados IPEA(2015)

# Quantas linhas e colunas possui o nosso conjunto de dados?
print(f"Linhas e colunas: {regioes.shape}")

# Há valores nulos no DataFrame?
print(f"{regioes.info()}")
# Qual o número médio de pessoas em situação de rua
# por região do Brasil em nosso DataFrame?
print(f"{regioes.describe()}")
# Qual região tem proporcionalmente a maior quantidade de pessoas
# nessa situação? E qual tem menos?
print(f"{regioes.describe()}")

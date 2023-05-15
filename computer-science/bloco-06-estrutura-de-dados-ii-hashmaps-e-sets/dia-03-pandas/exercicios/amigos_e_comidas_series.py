import pandas as pd


amigos_e_comidas = {
    "amigo": ["Tiago", "Juan", "Igo"],
    "comida": ["pizza", "hamburguer", "pastel"],
    "sobremesa": ["goiabada", "chocolate", "doce de leite"]
}

amigo_series = pd.Series(amigos_e_comidas["amigo"])
comida_series = pd.Series(amigos_e_comidas["comida"])
sobremesa_series = pd.Series(amigos_e_comidas["sobremesa"])

print(amigo_series)
print(comida_series)
print(sobremesa_series)

import pandas as pd


amigos_e_comidas = {
    "amigo": ["Tiago", "Juan", "Igo"],
    "comida": ["pizza", "hamburguer", "pastel"],
    "sobremesa": ["goiabada", "chocolate", "doce de leite"]
}

amigos_dataframe = pd.DataFrame(amigos_e_comidas)

print(amigos_dataframe)

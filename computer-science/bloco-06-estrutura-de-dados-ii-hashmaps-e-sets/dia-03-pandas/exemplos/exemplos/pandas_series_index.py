import pandas as pd


sailors = {
    "Moon": "Usagi",
    "Mercury": "Ami",
    "Mars": "Rei",
    "Jupter": "Makoto",
    "Venus": "Minako"
}

minha_segunda_series = pd.Series(sailors)
print(minha_segunda_series)

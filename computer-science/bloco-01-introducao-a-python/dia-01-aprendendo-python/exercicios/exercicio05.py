# Alternativa 1
import math


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


# Alternativa 2
# def calculate_paint_to_buy(wall_area):
#     bucket_of_paint_price = 80
#     liters_of_paint = wall_area / 3
#     bucket_of_paint = liters_of_paint // 18
#     if liters_of_paint % 18:
#         bucket_of_paint += 1
#     return bucket_of_paint, bucket_of_paint * bucket_of_paint_price

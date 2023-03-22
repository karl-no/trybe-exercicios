def return_biggest_number(num1, num2):
    if num1 > num2:
        return f'{num1} é o maior número.'
    elif num1 == num2:
        return f'{num1} e {num2} tem o mesmo valor.'
    elif num1 < num2:
        return f'{num2} é o maior número.'
    else:
        return f'Não foi possível comparar {num1} com {num2}.'


# Solução Trybe
def bigger(number, other):
    if other > number:
        return other
    return number

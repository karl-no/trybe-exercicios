const names = ['João', 'Irene', 'Fernando', 'Maria'];

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const firstName = names.find((name) => name.length >= 5);

console.log(firstName);
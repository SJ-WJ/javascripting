/* const pets = ['cat', 'dog', 'rat'];

for (const i = 0; i < pets.length; i++) {return pets[i] = pets[i] + 's';}
console.log(pets); */

var pets = ['cat', 'dog', 'rat'], i;
for (i = 0; i < pets.length; i++) {
  pets[i] += 's';
}
console.log(pets);
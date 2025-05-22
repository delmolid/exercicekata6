## Fonction `fizzBuzz(n)`

La fonction `fizzBuzz` prend un nombre `n` en paramètre et retourne un tableau de chaînes de caractères, `answer`, indexé à partir de 1.

### Règles de transformation :

- Si l’indice `i` est divisible **à la fois par 3 et 5**, alors `answer[i]` vaut `"FizzBuzz"`.
- Si `i` est divisible **uniquement par 3**, alors `answer[i]` vaut `"Fizz"`.
- Si `i` est divisible **uniquement par 5**, alors `answer[i]` vaut `"Buzz"`.
- Si aucune des conditions précédentes n’est remplie, alors `answer[i]` vaut la valeur de `i`, convertie en chaîne.

Le tableau retourné contiendra exactement `n` éléments, allant de 1 à `n`.

### Exemples

```javascript
fizzBuzz(3);
// ["1", "2", "Fizz"]

fizzBuzz(5);
// ["1", "2", "Fizz", "4", "Buzz"]

fizzBuzz(15);
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

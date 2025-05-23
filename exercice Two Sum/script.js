// Exemple 1

function twoSum(numbers, target) {
    let table = [];
    let result = [];
  

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < target) {
        table.push({ value: numbers[i], index: i });
      }
    }
  
    
    for (let i = 0; i < table.length; i++) {
      for (let j = i + 1; j < table.length; j++) {
        if (table[i].value + table[j].value === target) {
          result.push(table[i].index, table[j].index);
          console.log(result);
          return result;
        }
      }
    }
  
    console.log("Aucun couple trouvé");
    return [];
  }
  
  // Exemple d'appel
  twoSum([3, 3], 6); // [0, 1]
  twoSum([2, 7, 11, 15], 9); // [0, 1]
  twoSum([3, 2, 4], 6); // [0,1]
  
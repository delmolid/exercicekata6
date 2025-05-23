# 💡 Exercice : Fonction `twoSum()`

Tu disposes d’une **liste de nombres** appelée `numbers` (exemple : `[2, 7, 11, 15]`) et d’un **nombre cible** appelé `target` (exemple : `9`).

## 🎯 Objectif

Écris une fonction `twoSum()` qui permet de **retrouver deux nombres dans la liste** dont la **somme est exactement égale à `target`**.

---

## 📏 Contraintes

- La fonction doit **retourner les indices** de ces deux nombres dans un **tableau**.
- Les **indices** doivent correspondre à la **position des nombres dans la liste**, **pas les valeurs elles-mêmes**.
- Tu **ne peux pas utiliser deux fois le même indice** (donc pas deux fois le même élément).
- Les **indices peuvent être retournés dans n’importe quel ordre**.

---

## ✅ Exemple

```javascript
twoSum([2, 7, 11, 15], 9);
// ➞ [0, 1]  // car 2 + 7 = 9

twoSum([3, 2, 4], 6);
// ➞ [1, 2]  // car 2 + 4 = 6

twoSum([3, 3], 6);
// ➞ [0, 1]  // car 3 + 3 =

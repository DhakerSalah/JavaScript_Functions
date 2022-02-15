//Exercice 1:
//Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
//Exemple:
//getMax(5, 9, 1) ➞ 9
//getMax(2, 3, 10) ➞ 10
function getMax(a, b, c) {
    console.log(Math.max(a,b,c));
}
// Afficher la sortie
console.log("Exercice 1");
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 2:
//Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
//Exemple:
//nbrPaire(6) ➞ [2, 4, 6]
//nbrPaire(4) ➞ [2, 4]
//nbrPaire(2) ➞ [2]
function nbrPaire(n) {
    for(var i=1;i<=n;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
// Afficher la sortie
console.log("Exercie 2");
console.log(nbrPaire(6));
console.log(nbrPaire(4));
console.log(nbrPaire(2));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 3:
//Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur
// du tableau donné.
//Exemple:
//mulByLen([1, 1, 1]) ➞ [ 3, 3, 3 ]
//mulByLen([1, 2, 3]) ➞ [ 3, 6, 9 ]
//mulByLen([0, 0, 0, 0, 2]) ➞  [ 0, 0, 0, 0, 10 ]
function mulByLen(tab) {
	for(var i=0 ; i<tab.length ; i++){
		var l = tab.length;
		console.log(tab[i]*l);
	}
}
// Afficher la sortie
console.log("Exercie 3");
console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 4:
//Créez une fonction qui renvoie le produit de tous les entiers impairs dans un tableau.
//Exemple:
//prodImp([1, 2, 3, 4]) ➞ 3
//prodImp([3, 6, 8, 5, 5, 7]) ➞ 525
//prodImp([1, 0, 1, 0, 1, 0]) ➞ 1
function prodImp(tab) {
	var f = tab.filter(i => i % 2 !== 0);
  	return f.reduce((x,y) => x * y);
}
// Afficher la sortie
console.log("Exercie 4");
console.log(prodImp([1, 2, 3, 4]));
console.log(prodImp([3, 6, 8, 5, 5, 7]));
console.log(prodImp([1, 0, 1, 0, 1, 0]));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 5:
//Vous avez un tableau avec des mots aléatoires, mais votre programme n’accepte pas
//les mots commençant par la lettre majuscule « Z ».
//Supprimez les mots non acceptés et renvoyez le nouveau tableau.
//Exemple:
//filterWords(["Bob", "Alex", "Zoello"]) ➞ ["Bob", "Alex"]
//filterWords(["Lion", "Zebra", "Gazelle"]) ➞ ["Lion", Gazelle"]
//filterWords(["Mercedes", "Bmw", "Audi"]) ➞ ["Mercedes", "Bmw", "Audi"]
function filterWords(tab) {
	return tab.filter(t=> /^[^Z]/.test(t));
}
// Afficher la sortie
console.log("Exercie 5");
console.log(filterWords(["Bob", "Alex", "Zoello"]));
console.log(filterWords(["Lion", "Zebra", "Gazelle"]));
console.log(filterWords(["Mercedes", "Bmw", "Audi"]));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 6:
//Créez une fonction qui remplace toutes les voyelles d’une chaîne par un caractère spécifié.
//Exemple:
//replaceVoyel("voyelle", "$") ➞ "v$y$ll$"
//replaceVoyel("boulevard", "?") ➞ "b??l?v?rd"
//replaceVoyel("bouche", "@") ➞ "b@@ch@"
function replaceVoyel(str, c) {
	var r= str.replace(/[aeoiu]/g, c);
	return r;
}
// Afficher la sortie
console.log("Exercie 6");
console.log(replaceVoyel("voyelle", "$"));
console.log(replaceVoyel("boulevard", "?"));
console.log(replaceVoyel("bouche", "@"));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 7:
//Écrivez une fonction qui renvoie l’extension des fichiers.
//Exemple:
//getExtension(["file.html", "file.js"]) ➞ ["html", "js"]
//getExtension(["image.jpg", "image.png", "image.gif"]) ➞ ["jpg", "png", "gif"]
//getExtension(["file.pdf", "file.txt", "file.docx"]) ➞ ["pdf", "txt", "docx"]
function getExtension(files) {
	return files.map(f => f.split(".").pop());
}
// Afficher la sortie
console.log("Exercie 7");
console.log(getExtension(["file.html", "file.js"]));
console.log(getExtension(["image.jpg", "image.png", "image.gif"]));
console.log(getExtension(["file.pdf", "file.txt", "file.docx"]));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 8:
//Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.
//Exemple:
//size("alex") ➞ 5
//size("x") ➞ 1
//size("") ➞ 0
function size(str , i=0) {
    if(str[i] === undefined) {
      return i;
    }
   return size(str, i + 1);
}
// Afficher la sortie
console.log("Exercie 8");
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 9:
//Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE 
//si le nombre total de caractères dans la première chaîne est égal
//au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.
//Exemple:
//compareSize("AA", "BB") ➞ true
//compareSize("123", "1") ➞ false
//compareSize("Ali", "Bob") ➞ true
function compareSize(str1, str2) {
	if(str1.length===str2.length){
	    return true;
	}else{
	    return false;
	}
}
// Afficher la sortie
console.log("Exercie 9");
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));
console.log("-----------------------------------");
//------------------------------------------------------------------------
//Exercice 10: 
//Dans ce défi, un fermier vous demande de lui dire combien de pattes peuvent être comptées
// parmi tous ses animaux. Il y a trois espèces:
//poulets = 2 pattes
//vaches = 4 pattes
//chevaux = 4 pattes
//Le fermier a compté ses animaux et il vous donne un sous-total pour chaque espèce.
// Vous devez implémenter une fonction qui renvoie le nombre total de pattes de tous les animaux.
//L’ordre des animaux transmis à la fonction est nbrsPattes(poulets, vaches, chevaux).
//Exemple:
//nbrsPattes(1, 4, 2) ➞ 26
//nbrsPattes(2, 2, 2) ➞ 20
//nbrsPattes(2, 0, 3) ➞ 16
//N’oubliez pas que le fermier veut connaître le nombre total de pattes et non pas 
//le nombre total d’animaux.
function nbrsPattes(poulets, vaches, chevaux) {
	var p = poulets*2;
	var v = vaches*4;
	var c = chevaux*4;
	return p+v+c;
}
// Afficher la sortie
console.log("Exercie 10");
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));
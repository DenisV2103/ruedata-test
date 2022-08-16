const pali =
  "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";
function findPalindrome(text) {
  const palindrome = [];
  for (end = 2; end < text.length; end++) {
    for (i = 0, start = 0; i < text.length; i++, start++) {
      const p = text.substr(start, end);
      if (p.length > 2) {
        if (p.toString().split("").reverse().join("") === p.toString()) {
          palindrome.push(p);
        }
      }
    }
  }
  return [...new Set(palindrome)];
}

console.log(findPalindrome(pali));

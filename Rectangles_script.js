/*
  TASKS:
  CZ: Pomocí for-cyklu a podmínky vykreslete čtverce z levého horního rohu do pravého spodního rohu.
  Mezery mezi nimi si určete sami. Každý druhý čtverec bude červený ostatní budou modré.
  EN: Use the for-cycle and condition to draw squares from the upper left corner to the lower right corner.
  You can decide the gaps between those squares. Every other square will be red, the others will be blue.
*/

/*
   YOUR CODE BELONGS HERE - ZDE PATŘÍ VÁŠ KÓD
 */

export function draw(c) {
  let size = 50;
  for (let i = 0; i < 300; i++) {
    if (i % 5 === 0) {
      c.strokeStyle = "red";
    } else {
      c.strokeStyle = "black";
    }
    let posX = Math.floor(Math.random() * 800);
    let posY = Math.floor(Math.random() * 800);
    c.strokeRect(posX, posY, size, size);
  }
}

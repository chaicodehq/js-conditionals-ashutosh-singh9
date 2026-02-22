/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */

// code below

export function getTicketPrice(age, isWeekend) {
  let ticketPrice = 0;
  if(age < 0){
    ticketPrice = -1;
  } else if(age <= 12 && age >= 0){
    ticketPrice += 8;
  } else if(age <= 17 && age >= 13){
    ticketPrice += 12;
  } else if(age <= 59 && age >= 18){
    ticketPrice += 15;
  } else if(age >= 60){
    ticketPrice += 10;
  } else{
    ticketPrice = -1;
  }

  if(ticketPrice != -1){
    if(isWeekend){
      ticketPrice += 3;
    } 
  } 
    return ticketPrice;
}

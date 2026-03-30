/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  //season
  //acitivty
  //edge
  //logic

  if (month < 1 || month > 12) {
    return null;
  }

  function activity(temperature, season) {
    if (temperature < 0 && season == "Winter") return "skiing";
    else if (temperature >= 0 && season == "Winter") return "ice skating";
    else if (temperature > 20 && season == "Spring") return "hiking";
    else if (temperature <= 20 && season == "Spring") return "museum visit";
    else if (temperature > 35 && season == "Summer") return "swimming";
    else if (temperature <= 35 && season == "Summer") return "cycling";
    else if (temperature > 15 && season == "Autumn") return "nature walk";
    else if (temperature <= 15 && season == "Autumn")
      return "reading at a cafe";
  }

  function weather(month) {
    if (Winter.includes(month)) {
      return "Winter";
    } else if (Spring.includes(month)) {
      return "Spring";
    } else if (Summer.includes(month)) {
      return "Summer";
    } else {
      return "Autumn";
    }
  }

  let Winter = [12, 1, 2];
  let Spring = [3, 4, 5];
  let Summer = [6, 7, 8];
  // let Autumn = [9, 10, 11];

  let mon = weather(month);
  let adv = activity(temperature, mon);
  return { season: mon, activity: adv };
}

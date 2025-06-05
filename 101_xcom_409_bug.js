// 8kyu [BUG] XCOM-409: Flight distance of Interceptor planes is miscalculated
function travelDistance(avgSpeed, travelTime) {
  const KM_PER_NAUTICAL_MILE = 1.852;
  const travelHours = travelTime / 60;
  const travelNauticalMiles = avgSpeed * travelHours;
  const travelKms = travelNauticalMiles * KM_PER_NAUTICAL_MILE;

  return travelKms;
}
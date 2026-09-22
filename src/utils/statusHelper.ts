export interface StatusInfo {
  isOpen: boolean;
  textFi: string;
  textEn: string;
  detailFi: string;
  detailEn: string;
  nextChange: string;
}

/**
 * Cafe Bar G Opening Hours:
 * Tue - Sat: 18:00 - 02:00 (next day)
 * Sun, Mon: Closed
 */
export function getBarStatus(): StatusInfo {
  // Use current Helsinki time
  const now = new Date();
  // Get time in Europe/Helsinki
  const finnishTimeStr = now.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' });
  const fiDate = new Date(finnishTimeStr);
  const day = fiDate.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ..., 6 = Sat
  const hour = fiDate.getHours();
  const minute = fiDate.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  // Let's determine if it's open:
  // Open hours are 18:00 (1080 min) to 02:00 (120 min next day)
  // For hours between 00:00 and 02:00 (0 to 120 min), this belongs to the night shift of the previous day!
  // e.g. Wed 01:30 is part of Tuesday night shift (Tue 18:00 - Wed 02:00)
  
  let isOpen = false;

  // Check if current time is late night spillover (00:00 to 02:00)
  if (timeInMinutes < 120) {
    // Previous day:
    const prevDay = (day + 6) % 7;
    // Previous day was open if it was Tue (2), Wed (3), Thu (4), Fri (5), or Sat (6)
    if (prevDay >= 2 && prevDay <= 6) {
      isOpen = true;
    }
  } else if (timeInMinutes >= 1080) { // 18:00 or later
    // Today is Tue (2) to Sat (6)
    if (day >= 2 && day <= 6) {
      isOpen = true;
    }
  }

  if (isOpen) {
    return {
      isOpen: true,
      textFi: 'Avoinna nyt',
      textEn: 'Open Now',
      detailFi: 'Sulkeutuu klo 02.00',
      detailEn: 'Closes at 2:00 AM',
      nextChange: '02:00',
    };
  }

  // If closed, let's see when it opens next
  if (day >= 2 && day <= 6 && timeInMinutes < 1080) {
    return {
      isOpen: false,
      textFi: 'Suljettu tällä hetkellä',
      textEn: 'Closed Now',
      detailFi: 'Aukeaa tänään klo 18.00',
      detailEn: 'Opens today at 6:00 PM',
      nextChange: '18:00',
    };
  }

  if (day === 0) { // Sunday
    return {
      isOpen: false,
      textFi: 'Suljettu (Sunnuntai)',
      textEn: 'Closed (Sunday)',
      detailFi: 'Aukeaa tiistaina klo 18.00',
      detailEn: 'Opens Tuesday at 6:00 PM',
      nextChange: 'Ti / Tue 18:00',
    };
  }

  if (day === 1) { // Monday
    return {
      isOpen: false,
      textFi: 'Suljettu (Maanantai)',
      textEn: 'Closed (Monday)',
      detailFi: 'Aukeaa tiistaina klo 18.00',
      detailEn: 'Opens Tuesday at 6:00 PM',
      nextChange: 'Ti / Tue 18:00',
    };
  }

  return {
    isOpen: false,
    textFi: 'Suljettu',
    textEn: 'Closed',
    detailFi: 'Aukeaa klo 18.00',
    detailEn: 'Opens at 6:00 PM',
    nextChange: '18:00',
  };
}

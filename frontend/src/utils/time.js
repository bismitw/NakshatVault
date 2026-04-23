const normalizeTimeInputValue = (value) => {
    if (!value) {
        return "";
    }

    const trimmed = String(value).trim();

    const twentyFourHourMatch = trimmed.match(/^([01]?\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/);
    if (twentyFourHourMatch) {
        const hours = String(Number(twentyFourHourMatch[1])).padStart(2, "0");
        return `${hours}:${twentyFourHourMatch[2]}`;
    }

    const amPmMatch = trimmed.match(/^(\d{1,2}):([0-5]\d)\s*(AM|PM)$/i);
    if (!amPmMatch) {
        return trimmed;
    }

    let hours = Number(amPmMatch[1]);
    const minutes = amPmMatch[2];
    const meridiem = amPmMatch[3].toUpperCase();

    if (meridiem === "AM") {
        hours = hours === 12 ? 0 : hours;
    } else if (hours !== 12) {
        hours += 12;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}`;
};

export { normalizeTimeInputValue };

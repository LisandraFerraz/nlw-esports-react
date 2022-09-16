
export function convertMinutesToHours(minutesAmount: number){
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60

    return `${String(hours).padStart(2, '0')}:${String(hours).padStart(2, '0')}`
}
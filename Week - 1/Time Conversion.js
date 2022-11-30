function timeConversion(s) {
    let parsedTime = {
        hour: s.substring(0,2),
        minutes: s.substring(3,5),
        seconds: s.substring(6,8),
        meridiem: s.substring(8,10)
    }
    const convertHour = (hour) => {
        if (parsedTime.meridiem === 'PM' && parsedTime.hour !== '12') {
            return `${Number(parsedTime.hour) + 12}`
        }
        if (parsedTime.meridiem === 'AM' && parsedTime.hour === '12') {
            const convertedHour = Number(parsedTime.hour) - 12
            if (convertedHour.toString.length === 1) return `0${convertedHour}`
            
            return `${convertedHour}`
        }
        
        return hour;
    }
    
    return `${convertHour(parsedTime.hour)}:${parsedTime.minutes}:${parsedTime.seconds}`;
}
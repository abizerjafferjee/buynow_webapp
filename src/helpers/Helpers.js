export function prettyShowTime(showDateTime) {
    const showTime = new Date(showDateTime)
    showTime.setSeconds(0,0)
    return showTime.toUTCString()
}
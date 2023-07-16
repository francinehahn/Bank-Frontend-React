export function formatDate (date) {
    date = date.slice(0, 10)
    return date.split("-").reverse().join("/")
}
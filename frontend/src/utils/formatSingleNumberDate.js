const formatDateNumber = (n) => {
    if (n < 10) {
        return "0" + n
    } else {
        return n
    }
}

export default formatDateNumber
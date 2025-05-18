const TimeFormate = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? "PM" : 'AM';

    return `${hours}:${minutes}:${seconds} ${ampm}`
};

export default TimeFormate;
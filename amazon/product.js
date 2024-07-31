const today = new Date();
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);
document.getElementsByClassName('date').innerhtml(nextWeek);
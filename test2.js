let date = new Date();

if(date.getHours() < 12) {
    console.log("오전")
}

if(date.getHours() >= 12) {
    console.log("오후")
}
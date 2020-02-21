function number(){
    let hours = 2..hours()
    let mins = 1..mins()
    let secs = 45..secs()
    console.log(hours, mins, secs)
    console.log(1..hours().in_mins())
    console.log(60..mins().in_hours())
    console.log(1..mins().in_secs())
}
Number.prototype.hours = function (){
    return this * 60 * 60
}

Number.prototype.mins = function (){
    return this * 60
}

Number.prototype.secs = function (){
    return this * 1
}

Number.prototype.in_secs = function (){
    return this * 1
}

Number.prototype.in_mins = function (){
    return this / 60
}

Number.prototype.in_hours = function (){
    return this / 3600
}


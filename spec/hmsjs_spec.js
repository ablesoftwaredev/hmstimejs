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

describe("h:m:s time conversions", function(){
    it("60m should be 3600s", function(){
        let time = 60..mins().in_secs()
        expect(time).toBe(3600)
    })
    it("120s should be 2m", function(){
        let time = 120..secs().in_mins()
        expect(time).toBe(2)
    })
    it("1m should be 60s", function(){
        let time = 1..mins().in_secs()
        expect(time).toBe(60)
    })
    it("1h should be 60m", function(){
        let time = 1..hours().in_mins()
        expect(time).toBe(60)
    })
    it("0h should be 0m", function(){
        let time = 0..hours().in_mins()
        expect(time).toBe(0)
    })
    it("-1m should be -60s", function(){
        let time = -1..mins().in_secs()
        expect(time).toBe(-60)
    })
    it("1.0hours should be 60.0m", function(){
        let time = (1.0).hours().in_mins()
        expect(time).toBe(60.0)
    })
    it("0.5hours should be 30.0m", function(){
        let time = (0.5).hours().in_mins()
        expect(time).toBe(30.0)
    })
    it("0.5mins should be 30.0s", function(){
        let time = (0.5).mins().in_secs()
        expect(time).toBe(30.0)
    })
})
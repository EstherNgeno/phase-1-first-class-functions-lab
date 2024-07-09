const returnFirstTwoDrivers=function(drivers){
    returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return drivers (1,2);
}
const returnLastTwoDrivers=function(drivers){
    returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
    return drivers(2,3);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier=function(fare){
    return function(fare){
        return fare*4
    };
}
const fareDoubler=function(fare){
    return function(fare){
        return fare*2
    };
}
const fareTripler=function(fare){
    return function(fare){
        return fare*3
    };
}



export const calcStudCount = (wallLength, studSpacing) => {
    wallLength = wallLength * 12;
    let count = wallLength / studSpacing;
    if(count % 1 !== 0){
        count = Math.ceil(count);
        return count;
    } else {
        return count;
    }
    
}

export const calcStudCost = (price, count) => {
    return price * count;
}
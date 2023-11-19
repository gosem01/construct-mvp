export const calcStudCount = (wallLength, studSpacing, quantity) => {
    wallLength = wallLength * 12;
    let count = (wallLength / studSpacing) * quantity;
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
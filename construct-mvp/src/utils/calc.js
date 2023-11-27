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

export const calcDrywallCount = (wallLength, wallHeight, height, width, quantity) => {
    let totalArea = wallLength * wallHeight;
    console.log("DRYWALL HEIGHT PASSED: " + height)
    console.log("DRYWALL WIDTH PASSED: " + width)
    console.log("Total wall area: " + totalArea)
    let count = (totalArea / (height * width)) * quantity;
    if(count % 1 !== 0){
        count = Math.ceil(count);
        console.log("Drywall Count: " + count)
        return count;
    } else {
        return count;
    }
    
}

export const calcDrywallCost = (price, count) => {
    return price * count;
}
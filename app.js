
export function countSheeps(list) {
    let sheepCount = list.filter(Boolean).length;

    if (sheepCount > 0) {
        return `There are ${sheepCount} sheep in total`;
    } else {
        return "UPS!!! Wolves have eaten the sheep";
    }
}

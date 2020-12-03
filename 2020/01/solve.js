const twoSum = (entries, target) => {
    let firstEntry;
    let secondEntry;
    let successful;
    let currentTarget;

    if (!target) {
        currentTarget = 2020;
    }
    else {
        currentTarget = target;
    }

    const entryReciprocals = new Map();
    
    for (let i = 0; i < entries.length; i++) {
    	const currentEntry = parseInt(entries[i], 10);
    	if (entryReciprocals.has(currentEntry)) {
        	firstEntry = currentEntry;
            secondEntry = entryReciprocals.get(currentEntry);
            successful = true;
            break;
        }
        const reciprocalValue = currentTarget - currentEntry;
        entryReciprocals.set(reciprocalValue, currentEntry);
    }
    if (successful) return firstEntry * secondEntry;
    else return 0;
}

const threeSum = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        entries[i] = parseInt(entries[i], 10);
    }
    const sortedEntries = entries.sort();
    for (let i = 0; i < sortedEntries.length; i++) {
    	const currentEntry = parseInt(sortedEntries[i], 10);
        const currentTarget = 2020 - sortedEntries[i];
        const remainingArray = sortedEntries.slice(0, i).concat(sortedEntries.slice(i+1, sortedEntries.length));
        const twoSumm = twoSum(remainingArray, currentTarget);
        if (twoSumm === 0) continue;
        else return twoSumm * currentEntry;
    }
    return 0;
}

const solve = (entries, part) => {
    if (part === 1) {
        return twoSum(entries);
    }
    else {
        return threeSum(entries);
    }
}

const expected = part => part === 1 ? 1019371 : 278064990;

module.exports = {solve,expected};
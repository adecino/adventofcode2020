const partOne = (entries, horizontalIterator, verticalIterator) => {
    let horizontalIndex = 0;
    let treesHit = 0;
    for (let i = 0; i < entries.length; i += verticalIterator) {
        const currentEntry = entries[i];
        const currentLetter = currentEntry[horizontalIndex];
        if (currentLetter === "#") {
            treesHit++;
        }
        horizontalIndex += horizontalIterator;
        if (horizontalIndex >= currentEntry.length) {
            horizontalIndex = horizontalIndex - currentEntry.length;
        }
    }
    return treesHit;
}

const partTwo = (entries) => {
    return partOne(entries, 1, 1) * partOne(entries, 3, 1) * partOne(entries, 5, 1) * partOne(entries, 7, 1) * partOne(entries, 1, 2);
}

const solve = (entries, part) => {
    if (part === 1) {
        return partOne(entries, 3, 1);
    }
    else {
        return partTwo(entries);
    }
}

const expected = part => part === 1 ? 234 : 5813773056;

module.exports = {solve,expected};
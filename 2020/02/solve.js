const howManyPasswordsValidPartOne = (entries) => {
    let validPasswordCounter = 0;
    for (let i = 0; i < entries.length; i++) {
        const currentEntrySplit = entries[i].split(":");
        const currentEntryPrefix = currentEntrySplit[0];
        const currentEntrySuffix = currentEntrySplit[1];
        
        const currentNumberRangeAndTargetLetter = currentEntryPrefix.split(" ");
        const currentTargetLetter = currentNumberRangeAndTargetLetter[1];
        const currentNumberRange = currentNumberRangeAndTargetLetter[0];

        const bounds = currentNumberRange.split("-");
        const currentLowerBound = bounds[0];
        const currentUpperBound = bounds[1];

        let currentLetterCount = 0;
        for (let j = 0; j < currentEntrySuffix.length; j++) {
            const currentLetter = currentEntrySuffix[j];
            if (currentLetter === currentTargetLetter) {
                currentLetterCount++;
            }
        }
        if (currentLetterCount <= currentUpperBound && currentLetterCount >= currentLowerBound) {
            validPasswordCounter++;
        }
    }
    return validPasswordCounter;
}

const howManyPasswordsValidPartTwo = (entries) => {
    let validPasswordCounter = 0;
    for (let i = 0; i < entries.length; i++) {
        const currentEntrySplit = entries[i].split(":");
        const currentEntryPrefix = currentEntrySplit[0];
        const currentEntrySuffix = currentEntrySplit[1];
        
        const currentNumberRangeAndTargetLetter = currentEntryPrefix.split(" ");
        const currentTargetLetter = currentNumberRangeAndTargetLetter[1];
        const currentNumberRange = currentNumberRangeAndTargetLetter[0];

        const bounds = currentNumberRange.split("-");
        const currentFirstNumberBound = bounds[0];
        const currentSecondNumberBound = bounds[1];

        let currentLetterCount = 0;
        if (currentTargetLetter === currentEntrySuffix[currentFirstNumberBound]) {
            currentLetterCount++;
        }

        if (currentTargetLetter === currentEntrySuffix[currentSecondNumberBound]) {
            currentLetterCount++;
        }

        if (currentLetterCount === 1) {
            validPasswordCounter++;
        }
    }
    return validPasswordCounter;
}

const solve = (entries, part) => {
    if (part === 1) {
        return howManyPasswordsValidPartOne(entries);
    }
    else {
        return howManyPasswordsValidPartTwo(entries);
    }
}

const expected = part => part === 1 ? 458 : 278064990;

module.exports = {solve,expected};
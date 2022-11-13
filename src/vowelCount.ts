function getCount(str: string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let diff = [...str.trim().replace(/\s+/g, '')];
    let value = [];
    let count = 0;
    for (let i = 0; i < vowels.length; i++) {
        value.push(...diff.filter((el, index) => el.includes(vowels[i])))
    }
    return value.length

}

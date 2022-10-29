// Spinal Tap Case //
function spinalCase(str: string) {
    let upperCase: RegExp = /[A-Z]/g; // for readability
    let regexpUnderScore: RegExp = /[_-]+/g;
    let regexpSpace: RegExp = /\s/g;
    if (!str.match(regexpSpace) || str.match(regexpSpace) || str.match(regexpUnderScore)) {
      str = str.replace(upperCase, " $&").trim().replace(regexpSpace, "-");
    }
  
    return str.replace(regexpUnderScore, "-").toLowerCase();
  }
  
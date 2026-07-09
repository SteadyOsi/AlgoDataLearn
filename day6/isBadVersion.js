/**
 * @param {function} isBadVersion
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {

    };
};


// helper functino for creating the test cases
function createIsBadVersion(firstBad) {
    return function(version) {
        return version >= firstBad;
    };
}

// First bad is in the middle
console.log(solution(createIsBadVersion(4))(5));   // 4

// First version is bad
console.log(solution(createIsBadVersion(1))(5));   // 1

// Last version is bad
console.log(solution(createIsBadVersion(5))(5));   // 5

// Only one version
console.log(solution(createIsBadVersion(1))(1));   // 1

// Larger range
console.log(solution(createIsBadVersion(678))(1000)); // 678

// Another large test
console.log(solution(createIsBadVersion(9999))(10000)); // 9999
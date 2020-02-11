//binary search implementation
let search = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
        // mid point
        let mid = Math.floor((start + end)/2);
        // if the element is present at mid
        if(arr[mid] == x) return true;
        // look in the left half
        else if (arr[mid] < x) {
            start = mid + 1;
        }
        // look in the right half
        else {
            end = mid - 1;
        }
    }
    return false;
}

let arr = [3,5,6,8,9,10,15,18,20,21];

// should return true
let result = search(arr, 8);
console.log(result);

// should return false
result = search(arr, 11);
console.log(result);
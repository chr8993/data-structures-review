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
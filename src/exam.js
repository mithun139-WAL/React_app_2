function CheckPrime() {
    function formSubmit(event) {
        event.preventDefault();
        let formTag = event.target;
        let Min = formTag.min.value;
        let Max = formTag.max.value;
        let myArray = [];
        for (let num = Number(Min); num <= Number(Max); num++) {
            {
                let primeNo = true
                for (let i = 2; i < num; i++) {
                    if (num % i == 0) {
                        primeNo = false;
                        break;
                    }
                }
                if (primeNo) {
                    myArray.push(num);

                }
            }
        }
        alert(myArray);

    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="number" name="min" placeholder="Enter a minimum Number" />
                <input type="number" name="max" placeholder="Enter a maximum number" />
                <button>Check Primes</button>
            </form>
        </div>
    )
}
export default CheckPrime;
let x = 34;
x = 67;

console.log(x);

{
    let x= 2;
    console.log(x);
    // die gleiche Variable  ist innerhalb eines Blocks redeklariert
    // dieses ist innerhalb eines gleichen Blockes nicht möglich, aber der Wert lässt sich ändern.
}

console.log(x);

const y = 34;
/* y = 67; */

console.log(y);

/* Die let Variable lässt sich neu .
Bei der const Variable wird der Code abgebrochen und ein Error ausgegeben. */
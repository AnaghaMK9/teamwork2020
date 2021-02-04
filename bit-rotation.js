let n= 16,r=2,binary,b,a,c;

function bitRotation(n){
    binary=n.toString(2)
    b=binary;
    console.log(b,`----------`)
    for(let i=8-binary.length;i>0;i--){b='0'+ b}
    console.log(b,`************`)
    a=b;
    // to right shift 2 bits from left
    for(let i=8,j=0;i>0,j<r;i--,j++){
        a= a +`${b[j]}`                
    }  
    console.log(a,` a~~~~~~~~~~ right padded 2`)
    c='';
    for(let i=r;i<a.length;i++){
        c= c +`${a[i]}`                
    }  
    console.log(c,`~~~~~~~~~~ filtered 2`)

    // converting c to decimal

  

    console.log(`\n\n\nNumber: `, n)
    console.log(`Binary: `, b)
    console.log(`Rotation: `, c)

}
bitRotation(n);
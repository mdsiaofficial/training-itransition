function lcs(a){
  if(!a.length)return"";
  let b=a[0];
  let l="";
  for(let i=0;i<b.length;i++)
    for(let j=i+1;j<=b.length;j++)
      if(a.every(s=>s.includes(b.slice(i,j))))
        if(b.slice(i,j).length>l.length)
          l=b.slice(i,j);
  return l;
}
console.log(lcs(process.argv.slice(2)));

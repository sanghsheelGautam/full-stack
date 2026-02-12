// const original_ans = ["Jupiter","Mahatma Gandhi","Carbon Dioxide","1947","Tokyo","Camel"];
const original_ans = {
    q1:"Jupiter",
    q2:"Mahatma Gandhi",
    q3:"Carbon Dioxide",
    q4:"1947",
    q5:"Tokyo",
    q6:"Camel"
};

const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    // const ans = Array.from(data.values());
    // // console.log(ans);
    // let result = 0;
    // for(let i=0;i<ans.length;i++){
    //     if(ans[i]===original_ans[i])
    //         result++;
        
    // }

    let result = 0;
    for(let [key,value] of data.entries()){
        if(value === original_ans[key])
            result++;
    }

 const out = document.getElementById('out');
    out.innerText = `${result} out of 6 is currect`;
    // console.log(result);

//    const contain = document.getElementById('container');
//    contain.append(out);
})
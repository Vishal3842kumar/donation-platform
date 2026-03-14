// let data = [];
//  document.getElementById('btn').addEventListener('click', ()=>{
//      let ram = document.getElementById('name').value;
//      console.log(ram);
//      data.push(ram);
//      console.log(data);
//      document.getElementById('name').value = '';
//  });

let data = [];
function handleClick() {
    let newData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
    }
    data.push(newData);
    console.log(data);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
}
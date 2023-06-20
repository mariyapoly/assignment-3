// 14.AJAX Get Request:

async function getList() {
    let res = await axios.get(
      "https://api.example.com/data"
    );
    if (res.status == 200) {
        console.log(res.data);
    
    } else {
      console.log("error");
    }
}
getList();

// 15.AJAX Post Request:
async function createItem(){
    let createObj = { "name": "John Doe", "email": "johndoe@example.com" }

    let res = await axios.post(`https://api.example.com/submit`,createObj);
    if(res.status == 200){
      console.log(res.data);
    }else {
      console.log('Error');
    }

}
createItem();
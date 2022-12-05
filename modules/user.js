const fs = require("fs");
const { json } = require("stream/consumers");
heads = [
    {key:"id",  default: Date.now()}, 
    {key:"name", default:null},
    {key: "age", default:null}, 
    {key:"email", default:null}, 
    {key:"status", default: false}]
const deal = require("./deal")
class User{
    static add(data){
        const user = {}
        heads.forEach(head => {
            if(head.default!=null) 
                user[head.key]= head.default
            else user[head.key] = data[head.key]
        });
        console.log(user)
        const all = deal.readFromJson()
        all.push(user)
        deal.writeToJson(all)
    }
    static showAll(){
        // const readStream = fs.createReadStream(JSON.stringify("/data.json")); 
        fs.readFile("data.json","utf-8" , (err, jsonString) => {
            if (err) {
              console.log("File read failed:", err);
              return;
            }
            console.log("File data:", jsonString);
          })
    }


    static showSingle(id) {


        const data = deal.readFromJson();
        const userData = data.filter(d => d.id === id);
        console.log(userData);
    }

    
    // static edit(){}

    static edit(argv) {
        const { id, name, age, email, status } = argv;
    
        const data = deal.readFromJson();
    
        const userData = data.map(d => {
          if (d.id === id) {
            if (name) d.name = name;
            if (age) d.age = age;
            if (email) d.email = email;
            if (status) d.status = status;
          }
          return d;
        });
    
        // console.log(userData);
    
        deal.writeToJson(userData);
      }
    // static del(){}

    static del(id) {
        const data = deal.readFromJson();
        const userData = data.filter(d => d.id !== id);
        // console.log(userData);
        deal.writeToJson(userData);
    }
    static delAll(){
        userData=[]
        deal.writeToJson(userData)
    }
}
module.exports = User
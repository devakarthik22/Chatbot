
// chat variable says where to print
var chat=document.getElementById("chat");
var msgcount=0;
var name="";
var links=[];

courses={
  "1":"PCB Design Workshop",
  "2":"Web Development Bootcamp",
  "3":"Full Stack Web Development with Node js",
  "4":"Building Chatbots with Google Assistant Workshop",
  "5":"Python for Engineers"
}

courseinfo={
  "1":"Welcome to PCB Design Workshop...!!",
  "2":"Welcome to Become a Web development pro with these skills...!",
  "3":"Welcome to Full Stack development with node js",
  "4":"Welcome to building chatbots! workshop",
  "5":"Welcome to learning Python for ML",
  // "6":[2wsde:"wed",wed:"e3dfr"]
}

classesinfo={
  "1":["Information about PCB and it's uses","Steps involved in circuit design - Schematic,BOM,Layout Design,Assembly","Reading Datasheet and Start to draw a simple Schematic using some sensors","Pullup resistors,Decoupling capacitors,PCB Power,Adafruit,EEVBlog"],
  "2":["Introduction to Web Development-HTML","Styling your web pages-CSS","Building Responsive Web pages with Bootstrsp","Building Responsive Web pages with Bootstrap","Bootstrap part TWO","Interactivity with Javascript"],
  "3":["Course Introduction and Revision","Introduction to Javascript","Introduction to Node Js","Understanding Node Js CAll back functions","Understanding API's","Introduction to Chatbots","Building Telegram Chatbots with API's"," Getting Started with No SQL Database","Connecting MongoDB in Telegram Chatbots","Building Web Applications with Express Js","Building Web Applications with Node Js"],
  "4":["Introduction to Chatbots Your first Chatbot","Building Chatbots with DialogFlow and Deploying to Google Assistant"],
  "5":["ML Introduction","Python-Getting Acquainted","Designing our first Python Project","Design Thinking-Industry Expert Perspective"]
}


classeslinks={
  "1":["https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjEyNWJkMGItM \n mVmNS00M2YzLTg3YTAtMWRiZTA3MmMzOWFi%40thread.v2/0?   context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGJiYmE2YzUt \n NjAzNS00YmQ1LTk2NTctZjcyMzhkMTgxOWQ0%40thread.v2/0? context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2JjNGUxMzAtNjU4Yy00MzdkLWFkN2UtMjJlODg5NmM4OGZh%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTJkZGIzZDYtNTFlYi00MWIyLTljM2MtYzFkZjQ3NDM1ZmIw%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d"],
  "2":["https://youtu.be/UxoX5fGQeiY","https://youtu.be/yyFxGoxyLQM","https://youtu.be/xUmM1ucWnJM","https://youtu.be/UcHg0KPWNkY","https://youtu.be/k2XJcSpUfbM","https://youtu.be/1Y8rKnPTzPc"],
  "3":["https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDc3Y2QwZTctOTQ5ZS00ZjhhLTk2ODMtNGJhNTI4MWZlNjYy%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://youtu.be/BcFb8HWKupI","https://youtu.be/dTSPbW-FCRE","https://youtu.be/C5FFsBLWcME","https://youtu.be/uwAsEB6AegU","https://youtu.be/TE8N9M_KnFc","https://youtu.be/V9yrSVkAUks","https://youtu.be/YxWZhTUGkCk","https://youtu.be/TAwcv9x1T28","https://youtu.be/Qi7SV2nWjOU","https://teams.microsoft.com/l/meetup-join/19%3ameeting_YzQ1NmIzYTUtY2M4MC00ODY1LTk0YzctZjE2ODllZmYxNDA3%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d"],
  "4":["https://teams.microsoft.com/l/meetup-join/19%3ameeting_NTFkNjM0M2UtY2ZiZC00YTViLWJiMTAtZDk3NDg5YmE3NjYw%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d","https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGI5N2ZjNGUtYzhiNy00ZWZhLTg2YzgtNjdmNTM5YTE5NTE4%40thread.v2/0?context=%7b%22Tid%22%3a%2283187130-08a6-47ca-9d15-94facab49d99%22%2c%22Oid%22%3a%22582ccf99-7f9c-444d-a5c6-eacab40021b0%22%2c%22IsBroadcastMeeting%22%3atrue%7d"],
  "5":["https://www.youtube.com/watch?v=1zz5VAizJEE","https://www.youtube.com/watch?v=25uW13yKZmE","https://www.youtube.com/watch?v=C6X71gjB9pA","https://youtu.be/hxc7SibPbW8"]
}



// usermsg is the msg typed by the user
createusermsg=function(usermsg){
  
  
  // var p is the element created in the html
  var p = document.createElement("h3");

  //by using this line we can give the text to created p element in html
  p.innerText=usermsg;

  //to create a attribute for the created element here i created class att which is used to style our msg
  var att=document.createAttribute("class");

  //giving value to attribute
  att.value="msgbyuser";

  //to set attribute to the element
  p.setAttributeNode(att);

  
  //after creating the msg to print on screen with style returning to the func
  return p;
}

//this function will take the input of the user and produces the output
producemsg=function(usermsg){
  var mx=usermsg.toLowerCase()
  var botm= document.createElement("h3");


  if(mx.includes("hi")){
    botm.innerText="Hai "+name.toUpperCase();
    var at=document.createAttribute("class");
    at.value="msgbybot";
    botm.setAttributeNode(at);
    chat.appendChild(botm);

    var x = document.createElement("BR");
    chat.appendChild(x);
    firstmsg();
  }
  else if(mx.includes("bye")||mx.includes("exit")||mx.includes("quit")){
    botm.innerText="Bye "+name.toUpperCase()+" see you later.";
    
    var at=document.createAttribute("class");
    at.value="msgbybot";
    botm.setAttributeNode(at);
    chat.appendChild(botm);

    var x = document.createElement("BR");
    chat.appendChild(x);
    
  }
  else{
    botm.innerText="sorry "+name+" please give valid input. \n You can select the below courses";
    var at=document.createAttribute("class");
    at.value="msgbybot";
    botm.setAttributeNode(at);
    chat.appendChild(botm);

    var x = document.createElement("BR");
    chat.appendChild(x);
    firstmsg();
  }

  var at=document.createAttribute("class");
  at.value="msgbybot";
  botm.setAttributeNode(at);

  return  botm;

}


classinf=function(mm){
        
        var p="";
        for(var i=0;i<classesinfo[mm].length;i++){
          p=p+"Class-"+(i+1)+" : "+classesinfo[mm][i]+ "\n";
        }
        p=p+" \n Select a class number to get recorded session link";
        return p;
        
        
}

firstmsg=function(){
     var p = document.createElement("h3");
      name=document.getElementById('input').value;
      p.innerText="Hi! "+name.toUpperCase()+" a warm welcome to you";
      var att=document.createAttribute("class");
      att.value="msgbybot";
      p.setAttributeNode(att);
      chat.appendChild(p);
      var x = document.createElement("BR");
      chat.appendChild(x);
      

      var p = document.createElement("h3");
      var msg=document.getElementById('input').value;
      p.innerText="It is a great opportunity to learn new courses..!";
      var att=document.createAttribute("class");
      att.value="msgbybot";
      p.setAttributeNode(att);
      chat.appendChild(p);
      var x = document.createElement("BR");
      chat.appendChild(x);

      var p = document.createElement("h3");
      var a="Courses \n"
      p.innerText=a+"These are the courses provided by vedic platform : \n Course-1 : "+courses[1]+" \n Course-2 : "+courses[2]+" \n Course-3 : "+courses[3]+" \n Course-4 : "+courses[4]+" \n Course-5 : "+courses[5]+" \n \n Select a course number";
      var att=document.createAttribute("class");
      att.value="msgbybot";
      p.setAttributeNode(att);
      chat.appendChild(p);
      var x = document.createElement("BR");
      chat.appendChild(x);

      msgcount+=1;
}

takeinput=function(){
  
  


  // userinp takes what to print on screen
  var userinp=createusermsg(document.getElementById('input').value);
  chat.appendChild(userinp);
  var coursenum;

  //after printing to go to next line adding br tag here
  var x = document.createElement("BR");
  chat.appendChild(x);

  if(msgcount==0){
      firstmsg();
      
      
  }
  else if(msgcount==1){
      var p = document.createElement("h3");
      var msg=document.getElementById('input').value;
      if(msg>0&&msg<=5){
        coursenum=msg;
        console.log(coursenum)
        p.innerText=courseinfo[msg];
        var att=document.createAttribute("class");
        att.value="msgbybot";
        p.setAttributeNode(att);
        chat.appendChild(p);
        var x = document.createElement("BR");
        chat.appendChild(x);
        
        
      }

      else{
        p.innerText="Sorry you have choosen a wrong number. \nChoose a number from 1 to 5.";
        var att=document.createAttribute("class");
        att.value="msgbybot";
        p.setAttributeNode(att);
        chat.appendChild(p);
        var x = document.createElement("BR");
        chat.appendChild(x);
        document.getElementById("fourm").reset();
      }
      var p = document.createElement("h3");
      var msg=document.getElementById('input').value;
      var mm=parseInt(msg);
      p.innerText=classinf(mm);
      
      var att=document.createAttribute("class");
      att.value="msgbybot";
      p.setAttributeNode(att);
      chat.appendChild(p);
      var x = document.createElement("BR");
      chat.appendChild(x);
      links=classeslinks[mm]
      
      msgcount+=1;
    
  }

  else if(msgcount==2){
      console.log("jhgcfx")
      console.log(links)
      var msg=document.getElementById('input').value;
      var mm=parseInt(msg);
      var p = document.createElement("h3");
      if(mm>0&&mm<=links.length){
        p.innerText=links[mm-1];
        var att=document.createAttribute("class");
        att.value="msgbybot";
        p.setAttributeNode(att);
        chat.appendChild(p);
        msgcount+=1;
      }
      else{
        p.innerText="Sorry you have choosen a wrong number. \nChoose a number from 1 to "+links.length+".";
        var att=document.createAttribute("class");
        att.value="msgbybot";
        p.setAttributeNode(att);
        chat.appendChild(p);
        document.getElementById("fourm").reset();
       

      }
      
      


  }

  else{
    msgcount+=1; 
    console.log(msgcount);
    producemsg(document.getElementById('input').value)
    
    
  }
  document.getElementById("fourm").reset();

}


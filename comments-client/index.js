const axios = require('axios');

function hydrator() {
  this.hydrate = function(id, uuid, date, name, content) {
    return new Object({
      Id: id,
      EntityUuid: uuid,
      Date: date,
      UserName: name,
      Content: content,
    });
  }

  this.toData = function(obj) {
     var data = new FormData();

      data.set("Id", obj.Id);
      data.set("EntityUuid", obj.EntityUuid);
      data.set("Date", this.formatDate(obj.Date));
      data.set("UserName", obj.UserName);
      data.set("Content", obj.Content);

     return data;
  }

  this.formatDate = function(date) {
    date = new Date(date);

    if(date == null) {
       date = new Date(Date.now());
    }

    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
}

function ClientJs(API) {
  this.API = API;

  this.GetComment = async function(uuid, callback) {
    const response = await axios.get(this.API+"/api/comments/get/"+uuid);
     
    callback(response.data);
  },

  this.AddComment = async function(obj, callback) {
    //on s'assure que l'Id n'existe pas pour etre sur que le commentaire soit créer
    obj.Id = null;

    const response = await axios.post(this.API+"/api/comments/persist", 
      hydrator.toData(obj),
      {headers: {'Content-Type': 'multipart/form-data'}}
    );

    callback(response.data);
  }   

  this.EditComment = async function(obj, callback) {
    const response = await axios.patch(this.API+"/api/comments/persist", 
       "Id=" + obj.Id + "&EntityUuid=" + obj.EntityUuid +"&Date=" + hydrator.formatDate(obj.Date) + "&UserName=" + obj.UserName + "&Content=" + obj.Content,
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    );

    callback(response.data);
  } 

this.DeleteComment = async function(Id, callback) {
    const response = await axios.delete(this.API+"/api/comments/delete/"+Id);

    callback(response.data);
  }  
}

function Manager() {
  this.CreateClient = function (API) {
    return new ClientJs(API);
  }

  this.getHydrator = function() {
    return hydrator;
  }
}

hydrator = new hydrator();

module.exports = new Manager();















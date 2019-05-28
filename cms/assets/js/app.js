((function ($) {
    const FrogaMart = {




        //add frog details
        addFrog : function (data) {
            this.ajax(this.url.ADD_FROG ,  data).then(res=>{
                if (res.response === "success"){
                    alert("New Frog Added");
                }
            }).catch(err => console.warn(err))
        },



        //update frog details
        updateFrog : function () {
            var data = JSON.stringify(data);
            this.ajax(this.url.UPDATE_FROG).then(res => {

            }).catch(err => console.warn(err))
        },



        //remove frog from database
        removeFrog : function () {
            var data = JSON.stringify(data);
            this.ajax(this.url.REMOVE_FROG).then(res => {

            }).catch(err => console.warn(err))
        },



        //list frogs in database
        listFrog: function () {
            this.ajax(this.url.LIST_FROG).then(res => {

            }).catch(err => console.warn(err))
        },


        //custom ajax function
        ajax: function(url , data){
            return new Promise((resolve, reject) => {
                fetch(url,{
                            method: 'POST', // *GET, POST, PUT, DELETE, etc.
                            body: data
                        }
                    ).then(res =>{
                        return res.json().then(res => resolve(res))
                    }).catch(err => reject(err));
            });
        },


        //our url delcaration
        url:{
            ADD_FROG:"/backend/requests/addFrog.php",
            LIST_FROG:"",
            UPDATE_FROG:"",
            REMOVE_FROG:"",
        }
        
    };

    (typeof (addFrog) !== 'undefined') ? addFrog.onclick = function () {

        let froglabel = frogLabel.value;
        let frogweight = frogWeight.value;
        let frogcolor = frogColor.value;
        let frogdescription = frogDescription.value;
        

        let data = new FormData;
            data.append("frogLabel", froglabel);
            data.append("frogWeight" ,  frogweight)
            data.append("frogColor", frogcolor);
            data.append("frogDescription" , frogdescription);
        
        FrogaMart.addFrog(data);

        event.preventDefault();
    }:null;


    (typeof (updateFrog) !== 'undefined')? updateFrog.onclick = function () {
        FrogaMart.updateFrog(data);
        event.preventDefault();
    }:null;

    (typeof (removeFrog) !== 'undefined') ? removeFrog.onclick = function () {
        FrogaMart.removeFrog(data);
        event.preventDefault();
    }:null;


}))();
((function ($) {
    const FrogaMart = {




        //add frog details
        addFrog : function (data) {
            this.ajax(this.url.ADD_FROG ,  data).then(res=>{
                if (res.response === "success"){
                    alert("New Frog Added");
                    return true;
                }
                if(res.response === "error"){
                    alert("Error adding a frog");
                    return false;
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
        removeFrog : function (data) {
            this.ajax(this.url.REMOVE_FROG , data).then(res => {
                console.log(res);
                
                if(res.response === "success")
                    alert("Deleted " + data.froglabel)
                
                if(res.response === "error")
                    alert("cannot not delete frog")

            }).catch(err => console.warn(err))
        },



        //list frogs in database
        listFrog: function () {
            let formdata = new FormData;
            formdata.append("listApp", "true");
            
            this.ajax(this.url.LIST_FROG, formdata).then(res => {


                if(res.response === "error")
                    return false;

                let i = 1;
                    let tb = document.getElementById('tbody');
                    for (const key in res.response) {
                        if (res.response.hasOwnProperty(key)) {
                            const el = res.response[key];
                            tb.insertAdjacentHTML('beforeend', "<tr><th>" + i + "</th> <td>" + el['frog_label'] + "</td><td>" + el['frog_weight'] + "</td><td>" + el['frog_color'] + "</td><td>" + el['frog_description'] + "</td></tr>");
                            i++;
                    }
                }
                
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
            LIST_FROG:"/backend/requests/listFrog.php",
            UPDATE_FROG:"",
            REMOVE_FROG:"/backend/requests/removeFrog.php",
        }
        
    };



    FrogaMart.listFrog(); //list frog on dashbord
    
    (typeof (addFrog) !== 'undefined') ? addFrog.onclick = function () {



        var froglabel = frogLabel.value;
        var frogweight = frogWeight.value;
        var frogcolor = frogColor.value;
        var frogdescription = frogDescription.value;


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
        let formdata = new FormData;
        formdata.append("froglabel", frogLabel.value);

        FrogaMart.removeFrog(formdata);
        event.preventDefault();
    }:null;


}))();
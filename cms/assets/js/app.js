((function ($) {
    const FrogaMart = {




        //add frog details
        addFrog : function (data) {
            var data = JSON.stringify(data);
            this.ajax(this.url.ADD_FROG).then(res=>{
                console.log(res);
                
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
                fetch(url,
                        {
                            method: 'POST',
                            data:data
                        }
                    ).then(res =>{
                        return res.json().then(res => resolve(res))
                    }).catch(err => reject(err));
            });
        },


        //our url delcaration
        url:{
            ADD_FROG:"/backend/",
            LIST_FROG:"",
            UPDATE_FROG:"",
            REMOVE_FROG:"",
        }
        
    }

    addFrog.onclick = function () {
        FrogaMart.addFrog(data);
    }
    updateFrog.onclick = function () {
        FrogaMart.updateFrog(data);
    }
    removeFrog.onclick = function () {
        FrogaMart.removeFrog(data);
    }


}))();
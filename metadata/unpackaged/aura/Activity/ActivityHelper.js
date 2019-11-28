({
	 getTasks:function(component,event,helper,typeOfTask){
         var action = component.get("c.taskSetController");
        action.setParams({ listViewName : typeOfTask });

        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                 var resultData = response.getReturnValue();               
                var dataSize=resultData.length;
                component.set("v.dataSize", resultData.length);
                component.set("v.allRecords",resultData);                                      
                var recSize=parseInt(component.get("v.pageSize"));
                var num=0;
                 var pgNumber=0;
                var pagecount=0;
        var customerRecords=[];
        var dataSize=component.get("v.allRecords").length;
        var recSize=component.get("v.pageSize");
        for(var i=0;i<dataSize;i++){
            if(num>=recSize){
                break;
            }
            if(component.get("v.allRecords")[i]!='undefined'){
                customerRecords.push(component.get("v.allRecords")[i]);
                num++;                    
            }                
        }
        component.set("v.paginationList",customerRecords);         
                component.set("v.showspinner",false);
        component.set("v.todaytasklist",component.get("v.paginationList"));
                component.set("v.showFooter",true);
                if(dataSize>0){
                     pagecount= Math.ceil(dataSize/3);
       
        
        component.set("v.totalPages",pagecount);
                    component.set("v.pageNumber",1);
                     pgNumber=component.get("v.pageNumber");
                }
                else{
                    component.set("v.totalPages",0);
                    component.set("v.pageNumber",0);
                }
        var totalPages= component.get("v.totalPages");
        if(totalPages==pgNumber){
            component.set("v.isLastPage", true);
              

                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        // optionally set storable, abortable, background flag here

        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    },
    /*******************************************************************************************************
    * @description This method is used  handle pagination in datatable.
    * @returns void.
    */
    pagination:function(component,event,helper){
        var allRecords=[];
        var totalPages=0;        
       /* if(component.get("v.onSearch")){
            allRecords=component.get("v.searchList");            
           
            component.set("v.pageNumber",1);
            totalPages=Math.ceil((allRecords.length)/10);
            component.set("v.onSearch",false);
            component.set("v.totalPages",totalPages);
        }
        else{
            allRecords = component.get("v.allRecords");
            totalPages=Math.ceil((allRecords.length)/10);
             component.set("v.totalPages",totalPages);
            }*/
         allRecords=component.get("v.allRecords"); 
        totalPages=Math.ceil((allRecords.length)/component.get("v.pageSize"));
        var total=allRecords.length;   
        var recSize=parseInt(component.get("v.pageSize"));
        var pgNumber=component.get("v.pageNumber");       
        var start=(parseInt(component.get("v.pageNumber"))-1)*parseInt(component.get("v.pageSize"));       
        var j=0;
        var tempArray=[];      
        for(var i=start;i<total;i++){
            if(j>=recSize){
                break;  
            }
            if(allRecords[i]!='undefined'){               
                tempArray.push(allRecords[i]);
                j++;               
            }            
        }   
        console.log("pgnumber",pgNumber);
        console.log("totalPages",totalPages);
        if(pgNumber==totalPages){
            component.set("v.isLastPage", true);
        } else{
            component.set("v.isLastPage", false);
        }
        console.log('after pagination',tempArray);
        component.set("v.paginationList",tempArray);
        component.set("v.todaytasklist", tempArray);
    },
   
})
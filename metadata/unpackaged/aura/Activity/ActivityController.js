({
    doInit:function(component, event, helper){
        helper.getTasks(component, event, helper,'TodaysTasks');
    },
	
todayTaskTab: function(component, event, helper) {
        var tab1 = component.find('TodayId');
        var TabOnedata = component.find('TodayTabDataId');
 
        var tab2 = component.find('OverdueId');
        var TabTwoData = component.find('OverdueTabDataId');
 
        var tab3 = component.find('CompletedId');
        var TabThreeData = component.find('CompletedTabDataId');
        //show and Active fruits tab
        $A.util.addClass(tab1, 'slds-active');
        $A.util.addClass(TabOnedata, 'slds-show');
        $A.util.removeClass(TabOnedata, 'slds-hide');
        // Hide and deactivate others tab
        $A.util.removeClass(tab2, 'slds-active');
        $A.util.removeClass(TabTwoData, 'slds-show');
        $A.util.addClass(TabTwoData, 'slds-hide');
 
        $A.util.removeClass(tab3, 'slds-active');
        $A.util.removeClass(TabThreeData, 'slds-show');
        $A.util.addClass(TabThreeData, 'slds-hide'); 
    helper.getTasks(component, event, helper,'TodaysTasks');
    },
    overdueTaskTab: function(component, event, helper) {
 
        var tab1 = component.find('TodayId');
        var TabOnedata = component.find('TodayTabDataId');
 
        var tab2 = component.find('OverdueId');
        var TabTwoData = component.find('OverdueTabDataId');
 
        var tab3 = component.find('CompletedId');
        var TabThreeData = component.find('CompletedTabDataId');
 
        //show and Active vegetables Tab
        $A.util.addClass(tab2, 'slds-active');
        $A.util.removeClass(TabTwoData, 'slds-hide');
        $A.util.addClass(TabTwoData, 'slds-show');
        // Hide and deactivate others tab
        $A.util.removeClass(tab1, 'slds-active');
        $A.util.removeClass(TabOnedata, 'slds-show');
        $A.util.addClass(TabOnedata, 'slds-hide');
 
        $A.util.removeClass(tab3, 'slds-active');
        $A.util.removeClass(TabThreeData, 'slds-show');
        $A.util.addClass(TabThreeData, 'slds-hide');
        helper.getTasks(component, event, helper,'OverdueTasks');
    },
    completedTaskTab: function(component, event, helper) {
        var tab1 = component.find('TodayId');
        var TabOnedata = component.find('TodayTabDataId');
 
        var tab2 = component.find('OverdueId');
        var TabTwoData = component.find('OverdueTabDataId');
 
        var tab3 = component.find('CompletedId');
        var TabThreeData = component.find('CompletedTabDataId');
 
        //show and Active color Tab
        $A.util.addClass(tab3, 'slds-active');
         $A.util.removeClass(TabThreeData, 'slds-hide');
        $A.util.addClass(TabThreeData, 'slds-show');
        // Hide and deactivate others tab
        $A.util.removeClass(tab1, 'slds-active');
        $A.util.removeClass(TabOnedata, 'slds-show');
        $A.util.addClass(TabOnedata, 'slds-hide');
 
        $A.util.removeClass(tab2, 'slds-active');
        $A.util.removeClass(TabTwoData, 'slds-show');
        $A.util.addClass(TabTwoData, 'slds-hide');
         helper.getTasks(component, event, helper,'CompletedTasks');
    },
    navigateToRecord : function(component , event, helper){
    window.open('/' + event.getParam('recordId'));  
},
    /*******************************************************************************************************
    * @description This method is used to view previous page in datatable.
    * @returns void.
    */
    onPrev:function (component, event, helper) {
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber-1);
        helper.pagination(component,event, helper);
    },   
     /*******************************************************************************************************
    * @description This method is used to view next page in datatable.
    * @returns void.
    */
    onNext:function (component, event, helper) {
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber+1);
        helper.pagination(component,event,helper);
    },
    
})
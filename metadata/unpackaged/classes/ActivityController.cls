public class ActivityController {
 private static String baseQuery = 'Select ID,subject, Owner.name,account.name FROM task';
 // public String AccFilterId {get; set;}
  public static Integer pageSize = 10;
    public static  ApexPages.StandardSetController AccSetController{get;set;}

    public static list<task> getTasks(string typeOfTask){
        if(typeOfTask!=null){
            if(typeOfTask=='todayTask'){
                return [select OwnerId,Status,Subject,Priority from task where (ActivityDate>TODAY) OR (ActivityDate=TODAY)];
            }
            if(typeOfTask=='overdueTask'){
                return [select OwnerId,Status,Subject,Priority from task where ActivityDate<today];
            }
            if(typeOfTask=='completedTask'){
                return [select OwnerId,Status,Subject,Priority from task where status='Completed'];
            }
        }
        return null;
    }
    @auraEnabled
     public static list<task>  taskSetController(string listViewName){
        AccSetController = new ApexPages.StandardSetController(Database.getQueryLocator(baseQuery));
         AccSetController.setPageSize(pageSize);
        listview filterId=[select id from listView where Developername=:listViewName and sobjecttype='task' limit 1];
        string fltrId=String.valueOf(filterId.Id);
         system.debug(fltrId);
                // We have to set FilterId after Pagesize, else it will not work
                //if(AccFilterId != null)
                //{                   
                  AccSetController.setFilterId(fltrId);
               // }
        AccSetController.setPageNumber(1);
         system.debug('tsklist'+(List<task>)AccSetController.getRecords());
        return (List<task>)AccSetController.getRecords();
    }
}
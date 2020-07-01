public with sharing class AccountManager {
   

    @AuraEnabled
    public static string returnAccount(){

        return [Select id , name , phone , website from Account LIMIT 10];
        
    }
}

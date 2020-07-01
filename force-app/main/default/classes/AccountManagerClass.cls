public with sharing class AccountManagerClass {
   

    @AuraEnabled(cacheable=true)  // Wire Service can only make call to a cacheable method

    public static List<Account> returnAccounts(){

        return [Select id , name , phone , website from Account LIMIT 10];       
    }

    @AuraEnabled
    public static List<Account> returnAccountsBasedOnUser(Integer howManyAccount){

        return [Select id , name , phone , website from Account LIMIT: howManyAccount];       
    }
}

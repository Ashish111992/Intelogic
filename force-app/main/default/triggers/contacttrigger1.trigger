trigger contacttrigger1 on SOBJECT (before insert) {

   List<Account> acc=[select id from Account];


}

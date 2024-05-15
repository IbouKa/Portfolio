public class ContactMeController {
    
    @AuraEnabled
    public static Response createdLead(String firstName,String lastName, String company, String email, String description){
        Response res=new Response();
        try {
            Lead lead=new Lead();
            lead.FirstName=firstName;
            lead.LastName=lastName;
            lead.Company=company;
            lead.Email=email;
            lead.Description=description;
            insert lead;
            res.status='Success';
            res.message='Message envoyé avec Succès.';
        } catch (Exception e) {
            res.status='Error';
            res.message=e.getMessage();
        }
        return res;
    }
    public class Response{
        @AuraEnabled
        public String status {get; set;}
        @AuraEnabled
        public String message {get; set;}

    }
}
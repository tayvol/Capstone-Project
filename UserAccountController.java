package DatingApp.controller;

import DatingApp.dao.UserAccountDAOImpl;
import DatingApp.model.Interest;
import DatingApp.model.UserAccount;
import DatingApp.dao.UserAccountDAO;

public class UserAccountController {

    public static void main(String[] args) {

        UserAccountController controller = new UserAccountController();
        //Tanaya Bedase
        controller.createUser();
    }

     public void createUser(){

        UserAccountDAO dao = new UserAccountDAOImpl();

        Interest itr1 = new Interest(11, "Cycling", "Getting late", "Got none" );
        UserAccount usr = new UserAccount(1, "Ana", 22, "Mumbai", "female", 100000);
        dao.save(usr);

        Interest itr2 = new Interest(12, "Music", "workout", "paragliding" );
        UserAccount usr2 = new UserAccount(2, "Diya", 22, "New Delhi", "female", 300000);
        dao.save(usr2);

        Interest itr3 = new Interest(13, "Dancing", "Travel", "painting" );
        UserAccount usr3 = new UserAccount(3, "Ian", 22, "Bengaluru", "male", 10000);
        dao.save(usr3);


        Interest itr4 = new Interest(14, "Skating", "Travel", "wood working" );
        UserAccount usr4 = new UserAccount(4, "Jack", 22, "Mumbai", "male", 10000);
        dao.save(usr4);

        Interest itr5 = new Interest(15, "Food", "dance", "coding" );
        UserAccount usr5 = new UserAccount(5, "Sam", 22, "Bengaluru", "male", 10000);
        dao.save(usr5);

        Interest itr6 = new Interest(16, "Skating", "Travel", "wood working" );
        UserAccount usr6 = new UserAccount(6, "Nick", 22, "Mumbai", "male", 10000);
        dao.save(usr6);

       // System.out.println(dao.findById(3));
         // System.out.println(dao.findAll());
         System.out.println("Female Matches For Mumbai");
         System.out.println(dao.findMatches(22, "Mumbai", "female"));
     }
}

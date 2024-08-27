package DatingApp.dao;


import DatingApp.model.UserAccount;

import java.util.List;

public interface UserAccountDAO {

    void save(UserAccount userAccount);

    UserAccount findById(int id);
    //Tanaya Bedase

    List<UserAccount> findAll();

    List<UserAccount> findMatches(int age, String city, String gender);
}

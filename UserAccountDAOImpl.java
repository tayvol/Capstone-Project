package DatingApp.dao;

import DatingApp.model.UserAccount;

import java.util.*;

public class UserAccountDAOImpl implements UserAccountDAO{

    Map<Integer,UserAccount> userAccounts = new HashMap<>( );

    @Override
    public void save(UserAccount userAccount) {

        userAccounts.put(userAccount.getId(),userAccount);

    }

    @Override
    public UserAccount findById(int id) {
        return userAccounts.get(id);
    }

    @Override
    public List<UserAccount> findAll() {
        return new ArrayList<>(userAccounts.values());
    }

    //Tanaya Bedase

    @Override
    public List<UserAccount> findMatches(int age, String city, String gender) {
        Collection<UserAccount> list = userAccounts.values();
        List<UserAccount> matches = new ArrayList<>();

        for(UserAccount usr: list) {
            if(usr.getAge() == age && usr.getCity().equals(city) && !usr.getGender().equals(gender))
                matches.add(usr);
        }

        return matches;
    }
}

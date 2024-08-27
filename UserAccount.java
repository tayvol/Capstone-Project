package DatingApp.model;

import java.util.Objects;

public class UserAccount {

    private int id;

    private String userName;

    private int age;

    private String city;

    private String gender;

    private int income;

    private Interest interest;

    public UserAccount(int id, String userName, int age, String city, String gender, int income) {
        this.id = id;
        this.userName = userName;
        this.age = age;
        this.city = city;
        this.gender = gender;
        this.income = income;
        this.interest = interest;
    }

    @Override
    public String toString() {
        return "UserAccount{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", age=" + age +
                ", city='" + city + '\'' +
                ", gender='" + gender + '\'' +
                ", income=" + income +
                ", interest=" + interest +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserAccount that = (UserAccount) o;
        return getId() == that.getId() && getAge() == that.getAge() && getIncome() == that.getIncome() && Objects.equals(getUserName(), that.getUserName()) && Objects.equals(getCity(), that.getCity()) && Objects.equals(getGender(), that.getGender()) && Objects.equals(getInterest(), that.getInterest());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUserName(), getAge(), getCity(), getGender(), getIncome(), getInterest());
    }

    public Interest getInterest() {
        return interest;
    }

    public void setInterest(Interest interest) {
        this.interest = interest;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }
}

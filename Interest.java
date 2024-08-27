package DatingApp.model;

public class Interest {

    private int id;

    private String likes;

    private String dislikes;

    private String hobbies;

    public Interest(int id, String likes, String dislikes, String hobbies) {
        this.id = id;
        this.likes = likes;
        this.dislikes = dislikes;
        this.hobbies = hobbies;
    }

    @Override
    public String toString() {
        return "Interest{" +
                "id=" + id +
                ", likes='" + likes + '\'' +
                ", dislikes='" + dislikes + '\'' +
                ", hobbies='" + hobbies + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLikes() {
        return likes;
    }

    public void setLikes(String likes) {
        this.likes = likes;
    }

    public String getDislikes() {
        return dislikes;
    }

    public void setDislikes(String dislikes) {
        this.dislikes = dislikes;
    }

    public String getHobbies() {
        return hobbies;
    }

    public void setHobbies(String hobbies) {
        this.hobbies = hobbies;
    }
}

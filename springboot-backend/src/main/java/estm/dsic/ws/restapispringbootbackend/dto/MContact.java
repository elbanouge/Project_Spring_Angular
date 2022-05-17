package estm.dsic.ws.restapispringbootbackend.dto;

public class MContact {
    private Long id_contact;
    private String name;
    private String adresse;
    private String email;
    private String tel;
    private int id_us;

    public MContact() {
    }

    public MContact(Long id_contact, String name, String adresse, String email, String tel, int id_us) {
        this.id_contact = id_contact;
        this.name = name;
        this.adresse = adresse;
        this.email = email;
        this.tel = tel;
        this.id_us = id_us;
    }

    public Long getId_contact() {
        return this.id_contact;
    }

    public void setId_contact(Long id_contact) {
        this.id_contact = id_contact;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdresse() {
        return this.adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return this.tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public int getId_us() {
        return this.id_us;
    }

    public void setId_us(int id_us) {
        this.id_us = id_us;
    }

    public MContact id_contact(Long id_contact) {
        setId_contact(id_contact);
        return this;
    }

    public MContact name(String name) {
        setName(name);
        return this;
    }

    public MContact adresse(String adresse) {
        setAdresse(adresse);
        return this;
    }

    public MContact email(String email) {
        setEmail(email);
        return this;
    }

    public MContact tel(String tel) {
        setTel(tel);
        return this;
    }

    public MContact id_us(int id_us) {
        setId_us(id_us);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
                " id_contact='" + getId_contact() + "'" +
                ", name='" + getName() + "'" +
                ", adresse='" + getAdresse() + "'" +
                ", email='" + getEmail() + "'" +
                ", tel='" + getTel() + "'" +
                ", id_us='" + getId_us() + "'" +
                "}";
    }

}

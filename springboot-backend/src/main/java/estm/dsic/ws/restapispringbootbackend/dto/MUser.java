package estm.dsic.ws.restapispringbootbackend.dto;

public class MUser {
    private String nom;
    private String prenom;

    public MUser(String nom, String prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    @Override
    public String toString() {
        return "{" +
                " nom='" + getNom() + "'" +
                ", prenom='" + getPrenom() + "'" +
                "}";
    }

}

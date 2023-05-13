public class App {
    public static void main(String[] args) {
        String nome = "Arthur";
        String sobrenome = "Simplício";

        String nomeCompleto = nomeCompleto(nome, sobrenome);
        System.out.println(nomeCompleto);
    }

    public static String nomeCompleto (String nome, String sobrenome) {
        return "Resultado do método: " + nome.concat(" ").concat(sobrenome);
    }
}
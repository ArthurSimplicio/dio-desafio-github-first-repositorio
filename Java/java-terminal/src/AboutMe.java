import java.util.Locale;
import java.util.Scanner;

public class AboutMe {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.println("Digite a sua altura");
        double altura = scanner.nextDouble();

        System.out.println("Digite o seu nome");
        String nome = scanner.next();

        System.out.println("Digite o seu sobrenome");
        String sobrenome = scanner.next();

        System.out.println("Digite a sua idade");
        double idade = scanner.nextInt();

        System.out.println("Olá, me chamo " + nome + " " + sobrenome);
        System.out.println("Tenho " + 19 + " anos.");
        System.out.println("Minha altura é " + altura + "cm");
        
    }
}

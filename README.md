# EszközNyilvántartó

## Leírás

Elindítani a repository főkönyvtárban az adatbázist kell elindítani. Ezt a `docker-compose up` paranccsal leht.

Az Echo servert a `go run main.go` paranccsal kell futtatni. Majd a frontend könyvtárba belépve az angulart a `ng serve` paranccsal kell indítani.
Ezután a bőngészőben a http://localhost:4200 -vel lehet elérni az alkalmazást.

Először is be kell lépni az ismert felhasználóval. Majd egy listát kapunk az eszközökről. Ha jogunk van rá akkor szerkeszthetjük is a jobb oldalon megjelenő szerkesztő ikonnal, és új eszközöket is vehetünk fel.

A dátumoknák a ugynevezett Date pickert használtam. A beviteli mező jobb sarkában lévő kalendár ikonra kell rákattintani.

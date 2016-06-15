-------------------------------------------La Criptografía clásica-------------------------------------------

3.4. Criptografia europea. Desde el Renacimiento hasta la Segunda Guerra Mundial

3.4.1. Blaise Vigenère (1523-1596)

    El francés Blaise de Vigenère, en el siglo XVI, desarrolló la teoría de la criptología polialfabé-
    tica, por esta razón su nombre ha acabado asociado con uno de los métodos famosos de sustitución
    polialfabética. Lo que hoy se denomina “tablero de Vigenère” consiste en una disposición de letras
    que contiene en orden los 26 alfabetos de César. Además, para proteger más el cifrado suele intro-
    ducirse una palabra clave, que consiste en una palabra o texto que se repite a largo de todo el men-
    saje a cifrar, como veremos en el ejemplo. Lo que se hace, es tomar la letra de la clave que se
    corresponda con la letra a cifrar y buscar su equivalente alfabeto de César que comienza con dicha
    letra. Para descifrar, lógicamente hay que conocer la clave y operar en sentido inverso.



#------------------Tablero de Vigenère------------------

0   A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
1   B C D E F G H I J K L M N O P Q R S T U V W X Y Z A
2   C D E F G H I J K L M N O P Q R S T U V W X Y Z A B
3   D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
4   E F G H I J K L M N O P Q R S T U V W X Y Z A B C D
5   F G H I J K L M N O P Q R S T U V W X Y Z A B C D E
6   G H I J K L M N O P Q R S T U V W X Y Z A B C D E F
7   H I J K L M N O P Q R S T U V W X Y Z A B C D E F G
8   I J K L M N O P Q R S T U V W X Y Z A B C D E F G H
9   J K L M N O P Q R S T U V W X Y Z A B C D E F G H I
10  K L M N O P Q R S T U V W X Y Z A B C D E F G H I J
11  L M N O P Q R S T U V W X Y Z A B C D E F G H I J K
12  M N O P Q R S T U V W X Y Z A B C D E F G H I J K L
13  N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
14  O P Q R S T U V W X Y Z A B C D E F G H I J K L M N
15  P Q R S T U V W X Y Z A B C D E F G H I J K L M N O
16  Q R S T U V W X Y Z A B C D E F G H I J K L M N O P
17  R S T U V W X Y Z A B C D E F G H I J K L M N O P Q
18  S T U V W X Y Z A B C D E F G H I J K L M N O P Q R
19  T U V W X Y Z A B C D E F G H I J K L M N O P Q R S
20  U V W X Y Z A B C D E F G H I J K L M N O P Q R S T
21  V W X Y Z A B C D E F G H I J K L M N O P Q R S T U
22  W X Y Z A B C D E F G H I J K L M N O P Q R S T U V
23  X Y Z A B C D E F G H I J K L M N O P Q R S T U V W
24  Y Z A B C D E F G H I J K L M N O P Q R S T U V W X
25  Z A B C D E F G H I J K L M N O P Q R S T U V W X Y


Para cifrar se procede de la siguiente manera:
    a) Se busca una palabra clave fácil de recordar.
    b) Se escribe la palabra debajo del texto en claro, repitiéndose tantas veces como sea
        necesario.
    c) Cada letra del texto en claro se codifica con el alfabeto de la tabla marcado por la letra
        inferior, o sea, la letra de la clave que corresponde.

    Ejemplo:
    clave = AZUL
    Texto a remitir: el ejército está preparado
    Proceso: Se escribe le clave debajo del texto a cifrar.

                // E L E J E R C I T O E S T A P R E P A R A D O   plain text
                // E K Y U E Q W T T N Y D T Z J C E O U C A C I   encrypt text
                // A Z U L A Z U L A Z U L A Z U L A Z U L A Z U   key

Por último, cada una de las letras del mensaje se transforma en otra.
    Así la E, se cifra como la E ( del alfabeto A), la L se cifra como la K( del alfabeto Z), la E, se
    cifra como Y, y así sucesivamente... El mensaje cifrado es: EK YUEQWTTN YDTZ JCEOUCACI.

    Las investigaciones de Blaise de Vigénere, así como los métodos utilizados en su época están recogidos
    en su libro Traicté des Chiffres, publicado en 1586. Curiosamente un sistema tan avanzado fue ignorado
    durante casi dos siglos. Seguramente las razones para no utilizar la cifra de Vigénere son varias: el
    uso extendido, por parte de los criptógrafos, de las cifras monoalfabéticas, añadiendo homófonos y
    sobretodo la dificultad de utilizar las cifras polialfabéticas.




--BIBLIOGRAFIA:
130 SIGMA Nº 24 • zk. 24 SIGMA
    Santiago Fernández
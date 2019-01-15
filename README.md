# comments
API comments

L’objectif de ce micro-service est de pouvoir ajouter une fonctionnalité de commentaires sur des applications web de type blog ou de discussion. 
L’API développé en PHP doit pouvoir ajouter, modifier et supprimer des commentaires, sans la gestion des utilisateurs. 
Le client développé en JavaScript doit pouvoir consommer les contrôleurs de l’API. 
Afin de mettre en œuvre ces deux parties, nous devons créé un blog consacré aux recettes de cuisine comprenant dix articles. Chacune de ces pages comportent une fonction  permettant de commenter les articles en proposant un formulaire simple composé de deux champs (pseudonyme et commentaire). 
Nous avons choisi de développer l’API avec le framework Symfony 4 et l’utilisation de l’ORM (Object-Relational Mapping) Doctrine. L’application utilise le framework Bootstrap et le client est écrit en JavaScript. 

Pour l’architecture du micro-service Comments, nous avons trois dossiers : 

    • comments-api qui contient l’API, 
    • comments-client qui contient le client, 
    • comments-app qui contient l’application. 
      
Le dossier comments-api contient un dossier src regroupant toute la gestion de l’API (Controller, Entity, Listener, Migrations, etc.). 

Le dossier comments-app contient : 

    • un dossier vendor pour les librairies utilisées, 
    • un dossier css pour les feuilles de style,
    • un dossier img pour les images du site,
    • un dossier dist comprenant le fichier index.html ainsi que les fichiers relatifs aux différents articles du blog nommés post-x.html.
    
Le dossier comments-client contient :

    • le fichier index.js à la racine qui sert dans l’utilisation de Axios.
    
Instructions :
         
    I Avoir le dossier comments contenant les trois livrables puis lancer la commande composer:install sur chaque dossier.
       
    II Définir vos identifiants de connexion en créant le fichier .env.local à la racine du dossier comments-api sous ce format : DATABASE_URL=mysql://root:password@127.0.0.1:3306/comments
       
    III Créer la base de données avec la commande php bin/console doctrine:database:create puis installer le contenu avec la commande php bin/console doctrine:migrations:migrate
       
    IV Lancer la commande php bin/console server:run sur le dossier comments-app puis sur comments-api 
       
    V L'application devrait être accessible à l'adresse http://127.0.0.1:8080/ et l'API à cette adresse http://127.0.0.1:8000/
       
    VI WampServer doit être opérationnel afin de faire fonctionner correctement le projet. 

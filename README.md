# Express-Quest-1
Express 1 - 👨🏻‍🚀 Découverte d'Express

# 💪 Challenge
Créer des routes express
Pour ce défi, tu dois utiliser ce [codesandbox] (https://codesandbox.io/s/quest-express-01-start-h9t60?file=/src/index.js).

Ce codesandbox contient un fichier movies.js avec une liste de films. Il est configuré pour node, et Express est installé.

Ton défi est de :

Forker le projet
Créer le serveur en utilisant express
Créer un path /, qui doit renvoyer "Welcome to my favourite movie list"
Créer une route /api/movies, cette route doit renvoyer un état 200 et tous les films au format json
Créer une route /api/movies/:id qui ne retournera que le film correspondant à l'id défini dans l'url (tu peux utiliser la méthode .find())
S'il y a un film qui correspond aux paramètres, renvoie une réponse avec un statut 200 et le film correspondant comme objet json
Sinon, renvoie un statut 404 avec un message "Not Found".
Poste le lien de la Codesandbox comme solution.

# 🧐 Critères de validation
 Le serveur fonctionne
 La route principale / affiche "Welcome to my favourite movie list"
 L'url api/movies doit afficher la liste des films au format json
 L'url /api/movies/1 doit afficher le film The Godfather au format json
 L'url /api/movies/5 doit afficher Not found

# TODO

## Organisation du site

### Premier onglet
onglet avec tous les articles ecrit
l'onglet s'affiche si on est connécté

### Deuxieme onglet
QCM associé a un article
l'onglet s'affiche si on est connécté

### Troisieme onglet 
Connexion inscription

### Quatrieme onglet

dashboard avec :
- CRUD
- gestion de la publication 
- listing utilisateurs

## Organisation

### Technologies

Back: Node.js
Front: Angular 8
BDD: MySQL

### BASE DE DONNEE

Nous avons besoin de 6 tables:
- utilisateur ->  id (pk), pseudo, mdp, fonction
- question -> id (pk), libelle
- reponse_possible -> id (pk), id_question (pk), libelle, score 
- questionnaire -> id (pk), id_utilisateur (fk), date_creation,
- questionnaire_question -> id_questionnaire (pk)(fk), id_question (pk)(fk), id_reponse (fk), date_reponse,
- article -> id (pk),  title, description, full_article, published, has_qcm(fk)

### 
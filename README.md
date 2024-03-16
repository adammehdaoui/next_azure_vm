This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next Azure Cloud

## Description du projet

Ce projet permet de lancer une machine virtuelle sur le cloud d'Azure. En fonction des droits de l'utilisateur connecté, il est possible de lancer ou non une machine virtuelle d'un système d'exploitation donné.

## Notes importantes

- Le projet a été testé dans un environnement MacOS Sonoma.
- Le lancement d'une machine virtuelle peut prendre un certain temps.
- **IMPORTANT** : il ne faut pas coupé le serveur avant que la suppression de la machine virtuelle et de son groupe de ressource au bout de 10 minutes ne soit terminée (Le nombre de machines virtuelles pour un utilisateur étant limité).

## Installation du projet

### Remplir le fichier .env

Voici un exemple de fichier .env :

```bash
AZURE_CLIENT_ID='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
AZURE_CLIENT_SECRET='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
AZURE_TENANT_ID='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
AZURE_SUBSCRIPTION_ID='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
JWT_SECRET='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
```

#### Récupérer les identifiants Azure

TODO 

#### Générer un JWT_SECRET (exemple : sous macOS)

```bash
openssl rand -base64 32
```

### Avec docker

Prérequis : avoir Docker installé sur votre machine.

Commandes à effectuer à la racine du projet :

```bash
docker build -t next-azure-cloud .
```

et

```bash
docker run -it -p 3000:3000 next-azure-cloud
```

L'application est maintenant accessible depuis le port 3000.

### Sans docker

Prérequis : avoir Node installé sur votre machine.

Commandes à effectuer à la racine du projet :

```bash
npm i && npm run dev
```

L'application est maintenant accessible depuis le port 3000.

## Authentification

L'accès à la plateforme nécessite une authentification. Trois utilisateurs ont été préconfigurés pour faciliter le processus. Veuillez utiliser les informations d'identification suivantes :

Utilisateur **sans crédit** :

Login : louis
Mot de passe : user_restricted

Utilisateur pouvant lancer **une machine virtuelle** *Ubuntu* :

Login : alexis
Mot de passe: user_limited

Utilisateur pouvant lancer **trois machines virtuelles avec un OS différent** (CentOS, Windows, Ubuntu):

Login : adam
Mot de passe: user_power

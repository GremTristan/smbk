# 🚀 Instructions pour pousser sur GitHub

## Étape 1 : Créer un nouveau dépôt sur GitHub

1. Allez sur **https://github.com**
2. Connectez-vous (ou créez un compte si nécessaire)
3. Cliquez sur le bouton **"+"** en haut à droite
4. Sélectionnez **"New repository"**
5. Remplissez les informations :
   - **Repository name** : `smartbanker-landing` (ou le nom de votre choix)
   - **Description** : "Landing page Web3 pour professionnels RH & acteurs financiers"
   - **Visibilité** : Public ou Private (votre choix)
   - ⚠️ **NE COCHEZ PAS** "Initialize this repository with a README" (on a déjà un README)
6. Cliquez sur **"Create repository"**

## Étape 2 : Connecter votre dépôt local à GitHub

Après avoir créé le dépôt, GitHub vous donnera une URL. Utilisez cette commande :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/smartbanker-landing.git
```

**Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub !**

## Étape 3 : Pousser le code

```bash
git branch -M main
git push -u origin main
```

Si GitHub vous demande vos identifiants :
- **Username** : Votre nom d'utilisateur GitHub
- **Password** : Utilisez un **Personal Access Token** (pas votre mot de passe)

### Créer un Personal Access Token (si nécessaire)

1. Allez sur GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Cliquez sur "Generate new token (classic)"
3. Donnez-lui un nom (ex: "smartbanker")
4. Cochez "repo" (accès complet aux dépôts)
5. Cliquez sur "Generate token"
6. **Copiez le token** (vous ne pourrez plus le voir après)
7. Utilisez ce token comme mot de passe lors du push

## ✅ C'est fait !

Votre code est maintenant sur GitHub ! Vous pouvez :
- Voir votre code sur `https://github.com/VOTRE-USERNAME/smartbanker-landing`
- Activer GitHub Pages pour héberger le site
- Partager le lien avec d'autres personnes

## 📱 Activer GitHub Pages (Optionnel)

Pour héberger le site gratuitement :

1. Allez dans votre dépôt GitHub
2. Cliquez sur **"Settings"**
3. Dans le menu de gauche, cliquez sur **"Pages"**
4. Sous **"Source"**, sélectionnez :
   - Branch : `main`
   - Folder : `/ (root)`
5. Cliquez sur **"Save"**
6. Votre site sera accessible sur : `https://VOTRE-USERNAME.github.io/smartbanker-landing`

---

**Note** : Si vous avez des problèmes, vérifiez que vous avez bien remplacé `VOTRE-USERNAME` par votre vrai nom d'utilisateur GitHub !


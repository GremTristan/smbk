# 📋 Commandes à exécuter

## Après avoir créé le dépôt sur GitHub :

### Option 1 : Commandes manuelles

```bash
# Remplacez VOTRE-USERNAME et NOM-DU-REPO
git remote add origin https://github.com/VOTRE-USERNAME/NOM-DU-REPO.git
git branch -M main
git push -u origin main
```

### Option 2 : Utiliser le script automatique

**Avec PowerShell :**
```powershell
.\push-to-github.ps1 VOTRE-USERNAME NOM-DU-REPO
```

**Avec CMD :**
```cmd
push-to-github.bat VOTRE-USERNAME NOM-DU-REPO
```

Puis créez le dépôt sur GitHub et exécutez :
```bash
git push -u origin main
```

---

## 🔐 Authentification GitHub

Si GitHub vous demande vos identifiants :
- **Username** : Votre nom d'utilisateur GitHub
- **Password** : Utilisez un **Personal Access Token** (PAS votre mot de passe)

### Créer un Personal Access Token :

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)"
3. Nom : "smartbanker"
4. Cochez "repo" (accès complet)
5. "Generate token"
6. **Copiez le token** (vous ne le reverrez plus)
7. Utilisez-le comme mot de passe lors du push

---

## ✅ Vérification

Après le push, votre code sera visible sur :
`https://github.com/VOTRE-USERNAME/NOM-DU-REPO`


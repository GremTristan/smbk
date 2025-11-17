# Export HTML/CSS - Roadmap et Documentation

Ce dossier contient les fichiers HTML et CSS exportés pour les pages Roadmap et Documentation de SmartBankers.

## Fichiers

### Roadmap
- **roadmap.html** - Page HTML pour la roadmap d'acquisition
- **roadmap.css** - Feuille de style pour la roadmap

### Documentation
- **documentation.html** - Page HTML complète pour la documentation FOMO
- **documentation.css** - Feuille de style pour la documentation

## Utilisation

### Roadmap

1. Ouvrir `roadmap.html` dans un navigateur
2. Le fichier charge automatiquement le markdown depuis `../public/doc/ROADMAP_GROWTH_AUTOMATION.md`
3. Si le fichier markdown n'est pas accessible, vous pouvez :
   - Modifier le chemin dans le script JavaScript
   - Ou convertir le markdown en HTML manuellement et l'insérer dans le conteneur

**Note :** La roadmap utilise la bibliothèque [marked.js](https://marked.js.org/) pour convertir le markdown en HTML. Elle est chargée via CDN.

### Documentation

1. Ouvrir `documentation.html` dans un navigateur
2. Le contenu est déjà intégré dans le HTML
3. La navigation latérale permet de naviguer entre les sections

## Structure

Les deux pages suivent la même structure :
- Sidebar fixe à gauche avec navigation
- Contenu principal à droite avec scroll
- Design responsive (mobile, tablet, desktop)
- Styles minimalistes et professionnels

## Personnalisation

### Modifier les styles
Éditez les fichiers `.css` correspondants pour personnaliser l'apparence.

### Modifier le contenu
- **Roadmap** : Modifiez le fichier markdown source ou le script JavaScript dans `roadmap.html`
- **Documentation** : Modifiez directement le HTML dans `documentation.html`

## Notes techniques

- Les polices Google Fonts (Inter, Playfair Display) sont chargées via CDN
- Les pages sont autonomes et peuvent être déployées indépendamment
- Compatible avec tous les navigateurs modernes
- Design responsive avec breakpoints à 1024px, 768px et 480px

## Déploiement

Pour déployer ces pages :
1. Copiez les fichiers HTML et CSS dans votre serveur web
2. Assurez-vous que les chemins relatifs sont corrects
3. Pour la roadmap, assurez-vous que le fichier markdown est accessible ou modifiez le chemin dans le script


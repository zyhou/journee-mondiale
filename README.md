# Journée mondiale

[![npm version](https://badge.fury.io/js/journee-mondiale.svg)](https://www.npmjs.com/package/journee-mondiale)

Un simple cli qui te permet de voir les différentes journées mondiale du jour.

## Utilisation

```shell
npx journee-mondiale
```

## Options

Tu peux passer plusieurs options pour changer le comportement de journee-mondiale

```shell
journee-mondiale [-d/--days <depuis-x-jours> ]
```

Voici le détail pour chaque options

| Option | Description                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------- |
| d      | Spécifie un nombre de jours pour voir les jours précédents, ie `-d 1` pour avoir les journées d'hier |

### Mettre à jour les données des différentes journées

Utiliser [le script](https://gist.github.com/Kmaschta/b6e17a2b7f5620feb03c00674027467a), et copier les informations dans le fichier days.json.

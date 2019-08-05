# Journée mondiale

Un simple cli qui te permet de voir les différentes journées mondiale du jour.

## Installation

```shell
npm i -g journee-mondiale
yarn global add journee-mondiale
```

## Utilisation

```shell
journee-mondiale
```

## Options

Tu peux passer plusieurs options pour changer le comportement de journee-mondiale

```shell
journee-mondiale [-d/--days <depuis-x-jours> ] 
```

Voici le détail pour chaque options

| Option | Description |
| --- | --- |
| d | Spécifie un nombre de jours pour voir les jours précédents, ie `-d 1` pour avoir les journées d'hier |


### Mettre à jour les données des différentes journées   

Utiliser [le script](https://gist.github.com/Kmaschta/b6e17a2b7f5620feb03c00674027467a), et copier les informations dans le fichier days.json.

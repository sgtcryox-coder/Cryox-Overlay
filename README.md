# Cryox Overlay – OBS-Version

Das Paket enthält den aktuellen 1920-x-1080-Stand als einzelne Ebenen:

- Waldhintergrund
- um 20 % verbreitertes, großes Runensteinportal als eigene Ebene näher in der Wegmitte
- Rahmen
- Emblem
- fünf einzelne Runensteine
- drei sitzende und drei fliegende Raben
- zwei einzelne Schalen
- zwei einzelne Flammen mit asynchronem Flackern, pulsierendem Licht und Funkenflug

## In OBS einfügen

1. Eine neue **Browserquelle** anlegen.
2. **Lokale Datei** aktivieren.
3. `live/overlay.html` auswählen.
4. Breite `1920` und Höhe `1080` eintragen.
5. Benutzerdefiniertes CSS leer lassen.

Zum Prüfen außerhalb von OBS einfach `frame-test.html` öffnen.

## Optionale Schalter

Die normale OBS-Datei zeigt standardmäßig alles. Einzelne Gruppen lassen sich
über die Dateiadresse abschalten:

- `?background=0`
- `?portal=0`
- `?runestones=0`
- `?ravens=0`
- `?fire=0`
- `?frame=0`
- `?emblem=0`
- `?atmosphere=0` (Licht, Kontaktschatten, Farbangleichung und Bodennebel)

Das Feuer ist in OBS automatisch animiert. Mit `?firemotion=0` lässt es sich
einfrieren. `?motion=1` aktiviert zusätzlich die dezente Bewegung der
Flugraben; `?motion=0` schaltet sämtliche Bewegungen ab.

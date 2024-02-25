## Leftovers och tankar

- Välj ett annat namn än 'document' på kolumnen i databasen, det leder till förvirring och potentiella fel som följd.
- Det tog stopp mitt i.
    - Backend är fungerande förutom redigering av dokument som är på hälft. Jag tänker att jag förstår hur det ska funka. Precis som i soft delete (app.js rad 52-68) ska databasen uppdateras. Här är det med det som ändras i dokumentet i frontend. Men jag vet inte hur jag ska få till det i frontend, hur öppnar jag upp den sparade inputen för redigering?
    - Det är något jag missar när dokumentet ska tas bort från listan i frontend (printdocs.js). Det fattas kod eller så ska blocket med event listenern (rad 26-28) placeras någon annanstans.


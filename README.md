
## Pokedex
Student: 1, Jelle Schreurs

##### Short Description
Een applicatie voor de pokemon liefhebber, een jeugdige doelgroep, die in de applicatie, favorieten kan selecteren \
en informatie over de pokemon kan terugvinden. Voorzien van nieuws over de games en meer. Er is ook een toegang van de camera voorzien, 
om zo eventuele interessante bezoeken vast te leggen via de applicatie. 
De applicatie voorziet nu vooral de functionaliteiten van inloggen, registreren en favoriten kiezen. \
Ook is er een darkmode voorzien. Toekomstfeatures: Teams samenstellen en doorsturen naar anderen, eventuele visuele battles.

## Link naar filmpje


## Github link en branch
### Link
https://github.com/JelleSchreursPxl/pokedex
### Branch
Branch: **MobileDevFinished**

### Lesson Features
##### Minimal requirements: 
- Flatlist - equivalent of recyclerview
- 3 components
    - CameraView
    - LandscapeView
        - master - detail
    - ListCard
        - reusable item for every pokemon
        -
#### Aantal schermen
- 5 screens
    - 1 auth
        - loginscreen
            - login action
            - register action

    - homeScreen: 
        - Welcome for the user and news item
    - pokemonScreen:  
        - detailscreen of a single selected pokemon
            - AsyncStorage on favorite
            - local storage & asynchronous methods
    - searchScreen: 
        - list overview of all 151 original pokemon
    - settingsScreen: 
        - enable darkmode 
        - logout button

- resources
    - assets 
        - images
        - constants 
            - TypeColors
            - Strings
            - Env for firebase

- API call 
    - public API: https://pokeapi.co/
    
##### Extra Features
- Light/dark mode toggle
- Firebase Auth
    - login
    - register
    - logout
- Camera with microphone & gallery access


##### Tech Stack
**Client:** React Native \
**Database:** Firebase


###### Authors - students
[@jelleschreurspxl](https://www.github.com/jelleschreurspxl)




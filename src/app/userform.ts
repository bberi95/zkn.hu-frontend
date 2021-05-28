// export interface District {
//     value: string;
//     viewValue: string;
// }

// export interface Street {
//     value: string;
//     viewValue: string;
// }

// export const districts: District[] = [
//     {value: 'belvaros', viewValue: 'Belváros'},
//     {value: 'kertvaros', viewValue: 'Kertváros'},
//     {value: 'paterdomb', viewValue: 'Páterdomb'},
//     {value: 'andrashida', viewValue: 'Andráshida'}
// ]

// export const streetsKertvaros: Street[] = [
//     {value: 'alsoerdei ut', viewValue: 'Alsóerdei út'},
//     {value: 'atalszegett utca', viewValue: 'Átalszegett utca'},
//     {value: 'babits mihaly utca', viewValue: 'Babits Mihály utca'},
//     {value: 'balassi balint utca', viewValue: 'Balassi Bálint utca'}
// ]

// export const streetsPaterdomb: Street[] = [
//     {value: 'avasarok utca', viewValue: 'Avasárok utca'},
//     {value: 'barath ferenc utca', viewValue: 'Baráth Ferenc utca'},
//     {value: 'baross gabor utca', viewValue: 'Baross Gábor utca'},
//     {value: 'bathory istvan utca', viewValue: 'Báthory István utca'}
// ]

// export const streetsAndrashida: Street[] = [
//     {value: 'afonya utca', viewValue: 'Áfonya utca'},
//     {value: 'andrashida utca', viewValue: 'Andráshida utca'},
//     {value: 'apatfa utca', viewValue: 'Apátfa utca'},
//     {value: 'berek utca', viewValue: 'Berek utca'}
// ]

// Ez lesz az utcák alapja:
// export const streetsBelvaros: Street[] = [
//     {value: 'ady endre utca', viewValue: 'Ady Endre utca'},
//     {value: 'arany janos utca', viewValue: 'Arany János utca'},
//     {value: 'batsanyi janos utca', viewValue: 'Batsányi János utca'},
//     {value: 'batthyany lajos utca', viewValue: 'Batthyány Lajos utca'},
//     {value: 'beke-ligeti utca', viewValue: 'Béke-Ligeti utca'},
//     {value: 'berzsenyi daniel utca', viewValue: 'Berzsenyi Dániel utca'},
//     {value: 'bethlen gabor utca', viewValue: 'Bethlen Gábor utca'},
//     {value: 'biro marton utca', viewValue: 'Bíró Márton utca (44-ig és 57-ig)'},
//     {value: 'bocskai istvan utca', viewValue: 'Bocskai István utca'},
//     {value: 'borbely gyorgy utca', viewValue: 'Borbély György utca'},
//     {value: 'boschan gyula koz', viewValue: 'Boschán Gyula köz'},
//     {value: 'botfy lajos utca', viewValue: 'Botfy Lajos utca'},
//     {value: 'budai nagy antal utca', viewValue: 'Budai Nagy Antal utca'},
//     {value: 'dozsa gyorgy utca', viewValue: 'Dózsa György utca'},
//     {value: 'florian utca', viewValue: 'Flórián utca'},
//     {value: 'galamb utca', viewValue: 'Galamb utca'},
//     {value: 'gasparich mark utca', viewValue: 'Gasparich Márk utca (Platán sor és Rákóczi F. u. között)'},
//     {value: 'gocseji ut', viewValue: 'Göcseji út (Vizslaparki út és Csány L. tér között)'},
//     {value: 'gardonyi geza utca', viewValue: 'Gárdonyi Géza utca'},
//     {value: 'hunyadi janos utca', viewValue: 'Hunyadi János utca'},
//     {value: 'jakum ferenc utca', viewValue: 'Jákum Ferenc utca'},
//     {value: 'jokai mor utca', viewValue: 'Jókai Mór utca'},
//     {value: 'kabok lajos utca', viewValue: 'Kabók Lajos utca'},
//     {value: 'kelemen imre utca', viewValue: 'Kelemen Imre utca'},
//     {value: 'kertesz utca', viewValue: 'Kertész utca'},
//     {value: 'kert utca', viewValue: 'Kert utca'},
//     {value: 'kinizsi pal utca', viewValue: 'Kinizsi Pál utca (22-ig és 29-ig)'},
//     {value: 'kis utca', viewValue: 'Kis utca'},
//     {value: 'kossuth lajos utca', viewValue: 'Kossuth Lajos utca'},
//     {value: 'kosztolanyi dezso utca', viewValue: 'Kosztolányi Dezső utca'},
//     {value: 'kolcsey ferenc utca', viewValue: 'Kölcsey Ferenc utca'},
//     {value: 'konyok utca', viewValue: 'Könyök utca'},
//     {value: 'lorinc barat utca', viewValue: 'Lőrinc Barát utca'},
//     {value: 'martirok utja', viewValue: 'Mártírok útja'},
//     {value: 'merleg ter', viewValue: 'Mérleg tér'},
//     {value: 'mikes kelemen utca', viewValue: 'Mikes Kelemen utca'},
//     {value: 'munkacsi mihaly utca', viewValue: 'Munkácsy Mihály utca'},
//     {value: 'nefelejcs utca', viewValue: 'Nefelejcs utca'},
//     {value: 'oktober 6. ter', viewValue: 'Október 6. tér'},
//     {value: 'ola utca', viewValue: 'Ola utca'},
//     {value: 'pazmany peter utca', viewValue: 'Pázmány Péter utca'},
//     {value: 'petofi sandor utca', viewValue: 'Petőfi Sándor utca'},
//     {value: 'pinter mate utca', viewValue: 'Pintér Máté utca'},
//     {value: 'puspoki gracian utca', viewValue: 'Püspöki Grácián utca'},
//     {value: 'rakoczy ferenc utca', viewValue: 'Rákóczi Ferenc utca'},
//     {value: 'sip utca', viewValue: 'Síp utca'},
//     {value: 'szeglet utca', viewValue: 'Szeglet utca'},
//     {value: 'szilagyi erzsebet utca', viewValue: 'Szilágyi Erzsébet utca'},
//     {value: 'tancsics mihaly utca', viewValue: 'Táncsics Mihály utca'},
//     {value: 'atoldi miklos utca', viewValue: 'Toldi Miklós utca'},
//     {value: 'tompa mihaly utca', viewValue: 'Tompa Mihály utca'},
//     {value: 'vagohid utca', viewValue: 'Vágóhíd utca'},
//     {value: 'virag benedek utca', viewValue: 'Virág Benedek utca'},
//     {value: 'vizslaparki ut', viewValue: 'Vizslaparki út'},
//     {value: 'vorosmarty mihaly utca', viewValue: 'Vörösmarty Mihály utca'},
// ]

//         'Besenyő'
//             'Besenyő', 'Cseresznyésszeri', 'Csörge', 'Esze Tamás', 'Hegyi út', 'Kutilapi', 'Posta', 'Szövetkezet'
        
//         'Botfa'
//             "2021.03.20";
//             'Avashegy', 'Alsó- Avashegyi', 'Avashegyi', 'Botfa', 'Gesztenyési', 'Karácsony hegyi', 'Rózsás', 'Várberki.']
//         }
//         'Bozsok') {
//             "2021.03.13";
//             'Bozsoki', 'Mező', 'Ölyvesfalvi', 'Szabadság', 'Válicka,']
//         }
//         'Bozsoki-hegy') {
//             "2021.03.13";
//             'Bozsoki hegyi', 'Bozsoki-völgyi', 'Zölderdő']
//         }
//         'Csács') {
//             "2021.03.13";
//             'Balatoni', 'Bóbita', 'Csácsi', 'Csilla', 'Damjanich', 'Domb', 'Gólyahír', 'Halom', 'Harangvirág', 'Hétvezér', 'Holló', 'Klapka György', 'Nyerges', 'Pacsirta', 'Patkó,Puskás Ferenc köz', 'Rómer Flóris', 'Szó köz', 'Tüttő György']
//         }
//         'Csácsi-hegy') {
//             "2021.03.13";
//             'Barackfa', 'Csácsi hegyi', 'Csiga utca', 'Dombalja', 'Homoktövis', 'Horizont', 'Madárbirs,Napnyugta', 'Nyári hegyi', 'Petelehegyi', 'Hosszú hegy', 'Púposdombi', 'Süveghegyi', 'Szarvas', 'Széperdő', 'Tél', 'Vari-kút u.']
//         }
//         'Cserlap') {
//             "2021.03.13";
//             'Cserlapi', 'Repkény']
//         }
//         'Gálafej') {
//             "2021.03.23";
//             'Aranyeső', 'Feketerigó', 'Gálafeji', 'Havasi gyopár', 'Jázmin', 'Ligetszépe', 'Nárcisz', 'Százszorszép']
//         }
//         'Géva-hegy, Pipa-hegy') {
//             "2021.03.13";
//             'Akácos u.', 'Diós', 'Enikő', 'Gévahegyi', 'Gévavölgyi', 'Hevesi', 'Kanizsai u.', 'Pipahegyi', 'Sashegyi', 'Szajkó u', 'Szeder köz']
//         }
//         'Jánkahegy') {
//             "2021.03.22";
//             'Galagonya köz', 'Hosszú-Jánka', 'Jánkahegyi', 'Keresztes', 'Kikelet', 'Kőris', 'Leander', 'Liliom', 'Mákvirág', 'Napkelet', 'Ördöngös-völgy', 'Rövid-Jánka', 'Szőlőskert', 'Tőzike', 'Volán']
//         }
//         'Kertváros') {
//             "2021.03.20";
//             'Alsóerdei u.', 'Átalszegett', 'Balassi B. Babits Mihály', 'Bodza', 'Borostyán sor', 'Cinke', 'Czobor M. Csendes', 'Erdész', 'Erkel Ferenc', 'Fáy A. ', 'Fejér Gy.', 'Goldmark', 'Göcseji u. páros oldala', 'Gyimesi Hajnal', 'Hegyalja', 'Ifjúság', 'Jászai Mari', 'Köztársaság u.', 'Lehel', 'Liszt Ferenc Május 1', 'Mészáros L', 'Mókus ', 'Napsugár Olajmunkás', 'Sas', 'Vajda L.', 'Závodszky']
//         }
//         'Landorhegy') {
//             "2021.03.19";
//             'Alkotmány', 'Búzavirág', 'Gasparich út (Hegyközség és Platán sor közti szakasz)', 'Hegyközség', 'Hegyoldal', 'Kispálhegyi', 'Nyár', 'Ősz']
//         }
//         'Lukahegy') {
//             "2021.03.22";
//             'Lukahegyi', 'Sugár']
//         }
//         'Nekeresd') {
//             "2021.03.12";
//             'Egervári', 'Nekeresdi', 'Virágzó mező']
//         }
//         'Ola') {
//             "2021.03.23";
//             'Béke', 'Ebergényi 46-ig és 51-ig', 'Falumúzeum', 'Gyár', 'Hársfa', 'Helikon', 'Hock J.', 'Karácsony S.', 'Malom', 'Móra F.', 'Muskátli', 'Mura', 'Perlaki', 'Rózsa', 'Szendrei J.', 'Tavasz.']
//         }
//         'Öreghegy') {
//             "2021.03.23";
//             'Krókusz', 'Öreghegyi', 'Pityke', 'Rózsadombi,']
//         }
//         'Páterdomb') {
//             "2021.03.27";
//             'Avasárok', 'Baráth Ferenc ', 'Baross Gábor', 'Báthory István', 'Bíró Márton u. 46-tól és 61-től (a vasútvonaltól Délre eső része) Farkas Dávid', 'Fenyő', 'Gönczy Ferenc', 'Holub', 'Honvéd', 'Juhász Gyula', 'Kazinczy', 'Kinizsi Pál 24-től és 31-től (vasútvonaltól Délre eső része)', 'Margaréta', 'Páterdombi', 'Radnóti', 'Szegfű', 'Tulipán', 'Wlassics Gyula,']
//         }
//         'Pózva') {
//             "2021.03.12";
//             'Akácfa', 'Felsőerdő', 'Őrház', 'Pózva', 'Vasút u']
//         }
//         'Szívhegy') {
//             "2021.03.19";
//             'Belsőszeg', 'Hóvirág', 'Kökény', 'Meggyfa', 'Szívhegyi', 'Szüret', 'Zalagyöngye']
//         }
//         'Vakaroshegy') {
//             "2021.03.23";
//             'Cédrus', 'Erdőalja', 'Forrás', 'Lejtős', 'Sövény', 'Szeretet', 'Olajfa', 'Vakaros- hegyi']
//         }
//         'Zrínyi környéke') {
//             "2021.03.20";
//             'Alsójánkahegyi', 'Árpád', 'Bajcsy Zs. tér', 'Bartók Béla', 'Bem József', 'Bokréta', 'Dobó K.', 'József A.', 'Katona J.', 'Kút', 'Mátyás király', 'Móricz Zs.', 'Napraforgó', 'Orsolya tér', 'Orsolya út', 'Perczel Mór', 'Szent László', 'Tomori Pál', 'Tóth Árpád', 'Zárda', 'Zrínyi.']
//         }

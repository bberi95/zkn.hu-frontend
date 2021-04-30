export interface District {
    value: string;
    viewValue: string;
}

export interface Street {
    value: string;
    viewValue: string;
}

export const districts: District[] = [
    {value: 'belvaros', viewValue: 'Belváros'},
    {value: 'kertvaros', viewValue: 'Kertváros'},
    {value: 'paterdomb', viewValue: 'Páterdomb'},
    {value: 'andrashida', viewValue: 'Andráshida'}
]

export const streetsBelvaros: Street[] = [
    {value: 'ady utca', viewValue: 'Ady utca'},
    {value: 'arany janos utca', viewValue: 'Arany János utca'},
    {value: 'batsanyi janos utca', viewValue: 'Batsányi János utca'},
    {value: 'beke-ligeti utca', viewValue: 'Béke-ligeti utca'}
]

export const streetsKertvaros: Street[] = [
    {value: 'alsoerdei ut', viewValue: 'Alsóerdei út'},
    {value: 'atalszegett utca', viewValue: 'Átalszegett utca'},
    {value: 'babits mihaly utca', viewValue: 'Babits Mihály utca'},
    {value: 'balassi balint utca', viewValue: 'Balassi Bálint utca'}
]

export const streetsPaterdomb: Street[] = [
    {value: 'avasarok utca', viewValue: 'Avasárok utca'},
    {value: 'barath ferenc utca', viewValue: 'Baráth Ferenc utca'},
    {value: 'baross gabor utca', viewValue: 'Baross Gábor utca'},
    {value: 'bathory istvan utca', viewValue: 'Báthory István utca'}
]

export const streetsAndrashida: Street[] = [
    {value: 'afonya utca', viewValue: 'Áfonya utca'},
    {value: 'andrashida utca', viewValue: 'Andráshida utca'},
    {value: 'apatfa utca', viewValue: 'Apátfa utca'},
    {value: 'berek utca', viewValue: 'Berek utca'}
]